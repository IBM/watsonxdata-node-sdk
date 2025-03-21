/**
 * (C) Copyright IBM Corp. 2025.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-await-in-loop */

const nock = require('nock');

// need to import the whole package to mock getAuthenticatorFromEnvironment
const sdkCorePackage = require('ibm-cloud-sdk-core');

const {
  getOptions,
  checkUrlAndMethod,
  checkMediaHeaders,
  expectToBePromise,
  checkUserHeader,
  checkForSuccessfulExecution,
} = require('@ibm-cloud/sdk-test-utilities');

const { NoAuthAuthenticator } = sdkCorePackage;
const WatsonxDataV2 = require('../../dist/watsonx-data/v2');

const watsonxDataServiceOptions = {
  authenticator: new NoAuthAuthenticator(),
  url: 'https://region.lakehouse.cloud.ibm.com/lakehouse/api/v2',
};

const watsonxDataService = new WatsonxDataV2(watsonxDataServiceOptions);

let createRequestMock = null;
function mock_createRequest() {
  if (!createRequestMock) {
    createRequestMock = jest.spyOn(watsonxDataService, 'createRequest');
    createRequestMock.mockImplementation(() => Promise.resolve());
  }
}
function unmock_createRequest() {
  if (createRequestMock) {
    createRequestMock.mockRestore();
    createRequestMock = null;
  }
}

// dont actually construct an authenticator
const getAuthenticatorMock = jest.spyOn(sdkCorePackage, 'getAuthenticatorFromEnvironment');
getAuthenticatorMock.mockImplementation(() => new NoAuthAuthenticator());

describe('WatsonxDataV2', () => {
  beforeEach(() => {
    mock_createRequest();
  });

  afterEach(() => {
    if (createRequestMock) {
      createRequestMock.mockClear();
    }
    getAuthenticatorMock.mockClear();
  });

  describe('the newInstance method', () => {
    test('should use defaults when options not provided', () => {
      const testInstance = WatsonxDataV2.newInstance();

      expect(getAuthenticatorMock).toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceName).toBe(WatsonxDataV2.DEFAULT_SERVICE_NAME);
      expect(testInstance.baseOptions.serviceUrl).toBe(WatsonxDataV2.DEFAULT_SERVICE_URL);
      expect(testInstance).toBeInstanceOf(WatsonxDataV2);
    });

    test('should set serviceName, serviceUrl, and authenticator when provided', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
        serviceName: 'my-service',
      };

      const testInstance = WatsonxDataV2.newInstance(options);

      expect(getAuthenticatorMock).not.toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
      expect(testInstance.baseOptions.serviceName).toBe('my-service');
      expect(testInstance).toBeInstanceOf(WatsonxDataV2);
    });
  });

  describe('the constructor', () => {
    test('use user-given service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
      };

      const testInstance = new WatsonxDataV2(options);

      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
    });

    test('use default service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
      };

      const testInstance = new WatsonxDataV2(options);

      expect(testInstance.baseOptions.serviceUrl).toBe(WatsonxDataV2.DEFAULT_SERVICE_URL);
    });
  });

  describe('listBucketRegistrations', () => {
    describe('positive tests', () => {
      function __listBucketRegistrationsTest() {
        // Construct the params object for operation listBucketRegistrations
        const authInstanceId = 'testString';
        const listBucketRegistrationsParams = {
          authInstanceId,
        };

        const listBucketRegistrationsResult = watsonxDataService.listBucketRegistrations(
          listBucketRegistrationsParams
        );

        // all methods should return a Promise
        expectToBePromise(listBucketRegistrationsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/bucket_registrations', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listBucketRegistrationsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listBucketRegistrationsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listBucketRegistrationsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listBucketRegistrationsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listBucketRegistrations(listBucketRegistrationsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.listBucketRegistrations({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createBucketRegistration', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // BucketCatalog
      const bucketCatalogModel = {
        catalog_name: 'sampleCatalog',
        catalog_tags: ['catalog_tag_1', 'catalog_tag_2'],
        catalog_type: 'iceberg',
      };

      // BucketDetails
      const bucketDetailsModel = {
        access_key: 'b9cbf248ea5c4c96947e64407108559j',
        bucket_name: 'sample-bucket',
        endpoint: 'https://s3.<region>.cloud-object-storage.appdomain.cloud/',
        key_file: 'key_file',
        provider: 'ibm_cos',
        region: 'us-south',
        secret_key: '13b4045cac1a0be54c9fjbe53cb22df5fn397cd2c45b66c87',
      };

      // StorageDetails
      const storageDetailsModel = {
        access_key: '<access_key>',
        application_id: '<application_id>',
        auth_mode: '<account_key/sas/service_principle>',
        container_name: 'sample-container',
        directory_id: '<directory_id>',
        endpoint: 'abfss://<container_name>@<storage_account_name>.dfs.core.windows.net/',
        sas_token: '<sas_token>',
        secret_key: 'secret_key',
        storage_account_name: 'sample-storage',
      };

      function __createBucketRegistrationTest() {
        // Construct the params object for operation createBucketRegistration
        const bucketType = 'ibm_cos';
        const description = 'COS bucket for customer data';
        const managedBy = 'ibm';
        const associatedCatalog = bucketCatalogModel;
        const bucketDetails = bucketDetailsModel;
        const bucketDisplayName = 'sample-bucket-displayname';
        const region = 'us-south';
        const storageDetails = storageDetailsModel;
        const tags = ['bucket-tag1', 'bucket-tag2'];
        const authInstanceId = 'testString';
        const createBucketRegistrationParams = {
          bucketType,
          description,
          managedBy,
          associatedCatalog,
          bucketDetails,
          bucketDisplayName,
          region,
          storageDetails,
          tags,
          authInstanceId,
        };

        const createBucketRegistrationResult = watsonxDataService.createBucketRegistration(
          createBucketRegistrationParams
        );

        // all methods should return a Promise
        expectToBePromise(createBucketRegistrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/bucket_registrations', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.bucket_type).toEqual(bucketType);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.managed_by).toEqual(managedBy);
        expect(mockRequestOptions.body.associated_catalog).toEqual(associatedCatalog);
        expect(mockRequestOptions.body.bucket_details).toEqual(bucketDetails);
        expect(mockRequestOptions.body.bucket_display_name).toEqual(bucketDisplayName);
        expect(mockRequestOptions.body.region).toEqual(region);
        expect(mockRequestOptions.body.storage_details).toEqual(storageDetails);
        expect(mockRequestOptions.body.tags).toEqual(tags);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createBucketRegistrationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createBucketRegistrationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createBucketRegistrationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const bucketType = 'ibm_cos';
        const description = 'COS bucket for customer data';
        const managedBy = 'ibm';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createBucketRegistrationParams = {
          bucketType,
          description,
          managedBy,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createBucketRegistration(createBucketRegistrationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createBucketRegistration({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createBucketRegistration();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getBucketRegistration', () => {
    describe('positive tests', () => {
      function __getBucketRegistrationTest() {
        // Construct the params object for operation getBucketRegistration
        const bucketId = 'testString';
        const authInstanceId = 'testString';
        const getBucketRegistrationParams = {
          bucketId,
          authInstanceId,
        };

        const getBucketRegistrationResult = watsonxDataService.getBucketRegistration(
          getBucketRegistrationParams
        );

        // all methods should return a Promise
        expectToBePromise(getBucketRegistrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/bucket_registrations/{bucket_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.bucket_id).toEqual(bucketId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getBucketRegistrationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getBucketRegistrationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getBucketRegistrationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const bucketId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getBucketRegistrationParams = {
          bucketId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getBucketRegistration(getBucketRegistrationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getBucketRegistration({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getBucketRegistration();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteBucketRegistration', () => {
    describe('positive tests', () => {
      function __deleteBucketRegistrationTest() {
        // Construct the params object for operation deleteBucketRegistration
        const bucketId = 'testString';
        const authInstanceId = 'testString';
        const deleteBucketRegistrationParams = {
          bucketId,
          authInstanceId,
        };

        const deleteBucketRegistrationResult = watsonxDataService.deleteBucketRegistration(
          deleteBucketRegistrationParams
        );

        // all methods should return a Promise
        expectToBePromise(deleteBucketRegistrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/bucket_registrations/{bucket_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.bucket_id).toEqual(bucketId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteBucketRegistrationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteBucketRegistrationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteBucketRegistrationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const bucketId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteBucketRegistrationParams = {
          bucketId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteBucketRegistration(deleteBucketRegistrationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteBucketRegistration({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteBucketRegistration();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateBucketRegistration', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // BucketDetails
      const bucketDetailsModel = {
        access_key: 'b9cbf248ea5c4c96947e64407108559j',
        bucket_name: 'sample-bucket',
        endpoint: 'https://s3.<region>.cloud-object-storage.appdomain.cloud/',
        key_file: 'key_file',
        provider: 'ibm_cos',
        region: 'us-south',
        secret_key: '13b4045cac1a0be54c9fjbe53cb22df5fn397cd2c45b66c87',
      };

      function __updateBucketRegistrationTest() {
        // Construct the params object for operation updateBucketRegistration
        const bucketId = 'testString';
        const bucketDetails = bucketDetailsModel;
        const bucketDisplayName = 'sample-bucket-displayname';
        const description = 'COS bucket for customer data';
        const tags = ['testbucket', 'userbucket'];
        const authInstanceId = 'testString';
        const updateBucketRegistrationParams = {
          bucketId,
          bucketDetails,
          bucketDisplayName,
          description,
          tags,
          authInstanceId,
        };

        const updateBucketRegistrationResult = watsonxDataService.updateBucketRegistration(
          updateBucketRegistrationParams
        );

        // all methods should return a Promise
        expectToBePromise(updateBucketRegistrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/bucket_registrations/{bucket_id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.bucket_details).toEqual(bucketDetails);
        expect(mockRequestOptions.body.bucket_display_name).toEqual(bucketDisplayName);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.path.bucket_id).toEqual(bucketId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateBucketRegistrationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updateBucketRegistrationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updateBucketRegistrationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const bucketId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateBucketRegistrationParams = {
          bucketId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updateBucketRegistration(updateBucketRegistrationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updateBucketRegistration({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updateBucketRegistration();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createActivateBucket', () => {
    describe('positive tests', () => {
      function __createActivateBucketTest() {
        // Construct the params object for operation createActivateBucket
        const bucketId = 'testString';
        const authInstanceId = 'testString';
        const createActivateBucketParams = {
          bucketId,
          authInstanceId,
        };

        const createActivateBucketResult = watsonxDataService.createActivateBucket(
          createActivateBucketParams
        );

        // all methods should return a Promise
        expectToBePromise(createActivateBucketResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/bucket_registrations/{bucket_id}/activate', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.bucket_id).toEqual(bucketId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createActivateBucketTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createActivateBucketTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createActivateBucketTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const bucketId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createActivateBucketParams = {
          bucketId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createActivateBucket(createActivateBucketParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createActivateBucket({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createActivateBucket();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteDeactivateBucket', () => {
    describe('positive tests', () => {
      function __deleteDeactivateBucketTest() {
        // Construct the params object for operation deleteDeactivateBucket
        const bucketId = 'testString';
        const authInstanceId = 'testString';
        const deleteDeactivateBucketParams = {
          bucketId,
          authInstanceId,
        };

        const deleteDeactivateBucketResult = watsonxDataService.deleteDeactivateBucket(
          deleteDeactivateBucketParams
        );

        // all methods should return a Promise
        expectToBePromise(deleteDeactivateBucketResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/bucket_registrations/{bucket_id}/deactivate',
          'DELETE'
        );
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.bucket_id).toEqual(bucketId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteDeactivateBucketTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteDeactivateBucketTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteDeactivateBucketTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const bucketId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteDeactivateBucketParams = {
          bucketId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteDeactivateBucket(deleteDeactivateBucketParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteDeactivateBucket({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteDeactivateBucket();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listBucketObjects', () => {
    describe('positive tests', () => {
      function __listBucketObjectsTest() {
        // Construct the params object for operation listBucketObjects
        const bucketId = 'testString';
        const authInstanceId = 'testString';
        const path = 'testString';
        const listBucketObjectsParams = {
          bucketId,
          authInstanceId,
          path,
        };

        const listBucketObjectsResult =
          watsonxDataService.listBucketObjects(listBucketObjectsParams);

        // all methods should return a Promise
        expectToBePromise(listBucketObjectsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/bucket_registrations/{bucket_id}/objects', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.path).toEqual(path);
        expect(mockRequestOptions.path.bucket_id).toEqual(bucketId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listBucketObjectsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listBucketObjectsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listBucketObjectsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const bucketId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listBucketObjectsParams = {
          bucketId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listBucketObjects(listBucketObjectsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.listBucketObjects({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.listBucketObjects();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getBucketObjectProperties', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // Path
      const pathModel = {
        path: 'string',
      };

      function __getBucketObjectPropertiesTest() {
        // Construct the params object for operation getBucketObjectProperties
        const bucketId = 'testString';
        const paths = [pathModel];
        const authInstanceId = 'testString';
        const getBucketObjectPropertiesParams = {
          bucketId,
          paths,
          authInstanceId,
        };

        const getBucketObjectPropertiesResult = watsonxDataService.getBucketObjectProperties(
          getBucketObjectPropertiesParams
        );

        // all methods should return a Promise
        expectToBePromise(getBucketObjectPropertiesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/bucket_registrations/{bucket_id}/object_properties',
          'POST'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.paths).toEqual(paths);
        expect(mockRequestOptions.path.bucket_id).toEqual(bucketId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getBucketObjectPropertiesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getBucketObjectPropertiesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getBucketObjectPropertiesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const bucketId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getBucketObjectPropertiesParams = {
          bucketId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getBucketObjectProperties(getBucketObjectPropertiesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getBucketObjectProperties({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getBucketObjectProperties();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createHdfsStorage', () => {
    describe('positive tests', () => {
      function __createHdfsStorageTest() {
        // Construct the params object for operation createHdfsStorage
        const bucketDisplayName = 'testString';
        const bucketType = 'testString';
        const hmsThriftUri = 'testString';
        const hmsThriftPort = 1;
        const coreSite = 'testString';
        const hdfsSite = 'testString';
        const kerberos = 'testString';
        const catalogName = 'testString';
        const catalogType = 'testString';
        const krb5Config = 'testString';
        const hiveKeytab = Buffer.from('This is a mock file.');
        const hiveKeytabContentType = 'testString';
        const hdfsKeytab = Buffer.from('This is a mock file.');
        const hdfsKeytabContentType = 'testString';
        const hiveServerPrincipal = 'testString';
        const hiveClientPrincipal = 'testString';
        const hdfsPrincipal = 'testString';
        const description = 'testString';
        const createdOn = 'testString';
        const authInstanceId = 'testString';
        const createHdfsStorageParams = {
          bucketDisplayName,
          bucketType,
          hmsThriftUri,
          hmsThriftPort,
          coreSite,
          hdfsSite,
          kerberos,
          catalogName,
          catalogType,
          krb5Config,
          hiveKeytab,
          hiveKeytabContentType,
          hdfsKeytab,
          hdfsKeytabContentType,
          hiveServerPrincipal,
          hiveClientPrincipal,
          hdfsPrincipal,
          description,
          createdOn,
          authInstanceId,
        };

        const createHdfsStorageResult =
          watsonxDataService.createHdfsStorage(createHdfsStorageParams);

        // all methods should return a Promise
        expectToBePromise(createHdfsStorageResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/storage_hdfs_registrations', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'multipart/form-data';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.formData.bucket_display_name).toEqual(bucketDisplayName);
        expect(mockRequestOptions.formData.bucket_type).toEqual(bucketType);
        expect(mockRequestOptions.formData.hms_thrift_uri).toEqual(hmsThriftUri);
        expect(mockRequestOptions.formData.hms_thrift_port).toEqual(hmsThriftPort);
        expect(mockRequestOptions.formData.core_site).toEqual(coreSite);
        expect(mockRequestOptions.formData.hdfs_site).toEqual(hdfsSite);
        expect(mockRequestOptions.formData.kerberos).toEqual(kerberos);
        expect(mockRequestOptions.formData.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.formData.catalog_type).toEqual(catalogType);
        expect(mockRequestOptions.formData.krb5_config).toEqual(krb5Config);
        expect(mockRequestOptions.formData.hive_keytab.data).toEqual(hiveKeytab);
        expect(mockRequestOptions.formData.hive_keytab.contentType).toEqual(hiveKeytabContentType);
        expect(mockRequestOptions.formData.hdfs_keytab.data).toEqual(hdfsKeytab);
        expect(mockRequestOptions.formData.hdfs_keytab.contentType).toEqual(hdfsKeytabContentType);
        expect(mockRequestOptions.formData.hive_server_principal).toEqual(hiveServerPrincipal);
        expect(mockRequestOptions.formData.hive_client_principal).toEqual(hiveClientPrincipal);
        expect(mockRequestOptions.formData.hdfs_principal).toEqual(hdfsPrincipal);
        expect(mockRequestOptions.formData.description).toEqual(description);
        expect(mockRequestOptions.formData.created_on).toEqual(createdOn);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createHdfsStorageTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createHdfsStorageTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createHdfsStorageTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const bucketDisplayName = 'testString';
        const bucketType = 'testString';
        const hmsThriftUri = 'testString';
        const hmsThriftPort = 1;
        const coreSite = 'testString';
        const hdfsSite = 'testString';
        const kerberos = 'testString';
        const catalogName = 'testString';
        const catalogType = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createHdfsStorageParams = {
          bucketDisplayName,
          bucketType,
          hmsThriftUri,
          hmsThriftPort,
          coreSite,
          hdfsSite,
          kerberos,
          catalogName,
          catalogType,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createHdfsStorage(createHdfsStorageParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createHdfsStorage({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createHdfsStorage();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listDatabaseRegistrations', () => {
    describe('positive tests', () => {
      function __listDatabaseRegistrationsTest() {
        // Construct the params object for operation listDatabaseRegistrations
        const authInstanceId = 'testString';
        const listDatabaseRegistrationsParams = {
          authInstanceId,
        };

        const listDatabaseRegistrationsResult = watsonxDataService.listDatabaseRegistrations(
          listDatabaseRegistrationsParams
        );

        // all methods should return a Promise
        expectToBePromise(listDatabaseRegistrationsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/database_registrations', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listDatabaseRegistrationsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listDatabaseRegistrationsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listDatabaseRegistrationsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listDatabaseRegistrationsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listDatabaseRegistrations(listDatabaseRegistrationsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.listDatabaseRegistrations({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createDatabaseRegistration', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // DatabaseCatalog
      const databaseCatalogModel = {
        catalog_name: 'sampleCatalog',
        catalog_tags: ['catalog_tag_1', 'catalog_tag_2'],
        catalog_type: 'iceberg',
      };

      // DatabaseDetails
      const databaseDetailsModel = {
        authentication_type: 'LDAP',
        broker_authentication_password: 'samplepassword',
        broker_authentication_type: 'PASSWORD',
        broker_authentication_user: 'sampleuser',
        certificate: 'contents of a pem/crt file',
        certificate_extension: 'pem/crt',
        connection_method: 'basic, apikey',
        connection_mode: 'service_name',
        connection_mode_value: 'orclpdb',
        connection_type: 'JDBC, Arrow flight',
        controller_authentication_password: 'samplepassword',
        controller_authentication_type: 'PASSWORD',
        controller_authentication_user: 'sampleuser',
        cpd_hostname: 'samplecpdhostname',
        credentials_key:
          'eyJ0eXBlIjoic2VydmljZV9hY2NvdW50IiwicHJvamVjdF9pZCI6ImNvbm9wcy1iaWdxdWVyeSIsInByaXZhdGVfa2V5X2lkIjoiMGY3......',
        database_name: 'new_database',
        hostname: 'db2@<hostname>.com',
        hostname_in_certificate: 'samplehostname',
        hosts: 'abc.com:1234,xyz.com:4321',
        informix_server: 'ol_informix1410',
        password: 'samplepassword',
        port: 4553,
        project_id: 'conops-bigquery',
        sasl: true,
        service_api_key: 'sampleapikey',
        service_hostname: 'api.dataplatform.dev.cloud.ibm.com',
        service_password: 'samplepassword',
        service_port: 443,
        service_ssl: true,
        service_token_url: 'sampletoakenurl',
        service_username: 'sampleusername',
        ssl: true,
        tables: 'kafka_table_name',
        username: 'sampleuser',
        validate_server_certificate: true,
        verify_host_name: true,
      };

      // DatabaseRegistrationPrototypeDatabasePropertiesItems
      const databaseRegistrationPrototypeDatabasePropertiesItemsModel = {
        encrypt: true,
        key: 'abc',
        value: 'xyz',
      };

      function __createDatabaseRegistrationTest() {
        // Construct the params object for operation createDatabaseRegistration
        const databaseDisplayName = 'new_database';
        const databaseType = 'db2';
        const associatedCatalog = databaseCatalogModel;
        const createdOn = '1686792721';
        const databaseDetails = databaseDetailsModel;
        const databaseProperties = [databaseRegistrationPrototypeDatabasePropertiesItemsModel];
        const description = 'db2 extenal database description';
        const tags = ['testdatabase', 'userdatabase'];
        const authInstanceId = 'testString';
        const createDatabaseRegistrationParams = {
          databaseDisplayName,
          databaseType,
          associatedCatalog,
          createdOn,
          databaseDetails,
          databaseProperties,
          description,
          tags,
          authInstanceId,
        };

        const createDatabaseRegistrationResult = watsonxDataService.createDatabaseRegistration(
          createDatabaseRegistrationParams
        );

        // all methods should return a Promise
        expectToBePromise(createDatabaseRegistrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/database_registrations', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.database_display_name).toEqual(databaseDisplayName);
        expect(mockRequestOptions.body.database_type).toEqual(databaseType);
        expect(mockRequestOptions.body.associated_catalog).toEqual(associatedCatalog);
        expect(mockRequestOptions.body.created_on).toEqual(createdOn);
        expect(mockRequestOptions.body.database_details).toEqual(databaseDetails);
        expect(mockRequestOptions.body.database_properties).toEqual(databaseProperties);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.tags).toEqual(tags);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createDatabaseRegistrationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createDatabaseRegistrationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createDatabaseRegistrationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const databaseDisplayName = 'new_database';
        const databaseType = 'db2';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createDatabaseRegistrationParams = {
          databaseDisplayName,
          databaseType,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createDatabaseRegistration(createDatabaseRegistrationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createDatabaseRegistration({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createDatabaseRegistration();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getDatabase', () => {
    describe('positive tests', () => {
      function __getDatabaseTest() {
        // Construct the params object for operation getDatabase
        const databaseId = 'testString';
        const authInstanceId = 'testString';
        const getDatabaseParams = {
          databaseId,
          authInstanceId,
        };

        const getDatabaseResult = watsonxDataService.getDatabase(getDatabaseParams);

        // all methods should return a Promise
        expectToBePromise(getDatabaseResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/database_registrations/{database_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.database_id).toEqual(databaseId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getDatabaseTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getDatabaseTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getDatabaseTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const databaseId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getDatabaseParams = {
          databaseId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getDatabase(getDatabaseParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getDatabase({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getDatabase();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteDatabaseCatalog', () => {
    describe('positive tests', () => {
      function __deleteDatabaseCatalogTest() {
        // Construct the params object for operation deleteDatabaseCatalog
        const databaseId = 'testString';
        const authInstanceId = 'testString';
        const deleteDatabaseCatalogParams = {
          databaseId,
          authInstanceId,
        };

        const deleteDatabaseCatalogResult = watsonxDataService.deleteDatabaseCatalog(
          deleteDatabaseCatalogParams
        );

        // all methods should return a Promise
        expectToBePromise(deleteDatabaseCatalogResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/database_registrations/{database_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.database_id).toEqual(databaseId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteDatabaseCatalogTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteDatabaseCatalogTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteDatabaseCatalogTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const databaseId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteDatabaseCatalogParams = {
          databaseId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteDatabaseCatalog(deleteDatabaseCatalogParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteDatabaseCatalog({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteDatabaseCatalog();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateDatabase', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // DatabaseRegistrationPatchDatabaseDetails
      const databaseRegistrationPatchDatabaseDetailsModel = {
        password: 'samplepassword',
        username: 'sampleuser',
      };

      // DatabaseRegistrationPatchTopicsItems
      const databaseRegistrationPatchTopicsItemsModel = {
        created_on: '1686792721',
        file_contents: 'sample file contents',
        file_name: 'sample file name',
        topic_name: 'customer',
      };

      function __updateDatabaseTest() {
        // Construct the params object for operation updateDatabase
        const databaseId = 'testString';
        const databaseDetails = databaseRegistrationPatchDatabaseDetailsModel;
        const databaseDisplayName = 'new_database';
        const description = 'External database description';
        const tags = ['testdatabase', 'userdatabase'];
        const topics = [databaseRegistrationPatchTopicsItemsModel];
        const authInstanceId = 'testString';
        const updateDatabaseParams = {
          databaseId,
          databaseDetails,
          databaseDisplayName,
          description,
          tags,
          topics,
          authInstanceId,
        };

        const updateDatabaseResult = watsonxDataService.updateDatabase(updateDatabaseParams);

        // all methods should return a Promise
        expectToBePromise(updateDatabaseResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/database_registrations/{database_id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.database_details).toEqual(databaseDetails);
        expect(mockRequestOptions.body.database_display_name).toEqual(databaseDisplayName);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.topics).toEqual(topics);
        expect(mockRequestOptions.path.database_id).toEqual(databaseId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateDatabaseTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updateDatabaseTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updateDatabaseTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const databaseId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateDatabaseParams = {
          databaseId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updateDatabase(updateDatabaseParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updateDatabase({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updateDatabase();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listDriverRegistration', () => {
    describe('positive tests', () => {
      function __listDriverRegistrationTest() {
        // Construct the params object for operation listDriverRegistration
        const authInstanceId = 'testString';
        const listDriverRegistrationParams = {
          authInstanceId,
        };

        const listDriverRegistrationResult = watsonxDataService.listDriverRegistration(
          listDriverRegistrationParams
        );

        // all methods should return a Promise
        expectToBePromise(listDriverRegistrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/driver_registrations', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listDriverRegistrationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listDriverRegistrationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listDriverRegistrationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listDriverRegistrationParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listDriverRegistration(listDriverRegistrationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.listDriverRegistration({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createDriverRegistration', () => {
    describe('positive tests', () => {
      function __createDriverRegistrationTest() {
        // Construct the params object for operation createDriverRegistration
        const driver = Buffer.from('This is a mock file.');
        const driverName = 'testString';
        const connectionType = 'testString';
        const driverContentType = 'testString';
        const version = 'testString';
        const authInstanceId = 'testString';
        const createDriverRegistrationParams = {
          driver,
          driverName,
          connectionType,
          driverContentType,
          version,
          authInstanceId,
        };

        const createDriverRegistrationResult = watsonxDataService.createDriverRegistration(
          createDriverRegistrationParams
        );

        // all methods should return a Promise
        expectToBePromise(createDriverRegistrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/driver_registrations', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'multipart/form-data';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.formData.driver.data).toEqual(driver);
        expect(mockRequestOptions.formData.driver.contentType).toEqual(driverContentType);
        expect(mockRequestOptions.formData.driver_name).toEqual(driverName);
        expect(mockRequestOptions.formData.connection_type).toEqual(connectionType);
        expect(mockRequestOptions.formData.version).toEqual(version);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createDriverRegistrationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createDriverRegistrationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createDriverRegistrationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const driver = Buffer.from('This is a mock file.');
        const driverName = 'testString';
        const connectionType = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createDriverRegistrationParams = {
          driver,
          driverName,
          connectionType,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createDriverRegistration(createDriverRegistrationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createDriverRegistration({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createDriverRegistration();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteDriverRegistration', () => {
    describe('positive tests', () => {
      function __deleteDriverRegistrationTest() {
        // Construct the params object for operation deleteDriverRegistration
        const driverId = 'testString';
        const authInstanceId = 'testString';
        const deleteDriverRegistrationParams = {
          driverId,
          authInstanceId,
        };

        const deleteDriverRegistrationResult = watsonxDataService.deleteDriverRegistration(
          deleteDriverRegistrationParams
        );

        // all methods should return a Promise
        expectToBePromise(deleteDriverRegistrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/driver_registrations/{driver_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.driver_id).toEqual(driverId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteDriverRegistrationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteDriverRegistrationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteDriverRegistrationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const driverId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteDriverRegistrationParams = {
          driverId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteDriverRegistration(deleteDriverRegistrationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteDriverRegistration({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteDriverRegistration();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteDriverEngines', () => {
    describe('positive tests', () => {
      function __deleteDriverEnginesTest() {
        // Construct the params object for operation deleteDriverEngines
        const driverId = 'testString';
        const engineIds = 'testString';
        const authInstanceId = 'testString';
        const deleteDriverEnginesParams = {
          driverId,
          engineIds,
          authInstanceId,
        };

        const deleteDriverEnginesResult =
          watsonxDataService.deleteDriverEngines(deleteDriverEnginesParams);

        // all methods should return a Promise
        expectToBePromise(deleteDriverEnginesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/driver_registrations/{driver_id}/engines',
          'DELETE'
        );
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.engine_ids).toEqual(engineIds);
        expect(mockRequestOptions.path.driver_id).toEqual(driverId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteDriverEnginesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteDriverEnginesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteDriverEnginesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const driverId = 'testString';
        const engineIds = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteDriverEnginesParams = {
          driverId,
          engineIds,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteDriverEngines(deleteDriverEnginesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteDriverEngines({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteDriverEngines();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateDriverEngines', () => {
    describe('positive tests', () => {
      function __updateDriverEnginesTest() {
        // Construct the params object for operation updateDriverEngines
        const driverId = 'testString';
        const engines = ['testString'];
        const authInstanceId = 'testString';
        const updateDriverEnginesParams = {
          driverId,
          engines,
          authInstanceId,
        };

        const updateDriverEnginesResult =
          watsonxDataService.updateDriverEngines(updateDriverEnginesParams);

        // all methods should return a Promise
        expectToBePromise(updateDriverEnginesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/driver_registrations/{driver_id}/engines', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.engines).toEqual(engines);
        expect(mockRequestOptions.path.driver_id).toEqual(driverId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateDriverEnginesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updateDriverEnginesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updateDriverEnginesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const driverId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateDriverEnginesParams = {
          driverId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updateDriverEngines(updateDriverEnginesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updateDriverEngines({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updateDriverEngines();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listOtherEngines', () => {
    describe('positive tests', () => {
      function __listOtherEnginesTest() {
        // Construct the params object for operation listOtherEngines
        const authInstanceId = 'testString';
        const listOtherEnginesParams = {
          authInstanceId,
        };

        const listOtherEnginesResult = watsonxDataService.listOtherEngines(listOtherEnginesParams);

        // all methods should return a Promise
        expectToBePromise(listOtherEnginesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/other_engines', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listOtherEnginesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listOtherEnginesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listOtherEnginesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listOtherEnginesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listOtherEngines(listOtherEnginesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.listOtherEngines({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createOtherEngine', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // OtherEngineDetailsBody
      const otherEngineDetailsBodyModel = {
        connection_string: '1.2.3.4',
        engine_type: 'netezza',
      };

      function __createOtherEngineTest() {
        // Construct the params object for operation createOtherEngine
        const engineDetails = otherEngineDetailsBodyModel;
        const engineDisplayName = 'sampleEngine01';
        const description = 'external engine description';
        const origin = 'external';
        const tags = ['tag1', 'tag2'];
        const authInstanceId = 'testString';
        const createOtherEngineParams = {
          engineDetails,
          engineDisplayName,
          description,
          origin,
          tags,
          authInstanceId,
        };

        const createOtherEngineResult =
          watsonxDataService.createOtherEngine(createOtherEngineParams);

        // all methods should return a Promise
        expectToBePromise(createOtherEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/other_engines', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.engine_details).toEqual(engineDetails);
        expect(mockRequestOptions.body.engine_display_name).toEqual(engineDisplayName);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.origin).toEqual(origin);
        expect(mockRequestOptions.body.tags).toEqual(tags);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createOtherEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createOtherEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createOtherEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineDetails = otherEngineDetailsBodyModel;
        const engineDisplayName = 'sampleEngine01';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createOtherEngineParams = {
          engineDetails,
          engineDisplayName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createOtherEngine(createOtherEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createOtherEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createOtherEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteOtherEngine', () => {
    describe('positive tests', () => {
      function __deleteOtherEngineTest() {
        // Construct the params object for operation deleteOtherEngine
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const deleteOtherEngineParams = {
          engineId,
          authInstanceId,
        };

        const deleteOtherEngineResult =
          watsonxDataService.deleteOtherEngine(deleteOtherEngineParams);

        // all methods should return a Promise
        expectToBePromise(deleteOtherEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/other_engines/{engine_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteOtherEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteOtherEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteOtherEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteOtherEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteOtherEngine(deleteOtherEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteOtherEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteOtherEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listAllIntegrations', () => {
    describe('positive tests', () => {
      function __listAllIntegrationsTest() {
        // Construct the params object for operation listAllIntegrations
        const authInstanceId = 'testString';
        const secret = 'testString';
        const serviceType = 'testString';
        const state = ['testString'];
        const listAllIntegrationsParams = {
          authInstanceId,
          secret,
          serviceType,
          state,
        };

        const listAllIntegrationsResult =
          watsonxDataService.listAllIntegrations(listAllIntegrationsParams);

        // all methods should return a Promise
        expectToBePromise(listAllIntegrationsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/integrations', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        checkUserHeader(createRequestMock, 'Secret', secret);
        expect(mockRequestOptions.qs.service_type).toEqual(serviceType);
        expect(mockRequestOptions.qs.state).toEqual(state);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listAllIntegrationsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listAllIntegrationsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listAllIntegrationsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listAllIntegrationsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listAllIntegrations(listAllIntegrationsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.listAllIntegrations({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createIntegration', () => {
    describe('positive tests', () => {
      function __createIntegrationTest() {
        // Construct the params object for operation createIntegration
        const accessToken = 'testString';
        const apikey = 'testString';
        const crossAccountIntegration = true;
        const enableDataPolicyWithinWxd = false;
        const ikcUserAccountId = 'testString';
        const password = 'password';
        const resource = 'resource_name';
        const serviceType = 'ranger';
        const storageCatalogs = ['testString'];
        const url = 'http://abcd.efgh.com:9876/';
        const username = 'username';
        const authInstanceId = 'testString';
        const createIntegrationParams = {
          accessToken,
          apikey,
          crossAccountIntegration,
          enableDataPolicyWithinWxd,
          ikcUserAccountId,
          password,
          resource,
          serviceType,
          storageCatalogs,
          url,
          username,
          authInstanceId,
        };

        const createIntegrationResult =
          watsonxDataService.createIntegration(createIntegrationParams);

        // all methods should return a Promise
        expectToBePromise(createIntegrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/integrations', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.access_token).toEqual(accessToken);
        expect(mockRequestOptions.body.apikey).toEqual(apikey);
        expect(mockRequestOptions.body.cross_account_integration).toEqual(crossAccountIntegration);
        expect(mockRequestOptions.body.enable_data_policy_within_wxd).toEqual(
          enableDataPolicyWithinWxd
        );
        expect(mockRequestOptions.body.ikc_user_account_id).toEqual(ikcUserAccountId);
        expect(mockRequestOptions.body.password).toEqual(password);
        expect(mockRequestOptions.body.resource).toEqual(resource);
        expect(mockRequestOptions.body.service_type).toEqual(serviceType);
        expect(mockRequestOptions.body.storage_catalogs).toEqual(storageCatalogs);
        expect(mockRequestOptions.body.url).toEqual(url);
        expect(mockRequestOptions.body.username).toEqual(username);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createIntegrationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createIntegrationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createIntegrationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createIntegrationParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createIntegration(createIntegrationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.createIntegration({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getIntegrations', () => {
    describe('positive tests', () => {
      function __getIntegrationsTest() {
        // Construct the params object for operation getIntegrations
        const integrationId = 'testString';
        const authInstanceId = 'testString';
        const secret = 'testString';
        const getIntegrationsParams = {
          integrationId,
          authInstanceId,
          secret,
        };

        const getIntegrationsResult = watsonxDataService.getIntegrations(getIntegrationsParams);

        // all methods should return a Promise
        expectToBePromise(getIntegrationsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/integrations/{integration_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        checkUserHeader(createRequestMock, 'Secret', secret);
        expect(mockRequestOptions.path.integration_id).toEqual(integrationId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getIntegrationsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getIntegrationsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getIntegrationsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const integrationId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getIntegrationsParams = {
          integrationId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getIntegrations(getIntegrationsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getIntegrations({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getIntegrations();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteIntegration', () => {
    describe('positive tests', () => {
      function __deleteIntegrationTest() {
        // Construct the params object for operation deleteIntegration
        const integrationId = 'testString';
        const authInstanceId = 'testString';
        const deleteIntegrationParams = {
          integrationId,
          authInstanceId,
        };

        const deleteIntegrationResult =
          watsonxDataService.deleteIntegration(deleteIntegrationParams);

        // all methods should return a Promise
        expectToBePromise(deleteIntegrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/integrations/{integration_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.integration_id).toEqual(integrationId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteIntegrationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteIntegrationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteIntegrationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const integrationId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteIntegrationParams = {
          integrationId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteIntegration(deleteIntegrationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteIntegration({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteIntegration();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateIntegration', () => {
    describe('positive tests', () => {
      function __updateIntegrationTest() {
        // Construct the params object for operation updateIntegration
        const integrationId = 'testString';
        const accessToken = 'testString';
        const apikey = 'testString';
        const crossAccountIntegration = true;
        const enableDataPolicyWithinWxd = true;
        const ikcUserAccountId = 'testString';
        const password = 'testString';
        const resource = 'resource_name';
        const state = 'testString';
        const storageCatalogs = ['testString'];
        const url = 'http://abcd.efgh.com:9876/';
        const username = 'username';
        const authInstanceId = 'testString';
        const updateIntegrationParams = {
          integrationId,
          accessToken,
          apikey,
          crossAccountIntegration,
          enableDataPolicyWithinWxd,
          ikcUserAccountId,
          password,
          resource,
          state,
          storageCatalogs,
          url,
          username,
          authInstanceId,
        };

        const updateIntegrationResult =
          watsonxDataService.updateIntegration(updateIntegrationParams);

        // all methods should return a Promise
        expectToBePromise(updateIntegrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/integrations/{integration_id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.access_token).toEqual(accessToken);
        expect(mockRequestOptions.body.apikey).toEqual(apikey);
        expect(mockRequestOptions.body.cross_account_integration).toEqual(crossAccountIntegration);
        expect(mockRequestOptions.body.enable_data_policy_within_wxd).toEqual(
          enableDataPolicyWithinWxd
        );
        expect(mockRequestOptions.body.ikc_user_account_id).toEqual(ikcUserAccountId);
        expect(mockRequestOptions.body.password).toEqual(password);
        expect(mockRequestOptions.body.resource).toEqual(resource);
        expect(mockRequestOptions.body.state).toEqual(state);
        expect(mockRequestOptions.body.storage_catalogs).toEqual(storageCatalogs);
        expect(mockRequestOptions.body.url).toEqual(url);
        expect(mockRequestOptions.body.username).toEqual(username);
        expect(mockRequestOptions.path.integration_id).toEqual(integrationId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateIntegrationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updateIntegrationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updateIntegrationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const integrationId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateIntegrationParams = {
          integrationId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updateIntegration(updateIntegrationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updateIntegration({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updateIntegration();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listDb2Engines', () => {
    describe('positive tests', () => {
      function __listDb2EnginesTest() {
        // Construct the params object for operation listDb2Engines
        const authInstanceId = 'testString';
        const listDb2EnginesParams = {
          authInstanceId,
        };

        const listDb2EnginesResult = watsonxDataService.listDb2Engines(listDb2EnginesParams);

        // all methods should return a Promise
        expectToBePromise(listDb2EnginesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/db2_engines', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listDb2EnginesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listDb2EnginesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listDb2EnginesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listDb2EnginesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listDb2Engines(listDb2EnginesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.listDb2Engines({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createDb2Engine', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // Db2EngineDetailsBody
      const db2EngineDetailsBodyModel = {
        connection_string: '1.2.3.4',
      };

      function __createDb2EngineTest() {
        // Construct the params object for operation createDb2Engine
        const origin = 'external';
        const description = 'db2 engine description';
        const engineDetails = db2EngineDetailsBodyModel;
        const engineDisplayName = 'sampleEngine';
        const tags = ['tag1', 'tag2'];
        const authInstanceId = 'testString';
        const createDb2EngineParams = {
          origin,
          description,
          engineDetails,
          engineDisplayName,
          tags,
          authInstanceId,
        };

        const createDb2EngineResult = watsonxDataService.createDb2Engine(createDb2EngineParams);

        // all methods should return a Promise
        expectToBePromise(createDb2EngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/db2_engines', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.origin).toEqual(origin);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.engine_details).toEqual(engineDetails);
        expect(mockRequestOptions.body.engine_display_name).toEqual(engineDisplayName);
        expect(mockRequestOptions.body.tags).toEqual(tags);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createDb2EngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createDb2EngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createDb2EngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const origin = 'external';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createDb2EngineParams = {
          origin,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createDb2Engine(createDb2EngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createDb2Engine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createDb2Engine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteDb2Engine', () => {
    describe('positive tests', () => {
      function __deleteDb2EngineTest() {
        // Construct the params object for operation deleteDb2Engine
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const deleteDb2EngineParams = {
          engineId,
          authInstanceId,
        };

        const deleteDb2EngineResult = watsonxDataService.deleteDb2Engine(deleteDb2EngineParams);

        // all methods should return a Promise
        expectToBePromise(deleteDb2EngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/db2_engines/{engine_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteDb2EngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteDb2EngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteDb2EngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteDb2EngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteDb2Engine(deleteDb2EngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteDb2Engine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteDb2Engine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateDb2Engine', () => {
    describe('positive tests', () => {
      function __updateDb2EngineTest() {
        // Construct the params object for operation updateDb2Engine
        const engineId = 'testString';
        const description = 'db2 engine updated description';
        const engineDisplayName = 'sampleEngine';
        const tags = ['tag1', 'tag2'];
        const authInstanceId = 'testString';
        const updateDb2EngineParams = {
          engineId,
          description,
          engineDisplayName,
          tags,
          authInstanceId,
        };

        const updateDb2EngineResult = watsonxDataService.updateDb2Engine(updateDb2EngineParams);

        // all methods should return a Promise
        expectToBePromise(updateDb2EngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/db2_engines/{engine_id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.engine_display_name).toEqual(engineDisplayName);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateDb2EngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updateDb2EngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updateDb2EngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateDb2EngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updateDb2Engine(updateDb2EngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updateDb2Engine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updateDb2Engine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listNetezzaEngines', () => {
    describe('positive tests', () => {
      function __listNetezzaEnginesTest() {
        // Construct the params object for operation listNetezzaEngines
        const authInstanceId = 'testString';
        const listNetezzaEnginesParams = {
          authInstanceId,
        };

        const listNetezzaEnginesResult =
          watsonxDataService.listNetezzaEngines(listNetezzaEnginesParams);

        // all methods should return a Promise
        expectToBePromise(listNetezzaEnginesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/netezza_engines', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listNetezzaEnginesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listNetezzaEnginesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listNetezzaEnginesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listNetezzaEnginesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listNetezzaEngines(listNetezzaEnginesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.listNetezzaEngines({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createNetezzaEngine', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // NetezzaEngineDetailsBody
      const netezzaEngineDetailsBodyModel = {
        connection_string: '1.2.3.4',
      };

      function __createNetezzaEngineTest() {
        // Construct the params object for operation createNetezzaEngine
        const origin = 'external';
        const description = 'netezza engine description';
        const engineDetails = netezzaEngineDetailsBodyModel;
        const engineDisplayName = 'sampleEngine';
        const tags = ['tag1', 'tag2'];
        const authInstanceId = 'testString';
        const createNetezzaEngineParams = {
          origin,
          description,
          engineDetails,
          engineDisplayName,
          tags,
          authInstanceId,
        };

        const createNetezzaEngineResult =
          watsonxDataService.createNetezzaEngine(createNetezzaEngineParams);

        // all methods should return a Promise
        expectToBePromise(createNetezzaEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/netezza_engines', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.origin).toEqual(origin);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.engine_details).toEqual(engineDetails);
        expect(mockRequestOptions.body.engine_display_name).toEqual(engineDisplayName);
        expect(mockRequestOptions.body.tags).toEqual(tags);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createNetezzaEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createNetezzaEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createNetezzaEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const origin = 'external';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createNetezzaEngineParams = {
          origin,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createNetezzaEngine(createNetezzaEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createNetezzaEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createNetezzaEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteNetezzaEngine', () => {
    describe('positive tests', () => {
      function __deleteNetezzaEngineTest() {
        // Construct the params object for operation deleteNetezzaEngine
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const deleteNetezzaEngineParams = {
          engineId,
          authInstanceId,
        };

        const deleteNetezzaEngineResult =
          watsonxDataService.deleteNetezzaEngine(deleteNetezzaEngineParams);

        // all methods should return a Promise
        expectToBePromise(deleteNetezzaEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/netezza_engines/{engine_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteNetezzaEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteNetezzaEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteNetezzaEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteNetezzaEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteNetezzaEngine(deleteNetezzaEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteNetezzaEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteNetezzaEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateNetezzaEngine', () => {
    describe('positive tests', () => {
      function __updateNetezzaEngineTest() {
        // Construct the params object for operation updateNetezzaEngine
        const engineId = 'testString';
        const description = 'netezza engine updated description';
        const engineDisplayName = 'sampleEngine';
        const tags = ['tag1', 'tag2'];
        const authInstanceId = 'testString';
        const updateNetezzaEngineParams = {
          engineId,
          description,
          engineDisplayName,
          tags,
          authInstanceId,
        };

        const updateNetezzaEngineResult =
          watsonxDataService.updateNetezzaEngine(updateNetezzaEngineParams);

        // all methods should return a Promise
        expectToBePromise(updateNetezzaEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/netezza_engines/{engine_id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.engine_display_name).toEqual(engineDisplayName);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateNetezzaEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updateNetezzaEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updateNetezzaEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateNetezzaEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updateNetezzaEngine(updateNetezzaEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updateNetezzaEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updateNetezzaEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createExecuteQuery', () => {
    describe('positive tests', () => {
      function __createExecuteQueryTest() {
        // Construct the params object for operation createExecuteQuery
        const engineId = 'testString';
        const sqlString = 'select expenses from expenditure';
        const catalogName = 'sampleCatalog';
        const schemaName = 'SampleSchema1';
        const authInstanceId = 'testString';
        const createExecuteQueryParams = {
          engineId,
          sqlString,
          catalogName,
          schemaName,
          authInstanceId,
        };

        const createExecuteQueryResult =
          watsonxDataService.createExecuteQuery(createExecuteQueryParams);

        // all methods should return a Promise
        expectToBePromise(createExecuteQueryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/queries/execute/{engine_id}', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.sql_string).toEqual(sqlString);
        expect(mockRequestOptions.body.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.body.schema_name).toEqual(schemaName);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createExecuteQueryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createExecuteQueryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createExecuteQueryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const sqlString = 'select expenses from expenditure';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createExecuteQueryParams = {
          engineId,
          sqlString,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createExecuteQuery(createExecuteQueryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createExecuteQuery({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createExecuteQuery();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listInstanceDetails', () => {
    describe('positive tests', () => {
      function __listInstanceDetailsTest() {
        // Construct the params object for operation listInstanceDetails
        const authInstanceId = 'testString';
        const listInstanceDetailsParams = {
          authInstanceId,
        };

        const listInstanceDetailsResult =
          watsonxDataService.listInstanceDetails(listInstanceDetailsParams);

        // all methods should return a Promise
        expectToBePromise(listInstanceDetailsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/instance_details', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listInstanceDetailsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listInstanceDetailsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listInstanceDetailsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listInstanceDetailsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listInstanceDetails(listInstanceDetailsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.listInstanceDetails({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('listInstanceServiceDetails', () => {
    describe('positive tests', () => {
      function __listInstanceServiceDetailsTest() {
        // Construct the params object for operation listInstanceServiceDetails
        const target = 'testString';
        const internalHost = false;
        const authInstanceId = 'testString';
        const listInstanceServiceDetailsParams = {
          target,
          internalHost,
          authInstanceId,
        };

        const listInstanceServiceDetailsResult = watsonxDataService.listInstanceServiceDetails(
          listInstanceServiceDetailsParams
        );

        // all methods should return a Promise
        expectToBePromise(listInstanceServiceDetailsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/instance_details/engines_services', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.target).toEqual(target);
        expect(mockRequestOptions.qs.internal_host).toEqual(internalHost);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listInstanceServiceDetailsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listInstanceServiceDetailsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listInstanceServiceDetailsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const target = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listInstanceServiceDetailsParams = {
          target,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listInstanceServiceDetails(listInstanceServiceDetailsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.listInstanceServiceDetails({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.listInstanceServiceDetails();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getServicesDetails', () => {
    describe('positive tests', () => {
      function __getServicesDetailsTest() {
        // Construct the params object for operation getServicesDetails
        const target = 'testString';
        const engineOrServiceType = 'testString';
        const internalHost = false;
        const authInstanceId = 'testString';
        const getServicesDetailsParams = {
          target,
          engineOrServiceType,
          internalHost,
          authInstanceId,
        };

        const getServicesDetailsResult =
          watsonxDataService.getServicesDetails(getServicesDetailsParams);

        // all methods should return a Promise
        expectToBePromise(getServicesDetailsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/instance_details/engines_services/{engine_or_service_type}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.target).toEqual(target);
        expect(mockRequestOptions.qs.internal_host).toEqual(internalHost);
        expect(mockRequestOptions.path.engine_or_service_type).toEqual(engineOrServiceType);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getServicesDetailsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getServicesDetailsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getServicesDetailsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const target = 'testString';
        const engineOrServiceType = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getServicesDetailsParams = {
          target,
          engineOrServiceType,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getServicesDetails(getServicesDetailsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getServicesDetails({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getServicesDetails();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getServiceDetail', () => {
    describe('positive tests', () => {
      function __getServiceDetailTest() {
        // Construct the params object for operation getServiceDetail
        const target = 'testString';
        const engineOrServiceType = 'testString';
        const id = 'testString';
        const database = 'testString';
        const internalHost = false;
        const authInstanceId = 'testString';
        const getServiceDetailParams = {
          target,
          engineOrServiceType,
          id,
          database,
          internalHost,
          authInstanceId,
        };

        const getServiceDetailResult = watsonxDataService.getServiceDetail(getServiceDetailParams);

        // all methods should return a Promise
        expectToBePromise(getServiceDetailResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/instance_details/engines_services/{engine_or_service_type}/id/{id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.target).toEqual(target);
        expect(mockRequestOptions.qs.database).toEqual(database);
        expect(mockRequestOptions.qs.internal_host).toEqual(internalHost);
        expect(mockRequestOptions.path.engine_or_service_type).toEqual(engineOrServiceType);
        expect(mockRequestOptions.path.id).toEqual(id);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getServiceDetailTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getServiceDetailTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getServiceDetailTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const target = 'testString';
        const engineOrServiceType = 'testString';
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getServiceDetailParams = {
          target,
          engineOrServiceType,
          id,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getServiceDetail(getServiceDetailParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getServiceDetail({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getServiceDetail();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listPrestissimoEngines', () => {
    describe('positive tests', () => {
      function __listPrestissimoEnginesTest() {
        // Construct the params object for operation listPrestissimoEngines
        const authInstanceId = 'testString';
        const listPrestissimoEnginesParams = {
          authInstanceId,
        };

        const listPrestissimoEnginesResult = watsonxDataService.listPrestissimoEngines(
          listPrestissimoEnginesParams
        );

        // all methods should return a Promise
        expectToBePromise(listPrestissimoEnginesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/prestissimo_engines', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listPrestissimoEnginesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listPrestissimoEnginesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listPrestissimoEnginesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listPrestissimoEnginesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listPrestissimoEngines(listPrestissimoEnginesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.listPrestissimoEngines({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createPrestissimoEngine', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // PrestissimoNodeDescriptionBody
      const prestissimoNodeDescriptionBodyModel = {
        node_type: 'worker',
        quantity: 38,
      };

      // PrestissimoEndpoints
      const prestissimoEndpointsModel = {
        applications_api:
          '$HOST/v4/analytics_engines/c7b3fccf-badb-46b0-b1ef-9b3154424021/spark_applications/<application_id>',
        history_server_endpoint:
          '$HOST/v2/spark/v3/instances/c7b3fccf-badb-46b0-b1ef-9b3154424021/spark_history_server',
        spark_access_endpoint: '$HOST/analytics-engine/details/spark-<instance_id>',
        spark_jobs_v4_endpoint:
          '$HOST/v4/analytics_engines/c7b3fccf-badb-46b0-b1ef-9b3154424021/spark_applications',
        spark_kernel_endpoint:
          '$HOST/v4/analytics_engines/c7b3fccf-badb-46b0-b1ef-9b3154424021/jkg/api/kernels',
        view_history_server: 'testString',
        wxd_application_endpoint: '$HOST/v1/1698311655308796/engines/spark817/applications',
      };

      // PrestissimoEngineDetails
      const prestissimoEngineDetailsModel = {
        api_key: '<api_key>',
        connection_string: '1.2.3.4',
        coordinator: prestissimoNodeDescriptionBodyModel,
        endpoints: prestissimoEndpointsModel,
        instance_id: 'instance_id',
        managed_by: 'fully/self',
        metastore_host: '1.2.3.4',
        size_config: 'starter',
        worker: prestissimoNodeDescriptionBodyModel,
      };

      function __createPrestissimoEngineTest() {
        // Construct the params object for operation createPrestissimoEngine
        const origin = 'native';
        const associatedCatalogs = ['hive_data'];
        const description = 'prestissimo engine description';
        const engineDetails = prestissimoEngineDetailsModel;
        const engineDisplayName = 'sampleEngine';
        const region = 'us-south';
        const tags = ['tag1', 'tag2'];
        const version = '1.2.3';
        const authInstanceId = 'testString';
        const createPrestissimoEngineParams = {
          origin,
          associatedCatalogs,
          description,
          engineDetails,
          engineDisplayName,
          region,
          tags,
          version,
          authInstanceId,
        };

        const createPrestissimoEngineResult = watsonxDataService.createPrestissimoEngine(
          createPrestissimoEngineParams
        );

        // all methods should return a Promise
        expectToBePromise(createPrestissimoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/prestissimo_engines', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.origin).toEqual(origin);
        expect(mockRequestOptions.body.associated_catalogs).toEqual(associatedCatalogs);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.engine_details).toEqual(engineDetails);
        expect(mockRequestOptions.body.engine_display_name).toEqual(engineDisplayName);
        expect(mockRequestOptions.body.region).toEqual(region);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.version).toEqual(version);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createPrestissimoEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createPrestissimoEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createPrestissimoEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const origin = 'native';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createPrestissimoEngineParams = {
          origin,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createPrestissimoEngine(createPrestissimoEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createPrestissimoEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createPrestissimoEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getPrestissimoEngine', () => {
    describe('positive tests', () => {
      function __getPrestissimoEngineTest() {
        // Construct the params object for operation getPrestissimoEngine
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const getPrestissimoEngineParams = {
          engineId,
          authInstanceId,
        };

        const getPrestissimoEngineResult = watsonxDataService.getPrestissimoEngine(
          getPrestissimoEngineParams
        );

        // all methods should return a Promise
        expectToBePromise(getPrestissimoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/prestissimo_engines/{engine_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getPrestissimoEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getPrestissimoEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getPrestissimoEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getPrestissimoEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getPrestissimoEngine(getPrestissimoEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getPrestissimoEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getPrestissimoEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deletePrestissimoEngine', () => {
    describe('positive tests', () => {
      function __deletePrestissimoEngineTest() {
        // Construct the params object for operation deletePrestissimoEngine
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const deletePrestissimoEngineParams = {
          engineId,
          authInstanceId,
        };

        const deletePrestissimoEngineResult = watsonxDataService.deletePrestissimoEngine(
          deletePrestissimoEngineParams
        );

        // all methods should return a Promise
        expectToBePromise(deletePrestissimoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/prestissimo_engines/{engine_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deletePrestissimoEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deletePrestissimoEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deletePrestissimoEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deletePrestissimoEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deletePrestissimoEngine(deletePrestissimoEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deletePrestissimoEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deletePrestissimoEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updatePrestissimoEngine', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // PrestissimoEnginePropertiesCatalog
      const prestissimoEnginePropertiesCatalogModel = {
        catalog_name: ['testString'],
      };

      // PrestissimoNodeDescriptionBody
      const prestissimoNodeDescriptionBodyModel = {
        node_type: 'worker',
        quantity: 38,
      };

      // EnginePropertiesOaiGenConfiguration
      const enginePropertiesOaiGenConfigurationModel = {
        coordinator: prestissimoNodeDescriptionBodyModel,
        worker: prestissimoNodeDescriptionBodyModel,
      };

      // PrestissimoEnginePropertiesVelox
      const prestissimoEnginePropertiesVeloxModel = {
        velox_property: ['testString'],
      };

      // NodeDescriptionBody
      const nodeDescriptionBodyModel = {
        node_type: 'worker',
        quantity: 38,
      };

      // PrestissimoEnginePropertiesOaiGen1Jvm
      const prestissimoEnginePropertiesOaiGen1JvmModel = {
        coordinator: nodeDescriptionBodyModel,
      };

      // PrestissimoEngineEngineProperties
      const prestissimoEngineEnginePropertiesModel = {
        catalog: prestissimoEnginePropertiesCatalogModel,
        configuration: enginePropertiesOaiGenConfigurationModel,
        velox: prestissimoEnginePropertiesVeloxModel,
        jvm: prestissimoEnginePropertiesOaiGen1JvmModel,
      };

      // RemoveEnginePropertiesConfiguration
      const removeEnginePropertiesConfigurationModel = {
        coordinator: ['testString'],
        worker: ['testString'],
      };

      // RemoveEnginePropertiesPrestissimoOaiGenJvm
      const removeEnginePropertiesPrestissimoOaiGenJvmModel = {
        coordinator: ['testString'],
      };

      // RemoveEngineProperties
      const removeEnginePropertiesModel = {
        catalog: prestissimoEnginePropertiesCatalogModel,
        configuration: removeEnginePropertiesConfigurationModel,
        jvm: removeEnginePropertiesPrestissimoOaiGenJvmModel,
        velox: ['testString'],
      };

      function __updatePrestissimoEngineTest() {
        // Construct the params object for operation updatePrestissimoEngine
        const engineId = 'testString';
        const description = 'updated description for prestissimo engine';
        const engineDisplayName = 'sampleEngine';
        const engineProperties = prestissimoEngineEnginePropertiesModel;
        const engineRestart = 'force';
        const removeEngineProperties = removeEnginePropertiesModel;
        const tags = ['tag1', 'tag2'];
        const authInstanceId = 'testString';
        const updatePrestissimoEngineParams = {
          engineId,
          description,
          engineDisplayName,
          engineProperties,
          engineRestart,
          removeEngineProperties,
          tags,
          authInstanceId,
        };

        const updatePrestissimoEngineResult = watsonxDataService.updatePrestissimoEngine(
          updatePrestissimoEngineParams
        );

        // all methods should return a Promise
        expectToBePromise(updatePrestissimoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/prestissimo_engines/{engine_id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.engine_display_name).toEqual(engineDisplayName);
        expect(mockRequestOptions.body.engine_properties).toEqual(engineProperties);
        expect(mockRequestOptions.body.engine_restart).toEqual(engineRestart);
        expect(mockRequestOptions.body.remove_engine_properties).toEqual(removeEngineProperties);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updatePrestissimoEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updatePrestissimoEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updatePrestissimoEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updatePrestissimoEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updatePrestissimoEngine(updatePrestissimoEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updatePrestissimoEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updatePrestissimoEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listPrestissimoEngineCatalogs', () => {
    describe('positive tests', () => {
      function __listPrestissimoEngineCatalogsTest() {
        // Construct the params object for operation listPrestissimoEngineCatalogs
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const listPrestissimoEngineCatalogsParams = {
          engineId,
          authInstanceId,
        };

        const listPrestissimoEngineCatalogsResult =
          watsonxDataService.listPrestissimoEngineCatalogs(listPrestissimoEngineCatalogsParams);

        // all methods should return a Promise
        expectToBePromise(listPrestissimoEngineCatalogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/prestissimo_engines/{engine_id}/catalogs', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listPrestissimoEngineCatalogsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listPrestissimoEngineCatalogsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listPrestissimoEngineCatalogsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listPrestissimoEngineCatalogsParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listPrestissimoEngineCatalogs(listPrestissimoEngineCatalogsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.listPrestissimoEngineCatalogs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.listPrestissimoEngineCatalogs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createPrestissimoEngineCatalogs', () => {
    describe('positive tests', () => {
      function __createPrestissimoEngineCatalogsTest() {
        // Construct the params object for operation createPrestissimoEngineCatalogs
        const engineId = 'testString';
        const catalogName = 'testString';
        const authInstanceId = 'testString';
        const createPrestissimoEngineCatalogsParams = {
          engineId,
          catalogName,
          authInstanceId,
        };

        const createPrestissimoEngineCatalogsResult =
          watsonxDataService.createPrestissimoEngineCatalogs(createPrestissimoEngineCatalogsParams);

        // all methods should return a Promise
        expectToBePromise(createPrestissimoEngineCatalogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/prestissimo_engines/{engine_id}/catalogs', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createPrestissimoEngineCatalogsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createPrestissimoEngineCatalogsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createPrestissimoEngineCatalogsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createPrestissimoEngineCatalogsParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createPrestissimoEngineCatalogs(createPrestissimoEngineCatalogsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createPrestissimoEngineCatalogs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createPrestissimoEngineCatalogs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deletePrestissimoEngineCatalogs', () => {
    describe('positive tests', () => {
      function __deletePrestissimoEngineCatalogsTest() {
        // Construct the params object for operation deletePrestissimoEngineCatalogs
        const engineId = 'testString';
        const catalogNames = 'testString';
        const authInstanceId = 'testString';
        const deletePrestissimoEngineCatalogsParams = {
          engineId,
          catalogNames,
          authInstanceId,
        };

        const deletePrestissimoEngineCatalogsResult =
          watsonxDataService.deletePrestissimoEngineCatalogs(deletePrestissimoEngineCatalogsParams);

        // all methods should return a Promise
        expectToBePromise(deletePrestissimoEngineCatalogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/prestissimo_engines/{engine_id}/catalogs',
          'DELETE'
        );
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.catalog_names).toEqual(catalogNames);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deletePrestissimoEngineCatalogsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deletePrestissimoEngineCatalogsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deletePrestissimoEngineCatalogsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const catalogNames = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deletePrestissimoEngineCatalogsParams = {
          engineId,
          catalogNames,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deletePrestissimoEngineCatalogs(deletePrestissimoEngineCatalogsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deletePrestissimoEngineCatalogs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deletePrestissimoEngineCatalogs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getPrestissimoEngineCatalog', () => {
    describe('positive tests', () => {
      function __getPrestissimoEngineCatalogTest() {
        // Construct the params object for operation getPrestissimoEngineCatalog
        const engineId = 'testString';
        const catalogId = 'testString';
        const authInstanceId = 'testString';
        const getPrestissimoEngineCatalogParams = {
          engineId,
          catalogId,
          authInstanceId,
        };

        const getPrestissimoEngineCatalogResult = watsonxDataService.getPrestissimoEngineCatalog(
          getPrestissimoEngineCatalogParams
        );

        // all methods should return a Promise
        expectToBePromise(getPrestissimoEngineCatalogResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/prestissimo_engines/{engine_id}/catalogs/{catalog_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.catalog_id).toEqual(catalogId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getPrestissimoEngineCatalogTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getPrestissimoEngineCatalogTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getPrestissimoEngineCatalogTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const catalogId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getPrestissimoEngineCatalogParams = {
          engineId,
          catalogId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getPrestissimoEngineCatalog(getPrestissimoEngineCatalogParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getPrestissimoEngineCatalog({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getPrestissimoEngineCatalog();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('pausePrestissimoEngine', () => {
    describe('positive tests', () => {
      function __pausePrestissimoEngineTest() {
        // Construct the params object for operation pausePrestissimoEngine
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const pausePrestissimoEngineParams = {
          engineId,
          authInstanceId,
        };

        const pausePrestissimoEngineResult = watsonxDataService.pausePrestissimoEngine(
          pausePrestissimoEngineParams
        );

        // all methods should return a Promise
        expectToBePromise(pausePrestissimoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/prestissimo_engines/{engine_id}/pause', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __pausePrestissimoEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __pausePrestissimoEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __pausePrestissimoEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const pausePrestissimoEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.pausePrestissimoEngine(pausePrestissimoEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.pausePrestissimoEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.pausePrestissimoEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('runPrestissimoExplainStatement', () => {
    describe('positive tests', () => {
      function __runPrestissimoExplainStatementTest() {
        // Construct the params object for operation runPrestissimoExplainStatement
        const engineId = 'testString';
        const statement = 'show schemas in catalog_name';
        const format = 'json';
        const type = 'io';
        const authInstanceId = 'testString';
        const runPrestissimoExplainStatementParams = {
          engineId,
          statement,
          format,
          type,
          authInstanceId,
        };

        const runPrestissimoExplainStatementResult =
          watsonxDataService.runPrestissimoExplainStatement(runPrestissimoExplainStatementParams);

        // all methods should return a Promise
        expectToBePromise(runPrestissimoExplainStatementResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/prestissimo_engines/{engine_id}/query_explain',
          'POST'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.statement).toEqual(statement);
        expect(mockRequestOptions.body.format).toEqual(format);
        expect(mockRequestOptions.body.type).toEqual(type);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __runPrestissimoExplainStatementTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __runPrestissimoExplainStatementTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __runPrestissimoExplainStatementTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const statement = 'show schemas in catalog_name';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const runPrestissimoExplainStatementParams = {
          engineId,
          statement,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.runPrestissimoExplainStatement(runPrestissimoExplainStatementParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.runPrestissimoExplainStatement({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.runPrestissimoExplainStatement();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('runPrestissimoExplainAnalyzeStatement', () => {
    describe('positive tests', () => {
      function __runPrestissimoExplainAnalyzeStatementTest() {
        // Construct the params object for operation runPrestissimoExplainAnalyzeStatement
        const engineId = 'testString';
        const statement = 'show schemas in catalog_name';
        const verbose = true;
        const authInstanceId = 'testString';
        const runPrestissimoExplainAnalyzeStatementParams = {
          engineId,
          statement,
          verbose,
          authInstanceId,
        };

        const runPrestissimoExplainAnalyzeStatementResult =
          watsonxDataService.runPrestissimoExplainAnalyzeStatement(
            runPrestissimoExplainAnalyzeStatementParams
          );

        // all methods should return a Promise
        expectToBePromise(runPrestissimoExplainAnalyzeStatementResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/prestissimo_engines/{engine_id}/query_explain_analyze',
          'POST'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.statement).toEqual(statement);
        expect(mockRequestOptions.body.verbose).toEqual(verbose);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __runPrestissimoExplainAnalyzeStatementTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __runPrestissimoExplainAnalyzeStatementTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __runPrestissimoExplainAnalyzeStatementTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const statement = 'show schemas in catalog_name';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const runPrestissimoExplainAnalyzeStatementParams = {
          engineId,
          statement,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.runPrestissimoExplainAnalyzeStatement(
          runPrestissimoExplainAnalyzeStatementParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.runPrestissimoExplainAnalyzeStatement({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.runPrestissimoExplainAnalyzeStatement();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('restartPrestissimoEngine', () => {
    describe('positive tests', () => {
      function __restartPrestissimoEngineTest() {
        // Construct the params object for operation restartPrestissimoEngine
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const restartPrestissimoEngineParams = {
          engineId,
          authInstanceId,
        };

        const restartPrestissimoEngineResult = watsonxDataService.restartPrestissimoEngine(
          restartPrestissimoEngineParams
        );

        // all methods should return a Promise
        expectToBePromise(restartPrestissimoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/prestissimo_engines/{engine_id}/restart', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __restartPrestissimoEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __restartPrestissimoEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __restartPrestissimoEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const restartPrestissimoEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.restartPrestissimoEngine(restartPrestissimoEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.restartPrestissimoEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.restartPrestissimoEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('resumePrestissimoEngine', () => {
    describe('positive tests', () => {
      function __resumePrestissimoEngineTest() {
        // Construct the params object for operation resumePrestissimoEngine
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const resumePrestissimoEngineParams = {
          engineId,
          authInstanceId,
        };

        const resumePrestissimoEngineResult = watsonxDataService.resumePrestissimoEngine(
          resumePrestissimoEngineParams
        );

        // all methods should return a Promise
        expectToBePromise(resumePrestissimoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/prestissimo_engines/{engine_id}/resume', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __resumePrestissimoEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __resumePrestissimoEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __resumePrestissimoEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const resumePrestissimoEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.resumePrestissimoEngine(resumePrestissimoEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.resumePrestissimoEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.resumePrestissimoEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('scalePrestissimoEngine', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // PrestissimoNodeDescriptionBody
      const prestissimoNodeDescriptionBodyModel = {
        node_type: 'worker',
        quantity: 38,
      };

      function __scalePrestissimoEngineTest() {
        // Construct the params object for operation scalePrestissimoEngine
        const engineId = 'testString';
        const coordinator = prestissimoNodeDescriptionBodyModel;
        const worker = prestissimoNodeDescriptionBodyModel;
        const authInstanceId = 'testString';
        const scalePrestissimoEngineParams = {
          engineId,
          coordinator,
          worker,
          authInstanceId,
        };

        const scalePrestissimoEngineResult = watsonxDataService.scalePrestissimoEngine(
          scalePrestissimoEngineParams
        );

        // all methods should return a Promise
        expectToBePromise(scalePrestissimoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/prestissimo_engines/{engine_id}/scale', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.coordinator).toEqual(coordinator);
        expect(mockRequestOptions.body.worker).toEqual(worker);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __scalePrestissimoEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __scalePrestissimoEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __scalePrestissimoEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const scalePrestissimoEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.scalePrestissimoEngine(scalePrestissimoEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.scalePrestissimoEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.scalePrestissimoEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listPrestoEngines', () => {
    describe('positive tests', () => {
      function __listPrestoEnginesTest() {
        // Construct the params object for operation listPrestoEngines
        const authInstanceId = 'testString';
        const listPrestoEnginesParams = {
          authInstanceId,
        };

        const listPrestoEnginesResult =
          watsonxDataService.listPrestoEngines(listPrestoEnginesParams);

        // all methods should return a Promise
        expectToBePromise(listPrestoEnginesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/presto_engines', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listPrestoEnginesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listPrestoEnginesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listPrestoEnginesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listPrestoEnginesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listPrestoEngines(listPrestoEnginesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.listPrestoEngines({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createPrestoEngine', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // NodeDescriptionBody
      const nodeDescriptionBodyModel = {
        node_type: 'worker',
        quantity: 38,
      };

      // EngineDetailsBody
      const engineDetailsBodyModel = {
        api_key: '<api_key>',
        connection_string: '1.2.3.4',
        coordinator: nodeDescriptionBodyModel,
        instance_id: 'instance_id',
        managed_by: 'fully/self',
        size_config: 'starter',
        worker: nodeDescriptionBodyModel,
      };

      function __createPrestoEngineTest() {
        // Construct the params object for operation createPrestoEngine
        const origin = 'native';
        const associatedCatalogs = ['iceberg-data', 'hive-data'];
        const description = 'presto engine for running sql queries';
        const engineDetails = engineDetailsBodyModel;
        const engineDisplayName = 'sampleEngine';
        const region = 'us-south';
        const tags = ['tag1', 'tag2'];
        const version = '1.2.3';
        const authInstanceId = 'testString';
        const createPrestoEngineParams = {
          origin,
          associatedCatalogs,
          description,
          engineDetails,
          engineDisplayName,
          region,
          tags,
          version,
          authInstanceId,
        };

        const createPrestoEngineResult =
          watsonxDataService.createPrestoEngine(createPrestoEngineParams);

        // all methods should return a Promise
        expectToBePromise(createPrestoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/presto_engines', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.origin).toEqual(origin);
        expect(mockRequestOptions.body.associated_catalogs).toEqual(associatedCatalogs);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.engine_details).toEqual(engineDetails);
        expect(mockRequestOptions.body.engine_display_name).toEqual(engineDisplayName);
        expect(mockRequestOptions.body.region).toEqual(region);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.version).toEqual(version);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createPrestoEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createPrestoEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createPrestoEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const origin = 'native';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createPrestoEngineParams = {
          origin,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createPrestoEngine(createPrestoEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createPrestoEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createPrestoEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getPrestoEngine', () => {
    describe('positive tests', () => {
      function __getPrestoEngineTest() {
        // Construct the params object for operation getPrestoEngine
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const getPrestoEngineParams = {
          engineId,
          authInstanceId,
        };

        const getPrestoEngineResult = watsonxDataService.getPrestoEngine(getPrestoEngineParams);

        // all methods should return a Promise
        expectToBePromise(getPrestoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/presto_engines/{engine_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getPrestoEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getPrestoEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getPrestoEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getPrestoEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getPrestoEngine(getPrestoEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getPrestoEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getPrestoEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteEngine', () => {
    describe('positive tests', () => {
      function __deleteEngineTest() {
        // Construct the params object for operation deleteEngine
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const deleteEngineParams = {
          engineId,
          authInstanceId,
        };

        const deleteEngineResult = watsonxDataService.deleteEngine(deleteEngineParams);

        // all methods should return a Promise
        expectToBePromise(deleteEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/presto_engines/{engine_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteEngine(deleteEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updatePrestoEngine', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // PrestoEnginePropertiesCatalog
      const prestoEnginePropertiesCatalogModel = {
        catalog_name: 'testString',
      };

      // NodeDescriptionBody
      const nodeDescriptionBodyModel = {
        node_type: 'worker',
        quantity: 38,
      };

      // EnginePropertiesOaiGen1Configuration
      const enginePropertiesOaiGen1ConfigurationModel = {
        coordinator: nodeDescriptionBodyModel,
        worker: nodeDescriptionBodyModel,
      };

      // PrestoEnginePropertiesEventListener
      const prestoEnginePropertiesEventListenerModel = {
        event_listener_property: 'testString',
      };

      // PrestoEnginePropertiesGlobal
      const prestoEnginePropertiesGlobalModel = {
        global_property: 'enable-mixed-case-support:true',
      };

      // EnginePropertiesOaiGen1Jvm
      const enginePropertiesOaiGen1JvmModel = {
        coordinator: nodeDescriptionBodyModel,
        worker: nodeDescriptionBodyModel,
      };

      // PrestoEnginePropertiesJMX
      const prestoEnginePropertiesJmxModel = {
        global_property:
          'watsonx_data_presto_cluster_memory_manager_cluster_memory_bytes:presto.memory<name=ClusterMemoryManager><>ClusterMemoryBytes',
      };

      // EnginePropertiesLogConfiguration
      const enginePropertiesLogConfigurationModel = {
        coordinator: nodeDescriptionBodyModel,
        worker: nodeDescriptionBodyModel,
      };

      // PrestoEngineEngineProperties
      const prestoEngineEnginePropertiesModel = {
        catalog: prestoEnginePropertiesCatalogModel,
        configuration: enginePropertiesOaiGen1ConfigurationModel,
        event_listener: prestoEnginePropertiesEventListenerModel,
        global: prestoEnginePropertiesGlobalModel,
        jvm: enginePropertiesOaiGen1JvmModel,
        jmx_exporter_config: prestoEnginePropertiesJmxModel,
        log_config: enginePropertiesLogConfigurationModel,
      };

      // RemoveEnginePropertiesOaiGenConfiguration
      const removeEnginePropertiesOaiGenConfigurationModel = {
        coordinator: ['testString'],
        worker: ['testString'],
      };

      // RemoveEnginePropertiesOaiGenJvm
      const removeEnginePropertiesOaiGenJvmModel = {
        coordinator: ['testString'],
        worker: ['testString'],
      };

      // RemoveEnginePropertiesLogConfig
      const removeEnginePropertiesLogConfigModel = {
        coordinator: ['testString'],
        worker: ['testString'],
      };

      // PrestoEnginePatchRemoveEngineProperties
      const prestoEnginePatchRemoveEnginePropertiesModel = {
        catalog: prestoEnginePropertiesCatalogModel,
        configuration: removeEnginePropertiesOaiGenConfigurationModel,
        jvm: removeEnginePropertiesOaiGenJvmModel,
        event_listener: ['testString'],
        global: ['testString'],
        jmx_exporter_config: ['testString'],
        log_config: removeEnginePropertiesLogConfigModel,
      };

      function __updatePrestoEngineTest() {
        // Construct the params object for operation updatePrestoEngine
        const engineId = 'testString';
        const description = 'updated description for presto engine';
        const engineDisplayName = 'sampleEngine';
        const engineProperties = prestoEngineEnginePropertiesModel;
        const engineRestart = 'force';
        const removeEngineProperties = prestoEnginePatchRemoveEnginePropertiesModel;
        const tags = ['tag1', 'tag2'];
        const authInstanceId = 'testString';
        const updatePrestoEngineParams = {
          engineId,
          description,
          engineDisplayName,
          engineProperties,
          engineRestart,
          removeEngineProperties,
          tags,
          authInstanceId,
        };

        const updatePrestoEngineResult =
          watsonxDataService.updatePrestoEngine(updatePrestoEngineParams);

        // all methods should return a Promise
        expectToBePromise(updatePrestoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/presto_engines/{engine_id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.engine_display_name).toEqual(engineDisplayName);
        expect(mockRequestOptions.body.engine_properties).toEqual(engineProperties);
        expect(mockRequestOptions.body.engine_restart).toEqual(engineRestart);
        expect(mockRequestOptions.body.remove_engine_properties).toEqual(removeEngineProperties);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updatePrestoEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updatePrestoEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updatePrestoEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updatePrestoEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updatePrestoEngine(updatePrestoEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updatePrestoEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updatePrestoEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listPrestoEngineCatalogs', () => {
    describe('positive tests', () => {
      function __listPrestoEngineCatalogsTest() {
        // Construct the params object for operation listPrestoEngineCatalogs
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const listPrestoEngineCatalogsParams = {
          engineId,
          authInstanceId,
        };

        const listPrestoEngineCatalogsResult = watsonxDataService.listPrestoEngineCatalogs(
          listPrestoEngineCatalogsParams
        );

        // all methods should return a Promise
        expectToBePromise(listPrestoEngineCatalogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/presto_engines/{engine_id}/catalogs', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listPrestoEngineCatalogsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listPrestoEngineCatalogsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listPrestoEngineCatalogsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listPrestoEngineCatalogsParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listPrestoEngineCatalogs(listPrestoEngineCatalogsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.listPrestoEngineCatalogs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.listPrestoEngineCatalogs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createPrestoEngineCatalogs', () => {
    describe('positive tests', () => {
      function __createPrestoEngineCatalogsTest() {
        // Construct the params object for operation createPrestoEngineCatalogs
        const engineId = 'testString';
        const catalogName = 'testString';
        const authInstanceId = 'testString';
        const createPrestoEngineCatalogsParams = {
          engineId,
          catalogName,
          authInstanceId,
        };

        const createPrestoEngineCatalogsResult = watsonxDataService.createPrestoEngineCatalogs(
          createPrestoEngineCatalogsParams
        );

        // all methods should return a Promise
        expectToBePromise(createPrestoEngineCatalogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/presto_engines/{engine_id}/catalogs', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createPrestoEngineCatalogsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createPrestoEngineCatalogsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createPrestoEngineCatalogsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createPrestoEngineCatalogsParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createPrestoEngineCatalogs(createPrestoEngineCatalogsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createPrestoEngineCatalogs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createPrestoEngineCatalogs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deletePrestoEngineCatalogs', () => {
    describe('positive tests', () => {
      function __deletePrestoEngineCatalogsTest() {
        // Construct the params object for operation deletePrestoEngineCatalogs
        const engineId = 'testString';
        const catalogNames = 'testString';
        const authInstanceId = 'testString';
        const deletePrestoEngineCatalogsParams = {
          engineId,
          catalogNames,
          authInstanceId,
        };

        const deletePrestoEngineCatalogsResult = watsonxDataService.deletePrestoEngineCatalogs(
          deletePrestoEngineCatalogsParams
        );

        // all methods should return a Promise
        expectToBePromise(deletePrestoEngineCatalogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/presto_engines/{engine_id}/catalogs', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.catalog_names).toEqual(catalogNames);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deletePrestoEngineCatalogsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deletePrestoEngineCatalogsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deletePrestoEngineCatalogsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const catalogNames = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deletePrestoEngineCatalogsParams = {
          engineId,
          catalogNames,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deletePrestoEngineCatalogs(deletePrestoEngineCatalogsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deletePrestoEngineCatalogs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deletePrestoEngineCatalogs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getPrestoEngineCatalog', () => {
    describe('positive tests', () => {
      function __getPrestoEngineCatalogTest() {
        // Construct the params object for operation getPrestoEngineCatalog
        const engineId = 'testString';
        const catalogId = 'testString';
        const authInstanceId = 'testString';
        const getPrestoEngineCatalogParams = {
          engineId,
          catalogId,
          authInstanceId,
        };

        const getPrestoEngineCatalogResult = watsonxDataService.getPrestoEngineCatalog(
          getPrestoEngineCatalogParams
        );

        // all methods should return a Promise
        expectToBePromise(getPrestoEngineCatalogResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/presto_engines/{engine_id}/catalogs/{catalog_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.catalog_id).toEqual(catalogId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getPrestoEngineCatalogTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getPrestoEngineCatalogTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getPrestoEngineCatalogTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const catalogId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getPrestoEngineCatalogParams = {
          engineId,
          catalogId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getPrestoEngineCatalog(getPrestoEngineCatalogParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getPrestoEngineCatalog({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getPrestoEngineCatalog();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('pausePrestoEngine', () => {
    describe('positive tests', () => {
      function __pausePrestoEngineTest() {
        // Construct the params object for operation pausePrestoEngine
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const pausePrestoEngineParams = {
          engineId,
          authInstanceId,
        };

        const pausePrestoEngineResult =
          watsonxDataService.pausePrestoEngine(pausePrestoEngineParams);

        // all methods should return a Promise
        expectToBePromise(pausePrestoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/presto_engines/{engine_id}/pause', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __pausePrestoEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __pausePrestoEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __pausePrestoEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const pausePrestoEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.pausePrestoEngine(pausePrestoEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.pausePrestoEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.pausePrestoEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('runExplainStatement', () => {
    describe('positive tests', () => {
      function __runExplainStatementTest() {
        // Construct the params object for operation runExplainStatement
        const engineId = 'testString';
        const statement = 'show schemas in catalog_name';
        const format = 'json';
        const type = 'io';
        const authInstanceId = 'testString';
        const runExplainStatementParams = {
          engineId,
          statement,
          format,
          type,
          authInstanceId,
        };

        const runExplainStatementResult =
          watsonxDataService.runExplainStatement(runExplainStatementParams);

        // all methods should return a Promise
        expectToBePromise(runExplainStatementResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/presto_engines/{engine_id}/query_explain', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.statement).toEqual(statement);
        expect(mockRequestOptions.body.format).toEqual(format);
        expect(mockRequestOptions.body.type).toEqual(type);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __runExplainStatementTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __runExplainStatementTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __runExplainStatementTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const statement = 'show schemas in catalog_name';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const runExplainStatementParams = {
          engineId,
          statement,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.runExplainStatement(runExplainStatementParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.runExplainStatement({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.runExplainStatement();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('runExplainAnalyzeStatement', () => {
    describe('positive tests', () => {
      function __runExplainAnalyzeStatementTest() {
        // Construct the params object for operation runExplainAnalyzeStatement
        const engineId = 'testString';
        const statement = 'show schemas in catalog_name';
        const verbose = true;
        const authInstanceId = 'testString';
        const runExplainAnalyzeStatementParams = {
          engineId,
          statement,
          verbose,
          authInstanceId,
        };

        const runExplainAnalyzeStatementResult = watsonxDataService.runExplainAnalyzeStatement(
          runExplainAnalyzeStatementParams
        );

        // all methods should return a Promise
        expectToBePromise(runExplainAnalyzeStatementResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/presto_engines/{engine_id}/query_explain_analyze',
          'POST'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.statement).toEqual(statement);
        expect(mockRequestOptions.body.verbose).toEqual(verbose);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __runExplainAnalyzeStatementTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __runExplainAnalyzeStatementTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __runExplainAnalyzeStatementTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const statement = 'show schemas in catalog_name';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const runExplainAnalyzeStatementParams = {
          engineId,
          statement,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.runExplainAnalyzeStatement(runExplainAnalyzeStatementParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.runExplainAnalyzeStatement({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.runExplainAnalyzeStatement();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('restartPrestoEngine', () => {
    describe('positive tests', () => {
      function __restartPrestoEngineTest() {
        // Construct the params object for operation restartPrestoEngine
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const restartPrestoEngineParams = {
          engineId,
          authInstanceId,
        };

        const restartPrestoEngineResult =
          watsonxDataService.restartPrestoEngine(restartPrestoEngineParams);

        // all methods should return a Promise
        expectToBePromise(restartPrestoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/presto_engines/{engine_id}/restart', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __restartPrestoEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __restartPrestoEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __restartPrestoEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const restartPrestoEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.restartPrestoEngine(restartPrestoEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.restartPrestoEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.restartPrestoEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('resumePrestoEngine', () => {
    describe('positive tests', () => {
      function __resumePrestoEngineTest() {
        // Construct the params object for operation resumePrestoEngine
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const resumePrestoEngineParams = {
          engineId,
          authInstanceId,
        };

        const resumePrestoEngineResult =
          watsonxDataService.resumePrestoEngine(resumePrestoEngineParams);

        // all methods should return a Promise
        expectToBePromise(resumePrestoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/presto_engines/{engine_id}/resume', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __resumePrestoEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __resumePrestoEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __resumePrestoEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const resumePrestoEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.resumePrestoEngine(resumePrestoEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.resumePrestoEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.resumePrestoEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('scalePrestoEngine', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // NodeDescription
      const nodeDescriptionModel = {
        node_type: 'starter',
        quantity: 38,
      };

      function __scalePrestoEngineTest() {
        // Construct the params object for operation scalePrestoEngine
        const engineId = 'testString';
        const coordinator = nodeDescriptionModel;
        const worker = nodeDescriptionModel;
        const authInstanceId = 'testString';
        const scalePrestoEngineParams = {
          engineId,
          coordinator,
          worker,
          authInstanceId,
        };

        const scalePrestoEngineResult =
          watsonxDataService.scalePrestoEngine(scalePrestoEngineParams);

        // all methods should return a Promise
        expectToBePromise(scalePrestoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/presto_engines/{engine_id}/scale', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.coordinator).toEqual(coordinator);
        expect(mockRequestOptions.body.worker).toEqual(worker);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __scalePrestoEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __scalePrestoEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __scalePrestoEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const scalePrestoEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.scalePrestoEngine(scalePrestoEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.scalePrestoEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.scalePrestoEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getSalIntegration', () => {
    describe('positive tests', () => {
      function __getSalIntegrationTest() {
        // Construct the params object for operation getSalIntegration
        const authInstanceId = 'testString';
        const getSalIntegrationParams = {
          authInstanceId,
        };

        const getSalIntegrationResult =
          watsonxDataService.getSalIntegration(getSalIntegrationParams);

        // all methods should return a Promise
        expectToBePromise(getSalIntegrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/sal_integrations', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSalIntegrationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getSalIntegrationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getSalIntegrationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSalIntegrationParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getSalIntegration(getSalIntegrationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.getSalIntegration({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createSalIntegration', () => {
    describe('positive tests', () => {
      function __createSalIntegrationTest() {
        // Construct the params object for operation createSalIntegration
        const apikey = '12efd3raq';
        const engineId = 'presto-01';
        const storageResourceCrn =
          'crn:v1:staging:public:cloud-object-storage:global:a/a7026b374f39f570d20984c1ac6ecf63:5778e94f-c8c7-46a8-9878-d5eeadb51161';
        const storageType = 'bmcos_object_storage';
        const trialPlan = true;
        const authInstanceId = 'testString';
        const createSalIntegrationParams = {
          apikey,
          engineId,
          storageResourceCrn,
          storageType,
          trialPlan,
          authInstanceId,
        };

        const createSalIntegrationResult = watsonxDataService.createSalIntegration(
          createSalIntegrationParams
        );

        // all methods should return a Promise
        expectToBePromise(createSalIntegrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/sal_integrations', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.apikey).toEqual(apikey);
        expect(mockRequestOptions.body.engine_id).toEqual(engineId);
        expect(mockRequestOptions.body.storage_resource_crn).toEqual(storageResourceCrn);
        expect(mockRequestOptions.body.storage_type).toEqual(storageType);
        expect(mockRequestOptions.body.trial_plan).toEqual(trialPlan);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createSalIntegrationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createSalIntegrationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createSalIntegrationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const apikey = '12efd3raq';
        const engineId = 'presto-01';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createSalIntegrationParams = {
          apikey,
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createSalIntegration(createSalIntegrationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createSalIntegration({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createSalIntegration();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteSalIntegration', () => {
    describe('positive tests', () => {
      function __deleteSalIntegrationTest() {
        // Construct the params object for operation deleteSalIntegration
        const deleteSalIntegrationParams = {};

        const deleteSalIntegrationResult = watsonxDataService.deleteSalIntegration(
          deleteSalIntegrationParams
        );

        // all methods should return a Promise
        expectToBePromise(deleteSalIntegrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/sal_integrations', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteSalIntegrationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteSalIntegrationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteSalIntegrationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteSalIntegrationParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteSalIntegration(deleteSalIntegrationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.deleteSalIntegration({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('updateSalIntegration', () => {
    describe('positive tests', () => {
      function __updateSalIntegrationTest() {
        // Construct the params object for operation updateSalIntegration
        const op = 'add';
        const path = 'storage';
        const value = 'new-apikey';
        const authInstanceId = 'testString';
        const updateSalIntegrationParams = {
          op,
          path,
          value,
          authInstanceId,
        };

        const updateSalIntegrationResult = watsonxDataService.updateSalIntegration(
          updateSalIntegrationParams
        );

        // all methods should return a Promise
        expectToBePromise(updateSalIntegrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/sal_integrations', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.op).toEqual(op);
        expect(mockRequestOptions.body.path).toEqual(path);
        expect(mockRequestOptions.body.value).toEqual(value);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateSalIntegrationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updateSalIntegrationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updateSalIntegrationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateSalIntegrationParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updateSalIntegration(updateSalIntegrationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.updateSalIntegration({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createSalIntegrationEnrichment', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // EnrichmentObj
      const enrichmentObjModel = {
        catalog: 'iceberg_data',
        operation: 'create',
        schema: 'testString',
        tables: ['testString'],
      };

      function __createSalIntegrationEnrichmentTest() {
        // Construct the params object for operation createSalIntegrationEnrichment
        const enrichmentPrototype = enrichmentObjModel;
        const authInstanceId = 'testString';
        const createSalIntegrationEnrichmentParams = {
          enrichmentPrototype,
          authInstanceId,
        };

        const createSalIntegrationEnrichmentResult =
          watsonxDataService.createSalIntegrationEnrichment(createSalIntegrationEnrichmentParams);

        // all methods should return a Promise
        expectToBePromise(createSalIntegrationEnrichmentResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/sal_integrations/enrichment', 'POST');
        const expectedAccept = undefined;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.enrichment_prototype).toEqual(enrichmentPrototype);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createSalIntegrationEnrichmentTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createSalIntegrationEnrichmentTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createSalIntegrationEnrichmentTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createSalIntegrationEnrichmentParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createSalIntegrationEnrichment(createSalIntegrationEnrichmentParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.createSalIntegrationEnrichment({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getSalIntegrationEnrichmentAssets', () => {
    describe('positive tests', () => {
      function __getSalIntegrationEnrichmentAssetsTest() {
        // Construct the params object for operation getSalIntegrationEnrichmentAssets
        const projectId = 'testString';
        const authInstanceId = 'testString';
        const getSalIntegrationEnrichmentAssetsParams = {
          projectId,
          authInstanceId,
        };

        const getSalIntegrationEnrichmentAssetsResult =
          watsonxDataService.getSalIntegrationEnrichmentAssets(
            getSalIntegrationEnrichmentAssetsParams
          );

        // all methods should return a Promise
        expectToBePromise(getSalIntegrationEnrichmentAssetsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/sal_integrations/enrichment_assets', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.project_id).toEqual(projectId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSalIntegrationEnrichmentAssetsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getSalIntegrationEnrichmentAssetsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getSalIntegrationEnrichmentAssetsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSalIntegrationEnrichmentAssetsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getSalIntegrationEnrichmentAssets(
          getSalIntegrationEnrichmentAssetsParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.getSalIntegrationEnrichmentAssets({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getSalIntegrationEnrichmentDataAsset', () => {
    describe('positive tests', () => {
      function __getSalIntegrationEnrichmentDataAssetTest() {
        // Construct the params object for operation getSalIntegrationEnrichmentDataAsset
        const projectId = 'testString';
        const assetId = 'testString';
        const authInstanceId = 'testString';
        const getSalIntegrationEnrichmentDataAssetParams = {
          projectId,
          assetId,
          authInstanceId,
        };

        const getSalIntegrationEnrichmentDataAssetResult =
          watsonxDataService.getSalIntegrationEnrichmentDataAsset(
            getSalIntegrationEnrichmentDataAssetParams
          );

        // all methods should return a Promise
        expectToBePromise(getSalIntegrationEnrichmentDataAssetResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/sal_integrations/enrichment_data_asset', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.project_id).toEqual(projectId);
        expect(mockRequestOptions.qs.asset_id).toEqual(assetId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSalIntegrationEnrichmentDataAssetTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getSalIntegrationEnrichmentDataAssetTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getSalIntegrationEnrichmentDataAssetTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSalIntegrationEnrichmentDataAssetParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getSalIntegrationEnrichmentDataAsset(
          getSalIntegrationEnrichmentDataAssetParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.getSalIntegrationEnrichmentDataAsset({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getSalIntegrationEnrichmentJobRunLogs', () => {
    describe('positive tests', () => {
      function __getSalIntegrationEnrichmentJobRunLogsTest() {
        // Construct the params object for operation getSalIntegrationEnrichmentJobRunLogs
        const jobId = 'testString';
        const jobRunId = 'testString';
        const projectId = 'testString';
        const authInstanceId = 'testString';
        const getSalIntegrationEnrichmentJobRunLogsParams = {
          jobId,
          jobRunId,
          projectId,
          authInstanceId,
        };

        const getSalIntegrationEnrichmentJobRunLogsResult =
          watsonxDataService.getSalIntegrationEnrichmentJobRunLogs(
            getSalIntegrationEnrichmentJobRunLogsParams
          );

        // all methods should return a Promise
        expectToBePromise(getSalIntegrationEnrichmentJobRunLogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/sal_integrations/enrichment_job_run_logs', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.job_id).toEqual(jobId);
        expect(mockRequestOptions.qs.job_run_id).toEqual(jobRunId);
        expect(mockRequestOptions.qs.project_id).toEqual(projectId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSalIntegrationEnrichmentJobRunLogsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getSalIntegrationEnrichmentJobRunLogsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getSalIntegrationEnrichmentJobRunLogsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSalIntegrationEnrichmentJobRunLogsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getSalIntegrationEnrichmentJobRunLogs(
          getSalIntegrationEnrichmentJobRunLogsParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.getSalIntegrationEnrichmentJobRunLogs({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getSalIntegrationEnrichmentJobRuns', () => {
    describe('positive tests', () => {
      function __getSalIntegrationEnrichmentJobRunsTest() {
        // Construct the params object for operation getSalIntegrationEnrichmentJobRuns
        const jobId = 'testString';
        const projectId = 'testString';
        const authInstanceId = 'testString';
        const getSalIntegrationEnrichmentJobRunsParams = {
          jobId,
          projectId,
          authInstanceId,
        };

        const getSalIntegrationEnrichmentJobRunsResult =
          watsonxDataService.getSalIntegrationEnrichmentJobRuns(
            getSalIntegrationEnrichmentJobRunsParams
          );

        // all methods should return a Promise
        expectToBePromise(getSalIntegrationEnrichmentJobRunsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/sal_integrations/enrichment_job_runs', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.job_id).toEqual(jobId);
        expect(mockRequestOptions.qs.project_id).toEqual(projectId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSalIntegrationEnrichmentJobRunsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getSalIntegrationEnrichmentJobRunsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getSalIntegrationEnrichmentJobRunsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSalIntegrationEnrichmentJobRunsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getSalIntegrationEnrichmentJobRuns(
          getSalIntegrationEnrichmentJobRunsParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.getSalIntegrationEnrichmentJobRuns({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getSalIntegrationEnrichmentJobs', () => {
    describe('positive tests', () => {
      function __getSalIntegrationEnrichmentJobsTest() {
        // Construct the params object for operation getSalIntegrationEnrichmentJobs
        const wkcProjectId = 'testString';
        const authInstanceId = 'testString';
        const getSalIntegrationEnrichmentJobsParams = {
          wkcProjectId,
          authInstanceId,
        };

        const getSalIntegrationEnrichmentJobsResult =
          watsonxDataService.getSalIntegrationEnrichmentJobs(getSalIntegrationEnrichmentJobsParams);

        // all methods should return a Promise
        expectToBePromise(getSalIntegrationEnrichmentJobsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/sal_integrations/enrichment_jobs', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.wkc_project_id).toEqual(wkcProjectId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSalIntegrationEnrichmentJobsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getSalIntegrationEnrichmentJobsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getSalIntegrationEnrichmentJobsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSalIntegrationEnrichmentJobsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getSalIntegrationEnrichmentJobs(getSalIntegrationEnrichmentJobsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.getSalIntegrationEnrichmentJobs({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getSalIntegrationGlossaryTerms', () => {
    describe('positive tests', () => {
      function __getSalIntegrationGlossaryTermsTest() {
        // Construct the params object for operation getSalIntegrationGlossaryTerms
        const authInstanceId = 'testString';
        const getSalIntegrationGlossaryTermsParams = {
          authInstanceId,
        };

        const getSalIntegrationGlossaryTermsResult =
          watsonxDataService.getSalIntegrationGlossaryTerms(getSalIntegrationGlossaryTermsParams);

        // all methods should return a Promise
        expectToBePromise(getSalIntegrationGlossaryTermsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/sal_integrations/glossary_terms', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSalIntegrationGlossaryTermsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getSalIntegrationGlossaryTermsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getSalIntegrationGlossaryTermsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSalIntegrationGlossaryTermsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getSalIntegrationGlossaryTerms(getSalIntegrationGlossaryTermsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.getSalIntegrationGlossaryTerms({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getSalIntegrationMappings', () => {
    describe('positive tests', () => {
      function __getSalIntegrationMappingsTest() {
        // Construct the params object for operation getSalIntegrationMappings
        const catalogName = 'testString';
        const schemaName = 'testString';
        const authInstanceId = 'testString';
        const getSalIntegrationMappingsParams = {
          catalogName,
          schemaName,
          authInstanceId,
        };

        const getSalIntegrationMappingsResult = watsonxDataService.getSalIntegrationMappings(
          getSalIntegrationMappingsParams
        );

        // all methods should return a Promise
        expectToBePromise(getSalIntegrationMappingsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/sal_integrations/mappings', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.qs.schema_name).toEqual(schemaName);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSalIntegrationMappingsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getSalIntegrationMappingsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getSalIntegrationMappingsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const catalogName = 'testString';
        const schemaName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSalIntegrationMappingsParams = {
          catalogName,
          schemaName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getSalIntegrationMappings(getSalIntegrationMappingsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getSalIntegrationMappings({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getSalIntegrationMappings();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getSalIntegrationEnrichmentGlobalSettings', () => {
    describe('positive tests', () => {
      function __getSalIntegrationEnrichmentGlobalSettingsTest() {
        // Construct the params object for operation getSalIntegrationEnrichmentGlobalSettings
        const authInstanceId = 'testString';
        const getSalIntegrationEnrichmentGlobalSettingsParams = {
          authInstanceId,
        };

        const getSalIntegrationEnrichmentGlobalSettingsResult =
          watsonxDataService.getSalIntegrationEnrichmentGlobalSettings(
            getSalIntegrationEnrichmentGlobalSettingsParams
          );

        // all methods should return a Promise
        expectToBePromise(getSalIntegrationEnrichmentGlobalSettingsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/sal_integrations/metadata_enrichment_global_settings',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSalIntegrationEnrichmentGlobalSettingsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getSalIntegrationEnrichmentGlobalSettingsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getSalIntegrationEnrichmentGlobalSettingsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSalIntegrationEnrichmentGlobalSettingsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getSalIntegrationEnrichmentGlobalSettings(
          getSalIntegrationEnrichmentGlobalSettingsParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.getSalIntegrationEnrichmentGlobalSettings({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createSalIntegrationEnrichmentGlobalSettings', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // SalIntegrationEnrichmentSettingsSemanticExpansionDescriptionGenerationConfiguration
      const salIntegrationEnrichmentSettingsSemanticExpansionDescriptionGenerationConfigurationModel =
        {
          assignment_threshold: 0.14,
          suggestion_threshold: 0.9,
        };

      // SalIntegrationEnrichmentSettingsSemanticExpansionNameExpansionConfiguration
      const salIntegrationEnrichmentSettingsSemanticExpansionNameExpansionConfigurationModel = {
        assignment_threshold: 0.1,
        suggestion_threshold: 0.1,
      };

      // SalIntegrationEnrichmentSettingsSemanticExpansion
      const salIntegrationEnrichmentSettingsSemanticExpansionModel = {
        description_generation: true,
        description_generation_configuration:
          salIntegrationEnrichmentSettingsSemanticExpansionDescriptionGenerationConfigurationModel,
        name_expansion: true,
        name_expansion_configuration:
          salIntegrationEnrichmentSettingsSemanticExpansionNameExpansionConfigurationModel,
      };

      // SalIntegrationEnrichmentSettingsTermAssignment
      const salIntegrationEnrichmentSettingsTermAssignmentModel = {
        class_based_assignments: false,
        evaluate_negative_assignments: false,
        llm_based_assignments: false,
        ml_based_assignments_custom: false,
        ml_based_assignments_default: false,
        name_matching: false,
        term_assignment_threshold: 0.3,
        term_suggestion_threshold: 0.4,
      };

      function __createSalIntegrationEnrichmentGlobalSettingsTest() {
        // Construct the params object for operation createSalIntegrationEnrichmentGlobalSettings
        const semanticExpansion = salIntegrationEnrichmentSettingsSemanticExpansionModel;
        const termAssignment = salIntegrationEnrichmentSettingsTermAssignmentModel;
        const authInstanceId = 'testString';
        const createSalIntegrationEnrichmentGlobalSettingsParams = {
          semanticExpansion,
          termAssignment,
          authInstanceId,
        };

        const createSalIntegrationEnrichmentGlobalSettingsResult =
          watsonxDataService.createSalIntegrationEnrichmentGlobalSettings(
            createSalIntegrationEnrichmentGlobalSettingsParams
          );

        // all methods should return a Promise
        expectToBePromise(createSalIntegrationEnrichmentGlobalSettingsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/sal_integrations/metadata_enrichment_global_settings',
          'POST'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.semantic_expansion).toEqual(semanticExpansion);
        expect(mockRequestOptions.body.term_assignment).toEqual(termAssignment);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createSalIntegrationEnrichmentGlobalSettingsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createSalIntegrationEnrichmentGlobalSettingsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createSalIntegrationEnrichmentGlobalSettingsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createSalIntegrationEnrichmentGlobalSettingsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createSalIntegrationEnrichmentGlobalSettings(
          createSalIntegrationEnrichmentGlobalSettingsParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.createSalIntegrationEnrichmentGlobalSettings({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getSalIntegrationEnrichmentSettings', () => {
    describe('positive tests', () => {
      function __getSalIntegrationEnrichmentSettingsTest() {
        // Construct the params object for operation getSalIntegrationEnrichmentSettings
        const projectId = 'testString';
        const authInstanceId = 'testString';
        const getSalIntegrationEnrichmentSettingsParams = {
          projectId,
          authInstanceId,
        };

        const getSalIntegrationEnrichmentSettingsResult =
          watsonxDataService.getSalIntegrationEnrichmentSettings(
            getSalIntegrationEnrichmentSettingsParams
          );

        // all methods should return a Promise
        expectToBePromise(getSalIntegrationEnrichmentSettingsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/sal_integrations/metadata_enrichment_settings',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.project_id).toEqual(projectId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSalIntegrationEnrichmentSettingsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getSalIntegrationEnrichmentSettingsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getSalIntegrationEnrichmentSettingsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSalIntegrationEnrichmentSettingsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getSalIntegrationEnrichmentSettings(
          getSalIntegrationEnrichmentSettingsParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.getSalIntegrationEnrichmentSettings({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createSalIntegrationEnrichmentSettings', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // SalIntegrationEnrichmentSettingsSemanticExpansionDescriptionGenerationConfiguration
      const salIntegrationEnrichmentSettingsSemanticExpansionDescriptionGenerationConfigurationModel =
        {
          assignment_threshold: 0.14,
          suggestion_threshold: 0.9,
        };

      // SalIntegrationEnrichmentSettingsSemanticExpansionNameExpansionConfiguration
      const salIntegrationEnrichmentSettingsSemanticExpansionNameExpansionConfigurationModel = {
        assignment_threshold: 0.1,
        suggestion_threshold: 0.1,
      };

      // SalIntegrationEnrichmentSettingsSemanticExpansion
      const salIntegrationEnrichmentSettingsSemanticExpansionModel = {
        description_generation: true,
        description_generation_configuration:
          salIntegrationEnrichmentSettingsSemanticExpansionDescriptionGenerationConfigurationModel,
        name_expansion: true,
        name_expansion_configuration:
          salIntegrationEnrichmentSettingsSemanticExpansionNameExpansionConfigurationModel,
      };

      // SalIntegrationEnrichmentSettingsTermAssignment
      const salIntegrationEnrichmentSettingsTermAssignmentModel = {
        class_based_assignments: false,
        evaluate_negative_assignments: false,
        llm_based_assignments: false,
        ml_based_assignments_custom: false,
        ml_based_assignments_default: false,
        name_matching: false,
        term_assignment_threshold: 0.3,
        term_suggestion_threshold: 0.4,
      };

      function __createSalIntegrationEnrichmentSettingsTest() {
        // Construct the params object for operation createSalIntegrationEnrichmentSettings
        const semanticExpansion = salIntegrationEnrichmentSettingsSemanticExpansionModel;
        const termAssignment = salIntegrationEnrichmentSettingsTermAssignmentModel;
        const projectId = 'testString';
        const authInstanceId = 'testString';
        const createSalIntegrationEnrichmentSettingsParams = {
          semanticExpansion,
          termAssignment,
          projectId,
          authInstanceId,
        };

        const createSalIntegrationEnrichmentSettingsResult =
          watsonxDataService.createSalIntegrationEnrichmentSettings(
            createSalIntegrationEnrichmentSettingsParams
          );

        // all methods should return a Promise
        expectToBePromise(createSalIntegrationEnrichmentSettingsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/sal_integrations/metadata_enrichment_settings',
          'POST'
        );
        const expectedAccept = undefined;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.semantic_expansion).toEqual(semanticExpansion);
        expect(mockRequestOptions.body.term_assignment).toEqual(termAssignment);
        expect(mockRequestOptions.qs.project_id).toEqual(projectId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createSalIntegrationEnrichmentSettingsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createSalIntegrationEnrichmentSettingsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createSalIntegrationEnrichmentSettingsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createSalIntegrationEnrichmentSettingsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createSalIntegrationEnrichmentSettings(
          createSalIntegrationEnrichmentSettingsParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.createSalIntegrationEnrichmentSettings({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createSalIntegrationUploadGlossary', () => {
    describe('positive tests', () => {
      function __createSalIntegrationUploadGlossaryTest() {
        // Construct the params object for operation createSalIntegrationUploadGlossary
        const replaceOption = 'all';
        const glossaryCsv = Buffer.from('This is a mock file.');
        const glossaryCsvContentType = 'testString';
        const authInstanceId = 'testString';
        const createSalIntegrationUploadGlossaryParams = {
          replaceOption,
          glossaryCsv,
          glossaryCsvContentType,
          authInstanceId,
        };

        const createSalIntegrationUploadGlossaryResult =
          watsonxDataService.createSalIntegrationUploadGlossary(
            createSalIntegrationUploadGlossaryParams
          );

        // all methods should return a Promise
        expectToBePromise(createSalIntegrationUploadGlossaryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/sal_integrations/upload_glossary', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'multipart/form-data';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.formData.replace_option).toEqual(replaceOption);
        expect(mockRequestOptions.formData.glossary_csv.data).toEqual(glossaryCsv);
        expect(mockRequestOptions.formData.glossary_csv.contentType).toEqual(
          glossaryCsvContentType
        );
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createSalIntegrationUploadGlossaryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createSalIntegrationUploadGlossaryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createSalIntegrationUploadGlossaryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const replaceOption = 'all';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createSalIntegrationUploadGlossaryParams = {
          replaceOption,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createSalIntegrationUploadGlossary(
          createSalIntegrationUploadGlossaryParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createSalIntegrationUploadGlossary({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createSalIntegrationUploadGlossary();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getSalIntegrationUploadGlossaryStatus', () => {
    describe('positive tests', () => {
      function __getSalIntegrationUploadGlossaryStatusTest() {
        // Construct the params object for operation getSalIntegrationUploadGlossaryStatus
        const processId = 'testString';
        const authInstanceId = 'testString';
        const getSalIntegrationUploadGlossaryStatusParams = {
          processId,
          authInstanceId,
        };

        const getSalIntegrationUploadGlossaryStatusResult =
          watsonxDataService.getSalIntegrationUploadGlossaryStatus(
            getSalIntegrationUploadGlossaryStatusParams
          );

        // all methods should return a Promise
        expectToBePromise(getSalIntegrationUploadGlossaryStatusResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/sal_integrations/upload_glossary_status', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.process_id).toEqual(processId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSalIntegrationUploadGlossaryStatusTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getSalIntegrationUploadGlossaryStatusTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getSalIntegrationUploadGlossaryStatusTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSalIntegrationUploadGlossaryStatusParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getSalIntegrationUploadGlossaryStatus(
          getSalIntegrationUploadGlossaryStatusParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.getSalIntegrationUploadGlossaryStatus({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('listSparkEngines', () => {
    describe('positive tests', () => {
      function __listSparkEnginesTest() {
        // Construct the params object for operation listSparkEngines
        const authInstanceId = 'testString';
        const listSparkEnginesParams = {
          authInstanceId,
        };

        const listSparkEnginesResult = watsonxDataService.listSparkEngines(listSparkEnginesParams);

        // all methods should return a Promise
        expectToBePromise(listSparkEnginesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/spark_engines', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listSparkEnginesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listSparkEnginesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listSparkEnginesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listSparkEnginesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listSparkEngines(listSparkEnginesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.listSparkEngines({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createSparkEngine', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // SparkDefaultConfig
      const sparkDefaultConfigModel = {
        config1: 'testString',
        config2: 'testString',
      };

      // SparkScaleConfig
      const sparkScaleConfigModel = {
        auto_scale_enabled: true,
        current_number_of_nodes: 2,
        maximum_number_of_nodes: 5,
        minimum_number_of_nodes: 1,
        node_type: 'small',
        number_of_nodes: 5,
      };

      // SparkEngineDetailsPrototype
      const sparkEngineDetailsPrototypeModel = {
        api_key: 'apikey',
        connection_string: '1.2.3.4',
        default_config: sparkDefaultConfigModel,
        default_version: '3.3',
        engine_home_bucket_display_name: 'test-spark-bucket',
        engine_home_bucket_name: '4fec0f8b-888a-4c16-8f38-250c8499e6ce-customer',
        engine_home_path: 'spark/spark1234',
        engine_home_volume_id: '1704979825978585',
        engine_home_volume_name: 'my-volume',
        engine_home_volume_storage_class: 'nfs-client',
        engine_home_volume_storage_size: '5Gi',
        engine_sub_type: 'java/cpp',
        instance_id: 'spark-id',
        managed_by: 'fully/self',
        scale_config: sparkScaleConfigModel,
      };

      function __createSparkEngineTest() {
        // Construct the params object for operation createSparkEngine
        const origin = 'native';
        const associatedCatalogs = ['iceberg-data'];
        const description = 'testString';
        const engineDetails = sparkEngineDetailsPrototypeModel;
        const engineDisplayName = 'test-native';
        const status = 'testString';
        const tags = ['testString'];
        const authInstanceId = 'testString';
        const createSparkEngineParams = {
          origin,
          associatedCatalogs,
          description,
          engineDetails,
          engineDisplayName,
          status,
          tags,
          authInstanceId,
        };

        const createSparkEngineResult =
          watsonxDataService.createSparkEngine(createSparkEngineParams);

        // all methods should return a Promise
        expectToBePromise(createSparkEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/spark_engines', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.origin).toEqual(origin);
        expect(mockRequestOptions.body.associated_catalogs).toEqual(associatedCatalogs);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.engine_details).toEqual(engineDetails);
        expect(mockRequestOptions.body.engine_display_name).toEqual(engineDisplayName);
        expect(mockRequestOptions.body.status).toEqual(status);
        expect(mockRequestOptions.body.tags).toEqual(tags);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createSparkEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createSparkEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createSparkEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const origin = 'native';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createSparkEngineParams = {
          origin,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createSparkEngine(createSparkEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createSparkEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createSparkEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getSparkEngine', () => {
    describe('positive tests', () => {
      function __getSparkEngineTest() {
        // Construct the params object for operation getSparkEngine
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const getSparkEngineParams = {
          engineId,
          authInstanceId,
        };

        const getSparkEngineResult = watsonxDataService.getSparkEngine(getSparkEngineParams);

        // all methods should return a Promise
        expectToBePromise(getSparkEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/spark_engines/{engine_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSparkEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getSparkEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getSparkEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSparkEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getSparkEngine(getSparkEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getSparkEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getSparkEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteSparkEngine', () => {
    describe('positive tests', () => {
      function __deleteSparkEngineTest() {
        // Construct the params object for operation deleteSparkEngine
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const deleteSparkEngineParams = {
          engineId,
          authInstanceId,
        };

        const deleteSparkEngineResult =
          watsonxDataService.deleteSparkEngine(deleteSparkEngineParams);

        // all methods should return a Promise
        expectToBePromise(deleteSparkEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/spark_engines/{engine_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteSparkEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteSparkEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteSparkEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteSparkEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteSparkEngine(deleteSparkEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteSparkEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteSparkEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateSparkEngine', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // SparkEngineResourceLimit
      const sparkEngineResourceLimitModel = {
        cores: '1',
        memory: '4G',
      };

      // UpdateSparkEngineBodyEngineDetails
      const updateSparkEngineBodyEngineDetailsModel = {
        default_config: { 'key1': 'testString' },
        default_version: '3.4',
        engine_home_bucket_name: 'test-spark-bucket',
        resource_limit_enabled: true,
        resource_limits: sparkEngineResourceLimitModel,
      };

      function __updateSparkEngineTest() {
        // Construct the params object for operation updateSparkEngine
        const engineId = 'testString';
        const description = 'Updated Description';
        const engineDetails = updateSparkEngineBodyEngineDetailsModel;
        const engineDisplayName = 'Updated Display Name';
        const tags = ['tag1', 'tag2'];
        const authInstanceId = 'testString';
        const updateSparkEngineParams = {
          engineId,
          description,
          engineDetails,
          engineDisplayName,
          tags,
          authInstanceId,
        };

        const updateSparkEngineResult =
          watsonxDataService.updateSparkEngine(updateSparkEngineParams);

        // all methods should return a Promise
        expectToBePromise(updateSparkEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/spark_engines/{engine_id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.engine_details).toEqual(engineDetails);
        expect(mockRequestOptions.body.engine_display_name).toEqual(engineDisplayName);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateSparkEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updateSparkEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updateSparkEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateSparkEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updateSparkEngine(updateSparkEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updateSparkEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updateSparkEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listSparkEngineApplications', () => {
    describe('positive tests', () => {
      function __listSparkEngineApplicationsTest() {
        // Construct the params object for operation listSparkEngineApplications
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const state = ['testString'];
        const listSparkEngineApplicationsParams = {
          engineId,
          authInstanceId,
          state,
        };

        const listSparkEngineApplicationsResult = watsonxDataService.listSparkEngineApplications(
          listSparkEngineApplicationsParams
        );

        // all methods should return a Promise
        expectToBePromise(listSparkEngineApplicationsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/spark_engines/{engine_id}/applications', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.state).toEqual(state);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listSparkEngineApplicationsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listSparkEngineApplicationsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listSparkEngineApplicationsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listSparkEngineApplicationsParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listSparkEngineApplications(listSparkEngineApplicationsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.listSparkEngineApplications({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.listSparkEngineApplications();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createSparkEngineApplication', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // SparkApplicationConfig
      const sparkApplicationConfigModel = {
        spark_sample_config_properpty: 'testString',
      };

      // SparkApplicationEnv
      const sparkApplicationEnvModel = {
        sample_env_key: 'testString',
      };

      // SparkApplicationDetails
      const sparkApplicationDetailsModel = {
        application: '/opt/ibm/spark/examples/src/main/python/wordcount.py',
        arguments: ['/opt/ibm/spark/examples/src/main/resources/people.txt'],
        class: 'org.apache.spark.examples.SparkPi',
        conf: sparkApplicationConfigModel,
        env: sparkApplicationEnvModel,
        files: 's3://mybucket/myfile.txt',
        jars: 'testString',
        name: 'SparkApplicaton1',
        packages: 'org.apache.spark:example_1.2.3',
        repositories: 'https://repo1.maven.org/maven2/',
        spark_version: '3.3',
      };

      // SparkVolumeDetails
      const sparkVolumeDetailsModel = {
        mount_path: '/mount/path',
        name: 'my-volume',
        read_only: true,
        source_sub_path: '/source/path',
      };

      function __createSparkEngineApplicationTest() {
        // Construct the params object for operation createSparkEngineApplication
        const engineId = 'testString';
        const applicationDetails = sparkApplicationDetailsModel;
        const jobEndpoint = 'testString';
        const serviceInstanceId = 'testString';
        const type = 'iae';
        const volumes = [sparkVolumeDetailsModel];
        const authInstanceId = 'testString';
        const state = ['testString'];
        const createSparkEngineApplicationParams = {
          engineId,
          applicationDetails,
          jobEndpoint,
          serviceInstanceId,
          type,
          volumes,
          authInstanceId,
          state,
        };

        const createSparkEngineApplicationResult = watsonxDataService.createSparkEngineApplication(
          createSparkEngineApplicationParams
        );

        // all methods should return a Promise
        expectToBePromise(createSparkEngineApplicationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/spark_engines/{engine_id}/applications', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.application_details).toEqual(applicationDetails);
        expect(mockRequestOptions.body.job_endpoint).toEqual(jobEndpoint);
        expect(mockRequestOptions.body.service_instance_id).toEqual(serviceInstanceId);
        expect(mockRequestOptions.body.type).toEqual(type);
        expect(mockRequestOptions.body.volumes).toEqual(volumes);
        expect(mockRequestOptions.qs.state).toEqual(state);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createSparkEngineApplicationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createSparkEngineApplicationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createSparkEngineApplicationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const applicationDetails = sparkApplicationDetailsModel;
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createSparkEngineApplicationParams = {
          engineId,
          applicationDetails,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createSparkEngineApplication(createSparkEngineApplicationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createSparkEngineApplication({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createSparkEngineApplication();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteSparkEngineApplications', () => {
    describe('positive tests', () => {
      function __deleteSparkEngineApplicationsTest() {
        // Construct the params object for operation deleteSparkEngineApplications
        const engineId = 'testString';
        const applicationId = 'testString';
        const authInstanceId = 'testString';
        const state = ['testString'];
        const deleteSparkEngineApplicationsParams = {
          engineId,
          applicationId,
          authInstanceId,
          state,
        };

        const deleteSparkEngineApplicationsResult =
          watsonxDataService.deleteSparkEngineApplications(deleteSparkEngineApplicationsParams);

        // all methods should return a Promise
        expectToBePromise(deleteSparkEngineApplicationsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/spark_engines/{engine_id}/applications', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.application_id).toEqual(applicationId);
        expect(mockRequestOptions.qs.state).toEqual(state);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteSparkEngineApplicationsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteSparkEngineApplicationsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteSparkEngineApplicationsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const applicationId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteSparkEngineApplicationsParams = {
          engineId,
          applicationId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteSparkEngineApplications(deleteSparkEngineApplicationsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteSparkEngineApplications({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteSparkEngineApplications();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getSparkEngineApplicationStatus', () => {
    describe('positive tests', () => {
      function __getSparkEngineApplicationStatusTest() {
        // Construct the params object for operation getSparkEngineApplicationStatus
        const engineId = 'testString';
        const applicationId = 'testString';
        const authInstanceId = 'testString';
        const getSparkEngineApplicationStatusParams = {
          engineId,
          applicationId,
          authInstanceId,
        };

        const getSparkEngineApplicationStatusResult =
          watsonxDataService.getSparkEngineApplicationStatus(getSparkEngineApplicationStatusParams);

        // all methods should return a Promise
        expectToBePromise(getSparkEngineApplicationStatusResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/spark_engines/{engine_id}/applications/{application_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.application_id).toEqual(applicationId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSparkEngineApplicationStatusTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getSparkEngineApplicationStatusTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getSparkEngineApplicationStatusTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const applicationId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSparkEngineApplicationStatusParams = {
          engineId,
          applicationId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getSparkEngineApplicationStatus(getSparkEngineApplicationStatusParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getSparkEngineApplicationStatus({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getSparkEngineApplicationStatus();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listSparkEngineCatalogs', () => {
    describe('positive tests', () => {
      function __listSparkEngineCatalogsTest() {
        // Construct the params object for operation listSparkEngineCatalogs
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const listSparkEngineCatalogsParams = {
          engineId,
          authInstanceId,
        };

        const listSparkEngineCatalogsResult = watsonxDataService.listSparkEngineCatalogs(
          listSparkEngineCatalogsParams
        );

        // all methods should return a Promise
        expectToBePromise(listSparkEngineCatalogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/spark_engines/{engine_id}/catalogs', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listSparkEngineCatalogsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listSparkEngineCatalogsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listSparkEngineCatalogsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listSparkEngineCatalogsParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listSparkEngineCatalogs(listSparkEngineCatalogsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.listSparkEngineCatalogs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.listSparkEngineCatalogs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createSparkEngineCatalogs', () => {
    describe('positive tests', () => {
      function __createSparkEngineCatalogsTest() {
        // Construct the params object for operation createSparkEngineCatalogs
        const engineId = 'testString';
        const catalogName = 'testString';
        const authInstanceId = 'testString';
        const createSparkEngineCatalogsParams = {
          engineId,
          catalogName,
          authInstanceId,
        };

        const createSparkEngineCatalogsResult = watsonxDataService.createSparkEngineCatalogs(
          createSparkEngineCatalogsParams
        );

        // all methods should return a Promise
        expectToBePromise(createSparkEngineCatalogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/spark_engines/{engine_id}/catalogs', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createSparkEngineCatalogsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createSparkEngineCatalogsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createSparkEngineCatalogsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createSparkEngineCatalogsParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createSparkEngineCatalogs(createSparkEngineCatalogsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createSparkEngineCatalogs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createSparkEngineCatalogs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteSparkEngineCatalogs', () => {
    describe('positive tests', () => {
      function __deleteSparkEngineCatalogsTest() {
        // Construct the params object for operation deleteSparkEngineCatalogs
        const engineId = 'testString';
        const catalogNames = 'testString';
        const authInstanceId = 'testString';
        const deleteSparkEngineCatalogsParams = {
          engineId,
          catalogNames,
          authInstanceId,
        };

        const deleteSparkEngineCatalogsResult = watsonxDataService.deleteSparkEngineCatalogs(
          deleteSparkEngineCatalogsParams
        );

        // all methods should return a Promise
        expectToBePromise(deleteSparkEngineCatalogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/spark_engines/{engine_id}/catalogs', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.catalog_names).toEqual(catalogNames);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteSparkEngineCatalogsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteSparkEngineCatalogsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteSparkEngineCatalogsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const catalogNames = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteSparkEngineCatalogsParams = {
          engineId,
          catalogNames,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteSparkEngineCatalogs(deleteSparkEngineCatalogsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteSparkEngineCatalogs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteSparkEngineCatalogs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getSparkEngineCatalog', () => {
    describe('positive tests', () => {
      function __getSparkEngineCatalogTest() {
        // Construct the params object for operation getSparkEngineCatalog
        const engineId = 'testString';
        const catalogId = 'testString';
        const authInstanceId = 'testString';
        const getSparkEngineCatalogParams = {
          engineId,
          catalogId,
          authInstanceId,
        };

        const getSparkEngineCatalogResult = watsonxDataService.getSparkEngineCatalog(
          getSparkEngineCatalogParams
        );

        // all methods should return a Promise
        expectToBePromise(getSparkEngineCatalogResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/spark_engines/{engine_id}/catalogs/{catalog_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.catalog_id).toEqual(catalogId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSparkEngineCatalogTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getSparkEngineCatalogTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getSparkEngineCatalogTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const catalogId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSparkEngineCatalogParams = {
          engineId,
          catalogId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getSparkEngineCatalog(getSparkEngineCatalogParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getSparkEngineCatalog({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getSparkEngineCatalog();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getSparkEngineHistoryServer', () => {
    describe('positive tests', () => {
      function __getSparkEngineHistoryServerTest() {
        // Construct the params object for operation getSparkEngineHistoryServer
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const getSparkEngineHistoryServerParams = {
          engineId,
          authInstanceId,
        };

        const getSparkEngineHistoryServerResult = watsonxDataService.getSparkEngineHistoryServer(
          getSparkEngineHistoryServerParams
        );

        // all methods should return a Promise
        expectToBePromise(getSparkEngineHistoryServerResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/spark_engines/{engine_id}/history_server', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSparkEngineHistoryServerTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getSparkEngineHistoryServerTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getSparkEngineHistoryServerTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSparkEngineHistoryServerParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getSparkEngineHistoryServer(getSparkEngineHistoryServerParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getSparkEngineHistoryServer({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getSparkEngineHistoryServer();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('startSparkEngineHistoryServer', () => {
    describe('positive tests', () => {
      function __startSparkEngineHistoryServerTest() {
        // Construct the params object for operation startSparkEngineHistoryServer
        const engineId = 'testString';
        const cores = '1';
        const memory = '4G';
        const authInstanceId = 'testString';
        const startSparkEngineHistoryServerParams = {
          engineId,
          cores,
          memory,
          authInstanceId,
        };

        const startSparkEngineHistoryServerResult =
          watsonxDataService.startSparkEngineHistoryServer(startSparkEngineHistoryServerParams);

        // all methods should return a Promise
        expectToBePromise(startSparkEngineHistoryServerResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/spark_engines/{engine_id}/history_server', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.cores).toEqual(cores);
        expect(mockRequestOptions.body.memory).toEqual(memory);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __startSparkEngineHistoryServerTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __startSparkEngineHistoryServerTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __startSparkEngineHistoryServerTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const startSparkEngineHistoryServerParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.startSparkEngineHistoryServer(startSparkEngineHistoryServerParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.startSparkEngineHistoryServer({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.startSparkEngineHistoryServer();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteSparkEngineHistoryServer', () => {
    describe('positive tests', () => {
      function __deleteSparkEngineHistoryServerTest() {
        // Construct the params object for operation deleteSparkEngineHistoryServer
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const deleteSparkEngineHistoryServerParams = {
          engineId,
          authInstanceId,
        };

        const deleteSparkEngineHistoryServerResult =
          watsonxDataService.deleteSparkEngineHistoryServer(deleteSparkEngineHistoryServerParams);

        // all methods should return a Promise
        expectToBePromise(deleteSparkEngineHistoryServerResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/spark_engines/{engine_id}/history_server',
          'DELETE'
        );
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteSparkEngineHistoryServerTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteSparkEngineHistoryServerTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteSparkEngineHistoryServerTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteSparkEngineHistoryServerParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteSparkEngineHistoryServer(deleteSparkEngineHistoryServerParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteSparkEngineHistoryServer({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteSparkEngineHistoryServer();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('pauseSparkEngine', () => {
    describe('positive tests', () => {
      function __pauseSparkEngineTest() {
        // Construct the params object for operation pauseSparkEngine
        const engineId = 'testString';
        const force = true;
        const authInstanceId = 'testString';
        const pauseSparkEngineParams = {
          engineId,
          force,
          authInstanceId,
        };

        const pauseSparkEngineResult = watsonxDataService.pauseSparkEngine(pauseSparkEngineParams);

        // all methods should return a Promise
        expectToBePromise(pauseSparkEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/spark_engines/{engine_id}/pause', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.force).toEqual(force);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __pauseSparkEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __pauseSparkEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __pauseSparkEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const pauseSparkEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.pauseSparkEngine(pauseSparkEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.pauseSparkEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.pauseSparkEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('resumeSparkEngine', () => {
    describe('positive tests', () => {
      function __resumeSparkEngineTest() {
        // Construct the params object for operation resumeSparkEngine
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const resumeSparkEngineParams = {
          engineId,
          authInstanceId,
        };

        const resumeSparkEngineResult =
          watsonxDataService.resumeSparkEngine(resumeSparkEngineParams);

        // all methods should return a Promise
        expectToBePromise(resumeSparkEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/spark_engines/{engine_id}/resume', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __resumeSparkEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __resumeSparkEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __resumeSparkEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const resumeSparkEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.resumeSparkEngine(resumeSparkEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.resumeSparkEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.resumeSparkEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('scaleSparkEngine', () => {
    describe('positive tests', () => {
      function __scaleSparkEngineTest() {
        // Construct the params object for operation scaleSparkEngine
        const engineId = 'testString';
        const numberOfNodes = 2;
        const authInstanceId = 'testString';
        const scaleSparkEngineParams = {
          engineId,
          numberOfNodes,
          authInstanceId,
        };

        const scaleSparkEngineResult = watsonxDataService.scaleSparkEngine(scaleSparkEngineParams);

        // all methods should return a Promise
        expectToBePromise(scaleSparkEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/spark_engines/{engine_id}/scale', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.number_of_nodes).toEqual(numberOfNodes);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __scaleSparkEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __scaleSparkEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __scaleSparkEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const scaleSparkEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.scaleSparkEngine(scaleSparkEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.scaleSparkEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.scaleSparkEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listSparkVersions', () => {
    describe('positive tests', () => {
      function __listSparkVersionsTest() {
        // Construct the params object for operation listSparkVersions
        const authInstanceId = 'testString';
        const listSparkVersionsParams = {
          authInstanceId,
        };

        const listSparkVersionsResult =
          watsonxDataService.listSparkVersions(listSparkVersionsParams);

        // all methods should return a Promise
        expectToBePromise(listSparkVersionsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/spark_versions', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listSparkVersionsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listSparkVersionsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listSparkVersionsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listSparkVersionsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listSparkVersions(listSparkVersionsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.listSparkVersions({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('listCatalogs', () => {
    describe('positive tests', () => {
      function __listCatalogsTest() {
        // Construct the params object for operation listCatalogs
        const authInstanceId = 'testString';
        const listCatalogsParams = {
          authInstanceId,
        };

        const listCatalogsResult = watsonxDataService.listCatalogs(listCatalogsParams);

        // all methods should return a Promise
        expectToBePromise(listCatalogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/catalogs', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listCatalogsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listCatalogsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listCatalogsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listCatalogsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listCatalogs(listCatalogsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.listCatalogs({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getCatalog', () => {
    describe('positive tests', () => {
      function __getCatalogTest() {
        // Construct the params object for operation getCatalog
        const catalogId = 'testString';
        const authInstanceId = 'testString';
        const getCatalogParams = {
          catalogId,
          authInstanceId,
        };

        const getCatalogResult = watsonxDataService.getCatalog(getCatalogParams);

        // all methods should return a Promise
        expectToBePromise(getCatalogResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/catalogs/{catalog_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.catalog_id).toEqual(catalogId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getCatalogTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getCatalogTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getCatalogTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const catalogId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getCatalogParams = {
          catalogId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getCatalog(getCatalogParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getCatalog({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getCatalog();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listSchemas', () => {
    describe('positive tests', () => {
      function __listSchemasTest() {
        // Construct the params object for operation listSchemas
        const engineId = 'testString';
        const catalogId = 'testString';
        const authInstanceId = 'testString';
        const listSchemasParams = {
          engineId,
          catalogId,
          authInstanceId,
        };

        const listSchemasResult = watsonxDataService.listSchemas(listSchemasParams);

        // all methods should return a Promise
        expectToBePromise(listSchemasResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/catalogs/{catalog_id}/schemas', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.catalog_id).toEqual(catalogId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listSchemasTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listSchemasTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listSchemasTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const catalogId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listSchemasParams = {
          engineId,
          catalogId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listSchemas(listSchemasParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.listSchemas({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.listSchemas();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createSchema', () => {
    describe('positive tests', () => {
      function __createSchemaTest() {
        // Construct the params object for operation createSchema
        const engineId = 'testString';
        const catalogId = 'testString';
        const customPath = 'sample-path';
        const schemaName = 'SampleSchema1';
        const bucketName = 'sample-bucket';
        const hostname = 'db2@hostname.com';
        const port = 4553;
        const authInstanceId = 'testString';
        const createSchemaParams = {
          engineId,
          catalogId,
          customPath,
          schemaName,
          bucketName,
          hostname,
          port,
          authInstanceId,
        };

        const createSchemaResult = watsonxDataService.createSchema(createSchemaParams);

        // all methods should return a Promise
        expectToBePromise(createSchemaResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/catalogs/{catalog_id}/schemas', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.custom_path).toEqual(customPath);
        expect(mockRequestOptions.body.schema_name).toEqual(schemaName);
        expect(mockRequestOptions.body.bucket_name).toEqual(bucketName);
        expect(mockRequestOptions.body.hostname).toEqual(hostname);
        expect(mockRequestOptions.body.port).toEqual(port);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.catalog_id).toEqual(catalogId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createSchemaTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createSchemaTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createSchemaTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const catalogId = 'testString';
        const customPath = 'sample-path';
        const schemaName = 'SampleSchema1';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createSchemaParams = {
          engineId,
          catalogId,
          customPath,
          schemaName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createSchema(createSchemaParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createSchema({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createSchema();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteSchema', () => {
    describe('positive tests', () => {
      function __deleteSchemaTest() {
        // Construct the params object for operation deleteSchema
        const engineId = 'testString';
        const catalogId = 'testString';
        const schemaId = 'testString';
        const authInstanceId = 'testString';
        const deleteSchemaParams = {
          engineId,
          catalogId,
          schemaId,
          authInstanceId,
        };

        const deleteSchemaResult = watsonxDataService.deleteSchema(deleteSchemaParams);

        // all methods should return a Promise
        expectToBePromise(deleteSchemaResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/catalogs/{catalog_id}/schemas/{schema_id}',
          'DELETE'
        );
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.catalog_id).toEqual(catalogId);
        expect(mockRequestOptions.path.schema_id).toEqual(schemaId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteSchemaTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteSchemaTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteSchemaTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const catalogId = 'testString';
        const schemaId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteSchemaParams = {
          engineId,
          catalogId,
          schemaId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteSchema(deleteSchemaParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteSchema({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteSchema();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listTables', () => {
    describe('positive tests', () => {
      function __listTablesTest() {
        // Construct the params object for operation listTables
        const catalogId = 'testString';
        const schemaId = 'testString';
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const listTablesParams = {
          catalogId,
          schemaId,
          engineId,
          authInstanceId,
        };

        const listTablesResult = watsonxDataService.listTables(listTablesParams);

        // all methods should return a Promise
        expectToBePromise(listTablesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/catalogs/{catalog_id}/schemas/{schema_id}/tables',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.catalog_id).toEqual(catalogId);
        expect(mockRequestOptions.path.schema_id).toEqual(schemaId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listTablesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listTablesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listTablesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const catalogId = 'testString';
        const schemaId = 'testString';
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listTablesParams = {
          catalogId,
          schemaId,
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listTables(listTablesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.listTables({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.listTables();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getTable', () => {
    describe('positive tests', () => {
      function __getTableTest() {
        // Construct the params object for operation getTable
        const catalogId = 'testString';
        const schemaId = 'testString';
        const tableId = 'testString';
        const engineId = 'testString';
        const type = 'testString';
        const authInstanceId = 'testString';
        const getTableParams = {
          catalogId,
          schemaId,
          tableId,
          engineId,
          type,
          authInstanceId,
        };

        const getTableResult = watsonxDataService.getTable(getTableParams);

        // all methods should return a Promise
        expectToBePromise(getTableResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/catalogs/{catalog_id}/schemas/{schema_id}/tables/{table_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.qs.type).toEqual(type);
        expect(mockRequestOptions.path.catalog_id).toEqual(catalogId);
        expect(mockRequestOptions.path.schema_id).toEqual(schemaId);
        expect(mockRequestOptions.path.table_id).toEqual(tableId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getTableTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getTableTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getTableTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const catalogId = 'testString';
        const schemaId = 'testString';
        const tableId = 'testString';
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getTableParams = {
          catalogId,
          schemaId,
          tableId,
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getTable(getTableParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getTable({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getTable();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteTable', () => {
    describe('positive tests', () => {
      function __deleteTableTest() {
        // Construct the params object for operation deleteTable
        const catalogId = 'testString';
        const schemaId = 'testString';
        const tableId = 'testString';
        const engineId = 'testString';
        const type = 'testString';
        const authInstanceId = 'testString';
        const deleteTableParams = {
          catalogId,
          schemaId,
          tableId,
          engineId,
          type,
          authInstanceId,
        };

        const deleteTableResult = watsonxDataService.deleteTable(deleteTableParams);

        // all methods should return a Promise
        expectToBePromise(deleteTableResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/catalogs/{catalog_id}/schemas/{schema_id}/tables/{table_id}',
          'DELETE'
        );
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.qs.type).toEqual(type);
        expect(mockRequestOptions.path.catalog_id).toEqual(catalogId);
        expect(mockRequestOptions.path.schema_id).toEqual(schemaId);
        expect(mockRequestOptions.path.table_id).toEqual(tableId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteTableTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteTableTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteTableTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const catalogId = 'testString';
        const schemaId = 'testString';
        const tableId = 'testString';
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteTableParams = {
          catalogId,
          schemaId,
          tableId,
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteTable(deleteTableParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteTable({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteTable();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateTable', () => {
    describe('positive tests', () => {
      function __updateTableTest() {
        // Construct the params object for operation updateTable
        const catalogId = 'testString';
        const schemaId = 'testString';
        const tableId = 'testString';
        const engineId = 'testString';
        const tableName = 'updated_table_name';
        const type = 'testString';
        const authInstanceId = 'testString';
        const updateTableParams = {
          catalogId,
          schemaId,
          tableId,
          engineId,
          tableName,
          type,
          authInstanceId,
        };

        const updateTableResult = watsonxDataService.updateTable(updateTableParams);

        // all methods should return a Promise
        expectToBePromise(updateTableResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/catalogs/{catalog_id}/schemas/{schema_id}/tables/{table_id}',
          'PATCH'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.table_name).toEqual(tableName);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.qs.type).toEqual(type);
        expect(mockRequestOptions.path.catalog_id).toEqual(catalogId);
        expect(mockRequestOptions.path.schema_id).toEqual(schemaId);
        expect(mockRequestOptions.path.table_id).toEqual(tableId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateTableTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updateTableTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updateTableTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const catalogId = 'testString';
        const schemaId = 'testString';
        const tableId = 'testString';
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateTableParams = {
          catalogId,
          schemaId,
          tableId,
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updateTable(updateTableParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updateTable({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updateTable();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listColumns', () => {
    describe('positive tests', () => {
      function __listColumnsTest() {
        // Construct the params object for operation listColumns
        const engineId = 'testString';
        const catalogId = 'testString';
        const schemaId = 'testString';
        const tableId = 'testString';
        const authInstanceId = 'testString';
        const listColumnsParams = {
          engineId,
          catalogId,
          schemaId,
          tableId,
          authInstanceId,
        };

        const listColumnsResult = watsonxDataService.listColumns(listColumnsParams);

        // all methods should return a Promise
        expectToBePromise(listColumnsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/catalogs/{catalog_id}/schemas/{schema_id}/tables/{table_id}/columns',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.catalog_id).toEqual(catalogId);
        expect(mockRequestOptions.path.schema_id).toEqual(schemaId);
        expect(mockRequestOptions.path.table_id).toEqual(tableId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listColumnsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listColumnsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listColumnsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const catalogId = 'testString';
        const schemaId = 'testString';
        const tableId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listColumnsParams = {
          engineId,
          catalogId,
          schemaId,
          tableId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listColumns(listColumnsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.listColumns({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.listColumns();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createColumns', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // Column
      const columnModel = {
        column_name: 'expenses',
        comment: 'expenses column',
        extra: 'varchar',
        length: '30',
        scale: '2',
        precision: '10',
        type: 'varchar',
      };

      function __createColumnsTest() {
        // Construct the params object for operation createColumns
        const engineId = 'testString';
        const catalogId = 'testString';
        const schemaId = 'testString';
        const tableId = 'testString';
        const columns = [columnModel];
        const authInstanceId = 'testString';
        const createColumnsParams = {
          engineId,
          catalogId,
          schemaId,
          tableId,
          columns,
          authInstanceId,
        };

        const createColumnsResult = watsonxDataService.createColumns(createColumnsParams);

        // all methods should return a Promise
        expectToBePromise(createColumnsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/catalogs/{catalog_id}/schemas/{schema_id}/tables/{table_id}/columns',
          'POST'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.columns).toEqual(columns);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.catalog_id).toEqual(catalogId);
        expect(mockRequestOptions.path.schema_id).toEqual(schemaId);
        expect(mockRequestOptions.path.table_id).toEqual(tableId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createColumnsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createColumnsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createColumnsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const catalogId = 'testString';
        const schemaId = 'testString';
        const tableId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createColumnsParams = {
          engineId,
          catalogId,
          schemaId,
          tableId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createColumns(createColumnsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createColumns({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createColumns();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteColumn', () => {
    describe('positive tests', () => {
      function __deleteColumnTest() {
        // Construct the params object for operation deleteColumn
        const engineId = 'testString';
        const catalogId = 'testString';
        const schemaId = 'testString';
        const tableId = 'testString';
        const columnId = 'testString';
        const authInstanceId = 'testString';
        const deleteColumnParams = {
          engineId,
          catalogId,
          schemaId,
          tableId,
          columnId,
          authInstanceId,
        };

        const deleteColumnResult = watsonxDataService.deleteColumn(deleteColumnParams);

        // all methods should return a Promise
        expectToBePromise(deleteColumnResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/catalogs/{catalog_id}/schemas/{schema_id}/tables/{table_id}/columns/{column_id}',
          'DELETE'
        );
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.catalog_id).toEqual(catalogId);
        expect(mockRequestOptions.path.schema_id).toEqual(schemaId);
        expect(mockRequestOptions.path.table_id).toEqual(tableId);
        expect(mockRequestOptions.path.column_id).toEqual(columnId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteColumnTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteColumnTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteColumnTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const catalogId = 'testString';
        const schemaId = 'testString';
        const tableId = 'testString';
        const columnId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteColumnParams = {
          engineId,
          catalogId,
          schemaId,
          tableId,
          columnId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteColumn(deleteColumnParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteColumn({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteColumn();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateColumn', () => {
    describe('positive tests', () => {
      function __updateColumnTest() {
        // Construct the params object for operation updateColumn
        const engineId = 'testString';
        const catalogId = 'testString';
        const schemaId = 'testString';
        const tableId = 'testString';
        const columnId = 'testString';
        const columnName = 'expenses';
        const authInstanceId = 'testString';
        const updateColumnParams = {
          engineId,
          catalogId,
          schemaId,
          tableId,
          columnId,
          columnName,
          authInstanceId,
        };

        const updateColumnResult = watsonxDataService.updateColumn(updateColumnParams);

        // all methods should return a Promise
        expectToBePromise(updateColumnResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/catalogs/{catalog_id}/schemas/{schema_id}/tables/{table_id}/columns/{column_id}',
          'PATCH'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.column_name).toEqual(columnName);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.catalog_id).toEqual(catalogId);
        expect(mockRequestOptions.path.schema_id).toEqual(schemaId);
        expect(mockRequestOptions.path.table_id).toEqual(tableId);
        expect(mockRequestOptions.path.column_id).toEqual(columnId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateColumnTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updateColumnTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updateColumnTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const catalogId = 'testString';
        const schemaId = 'testString';
        const tableId = 'testString';
        const columnId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateColumnParams = {
          engineId,
          catalogId,
          schemaId,
          tableId,
          columnId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updateColumn(updateColumnParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updateColumn({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updateColumn();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listTableSnapshots', () => {
    describe('positive tests', () => {
      function __listTableSnapshotsTest() {
        // Construct the params object for operation listTableSnapshots
        const engineId = 'testString';
        const catalogId = 'testString';
        const schemaId = 'testString';
        const tableId = 'testString';
        const authInstanceId = 'testString';
        const listTableSnapshotsParams = {
          engineId,
          catalogId,
          schemaId,
          tableId,
          authInstanceId,
        };

        const listTableSnapshotsResult =
          watsonxDataService.listTableSnapshots(listTableSnapshotsParams);

        // all methods should return a Promise
        expectToBePromise(listTableSnapshotsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/catalogs/{catalog_id}/schemas/{schema_id}/tables/{table_id}/snapshots',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.catalog_id).toEqual(catalogId);
        expect(mockRequestOptions.path.schema_id).toEqual(schemaId);
        expect(mockRequestOptions.path.table_id).toEqual(tableId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listTableSnapshotsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listTableSnapshotsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listTableSnapshotsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const catalogId = 'testString';
        const schemaId = 'testString';
        const tableId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listTableSnapshotsParams = {
          engineId,
          catalogId,
          schemaId,
          tableId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listTableSnapshots(listTableSnapshotsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.listTableSnapshots({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.listTableSnapshots();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('rollbackTable', () => {
    describe('positive tests', () => {
      function __rollbackTableTest() {
        // Construct the params object for operation rollbackTable
        const engineId = 'testString';
        const catalogId = 'testString';
        const schemaId = 'testString';
        const tableId = 'testString';
        const snapshotId = 'testString';
        const authInstanceId = 'testString';
        const rollbackTableParams = {
          engineId,
          catalogId,
          schemaId,
          tableId,
          snapshotId,
          authInstanceId,
        };

        const rollbackTableResult = watsonxDataService.rollbackTable(rollbackTableParams);

        // all methods should return a Promise
        expectToBePromise(rollbackTableResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/catalogs/{catalog_id}/schemas/{schema_id}/tables/{table_id}/rollback',
          'POST'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.snapshot_id).toEqual(snapshotId);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.catalog_id).toEqual(catalogId);
        expect(mockRequestOptions.path.schema_id).toEqual(schemaId);
        expect(mockRequestOptions.path.table_id).toEqual(tableId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __rollbackTableTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __rollbackTableTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __rollbackTableTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const catalogId = 'testString';
        const schemaId = 'testString';
        const tableId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const rollbackTableParams = {
          engineId,
          catalogId,
          schemaId,
          tableId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.rollbackTable(rollbackTableParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.rollbackTable({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.rollbackTable();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateSyncCatalog', () => {
    describe('positive tests', () => {
      function __updateSyncCatalogTest() {
        // Construct the params object for operation updateSyncCatalog
        const catalogId = 'testString';
        const autoAddNewTables = true;
        const syncIcebergMd = true;
        const authInstanceId = 'testString';
        const updateSyncCatalogParams = {
          catalogId,
          autoAddNewTables,
          syncIcebergMd,
          authInstanceId,
        };

        const updateSyncCatalogResult =
          watsonxDataService.updateSyncCatalog(updateSyncCatalogParams);

        // all methods should return a Promise
        expectToBePromise(updateSyncCatalogResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/catalogs/{catalog_id}/sync', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.auto_add_new_tables).toEqual(autoAddNewTables);
        expect(mockRequestOptions.body.sync_iceberg_md).toEqual(syncIcebergMd);
        expect(mockRequestOptions.path.catalog_id).toEqual(catalogId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateSyncCatalogTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updateSyncCatalogTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updateSyncCatalogTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const catalogId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateSyncCatalogParams = {
          catalogId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updateSyncCatalog(updateSyncCatalogParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updateSyncCatalog({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updateSyncCatalog();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listMilvusServices', () => {
    describe('positive tests', () => {
      function __listMilvusServicesTest() {
        // Construct the params object for operation listMilvusServices
        const authInstanceId = 'testString';
        const listMilvusServicesParams = {
          authInstanceId,
        };

        const listMilvusServicesResult =
          watsonxDataService.listMilvusServices(listMilvusServicesParams);

        // all methods should return a Promise
        expectToBePromise(listMilvusServicesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/milvus_services', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listMilvusServicesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listMilvusServicesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listMilvusServicesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listMilvusServicesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listMilvusServices(listMilvusServicesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.listMilvusServices({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createMilvusService', () => {
    describe('positive tests', () => {
      function __createMilvusServiceTest() {
        // Construct the params object for operation createMilvusService
        const bucketName = 'Sample bucket name';
        const origin = 'native';
        const rootPath = 'Sample path';
        const serviceDisplayName = 'sampleService';
        const bucketType = 'Sample bucket type';
        const description = 'milvus service for running sql queries';
        const tags = ['tag1', 'tag2'];
        const tshirtSize = 'small';
        const authInstanceId = 'testString';
        const createMilvusServiceParams = {
          bucketName,
          origin,
          rootPath,
          serviceDisplayName,
          bucketType,
          description,
          tags,
          tshirtSize,
          authInstanceId,
        };

        const createMilvusServiceResult =
          watsonxDataService.createMilvusService(createMilvusServiceParams);

        // all methods should return a Promise
        expectToBePromise(createMilvusServiceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/milvus_services', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.bucket_name).toEqual(bucketName);
        expect(mockRequestOptions.body.origin).toEqual(origin);
        expect(mockRequestOptions.body.root_path).toEqual(rootPath);
        expect(mockRequestOptions.body.service_display_name).toEqual(serviceDisplayName);
        expect(mockRequestOptions.body.bucket_type).toEqual(bucketType);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.tshirt_size).toEqual(tshirtSize);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createMilvusServiceTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createMilvusServiceTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createMilvusServiceTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const bucketName = 'Sample bucket name';
        const origin = 'native';
        const rootPath = 'Sample path';
        const serviceDisplayName = 'sampleService';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createMilvusServiceParams = {
          bucketName,
          origin,
          rootPath,
          serviceDisplayName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createMilvusService(createMilvusServiceParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createMilvusService({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createMilvusService();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getMilvusService', () => {
    describe('positive tests', () => {
      function __getMilvusServiceTest() {
        // Construct the params object for operation getMilvusService
        const serviceId = 'testString';
        const authInstanceId = 'testString';
        const getMilvusServiceParams = {
          serviceId,
          authInstanceId,
        };

        const getMilvusServiceResult = watsonxDataService.getMilvusService(getMilvusServiceParams);

        // all methods should return a Promise
        expectToBePromise(getMilvusServiceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/milvus_services/{service_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.service_id).toEqual(serviceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getMilvusServiceTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getMilvusServiceTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getMilvusServiceTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const serviceId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getMilvusServiceParams = {
          serviceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getMilvusService(getMilvusServiceParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getMilvusService({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getMilvusService();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteMilvusService', () => {
    describe('positive tests', () => {
      function __deleteMilvusServiceTest() {
        // Construct the params object for operation deleteMilvusService
        const serviceId = 'testString';
        const authInstanceId = 'testString';
        const deleteMilvusServiceParams = {
          serviceId,
          authInstanceId,
        };

        const deleteMilvusServiceResult =
          watsonxDataService.deleteMilvusService(deleteMilvusServiceParams);

        // all methods should return a Promise
        expectToBePromise(deleteMilvusServiceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/milvus_services/{service_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.service_id).toEqual(serviceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteMilvusServiceTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteMilvusServiceTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteMilvusServiceTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const serviceId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteMilvusServiceParams = {
          serviceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteMilvusService(deleteMilvusServiceParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteMilvusService({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteMilvusService();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateMilvusService', () => {
    describe('positive tests', () => {
      function __updateMilvusServiceTest() {
        // Construct the params object for operation updateMilvusService
        const serviceId = 'testString';
        const description = 'updated description for milvus service';
        const serviceDisplayName = 'sampleService';
        const tags = ['tag1', 'tag2'];
        const authInstanceId = 'testString';
        const updateMilvusServiceParams = {
          serviceId,
          description,
          serviceDisplayName,
          tags,
          authInstanceId,
        };

        const updateMilvusServiceResult =
          watsonxDataService.updateMilvusService(updateMilvusServiceParams);

        // all methods should return a Promise
        expectToBePromise(updateMilvusServiceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/milvus_services/{service_id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.service_display_name).toEqual(serviceDisplayName);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.path.service_id).toEqual(serviceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateMilvusServiceTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updateMilvusServiceTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updateMilvusServiceTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const serviceId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateMilvusServiceParams = {
          serviceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updateMilvusService(updateMilvusServiceParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updateMilvusService({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updateMilvusService();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateMilvusServiceBucket', () => {
    describe('positive tests', () => {
      function __updateMilvusServiceBucketTest() {
        // Construct the params object for operation updateMilvusServiceBucket
        const serviceId = 'testString';
        const bucketName = 'Sample bucket name';
        const managedBy = 'customer';
        const rootPath = 'Sample path';
        const tshirtSize = 'small';
        const authInstanceId = 'testString';
        const updateMilvusServiceBucketParams = {
          serviceId,
          bucketName,
          managedBy,
          rootPath,
          tshirtSize,
          authInstanceId,
        };

        const updateMilvusServiceBucketResult = watsonxDataService.updateMilvusServiceBucket(
          updateMilvusServiceBucketParams
        );

        // all methods should return a Promise
        expectToBePromise(updateMilvusServiceBucketResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/milvus_services/{service_id}/bucket', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.bucket_name).toEqual(bucketName);
        expect(mockRequestOptions.body.managed_by).toEqual(managedBy);
        expect(mockRequestOptions.body.root_path).toEqual(rootPath);
        expect(mockRequestOptions.body.tshirt_size).toEqual(tshirtSize);
        expect(mockRequestOptions.path.service_id).toEqual(serviceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateMilvusServiceBucketTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updateMilvusServiceBucketTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updateMilvusServiceBucketTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const serviceId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateMilvusServiceBucketParams = {
          serviceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updateMilvusServiceBucket(updateMilvusServiceBucketParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updateMilvusServiceBucket({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updateMilvusServiceBucket();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listMilvusServiceDatabases', () => {
    describe('positive tests', () => {
      function __listMilvusServiceDatabasesTest() {
        // Construct the params object for operation listMilvusServiceDatabases
        const serviceId = 'testString';
        const authInstanceId = 'testString';
        const listMilvusServiceDatabasesParams = {
          serviceId,
          authInstanceId,
        };

        const listMilvusServiceDatabasesResult = watsonxDataService.listMilvusServiceDatabases(
          listMilvusServiceDatabasesParams
        );

        // all methods should return a Promise
        expectToBePromise(listMilvusServiceDatabasesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/milvus_services/{service_id}/databases', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.service_id).toEqual(serviceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listMilvusServiceDatabasesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listMilvusServiceDatabasesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listMilvusServiceDatabasesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const serviceId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listMilvusServiceDatabasesParams = {
          serviceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listMilvusServiceDatabases(listMilvusServiceDatabasesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.listMilvusServiceDatabases({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.listMilvusServiceDatabases();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listMilvusDatabaseCollections', () => {
    describe('positive tests', () => {
      function __listMilvusDatabaseCollectionsTest() {
        // Construct the params object for operation listMilvusDatabaseCollections
        const serviceId = 'testString';
        const databaseId = 'testString';
        const authInstanceId = 'testString';
        const listMilvusDatabaseCollectionsParams = {
          serviceId,
          databaseId,
          authInstanceId,
        };

        const listMilvusDatabaseCollectionsResult =
          watsonxDataService.listMilvusDatabaseCollections(listMilvusDatabaseCollectionsParams);

        // all methods should return a Promise
        expectToBePromise(listMilvusDatabaseCollectionsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/milvus_services/{service_id}/databases/{database_id}/collections',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.service_id).toEqual(serviceId);
        expect(mockRequestOptions.path.database_id).toEqual(databaseId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listMilvusDatabaseCollectionsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listMilvusDatabaseCollectionsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listMilvusDatabaseCollectionsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const serviceId = 'testString';
        const databaseId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listMilvusDatabaseCollectionsParams = {
          serviceId,
          databaseId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listMilvusDatabaseCollections(listMilvusDatabaseCollectionsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.listMilvusDatabaseCollections({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.listMilvusDatabaseCollections();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createMilvusServicePause', () => {
    describe('positive tests', () => {
      function __createMilvusServicePauseTest() {
        // Construct the params object for operation createMilvusServicePause
        const serviceId = 'testString';
        const authInstanceId = 'testString';
        const createMilvusServicePauseParams = {
          serviceId,
          authInstanceId,
        };

        const createMilvusServicePauseResult = watsonxDataService.createMilvusServicePause(
          createMilvusServicePauseParams
        );

        // all methods should return a Promise
        expectToBePromise(createMilvusServicePauseResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/milvus_services/{service_id}/pause', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.service_id).toEqual(serviceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createMilvusServicePauseTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createMilvusServicePauseTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createMilvusServicePauseTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const serviceId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createMilvusServicePauseParams = {
          serviceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createMilvusServicePause(createMilvusServicePauseParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createMilvusServicePause({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createMilvusServicePause();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createMilvusServiceResume', () => {
    describe('positive tests', () => {
      function __createMilvusServiceResumeTest() {
        // Construct the params object for operation createMilvusServiceResume
        const serviceId = 'testString';
        const authInstanceId = 'testString';
        const createMilvusServiceResumeParams = {
          serviceId,
          authInstanceId,
        };

        const createMilvusServiceResumeResult = watsonxDataService.createMilvusServiceResume(
          createMilvusServiceResumeParams
        );

        // all methods should return a Promise
        expectToBePromise(createMilvusServiceResumeResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/milvus_services/{service_id}/resume', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.service_id).toEqual(serviceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createMilvusServiceResumeTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createMilvusServiceResumeTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createMilvusServiceResumeTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const serviceId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createMilvusServiceResumeParams = {
          serviceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createMilvusServiceResume(createMilvusServiceResumeParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createMilvusServiceResume({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createMilvusServiceResume();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createMilvusServiceScale', () => {
    describe('positive tests', () => {
      function __createMilvusServiceScaleTest() {
        // Construct the params object for operation createMilvusServiceScale
        const serviceId = 'testString';
        const tshirtSize = 'small';
        const authInstanceId = 'testString';
        const createMilvusServiceScaleParams = {
          serviceId,
          tshirtSize,
          authInstanceId,
        };

        const createMilvusServiceScaleResult = watsonxDataService.createMilvusServiceScale(
          createMilvusServiceScaleParams
        );

        // all methods should return a Promise
        expectToBePromise(createMilvusServiceScaleResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/milvus_services/{service_id}/scale', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.tshirt_size).toEqual(tshirtSize);
        expect(mockRequestOptions.path.service_id).toEqual(serviceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createMilvusServiceScaleTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createMilvusServiceScaleTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createMilvusServiceScaleTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const serviceId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createMilvusServiceScaleParams = {
          serviceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createMilvusServiceScale(createMilvusServiceScaleParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createMilvusServiceScale({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createMilvusServiceScale();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listIngestionJobs', () => {
    describe('positive tests', () => {
      function __listIngestionJobsTest() {
        // Construct the params object for operation listIngestionJobs
        const authInstanceId = 'testString';
        const start = '1';
        const jobsPerPage = 1;
        const listIngestionJobsParams = {
          authInstanceId,
          start,
          jobsPerPage,
        };

        const listIngestionJobsResult =
          watsonxDataService.listIngestionJobs(listIngestionJobsParams);

        // all methods should return a Promise
        expectToBePromise(listIngestionJobsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/ingestion_jobs', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.start).toEqual(start);
        expect(mockRequestOptions.qs.jobs_per_page).toEqual(jobsPerPage);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listIngestionJobsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listIngestionJobsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listIngestionJobsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const authInstanceId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listIngestionJobsParams = {
          authInstanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listIngestionJobs(listIngestionJobsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.listIngestionJobs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.listIngestionJobs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });

    describe('IngestionJobsPager tests', () => {
      const serviceUrl = watsonxDataServiceOptions.url;
      const path = '/ingestion_jobs';
      const mockPagerResponse1 =
        '{"next":{"href":"https://myhost.com/somePath?start=1"},"total_count":2,"limit":1,"ingestion_jobs":[{"create_if_not_exist":false,"csv_property":{"encoding":"utf-8","escape_character":"|","field_delimiter":",","header":true,"line_delimiter":"\n"},"details":"Path does not exist \'demobucket/data/yellow_tripdata_2022-01.parquet\'. Detail: [errno 2] No such file or directory","end_timestamp":"1685088775","engine_id":"spark123","engine_name":"sparkdemo","execute_config":{"driver_cores":1,"driver_memory":"2G","executor_cores":1,"executor_memory":"2G","num_executors":1},"instance_id":"1684432229673971","job_id":"ingestion-1699459946935","partition_by":"col1, col2","schema":"{\\"type\\":\\"struct\\",\\"schema-id\\":0,\\"fields\\":[{\\"id\\":1,\\"name\\":\\"ID\\",\\"required\\":true,\\"type\\":\\"int\\"},{\\"id\\":2,\\"name\\":\\"Name\\",\\"required\\":true,\\"type\\":\\"string\\"}]}","source_data_files":"s3://demobucket/data/yellow_tripdata_2022-01.parquet","source_file_type":"csv","start_timestamp":"1685084455","status":"running","target_table":"demodb.test.targettable","username":"ibmlhadmin","validate_csv_header":false}]}';
      const mockPagerResponse2 =
        '{"total_count":2,"limit":1,"ingestion_jobs":[{"create_if_not_exist":false,"csv_property":{"encoding":"utf-8","escape_character":"|","field_delimiter":",","header":true,"line_delimiter":"\n"},"details":"Path does not exist \'demobucket/data/yellow_tripdata_2022-01.parquet\'. Detail: [errno 2] No such file or directory","end_timestamp":"1685088775","engine_id":"spark123","engine_name":"sparkdemo","execute_config":{"driver_cores":1,"driver_memory":"2G","executor_cores":1,"executor_memory":"2G","num_executors":1},"instance_id":"1684432229673971","job_id":"ingestion-1699459946935","partition_by":"col1, col2","schema":"{\\"type\\":\\"struct\\",\\"schema-id\\":0,\\"fields\\":[{\\"id\\":1,\\"name\\":\\"ID\\",\\"required\\":true,\\"type\\":\\"int\\"},{\\"id\\":2,\\"name\\":\\"Name\\",\\"required\\":true,\\"type\\":\\"string\\"}]}","source_data_files":"s3://demobucket/data/yellow_tripdata_2022-01.parquet","source_file_type":"csv","start_timestamp":"1685084455","status":"running","target_table":"demodb.test.targettable","username":"ibmlhadmin","validate_csv_header":false}]}';

      beforeEach(() => {
        unmock_createRequest();
        const scope = nock(serviceUrl)
          .get((uri) => uri.includes(path))
          .reply(200, mockPagerResponse1)
          .get((uri) => uri.includes(path))
          .reply(200, mockPagerResponse2);
      });

      afterEach(() => {
        nock.cleanAll();
        mock_createRequest();
      });

      test('getNext()', async () => {
        const params = {
          authInstanceId: 'testString',
          jobsPerPage: 1,
        };
        const allResults = [];
        const pager = new WatsonxDataV2.IngestionJobsPager(watsonxDataService, params);
        while (pager.hasNext()) {
          const nextPage = await pager.getNext();
          expect(nextPage).not.toBeNull();
          if (Array.isArray(nextPage)) {
            allResults.push(...nextPage);
          }
        }
        expect(allResults).not.toBeNull();
        expect(allResults).toHaveLength(0);
      });

      test('getAll()', async () => {
        const params = {
          authInstanceId: 'testString',
          jobsPerPage: 1,
        };
        const pager = new WatsonxDataV2.IngestionJobsPager(watsonxDataService, params);
        const allResults = await pager.getAll();
        expect(allResults).not.toBeNull();
        expect(allResults).toHaveLength(0);
      });
    });
  });

  describe('createIngestionJobs', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // IngestionJobPrototypeCsvProperty
      const ingestionJobPrototypeCsvPropertyModel = {
        encoding: 'utf-8',
        escape_character: '\\\\',
        field_delimiter: ',',
        header: true,
        line_delimiter: '\\n',
      };

      // IngestionJobPrototypeExecuteConfig
      const ingestionJobPrototypeExecuteConfigModel = {
        driver_cores: 1,
        driver_memory: '2G',
        executor_cores: 1,
        executor_memory: '2G',
        num_executors: 1,
      };

      function __createIngestionJobsTest() {
        // Construct the params object for operation createIngestionJobs
        const authInstanceId = 'testString';
        const jobId = 'ingestion-1699459946935';
        const sourceDataFiles = 's3://demobucket/data/yellow_tripdata_2022-01.parquet';
        const targetTable = 'demodb.test.targettable';
        const username = 'user1';
        const createIfNotExist = false;
        const csvProperty = ingestionJobPrototypeCsvPropertyModel;
        const engineId = 'spark123';
        const executeConfig = ingestionJobPrototypeExecuteConfigModel;
        const partitionBy = 'col1, col2';
        const schema =
          '{"type":"struct","schema-id":0,"fields":[{"id":1,"name":"ID","required":true,"type":"int"},{"id":2,"name":"Name","required":true,"type":"string"}]}';
        const sourceFileType = 'csv';
        const validateCsvHeader = false;
        const createIngestionJobsParams = {
          authInstanceId,
          jobId,
          sourceDataFiles,
          targetTable,
          username,
          createIfNotExist,
          csvProperty,
          engineId,
          executeConfig,
          partitionBy,
          schema,
          sourceFileType,
          validateCsvHeader,
        };

        const createIngestionJobsResult =
          watsonxDataService.createIngestionJobs(createIngestionJobsParams);

        // all methods should return a Promise
        expectToBePromise(createIngestionJobsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/ingestion_jobs', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.job_id).toEqual(jobId);
        expect(mockRequestOptions.body.source_data_files).toEqual(sourceDataFiles);
        expect(mockRequestOptions.body.target_table).toEqual(targetTable);
        expect(mockRequestOptions.body.username).toEqual(username);
        expect(mockRequestOptions.body.create_if_not_exist).toEqual(createIfNotExist);
        expect(mockRequestOptions.body.csv_property).toEqual(csvProperty);
        expect(mockRequestOptions.body.engine_id).toEqual(engineId);
        expect(mockRequestOptions.body.execute_config).toEqual(executeConfig);
        expect(mockRequestOptions.body.partition_by).toEqual(partitionBy);
        expect(mockRequestOptions.body.schema).toEqual(schema);
        expect(mockRequestOptions.body.source_file_type).toEqual(sourceFileType);
        expect(mockRequestOptions.body.validate_csv_header).toEqual(validateCsvHeader);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createIngestionJobsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createIngestionJobsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createIngestionJobsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const authInstanceId = 'testString';
        const jobId = 'ingestion-1699459946935';
        const sourceDataFiles = 's3://demobucket/data/yellow_tripdata_2022-01.parquet';
        const targetTable = 'demodb.test.targettable';
        const username = 'user1';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createIngestionJobsParams = {
          authInstanceId,
          jobId,
          sourceDataFiles,
          targetTable,
          username,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createIngestionJobs(createIngestionJobsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createIngestionJobs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createIngestionJobs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createIngestionJobsLocalFiles', () => {
    describe('positive tests', () => {
      function __createIngestionJobsLocalFilesTest() {
        // Construct the params object for operation createIngestionJobsLocalFiles
        const authInstanceId = 'testString';
        const sourceDataFile = Buffer.from('This is a mock file.');
        const targetTable = 'testString';
        const jobId = 'testString';
        const username = 'testString';
        const sourceDataFileContentType = 'testString';
        const sourceFileType = 'csv';
        const csvProperty = 'testString';
        const createIfNotExist = false;
        const validateCsvHeader = false;
        const executeConfig = 'testString';
        const engineId = 'testString';
        const createIngestionJobsLocalFilesParams = {
          authInstanceId,
          sourceDataFile,
          targetTable,
          jobId,
          username,
          sourceDataFileContentType,
          sourceFileType,
          csvProperty,
          createIfNotExist,
          validateCsvHeader,
          executeConfig,
          engineId,
        };

        const createIngestionJobsLocalFilesResult =
          watsonxDataService.createIngestionJobsLocalFiles(createIngestionJobsLocalFilesParams);

        // all methods should return a Promise
        expectToBePromise(createIngestionJobsLocalFilesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/ingestion_jobs_local_files', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'multipart/form-data';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.formData.source_data_file.data).toEqual(sourceDataFile);
        expect(mockRequestOptions.formData.source_data_file.contentType).toEqual(
          sourceDataFileContentType
        );
        expect(mockRequestOptions.formData.target_table).toEqual(targetTable);
        expect(mockRequestOptions.formData.job_id).toEqual(jobId);
        expect(mockRequestOptions.formData.username).toEqual(username);
        expect(mockRequestOptions.formData.source_file_type).toEqual(sourceFileType);
        expect(mockRequestOptions.formData.csv_property).toEqual(csvProperty);
        expect(mockRequestOptions.formData.create_if_not_exist).toEqual(createIfNotExist);
        expect(mockRequestOptions.formData.validate_csv_header).toEqual(validateCsvHeader);
        expect(mockRequestOptions.formData.execute_config).toEqual(executeConfig);
        expect(mockRequestOptions.formData.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createIngestionJobsLocalFilesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createIngestionJobsLocalFilesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createIngestionJobsLocalFilesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const authInstanceId = 'testString';
        const sourceDataFile = Buffer.from('This is a mock file.');
        const targetTable = 'testString';
        const jobId = 'testString';
        const username = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createIngestionJobsLocalFilesParams = {
          authInstanceId,
          sourceDataFile,
          targetTable,
          jobId,
          username,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createIngestionJobsLocalFiles(createIngestionJobsLocalFilesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createIngestionJobsLocalFiles({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createIngestionJobsLocalFiles();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getIngestionJob', () => {
    describe('positive tests', () => {
      function __getIngestionJobTest() {
        // Construct the params object for operation getIngestionJob
        const jobId = 'testString';
        const authInstanceId = 'testString';
        const getIngestionJobParams = {
          jobId,
          authInstanceId,
        };

        const getIngestionJobResult = watsonxDataService.getIngestionJob(getIngestionJobParams);

        // all methods should return a Promise
        expectToBePromise(getIngestionJobResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/ingestion_jobs/{job_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.job_id).toEqual(jobId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getIngestionJobTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getIngestionJobTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getIngestionJobTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const jobId = 'testString';
        const authInstanceId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getIngestionJobParams = {
          jobId,
          authInstanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getIngestionJob(getIngestionJobParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getIngestionJob({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getIngestionJob();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteIngestionJobs', () => {
    describe('positive tests', () => {
      function __deleteIngestionJobsTest() {
        // Construct the params object for operation deleteIngestionJobs
        const jobId = 'testString';
        const authInstanceId = 'testString';
        const deleteIngestionJobsParams = {
          jobId,
          authInstanceId,
        };

        const deleteIngestionJobsResult =
          watsonxDataService.deleteIngestionJobs(deleteIngestionJobsParams);

        // all methods should return a Promise
        expectToBePromise(deleteIngestionJobsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/ingestion_jobs/{job_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.job_id).toEqual(jobId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteIngestionJobsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteIngestionJobsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteIngestionJobsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const jobId = 'testString';
        const authInstanceId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteIngestionJobsParams = {
          jobId,
          authInstanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteIngestionJobs(deleteIngestionJobsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteIngestionJobs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteIngestionJobs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createPreviewIngestionFile', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // PreviewIngestionFilePrototypeCsvProperty
      const previewIngestionFilePrototypeCsvPropertyModel = {
        encoding: 'utf-8',
        escape_character: '\\\\',
        field_delimiter: ',',
        header: true,
        line_delimiter: '\\n',
      };

      function __createPreviewIngestionFileTest() {
        // Construct the params object for operation createPreviewIngestionFile
        const authInstanceId = 'testString';
        const sourceDataFiles = 's3://demobucket/data/yellow_tripdata_2022-01.parquet';
        const csvProperty = previewIngestionFilePrototypeCsvPropertyModel;
        const sourceFileType = 'csv';
        const createPreviewIngestionFileParams = {
          authInstanceId,
          sourceDataFiles,
          csvProperty,
          sourceFileType,
        };

        const createPreviewIngestionFileResult = watsonxDataService.createPreviewIngestionFile(
          createPreviewIngestionFileParams
        );

        // all methods should return a Promise
        expectToBePromise(createPreviewIngestionFileResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/preview_ingestion_file', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.source_data_files).toEqual(sourceDataFiles);
        expect(mockRequestOptions.body.csv_property).toEqual(csvProperty);
        expect(mockRequestOptions.body.source_file_type).toEqual(sourceFileType);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createPreviewIngestionFileTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createPreviewIngestionFileTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createPreviewIngestionFileTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const authInstanceId = 'testString';
        const sourceDataFiles = 's3://demobucket/data/yellow_tripdata_2022-01.parquet';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createPreviewIngestionFileParams = {
          authInstanceId,
          sourceDataFiles,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createPreviewIngestionFile(createPreviewIngestionFileParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createPreviewIngestionFile({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createPreviewIngestionFile();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getEndpoints', () => {
    describe('positive tests', () => {
      function __getEndpointsTest() {
        // Construct the params object for operation getEndpoints
        const authInstanceId = 'testString';
        const getEndpointsParams = {
          authInstanceId,
        };

        const getEndpointsResult = watsonxDataService.getEndpoints(getEndpointsParams);

        // all methods should return a Promise
        expectToBePromise(getEndpointsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/endpoints', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getEndpointsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getEndpointsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getEndpointsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getEndpointsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getEndpoints(getEndpointsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.getEndpoints({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getAllColumns', () => {
    describe('positive tests', () => {
      function __getAllColumnsTest() {
        // Construct the params object for operation getAllColumns
        const tableName = 'testString';
        const catalogName = 'testString';
        const schemaName = 'testString';
        const authInstanceId = 'testString';
        const getAllColumnsParams = {
          tableName,
          catalogName,
          schemaName,
          authInstanceId,
        };

        const getAllColumnsResult = watsonxDataService.getAllColumns(getAllColumnsParams);

        // all methods should return a Promise
        expectToBePromise(getAllColumnsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/columns', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.table_name).toEqual(tableName);
        expect(mockRequestOptions.qs.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.qs.schema_name).toEqual(schemaName);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getAllColumnsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getAllColumnsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getAllColumnsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getAllColumnsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getAllColumns(getAllColumnsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.getAllColumns({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('listAllSchemas', () => {
    describe('positive tests', () => {
      function __listAllSchemasTest() {
        // Construct the params object for operation listAllSchemas
        const catalogName = 'testString';
        const authInstanceId = 'testString';
        const listAllSchemasParams = {
          catalogName,
          authInstanceId,
        };

        const listAllSchemasResult = watsonxDataService.listAllSchemas(listAllSchemasParams);

        // all methods should return a Promise
        expectToBePromise(listAllSchemasResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/schemas', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.catalog_name).toEqual(catalogName);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listAllSchemasTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listAllSchemasTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listAllSchemasTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listAllSchemasParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listAllSchemas(listAllSchemasParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.listAllSchemas({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getSchemaDetails', () => {
    describe('positive tests', () => {
      function __getSchemaDetailsTest() {
        // Construct the params object for operation getSchemaDetails
        const schemaName = 'testString';
        const catalogName = 'testString';
        const authInstanceId = 'testString';
        const getSchemaDetailsParams = {
          schemaName,
          catalogName,
          authInstanceId,
        };

        const getSchemaDetailsResult = watsonxDataService.getSchemaDetails(getSchemaDetailsParams);

        // all methods should return a Promise
        expectToBePromise(getSchemaDetailsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/schemas/{schema_name}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.path.schema_name).toEqual(schemaName);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSchemaDetailsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getSchemaDetailsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getSchemaDetailsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const schemaName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSchemaDetailsParams = {
          schemaName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getSchemaDetails(getSchemaDetailsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getSchemaDetails({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getSchemaDetails();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listAllTables', () => {
    describe('positive tests', () => {
      function __listAllTablesTest() {
        // Construct the params object for operation listAllTables
        const catalogName = 'testString';
        const schemaName = 'testString';
        const authInstanceId = 'testString';
        const listAllTablesParams = {
          catalogName,
          schemaName,
          authInstanceId,
        };

        const listAllTablesResult = watsonxDataService.listAllTables(listAllTablesParams);

        // all methods should return a Promise
        expectToBePromise(listAllTablesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/tables', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.qs.schema_name).toEqual(schemaName);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listAllTablesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listAllTablesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listAllTablesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listAllTablesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listAllTables(listAllTablesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.listAllTables({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getTableDetails', () => {
    describe('positive tests', () => {
      function __getTableDetailsTest() {
        // Construct the params object for operation getTableDetails
        const tableName = 'testString';
        const catalogName = 'testString';
        const schemaName = 'testString';
        const authInstanceId = 'testString';
        const getTableDetailsParams = {
          tableName,
          catalogName,
          schemaName,
          authInstanceId,
        };

        const getTableDetailsResult = watsonxDataService.getTableDetails(getTableDetailsParams);

        // all methods should return a Promise
        expectToBePromise(getTableDetailsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/tables/{table_name}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.qs.schema_name).toEqual(schemaName);
        expect(mockRequestOptions.path.table_name).toEqual(tableName);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getTableDetailsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getTableDetailsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getTableDetailsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const tableName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getTableDetailsParams = {
          tableName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getTableDetails(getTableDetailsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getTableDetails({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getTableDetails();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });
});
