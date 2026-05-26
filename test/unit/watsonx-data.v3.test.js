/**
 * (C) Copyright IBM Corp. 2026.
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

const { NoAuthAuthenticator } = sdkCorePackage;
const WatsonxDataV3 = require('../../dist/watsonx-data/v3');

const {
  getOptions,
  checkUrlAndMethod,
  checkMediaHeaders,
  expectToBePromise,
  checkUserHeader,
  checkForSuccessfulExecution,
} = require('@ibm-cloud/sdk-test-utilities');

const watsonxDataServiceOptions = {
  authenticator: new NoAuthAuthenticator(),
  url: 'https://region.lakehouse.cloud.ibm.com/lakehouse/api',
};

const watsonxDataService = new WatsonxDataV3(watsonxDataServiceOptions);

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

describe('WatsonxDataV3', () => {
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
      const testInstance = WatsonxDataV3.newInstance();

      expect(getAuthenticatorMock).toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceName).toBe(WatsonxDataV3.DEFAULT_SERVICE_NAME);
      expect(testInstance.baseOptions.serviceUrl).toBe(WatsonxDataV3.DEFAULT_SERVICE_URL);
      expect(testInstance).toBeInstanceOf(WatsonxDataV3);
    });

    test('should set serviceName, serviceUrl, and authenticator when provided', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
        serviceName: 'my-service',
      };

      const testInstance = WatsonxDataV3.newInstance(options);

      expect(getAuthenticatorMock).not.toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
      expect(testInstance.baseOptions.serviceName).toBe('my-service');
      expect(testInstance).toBeInstanceOf(WatsonxDataV3);
    });
  });

  describe('the constructor', () => {
    test('use user-given service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
      };

      const testInstance = new WatsonxDataV3(options);

      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
    });

    test('use default service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
      };

      const testInstance = new WatsonxDataV3(options);

      expect(testInstance.baseOptions.serviceUrl).toBe(WatsonxDataV3.DEFAULT_SERVICE_URL);
    });
  });

  describe('createHdfsStorage', () => {
    describe('positive tests', () => {
      function __createHdfsStorageTest() {
        // Construct the params object for operation createHdfsStorage
        const displayName = 'testString';
        const type = 'testString';
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
        const createdAt = 'testString';
        const authInstanceId = 'testString';
        const createHdfsStorageParams = {
          displayName,
          type,
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
          createdAt,
          authInstanceId,
        };

        const createHdfsStorageResult = watsonxDataService.createHdfsStorage(createHdfsStorageParams);

        // all methods should return a Promise
        expectToBePromise(createHdfsStorageResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/storage_hdfs_registrations', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'multipart/form-data';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.formData.display_name).toEqual(displayName);
        expect(mockRequestOptions.formData.type).toEqual(type);
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
        expect(mockRequestOptions.formData.created_at).toEqual(createdAt);
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
        const displayName = 'testString';
        const type = 'testString';
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
          displayName,
          type,
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

  describe('listStorageRegistrations', () => {
    describe('positive tests', () => {
      function __listStorageRegistrationsTest() {
        // Construct the params object for operation listStorageRegistrations
        const authInstanceId = 'testString';
        const listStorageRegistrationsParams = {
          authInstanceId,
        };

        const listStorageRegistrationsResult = watsonxDataService.listStorageRegistrations(listStorageRegistrationsParams);

        // all methods should return a Promise
        expectToBePromise(listStorageRegistrationsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/storage_registrations', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listStorageRegistrationsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listStorageRegistrationsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listStorageRegistrationsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listStorageRegistrationsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listStorageRegistrations(listStorageRegistrationsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.listStorageRegistrations({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createStorageRegistration', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // StorageCatalogPrototype
      const storageCatalogPrototypeModel = {
        base_path: '/abc/def',
        catalog_name: 'sampleCatalog',
        catalog_tags: ['catalog_tag_1', 'catalog_tag_2'],
        catalog_type: 'iceberg',
      };

      // StorageDetailsAccesskeyVault
      const storageDetailsAccesskeyVaultModel = {
        key: 'secret key',
        secret_name: 'secret name',
        secret_urn: 'secret urn',
      };

      // StorageDetails
      const storageDetailsModel = {
        access_key: '<access_key>',
        access_key_vault: storageDetailsAccesskeyVaultModel,
        account_name: 'sample-storage',
        application_id: 'application-id',
        auth_mode: 'iam',
        container_name: 'sample-container',
        directory_id: 'directory-id',
        endpoint: 'https://s3.us-south.cloud-object-storage.appdomain.cloud/',
        key_file: 'key_file',
        name: 'sample-storage',
        provider: 'ibm-cos',
        region: 'us-south',
        role_arn: 'arn:aws:iam::5ssdd5467-002c-a4f8cac3f3f9',
        sas_token: '<sas-token>',
        secret_key: 'secret_key',
        secret_key_vault: storageDetailsAccesskeyVaultModel,
        vault_enabled: true,
      };

      function __createStorageRegistrationTest() {
        // Construct the params object for operation createStorageRegistration
        const description = 'COS storage for customer data';
        const displayName = 'sample-storage-displayname';
        const managedBy = 'ibm';
        const type = 'ibm_cos';
        const associatedCatalog = storageCatalogPrototypeModel;
        const connection = storageDetailsModel;
        const region = 'us-south';
        const storageUse = 'acl';
        const tags = ['storage-tag1', 'storage-tag2'];
        const authInstanceId = 'testString';
        const createStorageRegistrationParams = {
          description,
          displayName,
          managedBy,
          type,
          associatedCatalog,
          connection,
          region,
          storageUse,
          tags,
          authInstanceId,
        };

        const createStorageRegistrationResult = watsonxDataService.createStorageRegistration(createStorageRegistrationParams);

        // all methods should return a Promise
        expectToBePromise(createStorageRegistrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/storage_registrations', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.display_name).toEqual(displayName);
        expect(mockRequestOptions.body.managed_by).toEqual(managedBy);
        expect(mockRequestOptions.body.type).toEqual(type);
        expect(mockRequestOptions.body.associated_catalog).toEqual(associatedCatalog);
        expect(mockRequestOptions.body.connection).toEqual(connection);
        expect(mockRequestOptions.body.region).toEqual(region);
        expect(mockRequestOptions.body.storage_use).toEqual(storageUse);
        expect(mockRequestOptions.body.tags).toEqual(tags);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createStorageRegistrationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createStorageRegistrationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createStorageRegistrationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const description = 'COS storage for customer data';
        const displayName = 'sample-storage-displayname';
        const managedBy = 'ibm';
        const type = 'ibm_cos';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createStorageRegistrationParams = {
          description,
          displayName,
          managedBy,
          type,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createStorageRegistration(createStorageRegistrationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createStorageRegistration({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createStorageRegistration();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getStorageRegistration', () => {
    describe('positive tests', () => {
      function __getStorageRegistrationTest() {
        // Construct the params object for operation getStorageRegistration
        const id = 'testString';
        const authInstanceId = 'testString';
        const skipMdsCall = false;
        const getStorageRegistrationParams = {
          id,
          authInstanceId,
          skipMdsCall,
        };

        const getStorageRegistrationResult = watsonxDataService.getStorageRegistration(getStorageRegistrationParams);

        // all methods should return a Promise
        expectToBePromise(getStorageRegistrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/storage_registrations/{id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.skip_mds_call).toEqual(skipMdsCall);
        expect(mockRequestOptions.path.id).toEqual(id);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getStorageRegistrationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getStorageRegistrationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getStorageRegistrationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getStorageRegistrationParams = {
          id,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getStorageRegistration(getStorageRegistrationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getStorageRegistration({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getStorageRegistration();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteStorageRegistration', () => {
    describe('positive tests', () => {
      function __deleteStorageRegistrationTest() {
        // Construct the params object for operation deleteStorageRegistration
        const id = 'testString';
        const authInstanceId = 'testString';
        const skipMdsCall = false;
        const deleteStorageRegistrationParams = {
          id,
          authInstanceId,
          skipMdsCall,
        };

        const deleteStorageRegistrationResult = watsonxDataService.deleteStorageRegistration(deleteStorageRegistrationParams);

        // all methods should return a Promise
        expectToBePromise(deleteStorageRegistrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/storage_registrations/{id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.skip_mds_call).toEqual(skipMdsCall);
        expect(mockRequestOptions.path.id).toEqual(id);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteStorageRegistrationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteStorageRegistrationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteStorageRegistrationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteStorageRegistrationParams = {
          id,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteStorageRegistration(deleteStorageRegistrationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteStorageRegistration({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteStorageRegistration();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateStorageRegistration', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // StorageDetailsAccesskeyVault
      const storageDetailsAccesskeyVaultModel = {
        key: 'secret key',
        secret_name: 'secret name',
        secret_urn: 'secret urn',
      };

      // StorageDetails
      const storageDetailsModel = {
        access_key: '<access_key>',
        access_key_vault: storageDetailsAccesskeyVaultModel,
        account_name: 'sample-storage',
        application_id: 'application-id',
        auth_mode: 'iam',
        container_name: 'sample-container',
        directory_id: 'directory-id',
        endpoint: 'https://s3.us-south.cloud-object-storage.appdomain.cloud/',
        key_file: 'key_file',
        name: 'sample-storage',
        provider: 'ibm-cos',
        region: 'us-south',
        role_arn: 'arn:aws:iam::5ssdd5467-002c-a4f8cac3f3f9',
        sas_token: '<sas-token>',
        secret_key: 'secret_key',
        secret_key_vault: storageDetailsAccesskeyVaultModel,
        vault_enabled: true,
      };

      function __updateStorageRegistrationTest() {
        // Construct the params object for operation updateStorageRegistration
        const id = 'testString';
        const connection = storageDetailsModel;
        const description = 'COS storage for customer data';
        const displayName = 'sample-storage-displayname';
        const systemStorageUpdateCredentials = true;
        const tags = ['teststorage', 'userstorage'];
        const skipMdsCall = false;
        const authInstanceId = 'testString';
        const updateStorageRegistrationParams = {
          id,
          connection,
          description,
          displayName,
          systemStorageUpdateCredentials,
          tags,
          skipMdsCall,
          authInstanceId,
        };

        const updateStorageRegistrationResult = watsonxDataService.updateStorageRegistration(updateStorageRegistrationParams);

        // all methods should return a Promise
        expectToBePromise(updateStorageRegistrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/storage_registrations/{id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.connection).toEqual(connection);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.display_name).toEqual(displayName);
        expect(mockRequestOptions.body.system_storage_update_credentials).toEqual(systemStorageUpdateCredentials);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.qs.skip_mds_call).toEqual(skipMdsCall);
        expect(mockRequestOptions.path.id).toEqual(id);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateStorageRegistrationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updateStorageRegistrationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updateStorageRegistrationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateStorageRegistrationParams = {
          id,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updateStorageRegistration(updateStorageRegistrationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updateStorageRegistration({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updateStorageRegistration();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('addStorageCatalog', () => {
    describe('positive tests', () => {
      function __addStorageCatalogTest() {
        // Construct the params object for operation addStorageCatalog
        const storageId = 'testString';
        const catalogTags = ['catalog_tag_1', 'catalog_tag_2'];
        const basePath = '/abc/def';
        const catalogName = 'sampleCatalog';
        const catalogType = 'iceberg';
        const skipMdsCall = false;
        const authInstanceId = 'testString';
        const addStorageCatalogParams = {
          storageId,
          catalogTags,
          basePath,
          catalogName,
          catalogType,
          skipMdsCall,
          authInstanceId,
        };

        const addStorageCatalogResult = watsonxDataService.addStorageCatalog(addStorageCatalogParams);

        // all methods should return a Promise
        expectToBePromise(addStorageCatalogResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/storage_registrations/{storage_id}/catalogs', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.catalog_tags).toEqual(catalogTags);
        expect(mockRequestOptions.body.base_path).toEqual(basePath);
        expect(mockRequestOptions.body.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.body.catalog_type).toEqual(catalogType);
        expect(mockRequestOptions.qs.skip_mds_call).toEqual(skipMdsCall);
        expect(mockRequestOptions.path.storage_id).toEqual(storageId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __addStorageCatalogTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __addStorageCatalogTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __addStorageCatalogTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const storageId = 'testString';
        const catalogTags = ['catalog_tag_1', 'catalog_tag_2'];
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const addStorageCatalogParams = {
          storageId,
          catalogTags,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.addStorageCatalog(addStorageCatalogParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.addStorageCatalog({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.addStorageCatalog();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getStorageObjectProperties', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // Path
      const pathModel = {
        path: 'testString',
      };

      function __getStorageObjectPropertiesTest() {
        // Construct the params object for operation getStorageObjectProperties
        const storageId = 'testString';
        const paths = [pathModel];
        const authInstanceId = 'testString';
        const getStorageObjectPropertiesParams = {
          storageId,
          paths,
          authInstanceId,
        };

        const getStorageObjectPropertiesResult = watsonxDataService.getStorageObjectProperties(getStorageObjectPropertiesParams);

        // all methods should return a Promise
        expectToBePromise(getStorageObjectPropertiesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/storage_registrations/{storage_id}/object_properties', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.paths).toEqual(paths);
        expect(mockRequestOptions.path.storage_id).toEqual(storageId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getStorageObjectPropertiesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getStorageObjectPropertiesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getStorageObjectPropertiesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const storageId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getStorageObjectPropertiesParams = {
          storageId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getStorageObjectProperties(getStorageObjectPropertiesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getStorageObjectProperties({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getStorageObjectProperties();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listStorageRegistrationsObjects', () => {
    describe('positive tests', () => {
      function __listStorageRegistrationsObjectsTest() {
        // Construct the params object for operation listStorageRegistrationsObjects
        const storageId = 'testString';
        const authInstanceId = 'testString';
        const path = 'testString';
        const paginated = true;
        const pageSize = 1;
        const prefix = 'testString';
        const startAfter = 'testString';
        const listStorageRegistrationsObjectsParams = {
          storageId,
          authInstanceId,
          path,
          paginated,
          pageSize,
          prefix,
          startAfter,
        };

        const listStorageRegistrationsObjectsResult = watsonxDataService.listStorageRegistrationsObjects(listStorageRegistrationsObjectsParams);

        // all methods should return a Promise
        expectToBePromise(listStorageRegistrationsObjectsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/storage_registrations/{storage_id}/objects', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.path).toEqual(path);
        expect(mockRequestOptions.qs.paginated).toEqual(paginated);
        expect(mockRequestOptions.qs.page_size).toEqual(pageSize);
        expect(mockRequestOptions.qs.prefix).toEqual(prefix);
        expect(mockRequestOptions.qs.start_after).toEqual(startAfter);
        expect(mockRequestOptions.path.storage_id).toEqual(storageId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listStorageRegistrationsObjectsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listStorageRegistrationsObjectsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listStorageRegistrationsObjectsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const storageId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listStorageRegistrationsObjectsParams = {
          storageId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listStorageRegistrationsObjects(listStorageRegistrationsObjectsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.listStorageRegistrationsObjects({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.listStorageRegistrationsObjects();
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

        const listDatabaseRegistrationsResult = watsonxDataService.listDatabaseRegistrations(listDatabaseRegistrationsParams);

        // all methods should return a Promise
        expectToBePromise(listDatabaseRegistrationsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/database_registrations', 'GET');
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

      // DatabaseCatalogPrototype
      const databaseCatalogPrototypeModel = {
        catalog_name: 'sampleCatalog',
        catalog_type: 'iceberg',
      };

      // SecretDetails
      const secretDetailsModel = {
        key: 'secret key',
        secret_name: 'secret name',
        secret_urn: 'secret urn',
      };

      // DatabaseDetailsPrototype
      const databaseDetailsPrototypeModel = {
        authentication_type: 'LDAP, NTLM, ActiveDirectoryServicePrincipal, ActiveDirectoryPassword',
        authentication_value: 'LDAP',
        authentication_value_key_vault: secretDetailsModel,
        broker_authentication_password: 'samplepassword',
        broker_authentication_type: 'PASSWORD',
        broker_authentication_user: 'sampleuser',
        broker_host: 'samplehost',
        broker_port: 4553,
        certificate: 'exampleCertificate',
        certificate_extension: 'pem',
        connection_method: 'basic, apikey',
        connection_mode: 'service_name',
        connection_mode_value: 'orclpdb',
        connection_type: 'JDBC, Arrow flight',
        controller_authentication_password: 'samplepassword',
        controller_authentication_type: 'PASSWORD',
        controller_authentication_user: 'sampleuser',
        coordinator_host: 'samplehost',
        coordinator_port: 4553,
        cpd_hostname: 'samplecpdhostname',
        credentials_key: 'eyJ0eXBlIjoic2VydmljZV9hY2NvdW50IiwicHJvamVjdF9pZCI6ImNvbm9wcy1iaWdxdWVyeSIsInByaXZhdGVfa2V5X2lkIjoiMGY3......',
        domain_name: 'conops-mssql.conops.local',
        hostname: 'http://db2@localhost:9900.com',
        hostname_in_certificate: 'samplehostname',
        hosts: 'abc.com:1234,xyz.com:4321',
        informix_server: 'ol_informix1410',
        name: 'new_database',
        password: 'samplepassword',
        password_key_vault: secretDetailsModel,
        port: 4553,
        project_id: 'conops-bigquery',
        sasl: true,
        sasl_mechanism: 'plain',
        schema_name: 'sampleSchema',
        schemas: 'redis__name',
        service_api_key: 'sampleapikey',
        service_hostname: 'api.dataplatform.dev.cloud.ibm.com',
        service_password: 'samplepassword',
        service_port: 443,
        service_ssl: true,
        service_token_url: 'sampletoakenurl',
        service_username: 'sampleusername',
        ssl: true,
        sslcertificate_key_vault: secretDetailsModel,
        tables: 'kafka_table_name, redis_table_name',
        username: 'sampleuser',
        username_key_vault: secretDetailsModel,
        validate_server_certificate: true,
        vault_enabled: true,
        verify_host_name: true,
        warehouse_name: 'samplewrehouse',
      };

      // DatabaseRegistrationPrototypeDatabasePropertiesItems
      const databaseRegistrationPrototypeDatabasePropertiesItemsModel = {
        encrypt: true,
        key: 'abc',
        value: 'xyz',
      };

      function __createDatabaseRegistrationTest() {
        // Construct the params object for operation createDatabaseRegistration
        const displayName = 'new_database';
        const type = 'db2';
        const associatedCatalog = databaseCatalogPrototypeModel;
        const connection = databaseDetailsPrototypeModel;
        const createdAt = '1686792721';
        const description = 'db2 extenal database description';
        const properties = [databaseRegistrationPrototypeDatabasePropertiesItemsModel];
        const sourceAssetId = 'cc85d899-9ec3-496a-be36-99cabc62f123';
        const sourceCatalogId = 'cc85d899-9ec3-496a-be36-99cff962f000';
        const sourceProjectId = 'cc85d899-9ec3-496a-be36-99cff9000116';
        const tags = ['testdatabase', 'userdatabase'];
        const targetCatalogId = 'cc85d899-9ec3-496a-be36-99cff9000116';
        const authInstanceId = 'testString';
        const createDatabaseRegistrationParams = {
          displayName,
          type,
          associatedCatalog,
          connection,
          createdAt,
          description,
          properties,
          sourceAssetId,
          sourceCatalogId,
          sourceProjectId,
          tags,
          targetCatalogId,
          authInstanceId,
        };

        const createDatabaseRegistrationResult = watsonxDataService.createDatabaseRegistration(createDatabaseRegistrationParams);

        // all methods should return a Promise
        expectToBePromise(createDatabaseRegistrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/database_registrations', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.display_name).toEqual(displayName);
        expect(mockRequestOptions.body.type).toEqual(type);
        expect(mockRequestOptions.body.associated_catalog).toEqual(associatedCatalog);
        expect(mockRequestOptions.body.connection).toEqual(connection);
        expect(mockRequestOptions.body.created_at).toEqual(createdAt);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.properties).toEqual(properties);
        expect(mockRequestOptions.body.source_asset_id).toEqual(sourceAssetId);
        expect(mockRequestOptions.body.source_catalog_id).toEqual(sourceCatalogId);
        expect(mockRequestOptions.body.source_project_id).toEqual(sourceProjectId);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.target_catalog_id).toEqual(targetCatalogId);
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
        const displayName = 'new_database';
        const type = 'db2';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createDatabaseRegistrationParams = {
          displayName,
          type,
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

  describe('addDatabaseCatalog', () => {
    describe('positive tests', () => {
      function __addDatabaseCatalogTest() {
        // Construct the params object for operation addDatabaseCatalog
        const databaseId = 'testString';
        const catalogName = 'sampleCatalog';
        const authInstanceId = 'testString';
        const addDatabaseCatalogParams = {
          databaseId,
          catalogName,
          authInstanceId,
        };

        const addDatabaseCatalogResult = watsonxDataService.addDatabaseCatalog(addDatabaseCatalogParams);

        // all methods should return a Promise
        expectToBePromise(addDatabaseCatalogResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/database_registrations/{database_id}/catalogs', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.path.database_id).toEqual(databaseId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __addDatabaseCatalogTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __addDatabaseCatalogTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __addDatabaseCatalogTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const databaseId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const addDatabaseCatalogParams = {
          databaseId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.addDatabaseCatalog(addDatabaseCatalogParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.addDatabaseCatalog({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.addDatabaseCatalog();
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
        const id = 'testString';
        const authInstanceId = 'testString';
        const getDatabaseParams = {
          id,
          authInstanceId,
        };

        const getDatabaseResult = watsonxDataService.getDatabase(getDatabaseParams);

        // all methods should return a Promise
        expectToBePromise(getDatabaseResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/database_registrations/{id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getDatabaseParams = {
          id,
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
        const id = 'testString';
        const authInstanceId = 'testString';
        const deleteDatabaseCatalogParams = {
          id,
          authInstanceId,
        };

        const deleteDatabaseCatalogResult = watsonxDataService.deleteDatabaseCatalog(deleteDatabaseCatalogParams);

        // all methods should return a Promise
        expectToBePromise(deleteDatabaseCatalogResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/database_registrations/{id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteDatabaseCatalogParams = {
          id,
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

      // DatabaseRegistrationPatchDatabaseDetailsDatabasePropertiesItems
      const databaseRegistrationPatchDatabaseDetailsDatabasePropertiesItemsModel = {
        encrypt: true,
        key: 'abc',
        value: 'xyz',
      };

      // DatabaseRegistrationPatchDatabaseDetails
      const databaseRegistrationPatchDatabaseDetailsModel = {
        authentication_value: 'LDAP',
        broker_authentication_password: 'samplepassword',
        broker_authentication_type: 'PASSWORD',
        broker_authentication_user: 'sampleuser',
        controller_authentication_password: 'samplepassword',
        controller_authentication_type: 'PASSWORD',
        controller_authentication_user: 'sampleuser',
        credentials_key: 'eyJ0eXBlIjoic2VydmljZV9hY2NvdW50IiwicHJvamVjdF9pZCI6ImNvbm9wcy1iaWdxdWVyeSIsInByaXZhdGVfa2V5X2lkIjoiMGY3......',
        password: 'samplepassword',
        properties: [databaseRegistrationPatchDatabaseDetailsDatabasePropertiesItemsModel],
        username: 'sampleuser',
      };

      // DatabaseRegistrationPatchTablesItems
      const databaseRegistrationPatchTablesItemsModel = {
        created_at: '1686792721',
        file_contents: 'sample file content',
        file_name: 'test.json',
        schema_name: 'customer',
        table_name: 'customer',
      };

      // DatabaseRegistrationPatchTopicsItems
      const databaseRegistrationPatchTopicsItemsModel = {
        created_at: '1686792721',
        file_contents: 'sample file contents',
        file_name: 'test.json',
        topic_name: 'customer',
      };

      function __updateDatabaseTest() {
        // Construct the params object for operation updateDatabase
        const id = 'testString';
        const connection = databaseRegistrationPatchDatabaseDetailsModel;
        const description = 'External database description';
        const displayName = 'new_database';
        const tables = [databaseRegistrationPatchTablesItemsModel];
        const tags = ['testdatabase', 'userdatabase'];
        const topics = [databaseRegistrationPatchTopicsItemsModel];
        const authInstanceId = 'testString';
        const updateDatabaseParams = {
          id,
          connection,
          description,
          displayName,
          tables,
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

        checkUrlAndMethod(mockRequestOptions, '/v3/database_registrations/{id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.connection).toEqual(connection);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.display_name).toEqual(displayName);
        expect(mockRequestOptions.body.tables).toEqual(tables);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.topics).toEqual(topics);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateDatabaseParams = {
          id,
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

  describe('listPrestoEngines', () => {
    describe('positive tests', () => {
      function __listPrestoEnginesTest() {
        // Construct the params object for operation listPrestoEngines
        const authInstanceId = 'testString';
        const listPrestoEnginesParams = {
          authInstanceId,
        };

        const listPrestoEnginesResult = watsonxDataService.listPrestoEngines(listPrestoEnginesParams);

        // all methods should return a Promise
        expectToBePromise(listPrestoEnginesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/presto_engines', 'GET');
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

      // CoordinatorNodeDescriptionBody
      const coordinatorNodeDescriptionBodyModel = {
        node_type: 'starter',
        quantity: 1,
      };

      // WorkerNodeDescriptionBody
      const workerNodeDescriptionBodyModel = {
        node_type: 'starter',
        quantity: 1,
      };

      // AutoscalingConfig
      const autoscalingConfigModel = {
        type: 'cpu',
        target: 40,
        min_worker_quantity: 1,
        max_worker_quantity: 18,
        query_termination_grace_period_min: 1,
        scale_in_stabilization_window_min: 5,
        scaling_step_size: 1,
      };

      // EngineDetails
      const engineDetailsModel = {
        coordinator: coordinatorNodeDescriptionBodyModel,
        size_config: 'starter',
        worker: workerNodeDescriptionBodyModel,
        autoscaling_enabled: true,
        autoscaling_config: autoscalingConfigModel,
      };

      function __createPrestoEngineTest() {
        // Construct the params object for operation createPrestoEngine
        const configuration = engineDetailsModel;
        const displayName = 'sampleEngine';
        const origin = 'native';
        const associatedCatalogs = ['iceberg_data', 'hive_data'];
        const description = 'presto engine for running sql queries';
        const id = 'presto123';
        const tags = ['tag1', 'tag2'];
        const authInstanceId = 'testString';
        const createPrestoEngineParams = {
          configuration,
          displayName,
          origin,
          associatedCatalogs,
          description,
          id,
          tags,
          authInstanceId,
        };

        const createPrestoEngineResult = watsonxDataService.createPrestoEngine(createPrestoEngineParams);

        // all methods should return a Promise
        expectToBePromise(createPrestoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/presto_engines', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.configuration).toEqual(configuration);
        expect(mockRequestOptions.body.display_name).toEqual(displayName);
        expect(mockRequestOptions.body.origin).toEqual(origin);
        expect(mockRequestOptions.body.associated_catalogs).toEqual(associatedCatalogs);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.id).toEqual(id);
        expect(mockRequestOptions.body.tags).toEqual(tags);
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
        const configuration = engineDetailsModel;
        const displayName = 'sampleEngine';
        const origin = 'native';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createPrestoEngineParams = {
          configuration,
          displayName,
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

  describe('updatePrestoEngineAutoscaling', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // AutoScalingConfig
      const autoScalingConfigModel = {
        target: 40,
        min_worker_quantity: 1,
        max_worker_quantity: 1,
        query_termination_grace_period_min: 1,
        scale_in_stabilization_window_min: 5,
        scaling_step_size: 1,
      };

      function __updatePrestoEngineAutoscalingTest() {
        // Construct the params object for operation updatePrestoEngineAutoscaling
        const engineId = 'testString';
        const autoscalingConfig = autoScalingConfigModel;
        const authInstanceId = 'testString';
        const updatePrestoEngineAutoscalingParams = {
          engineId,
          autoscalingConfig,
          authInstanceId,
        };

        const updatePrestoEngineAutoscalingResult = watsonxDataService.updatePrestoEngineAutoscaling(updatePrestoEngineAutoscalingParams);

        // all methods should return a Promise
        expectToBePromise(updatePrestoEngineAutoscalingResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/presto_engines/{engine_id}/autoscaling', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.autoscaling_config).toEqual(autoscalingConfig);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updatePrestoEngineAutoscalingTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updatePrestoEngineAutoscalingTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updatePrestoEngineAutoscalingTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updatePrestoEngineAutoscalingParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updatePrestoEngineAutoscaling(updatePrestoEngineAutoscalingParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updatePrestoEngineAutoscaling({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updatePrestoEngineAutoscaling();
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

        const listPrestoEngineCatalogsResult = watsonxDataService.listPrestoEngineCatalogs(listPrestoEngineCatalogsParams);

        // all methods should return a Promise
        expectToBePromise(listPrestoEngineCatalogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/presto_engines/{engine_id}/catalogs', 'GET');
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
        const catalogNames = ['iceberg_catalog'];
        const authInstanceId = 'testString';
        const createPrestoEngineCatalogsParams = {
          engineId,
          catalogNames,
          authInstanceId,
        };

        const createPrestoEngineCatalogsResult = watsonxDataService.createPrestoEngineCatalogs(createPrestoEngineCatalogsParams);

        // all methods should return a Promise
        expectToBePromise(createPrestoEngineCatalogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/presto_engines/{engine_id}/catalogs', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.catalog_names).toEqual(catalogNames);
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
        const catalogNames = ['iceberg_catalog'];
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createPrestoEngineCatalogsParams = {
          engineId,
          catalogNames,
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

        const deletePrestoEngineCatalogsResult = watsonxDataService.deletePrestoEngineCatalogs(deletePrestoEngineCatalogsParams);

        // all methods should return a Promise
        expectToBePromise(deletePrestoEngineCatalogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/presto_engines/{engine_id}/catalogs', 'DELETE');
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
        const id = 'testString';
        const authInstanceId = 'testString';
        const getPrestoEngineCatalogParams = {
          engineId,
          id,
          authInstanceId,
        };

        const getPrestoEngineCatalogResult = watsonxDataService.getPrestoEngineCatalog(getPrestoEngineCatalogParams);

        // all methods should return a Promise
        expectToBePromise(getPrestoEngineCatalogResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/presto_engines/{engine_id}/catalogs/{id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getPrestoEngineCatalogParams = {
          engineId,
          id,
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

  describe('getPrestoEngineConfig', () => {
    describe('positive tests', () => {
      function __getPrestoEngineConfigTest() {
        // Construct the params object for operation getPrestoEngineConfig
        const engineId = 'presto860';
        const authInstanceId = 'crn:v1:staging:public:lakehouse:eu-de:a/810fe64a9e3446d1b919d0eff69d3c5f:87495456-c862-4b35-b8de-884b7f15eee4::';
        const sections = 'catalog,configuration,jvm';
        const getPrestoEngineConfigParams = {
          engineId,
          authInstanceId,
          sections,
        };

        const getPrestoEngineConfigResult = watsonxDataService.getPrestoEngineConfig(getPrestoEngineConfigParams);

        // all methods should return a Promise
        expectToBePromise(getPrestoEngineConfigResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/presto_engines/{engine_id}/config', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.sections).toEqual(sections);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getPrestoEngineConfigTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getPrestoEngineConfigTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getPrestoEngineConfigTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'presto860';
        const authInstanceId = 'crn:v1:staging:public:lakehouse:eu-de:a/810fe64a9e3446d1b919d0eff69d3c5f:87495456-c862-4b35-b8de-884b7f15eee4::';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getPrestoEngineConfigParams = {
          engineId,
          authInstanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getPrestoEngineConfig(getPrestoEngineConfigParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getPrestoEngineConfig({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getPrestoEngineConfig();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updatePrestoEngineConfig', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // CatalogProperties
      const catalogPropertiesModel = {
        coordinator: { 'key1': 'testString' },
        worker: { 'key1': 'testString' },
      };

      // ConfigurationProperties
      const configurationPropertiesModel = {
        coordinator: { 'key1': 'configuration_property_value' },
        worker: { 'key1': 'configuration_property_value' },
      };

      // JvmProperties
      const jvmPropertiesModel = {
        coordinator: { 'key1': 'JVM_property_value' },
        worker: { 'key1': 'JVM_property_value' },
      };

      // LogConfigProperties
      const logConfigPropertiesModel = {
        coordinator: { 'key1': 'log_config_property_value' },
        worker: { 'key1': 'log_config_property_value' },
      };

      // PrestoEngineProperties
      const prestoEnginePropertiesModel = {
        catalog: { 'key1': catalogPropertiesModel },
        configuration: configurationPropertiesModel,
        event_listener: { 'key1': 'event_listener_property_value' },
        global: { 'key1': 'global_property_value' },
        jmx_exporter_config: { 'key1': 'jmx_exporter_config_property_value' },
        jvm: jvmPropertiesModel,
        log_config: logConfigPropertiesModel,
      };

      function __updatePrestoEngineConfigTest() {
        // Construct the params object for operation updatePrestoEngineConfig
        const engineId = 'presto93';
        const authInstanceId = 'crn:v1:staging:public:lakehouse:eu-de:a/810fe64a9e3446d1b919d0eff69d3c5f:87495456-c862-4b35-b8de-884b7f15eee4::';
        const engineProperties = prestoEnginePropertiesModel;
        const updatePrestoEngineConfigParams = {
          engineId,
          authInstanceId,
          engineProperties,
        };

        const updatePrestoEngineConfigResult = watsonxDataService.updatePrestoEngineConfig(updatePrestoEngineConfigParams);

        // all methods should return a Promise
        expectToBePromise(updatePrestoEngineConfigResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/presto_engines/{engine_id}/config', 'PATCH');
        const expectedAccept = undefined;
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.engine_properties).toEqual(engineProperties);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updatePrestoEngineConfigTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updatePrestoEngineConfigTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updatePrestoEngineConfigTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'presto93';
        const authInstanceId = 'crn:v1:staging:public:lakehouse:eu-de:a/810fe64a9e3446d1b919d0eff69d3c5f:87495456-c862-4b35-b8de-884b7f15eee4::';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updatePrestoEngineConfigParams = {
          engineId,
          authInstanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updatePrestoEngineConfig(updatePrestoEngineConfigParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updatePrestoEngineConfig({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updatePrestoEngineConfig();
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
        const id = 'testString';
        const authInstanceId = 'testString';
        const getPrestoEngineParams = {
          id,
          authInstanceId,
        };

        const getPrestoEngineResult = watsonxDataService.getPrestoEngine(getPrestoEngineParams);

        // all methods should return a Promise
        expectToBePromise(getPrestoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/presto_engines/{id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getPrestoEngineParams = {
          id,
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
        const id = 'testString';
        const authInstanceId = 'testString';
        const deleteEngineParams = {
          id,
          authInstanceId,
        };

        const deleteEngineResult = watsonxDataService.deleteEngine(deleteEngineParams);

        // all methods should return a Promise
        expectToBePromise(deleteEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/presto_engines/{id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteEngineParams = {
          id,
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

      // EnginePropertiesCatalogAdditionalProperties
      const enginePropertiesCatalogAdditionalPropertiesModel = {
        coordinator: { anyKey: 'anyValue' },
        worker: { anyKey: 'anyValue' },
      };

      // EnginePropertiesConfiguration
      const enginePropertiesConfigurationModel = {
        coordinator: { 'key1': 'configuration_property_value' },
        worker: { 'key1': 'configuration_property_value' },
      };

      // EnginePropertiesJvm
      const enginePropertiesJvmModel = {
        coordinator: { 'key1': 'JVM_property_value' },
        worker: { 'key1': 'JVM_property_value' },
      };

      // EnginePropertiesLogConfig
      const enginePropertiesLogConfigModel = {
        coordinator: { 'key1': 'testString' },
        worker: { 'key1': 'log_config_property_value' },
      };

      // EngineProperties
      const enginePropertiesModel = {
        catalog: { 'key1': enginePropertiesCatalogAdditionalPropertiesModel },
        configuration: enginePropertiesConfigurationModel,
        event_listener: { 'key1': 'event_listener_property_value' },
        global: { 'key1': 'global_property_value' },
        jmx_exporter_config: { 'key1': 'jmx_exporter_config_property_value' },
        jvm: enginePropertiesJvmModel,
        log_config: enginePropertiesLogConfigModel,
      };

      // RemoveEnginePropertiesCatalogAdditionalProperties
      const removeEnginePropertiesCatalogAdditionalPropertiesModel = {
        coordinator: ['property_name'],
        worker: ['property_name'],
      };

      // RemoveEnginePropertiesConfiguration
      const removeEnginePropertiesConfigurationModel = {
        coordinator: ['property_name'],
        worker: ['property_name'],
      };

      // RemoveEnginePropertiesJvm
      const removeEnginePropertiesJvmModel = {
        coordinator: ['property_name'],
        worker: ['property_name'],
      };

      // RemoveEnginePropertiesLogConfig
      const removeEnginePropertiesLogConfigModel = {
        coordinator: ['property_name'],
        worker: ['property_name'],
      };

      // RemoveEngineProperties
      const removeEnginePropertiesModel = {
        catalog: { 'key1': removeEnginePropertiesCatalogAdditionalPropertiesModel },
        configuration: removeEnginePropertiesConfigurationModel,
        event_listener: ['property_name'],
        global: ['property_name'],
        jmx_exporter_config: ['testString'],
        jvm: removeEnginePropertiesJvmModel,
        log_config: removeEnginePropertiesLogConfigModel,
      };

      function __updatePrestoEngineTest() {
        // Construct the params object for operation updatePrestoEngine
        const id = 'testString';
        const description = 'updated description for presto engine';
        const displayName = 'sampleEngine';
        const properties = enginePropertiesModel;
        const removeEngineProperties = removeEnginePropertiesModel;
        const restartType = 'force';
        const tags = ['tag1', 'tag2'];
        const authInstanceId = 'testString';
        const updatePrestoEngineParams = {
          id,
          description,
          displayName,
          properties,
          removeEngineProperties,
          restartType,
          tags,
          authInstanceId,
        };

        const updatePrestoEngineResult = watsonxDataService.updatePrestoEngine(updatePrestoEngineParams);

        // all methods should return a Promise
        expectToBePromise(updatePrestoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/presto_engines/{id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.display_name).toEqual(displayName);
        expect(mockRequestOptions.body.properties).toEqual(properties);
        expect(mockRequestOptions.body.remove_engine_properties).toEqual(removeEngineProperties);
        expect(mockRequestOptions.body.restart_type).toEqual(restartType);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updatePrestoEngineParams = {
          id,
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

  describe('pausePrestoEngine', () => {
    describe('positive tests', () => {
      function __pausePrestoEngineTest() {
        // Construct the params object for operation pausePrestoEngine
        const id = 'testString';
        const authInstanceId = 'testString';
        const pausePrestoEngineParams = {
          id,
          authInstanceId,
        };

        const pausePrestoEngineResult = watsonxDataService.pausePrestoEngine(pausePrestoEngineParams);

        // all methods should return a Promise
        expectToBePromise(pausePrestoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/presto_engines/{id}/pause', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const pausePrestoEngineParams = {
          id,
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
        const id = 'testString';
        const statement = 'show schemas in catalog_name';
        const catalog = 'catalog_name';
        const format = 'json';
        const schema = 'schema_name';
        const type = 'io';
        const authInstanceId = 'testString';
        const runExplainStatementParams = {
          id,
          statement,
          catalog,
          format,
          schema,
          type,
          authInstanceId,
        };

        const runExplainStatementResult = watsonxDataService.runExplainStatement(runExplainStatementParams);

        // all methods should return a Promise
        expectToBePromise(runExplainStatementResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/presto_engines/{id}/query_explain', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.statement).toEqual(statement);
        expect(mockRequestOptions.body.catalog).toEqual(catalog);
        expect(mockRequestOptions.body.format).toEqual(format);
        expect(mockRequestOptions.body.schema).toEqual(schema);
        expect(mockRequestOptions.body.type).toEqual(type);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const statement = 'show schemas in catalog_name';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const runExplainStatementParams = {
          id,
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
        const id = 'testString';
        const statement = 'show schemas in catalog_name';
        const verbose = true;
        const authInstanceId = 'testString';
        const runExplainAnalyzeStatementParams = {
          id,
          statement,
          verbose,
          authInstanceId,
        };

        const runExplainAnalyzeStatementResult = watsonxDataService.runExplainAnalyzeStatement(runExplainAnalyzeStatementParams);

        // all methods should return a Promise
        expectToBePromise(runExplainAnalyzeStatementResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/presto_engines/{id}/query_explain_analyze', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.statement).toEqual(statement);
        expect(mockRequestOptions.body.verbose).toEqual(verbose);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const statement = 'show schemas in catalog_name';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const runExplainAnalyzeStatementParams = {
          id,
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
        const id = 'testString';
        const authInstanceId = 'testString';
        const restartPrestoEngineParams = {
          id,
          authInstanceId,
        };

        const restartPrestoEngineResult = watsonxDataService.restartPrestoEngine(restartPrestoEngineParams);

        // all methods should return a Promise
        expectToBePromise(restartPrestoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/presto_engines/{id}/restart', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const restartPrestoEngineParams = {
          id,
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
        const id = 'testString';
        const authInstanceId = 'testString';
        const resumePrestoEngineParams = {
          id,
          authInstanceId,
        };

        const resumePrestoEngineResult = watsonxDataService.resumePrestoEngine(resumePrestoEngineParams);

        // all methods should return a Promise
        expectToBePromise(resumePrestoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/presto_engines/{id}/resume', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const resumePrestoEngineParams = {
          id,
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
        node_type: 'worker',
        quantity: 1,
      };

      function __scalePrestoEngineTest() {
        // Construct the params object for operation scalePrestoEngine
        const id = 'testString';
        const coordinator = nodeDescriptionModel;
        const worker = nodeDescriptionModel;
        const authInstanceId = 'testString';
        const scalePrestoEngineParams = {
          id,
          coordinator,
          worker,
          authInstanceId,
        };

        const scalePrestoEngineResult = watsonxDataService.scalePrestoEngine(scalePrestoEngineParams);

        // all methods should return a Promise
        expectToBePromise(scalePrestoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/presto_engines/{id}/scale', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.coordinator).toEqual(coordinator);
        expect(mockRequestOptions.body.worker).toEqual(worker);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const scalePrestoEngineParams = {
          id,
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

  describe('listPrestissimoEngines', () => {
    describe('positive tests', () => {
      function __listPrestissimoEnginesTest() {
        // Construct the params object for operation listPrestissimoEngines
        const authInstanceId = 'testString';
        const listPrestissimoEnginesParams = {
          authInstanceId,
        };

        const listPrestissimoEnginesResult = watsonxDataService.listPrestissimoEngines(listPrestissimoEnginesParams);

        // all methods should return a Promise
        expectToBePromise(listPrestissimoEnginesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/prestissimo_engines', 'GET');
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

      // NodeDescription
      const nodeDescriptionModel = {
        node_type: 'worker',
        quantity: 1,
      };

      // PrestissimoEngineDetails
      const prestissimoEngineDetailsModel = {
        coordinator: nodeDescriptionModel,
        size_config: 'starter',
        worker: nodeDescriptionModel,
      };

      function __createPrestissimoEngineTest() {
        // Construct the params object for operation createPrestissimoEngine
        const configuration = prestissimoEngineDetailsModel;
        const displayName = 'sampleEngine';
        const origin = 'native';
        const associatedCatalogs = ['hive_data'];
        const description = 'prestissimo engine description';
        const id = 'prestissimo123';
        const tags = ['tag1', 'tag2'];
        const authInstanceId = 'testString';
        const createPrestissimoEngineParams = {
          configuration,
          displayName,
          origin,
          associatedCatalogs,
          description,
          id,
          tags,
          authInstanceId,
        };

        const createPrestissimoEngineResult = watsonxDataService.createPrestissimoEngine(createPrestissimoEngineParams);

        // all methods should return a Promise
        expectToBePromise(createPrestissimoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/prestissimo_engines', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.configuration).toEqual(configuration);
        expect(mockRequestOptions.body.display_name).toEqual(displayName);
        expect(mockRequestOptions.body.origin).toEqual(origin);
        expect(mockRequestOptions.body.associated_catalogs).toEqual(associatedCatalogs);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.id).toEqual(id);
        expect(mockRequestOptions.body.tags).toEqual(tags);
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
        const configuration = prestissimoEngineDetailsModel;
        const displayName = 'sampleEngine';
        const origin = 'native';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createPrestissimoEngineParams = {
          configuration,
          displayName,
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

  describe('getPrestissimoEngineCatalog', () => {
    describe('positive tests', () => {
      function __getPrestissimoEngineCatalogTest() {
        // Construct the params object for operation getPrestissimoEngineCatalog
        const engineId = 'testString';
        const id = 'testString';
        const authInstanceId = 'testString';
        const getPrestissimoEngineCatalogParams = {
          engineId,
          id,
          authInstanceId,
        };

        const getPrestissimoEngineCatalogResult = watsonxDataService.getPrestissimoEngineCatalog(getPrestissimoEngineCatalogParams);

        // all methods should return a Promise
        expectToBePromise(getPrestissimoEngineCatalogResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/prestissimo_engines/{engine_id}/catalogs/{id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getPrestissimoEngineCatalogParams = {
          engineId,
          id,
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

  describe('getPrestissimoEngine', () => {
    describe('positive tests', () => {
      function __getPrestissimoEngineTest() {
        // Construct the params object for operation getPrestissimoEngine
        const id = 'testString';
        const authInstanceId = 'testString';
        const getPrestissimoEngineParams = {
          id,
          authInstanceId,
        };

        const getPrestissimoEngineResult = watsonxDataService.getPrestissimoEngine(getPrestissimoEngineParams);

        // all methods should return a Promise
        expectToBePromise(getPrestissimoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/prestissimo_engines/{id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getPrestissimoEngineParams = {
          id,
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
        const id = 'testString';
        const authInstanceId = 'testString';
        const deletePrestissimoEngineParams = {
          id,
          authInstanceId,
        };

        const deletePrestissimoEngineResult = watsonxDataService.deletePrestissimoEngine(deletePrestissimoEngineParams);

        // all methods should return a Promise
        expectToBePromise(deletePrestissimoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/prestissimo_engines/{id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deletePrestissimoEngineParams = {
          id,
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

      // PrestissimoEnginePropertiesCatalogAdditionalProperties
      const prestissimoEnginePropertiesCatalogAdditionalPropertiesModel = {
        coordinator: { anyKey: 'anyValue' },
        worker: { anyKey: 'anyValue' },
      };

      // PrestissimoEnginePropertiesConfiguration
      const prestissimoEnginePropertiesConfigurationModel = {
        coordinator: { 'key1': 'testString' },
        worker: { 'key1': 'testString' },
      };

      // PrestissimoEnginePropertiesJvm
      const prestissimoEnginePropertiesJvmModel = {
        coordinator: { 'key1': 'testString' },
      };

      // PrestissimoEnginePropertiesLogConfig
      const prestissimoEnginePropertiesLogConfigModel = {
        coordinator: { 'key1': 'testString' },
        worker: { 'key1': 'testString' },
      };

      // PrestissimoEngineProperties
      const prestissimoEnginePropertiesModel = {
        catalog: { 'key1': prestissimoEnginePropertiesCatalogAdditionalPropertiesModel },
        configuration: prestissimoEnginePropertiesConfigurationModel,
        global: { 'key1': 'testString' },
        jvm: prestissimoEnginePropertiesJvmModel,
        log_config: prestissimoEnginePropertiesLogConfigModel,
        optimizer_properties: { 'key1': 'testString' },
        velox: { 'key1': 'testString' },
      };

      // RemovePrestissimoEnginePropertiesCatalogAdditionalProperties
      const removePrestissimoEnginePropertiesCatalogAdditionalPropertiesModel = {
        coordinator: ['testString'],
        worker: ['testString'],
      };

      // RemovePrestissimoEnginePropertiesConfiguration
      const removePrestissimoEnginePropertiesConfigurationModel = {
        coordinator: ['testString'],
        worker: ['testString'],
      };

      // RemovePrestissimoEnginePropertiesJvm
      const removePrestissimoEnginePropertiesJvmModel = {
        coordinator: ['testString'],
      };

      // RemovePrestissimoEnginePropertiesLogConfig
      const removePrestissimoEnginePropertiesLogConfigModel = {
        coordinator: ['testString'],
        worker: ['testString'],
      };

      // RemovePrestissimoEngineProperties
      const removePrestissimoEnginePropertiesModel = {
        catalog: { 'key1': removePrestissimoEnginePropertiesCatalogAdditionalPropertiesModel },
        configuration: removePrestissimoEnginePropertiesConfigurationModel,
        global: ['testString'],
        jvm: removePrestissimoEnginePropertiesJvmModel,
        log_config: removePrestissimoEnginePropertiesLogConfigModel,
        optimizer_properties: ['testString'],
        velox: ['testString'],
      };

      function __updatePrestissimoEngineTest() {
        // Construct the params object for operation updatePrestissimoEngine
        const id = 'testString';
        const description = 'updated description for prestissimo engine';
        const displayName = 'sampleEngine';
        const properties = prestissimoEnginePropertiesModel;
        const removeEngineProperties = removePrestissimoEnginePropertiesModel;
        const restartType = 'force';
        const tags = ['tag1', 'tag2'];
        const authInstanceId = 'testString';
        const updatePrestissimoEngineParams = {
          id,
          description,
          displayName,
          properties,
          removeEngineProperties,
          restartType,
          tags,
          authInstanceId,
        };

        const updatePrestissimoEngineResult = watsonxDataService.updatePrestissimoEngine(updatePrestissimoEngineParams);

        // all methods should return a Promise
        expectToBePromise(updatePrestissimoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/prestissimo_engines/{id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.display_name).toEqual(displayName);
        expect(mockRequestOptions.body.properties).toEqual(properties);
        expect(mockRequestOptions.body.remove_engine_properties).toEqual(removeEngineProperties);
        expect(mockRequestOptions.body.restart_type).toEqual(restartType);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updatePrestissimoEngineParams = {
          id,
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
        const id = 'testString';
        const authInstanceId = 'testString';
        const listPrestissimoEngineCatalogsParams = {
          id,
          authInstanceId,
        };

        const listPrestissimoEngineCatalogsResult = watsonxDataService.listPrestissimoEngineCatalogs(listPrestissimoEngineCatalogsParams);

        // all methods should return a Promise
        expectToBePromise(listPrestissimoEngineCatalogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/prestissimo_engines/{id}/catalogs', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listPrestissimoEngineCatalogsParams = {
          id,
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
        const id = 'testString';
        const catalogNames = ['iceberg_catalog'];
        const authInstanceId = 'testString';
        const createPrestissimoEngineCatalogsParams = {
          id,
          catalogNames,
          authInstanceId,
        };

        const createPrestissimoEngineCatalogsResult = watsonxDataService.createPrestissimoEngineCatalogs(createPrestissimoEngineCatalogsParams);

        // all methods should return a Promise
        expectToBePromise(createPrestissimoEngineCatalogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/prestissimo_engines/{id}/catalogs', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.catalog_names).toEqual(catalogNames);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const catalogNames = ['iceberg_catalog'];
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createPrestissimoEngineCatalogsParams = {
          id,
          catalogNames,
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
        const id = 'testString';
        const catalogNames = 'testString';
        const authInstanceId = 'testString';
        const deletePrestissimoEngineCatalogsParams = {
          id,
          catalogNames,
          authInstanceId,
        };

        const deletePrestissimoEngineCatalogsResult = watsonxDataService.deletePrestissimoEngineCatalogs(deletePrestissimoEngineCatalogsParams);

        // all methods should return a Promise
        expectToBePromise(deletePrestissimoEngineCatalogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/prestissimo_engines/{id}/catalogs', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.catalog_names).toEqual(catalogNames);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const catalogNames = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deletePrestissimoEngineCatalogsParams = {
          id,
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

  describe('pausePrestissimoEngine', () => {
    describe('positive tests', () => {
      function __pausePrestissimoEngineTest() {
        // Construct the params object for operation pausePrestissimoEngine
        const id = 'testString';
        const authInstanceId = 'testString';
        const pausePrestissimoEngineParams = {
          id,
          authInstanceId,
        };

        const pausePrestissimoEngineResult = watsonxDataService.pausePrestissimoEngine(pausePrestissimoEngineParams);

        // all methods should return a Promise
        expectToBePromise(pausePrestissimoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/prestissimo_engines/{id}/pause', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const pausePrestissimoEngineParams = {
          id,
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
        const id = 'testString';
        const statement = 'show schemas in catalog_name';
        const catalog = 'catalog_name';
        const format = 'json';
        const schema = 'schema_name';
        const type = 'io';
        const authInstanceId = 'testString';
        const runPrestissimoExplainStatementParams = {
          id,
          statement,
          catalog,
          format,
          schema,
          type,
          authInstanceId,
        };

        const runPrestissimoExplainStatementResult = watsonxDataService.runPrestissimoExplainStatement(runPrestissimoExplainStatementParams);

        // all methods should return a Promise
        expectToBePromise(runPrestissimoExplainStatementResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/prestissimo_engines/{id}/query_explain', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.statement).toEqual(statement);
        expect(mockRequestOptions.body.catalog).toEqual(catalog);
        expect(mockRequestOptions.body.format).toEqual(format);
        expect(mockRequestOptions.body.schema).toEqual(schema);
        expect(mockRequestOptions.body.type).toEqual(type);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const statement = 'show schemas in catalog_name';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const runPrestissimoExplainStatementParams = {
          id,
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
        const id = 'testString';
        const statement = 'show schemas in catalog_name';
        const verbose = true;
        const authInstanceId = 'testString';
        const runPrestissimoExplainAnalyzeStatementParams = {
          id,
          statement,
          verbose,
          authInstanceId,
        };

        const runPrestissimoExplainAnalyzeStatementResult = watsonxDataService.runPrestissimoExplainAnalyzeStatement(runPrestissimoExplainAnalyzeStatementParams);

        // all methods should return a Promise
        expectToBePromise(runPrestissimoExplainAnalyzeStatementResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/prestissimo_engines/{id}/query_explain_analyze', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.statement).toEqual(statement);
        expect(mockRequestOptions.body.verbose).toEqual(verbose);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const statement = 'show schemas in catalog_name';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const runPrestissimoExplainAnalyzeStatementParams = {
          id,
          statement,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.runPrestissimoExplainAnalyzeStatement(runPrestissimoExplainAnalyzeStatementParams);
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
        const id = 'testString';
        const authInstanceId = 'testString';
        const restartPrestissimoEngineParams = {
          id,
          authInstanceId,
        };

        const restartPrestissimoEngineResult = watsonxDataService.restartPrestissimoEngine(restartPrestissimoEngineParams);

        // all methods should return a Promise
        expectToBePromise(restartPrestissimoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/prestissimo_engines/{id}/restart', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const restartPrestissimoEngineParams = {
          id,
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
        const id = 'testString';
        const authInstanceId = 'testString';
        const resumePrestissimoEngineParams = {
          id,
          authInstanceId,
        };

        const resumePrestissimoEngineResult = watsonxDataService.resumePrestissimoEngine(resumePrestissimoEngineParams);

        // all methods should return a Promise
        expectToBePromise(resumePrestissimoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/prestissimo_engines/{id}/resume', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const resumePrestissimoEngineParams = {
          id,
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

      // NodeDescription
      const nodeDescriptionModel = {
        node_type: 'worker',
        quantity: 1,
      };

      function __scalePrestissimoEngineTest() {
        // Construct the params object for operation scalePrestissimoEngine
        const id = 'testString';
        const coordinator = nodeDescriptionModel;
        const worker = nodeDescriptionModel;
        const authInstanceId = 'testString';
        const scalePrestissimoEngineParams = {
          id,
          coordinator,
          worker,
          authInstanceId,
        };

        const scalePrestissimoEngineResult = watsonxDataService.scalePrestissimoEngine(scalePrestissimoEngineParams);

        // all methods should return a Promise
        expectToBePromise(scalePrestissimoEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/prestissimo_engines/{id}/scale', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.coordinator).toEqual(coordinator);
        expect(mockRequestOptions.body.worker).toEqual(worker);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const scalePrestissimoEngineParams = {
          id,
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

        checkUrlAndMethod(mockRequestOptions, '/v3/db2_engines', 'GET');
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
        const configuration = db2EngineDetailsBodyModel;
        const displayName = 'sampleEngine';
        const origin = 'external';
        const description = 'db2 engine description';
        const tags = ['tag1', 'tag2'];
        const authInstanceId = 'testString';
        const createDb2EngineParams = {
          configuration,
          displayName,
          origin,
          description,
          tags,
          authInstanceId,
        };

        const createDb2EngineResult = watsonxDataService.createDb2Engine(createDb2EngineParams);

        // all methods should return a Promise
        expectToBePromise(createDb2EngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/db2_engines', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.configuration).toEqual(configuration);
        expect(mockRequestOptions.body.display_name).toEqual(displayName);
        expect(mockRequestOptions.body.origin).toEqual(origin);
        expect(mockRequestOptions.body.description).toEqual(description);
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
        const configuration = db2EngineDetailsBodyModel;
        const displayName = 'sampleEngine';
        const origin = 'external';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createDb2EngineParams = {
          configuration,
          displayName,
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
        const id = 'testString';
        const authInstanceId = 'testString';
        const deleteDb2EngineParams = {
          id,
          authInstanceId,
        };

        const deleteDb2EngineResult = watsonxDataService.deleteDb2Engine(deleteDb2EngineParams);

        // all methods should return a Promise
        expectToBePromise(deleteDb2EngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/db2_engines/{id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteDb2EngineParams = {
          id,
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
        const id = 'testString';
        const description = 'db2 engine updated description';
        const displayName = 'sampleEngine';
        const tags = ['tag1', 'tag2'];
        const authInstanceId = 'testString';
        const updateDb2EngineParams = {
          id,
          description,
          displayName,
          tags,
          authInstanceId,
        };

        const updateDb2EngineResult = watsonxDataService.updateDb2Engine(updateDb2EngineParams);

        // all methods should return a Promise
        expectToBePromise(updateDb2EngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/db2_engines/{id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.display_name).toEqual(displayName);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateDb2EngineParams = {
          id,
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

        checkUrlAndMethod(mockRequestOptions, '/v3/other_engines', 'GET');
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

      // OtherEngineConfigurationBody
      const otherEngineConfigurationBodyModel = {
        connection_string: '1.2.3.4',
        type: 'netezza',
      };

      function __createOtherEngineTest() {
        // Construct the params object for operation createOtherEngine
        const configuration = otherEngineConfigurationBodyModel;
        const displayName = 'sampleEngine01';
        const origin = 'external';
        const description = 'external engine description';
        const tags = ['tag1', 'tag2'];
        const authInstanceId = 'testString';
        const createOtherEngineParams = {
          configuration,
          displayName,
          origin,
          description,
          tags,
          authInstanceId,
        };

        const createOtherEngineResult = watsonxDataService.createOtherEngine(createOtherEngineParams);

        // all methods should return a Promise
        expectToBePromise(createOtherEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/other_engines', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.configuration).toEqual(configuration);
        expect(mockRequestOptions.body.display_name).toEqual(displayName);
        expect(mockRequestOptions.body.origin).toEqual(origin);
        expect(mockRequestOptions.body.description).toEqual(description);
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
        const configuration = otherEngineConfigurationBodyModel;
        const displayName = 'sampleEngine01';
        const origin = 'external';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createOtherEngineParams = {
          configuration,
          displayName,
          origin,
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
        const id = 'testString';
        const authInstanceId = 'testString';
        const deleteOtherEngineParams = {
          id,
          authInstanceId,
        };

        const deleteOtherEngineResult = watsonxDataService.deleteOtherEngine(deleteOtherEngineParams);

        // all methods should return a Promise
        expectToBePromise(deleteOtherEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/other_engines/{id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteOtherEngineParams = {
          id,
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

  describe('listNetezzaEngines', () => {
    describe('positive tests', () => {
      function __listNetezzaEnginesTest() {
        // Construct the params object for operation listNetezzaEngines
        const authInstanceId = 'testString';
        const listNetezzaEnginesParams = {
          authInstanceId,
        };

        const listNetezzaEnginesResult = watsonxDataService.listNetezzaEngines(listNetezzaEnginesParams);

        // all methods should return a Promise
        expectToBePromise(listNetezzaEnginesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/netezza_engines', 'GET');
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

      // NetezzaEngineConfigurationBody
      const netezzaEngineConfigurationBodyModel = {
        connection_string: '1.2.3.4',
      };

      function __createNetezzaEngineTest() {
        // Construct the params object for operation createNetezzaEngine
        const configuration = netezzaEngineConfigurationBodyModel;
        const displayName = 'sampleEngine';
        const origin = 'external';
        const description = 'netezza engine description';
        const tags = ['tag1', 'tag2'];
        const authInstanceId = 'testString';
        const createNetezzaEngineParams = {
          configuration,
          displayName,
          origin,
          description,
          tags,
          authInstanceId,
        };

        const createNetezzaEngineResult = watsonxDataService.createNetezzaEngine(createNetezzaEngineParams);

        // all methods should return a Promise
        expectToBePromise(createNetezzaEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/netezza_engines', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.configuration).toEqual(configuration);
        expect(mockRequestOptions.body.display_name).toEqual(displayName);
        expect(mockRequestOptions.body.origin).toEqual(origin);
        expect(mockRequestOptions.body.description).toEqual(description);
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
        const configuration = netezzaEngineConfigurationBodyModel;
        const displayName = 'sampleEngine';
        const origin = 'external';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createNetezzaEngineParams = {
          configuration,
          displayName,
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
        const id = 'testString';
        const authInstanceId = 'testString';
        const deleteNetezzaEngineParams = {
          id,
          authInstanceId,
        };

        const deleteNetezzaEngineResult = watsonxDataService.deleteNetezzaEngine(deleteNetezzaEngineParams);

        // all methods should return a Promise
        expectToBePromise(deleteNetezzaEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/netezza_engines/{id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteNetezzaEngineParams = {
          id,
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
        const id = 'testString';
        const description = 'netezza engine updated description';
        const displayName = 'sampleEngine';
        const tags = ['tag1', 'tag2'];
        const authInstanceId = 'testString';
        const updateNetezzaEngineParams = {
          id,
          description,
          displayName,
          tags,
          authInstanceId,
        };

        const updateNetezzaEngineResult = watsonxDataService.updateNetezzaEngine(updateNetezzaEngineParams);

        // all methods should return a Promise
        expectToBePromise(updateNetezzaEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/netezza_engines/{id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.display_name).toEqual(displayName);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateNetezzaEngineParams = {
          id,
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

        checkUrlAndMethod(mockRequestOptions, '/v3/spark_engines', 'GET');
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

      // SparkEndpoints
      const sparkEndpointsModel = {
        applications_api: '$HOST/v4/analytics_engines/c7b3fccf-badb-46b0-b1ef-9b3154424021/spark_applications/application_id',
        history_server_endpoint: '$HOST/v2/spark/v3/instances/c7b3fccf-badb-46b0-b1ef-9b3154424021/spark_history_server',
        spark_access_endpoint: '$HOST/analytics-engine/details/spark-instance_id',
        spark_jobs_v4_endpoint: '$HOST/v4/analytics_engines/c7b3fccf-badb-46b0-b1ef-9b3154424021/spark_applications',
        spark_kernel_endpoint: '$HOST/v4/analytics_engines/c7b3fccf-badb-46b0-b1ef-9b3154424021/jkg/api/kernels',
        view_history_server: 'testString',
        wxd_application_endpoint: '$HOST/v1/1698311655308796/engines/spark817/applications',
        wxd_engine_endpoint: '$HOST/v1/1698311655308796/engines/spark817',
        wxd_history_server_endpoint: '$HOST/v1/1698311655308796/engines/spark817/history_server',
        wxd_history_server_ui_endpoint: '$HOST/v1/1698311655308796/engines/spark817/history_server/ui',
      };

      // SparkEngineHome
      const sparkEngineHomeModel = {
        path: 'spark/spark1234',
        storage_name: 'test-spark-storage',
        volume: 'test-spark-volume',
        volume_id: '1704979825978585',
        volume_name: 'my-volume',
      };

      // SparkEngineResourceLimit
      const sparkEngineResourceLimitModel = {
        cores: '1',
        memory: '4G',
      };

      // SparkEngineResourceUtilisation
      const sparkEngineResourceUtilisationModel = {
        cores: '1m',
        memory: '4Gi',
      };

      // SparkScaleConfig
      const sparkScaleConfigModel = {
        auto_scale_enabled: true,
        current_number_of_nodes: 2,
        maximum_number_of_nodes: 5,
        minimum_number_of_nodes: 1,
        node_type: 'medium',
        number_of_nodes: 2,
      };

      // SparkVscodeConfig
      const sparkVscodeConfigModel = {
        crn: 'crn:v1:staging:public:lakehouse:us-east:a/9aa2b62f2a644ffb9e004451dc631307:00924abc-59a3-45bc-a2c0-58bbccf89ee2',
        environment_type: 'SaaS',
        host: 'us-south.lakehouse.dev.cloud.ibm.com',
        user_name: 'user@example.com',
      };

      // SparkEngineDetails
      const sparkEngineDetailsModel = {
        api_key: 'apikey',
        connection_string: 'https://xyz.region.ae.cloud.123.com/v3/analytics_engines/spark_iae_id',
        default_config: { 'key1': 'configuration' },
        default_version: '4.8.3',
        endpoints: sparkEndpointsModel,
        engine_home: sparkEngineHomeModel,
        engine_sub_type: 'java',
        instance_id: 'spark-id',
        managed_by: 'fully',
        resource_limit_enabled: true,
        resource_limits: sparkEngineResourceLimitModel,
        resource_utilisation: sparkEngineResourceUtilisationModel,
        scale_config: sparkScaleConfigModel,
        vscode_config: sparkVscodeConfigModel,
      };

      function __createSparkEngineTest() {
        // Construct the params object for operation createSparkEngine
        const displayName = 'sampleEngine';
        const origin = 'external';
        const associatedCatalogs = ['iceberg_data', 'hive_data'];
        const configuration = sparkEngineDetailsModel;
        const description = 'spark engine description';
        const id = 'spark123';
        const status = 'provisioning';
        const tags = ['tag1', 'tag2'];
        const type = 'spark';
        const authInstanceId = 'testString';
        const createSparkEngineParams = {
          displayName,
          origin,
          associatedCatalogs,
          configuration,
          description,
          id,
          status,
          tags,
          type,
          authInstanceId,
        };

        const createSparkEngineResult = watsonxDataService.createSparkEngine(createSparkEngineParams);

        // all methods should return a Promise
        expectToBePromise(createSparkEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/spark_engines', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.display_name).toEqual(displayName);
        expect(mockRequestOptions.body.origin).toEqual(origin);
        expect(mockRequestOptions.body.associated_catalogs).toEqual(associatedCatalogs);
        expect(mockRequestOptions.body.configuration).toEqual(configuration);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.id).toEqual(id);
        expect(mockRequestOptions.body.status).toEqual(status);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.type).toEqual(type);
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
        const displayName = 'sampleEngine';
        const origin = 'external';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createSparkEngineParams = {
          displayName,
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

  describe('getSparkEngineCatalog', () => {
    describe('positive tests', () => {
      function __getSparkEngineCatalogTest() {
        // Construct the params object for operation getSparkEngineCatalog
        const engineId = 'testString';
        const id = 'testString';
        const authInstanceId = 'testString';
        const getSparkEngineCatalogParams = {
          engineId,
          id,
          authInstanceId,
        };

        const getSparkEngineCatalogResult = watsonxDataService.getSparkEngineCatalog(getSparkEngineCatalogParams);

        // all methods should return a Promise
        expectToBePromise(getSparkEngineCatalogResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/spark_engines/{engine_id}/catalogs/{id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSparkEngineCatalogParams = {
          engineId,
          id,
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

  describe('getSparkEngine', () => {
    describe('positive tests', () => {
      function __getSparkEngineTest() {
        // Construct the params object for operation getSparkEngine
        const id = 'testString';
        const authInstanceId = 'testString';
        const getSparkEngineParams = {
          id,
          authInstanceId,
        };

        const getSparkEngineResult = watsonxDataService.getSparkEngine(getSparkEngineParams);

        // all methods should return a Promise
        expectToBePromise(getSparkEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/spark_engines/{id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSparkEngineParams = {
          id,
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
        const id = 'testString';
        const authInstanceId = 'testString';
        const deleteSparkEngineParams = {
          id,
          authInstanceId,
        };

        const deleteSparkEngineResult = watsonxDataService.deleteSparkEngine(deleteSparkEngineParams);

        // all methods should return a Promise
        expectToBePromise(deleteSparkEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/spark_engines/{id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteSparkEngineParams = {
          id,
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

      // SparkEngineHomePatch
      const sparkEngineHomePatchModel = {
        storage_name: 'test-spark-storage',
      };

      // SparkEngineResourceLimit
      const sparkEngineResourceLimitModel = {
        cores: '1',
        memory: '4G',
      };

      // SparkEnginePatchEngineDetails
      const sparkEnginePatchEngineDetailsModel = {
        default_config: { 'key1': 'configuration' },
        default_version: '4.8.3',
        engine_home: sparkEngineHomePatchModel,
        resource_limit_enabled: true,
        resource_limits: sparkEngineResourceLimitModel,
      };

      function __updateSparkEngineTest() {
        // Construct the params object for operation updateSparkEngine
        const id = 'testString';
        const configuration = sparkEnginePatchEngineDetailsModel;
        const description = 'updated description for spark engine';
        const displayName = 'sampleEngine';
        const tags = ['tag1', 'tag2'];
        const authInstanceId = 'testString';
        const updateSparkEngineParams = {
          id,
          configuration,
          description,
          displayName,
          tags,
          authInstanceId,
        };

        const updateSparkEngineResult = watsonxDataService.updateSparkEngine(updateSparkEngineParams);

        // all methods should return a Promise
        expectToBePromise(updateSparkEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/spark_engines/{id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.configuration).toEqual(configuration);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.display_name).toEqual(displayName);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateSparkEngineParams = {
          id,
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

  describe('listSparkEngineCatalogs', () => {
    describe('positive tests', () => {
      function __listSparkEngineCatalogsTest() {
        // Construct the params object for operation listSparkEngineCatalogs
        const id = 'testString';
        const authInstanceId = 'testString';
        const listSparkEngineCatalogsParams = {
          id,
          authInstanceId,
        };

        const listSparkEngineCatalogsResult = watsonxDataService.listSparkEngineCatalogs(listSparkEngineCatalogsParams);

        // all methods should return a Promise
        expectToBePromise(listSparkEngineCatalogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/spark_engines/{id}/catalogs', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listSparkEngineCatalogsParams = {
          id,
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
        const id = 'testString';
        const catalogNames = ['iceberg_catalog'];
        const authInstanceId = 'testString';
        const createSparkEngineCatalogsParams = {
          id,
          catalogNames,
          authInstanceId,
        };

        const createSparkEngineCatalogsResult = watsonxDataService.createSparkEngineCatalogs(createSparkEngineCatalogsParams);

        // all methods should return a Promise
        expectToBePromise(createSparkEngineCatalogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/spark_engines/{id}/catalogs', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.catalog_names).toEqual(catalogNames);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const catalogNames = ['iceberg_catalog'];
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createSparkEngineCatalogsParams = {
          id,
          catalogNames,
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
        const id = 'testString';
        const catalogNames = 'testString';
        const authInstanceId = 'testString';
        const deleteSparkEngineCatalogsParams = {
          id,
          catalogNames,
          authInstanceId,
        };

        const deleteSparkEngineCatalogsResult = watsonxDataService.deleteSparkEngineCatalogs(deleteSparkEngineCatalogsParams);

        // all methods should return a Promise
        expectToBePromise(deleteSparkEngineCatalogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/spark_engines/{id}/catalogs', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.catalog_names).toEqual(catalogNames);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const catalogNames = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteSparkEngineCatalogsParams = {
          id,
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

  describe('pauseSparkEngine', () => {
    describe('positive tests', () => {
      function __pauseSparkEngineTest() {
        // Construct the params object for operation pauseSparkEngine
        const id = 'testString';
        const force = true;
        const authInstanceId = 'testString';
        const pauseSparkEngineParams = {
          id,
          force,
          authInstanceId,
        };

        const pauseSparkEngineResult = watsonxDataService.pauseSparkEngine(pauseSparkEngineParams);

        // all methods should return a Promise
        expectToBePromise(pauseSparkEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/spark_engines/{id}/pause', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.force).toEqual(force);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const pauseSparkEngineParams = {
          id,
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
        const id = 'testString';
        const authInstanceId = 'testString';
        const resumeSparkEngineParams = {
          id,
          authInstanceId,
        };

        const resumeSparkEngineResult = watsonxDataService.resumeSparkEngine(resumeSparkEngineParams);

        // all methods should return a Promise
        expectToBePromise(resumeSparkEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/spark_engines/{id}/resume', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const resumeSparkEngineParams = {
          id,
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
        const id = 'testString';
        const numberOfNodes = 2;
        const authInstanceId = 'testString';
        const scaleSparkEngineParams = {
          id,
          numberOfNodes,
          authInstanceId,
        };

        const scaleSparkEngineResult = watsonxDataService.scaleSparkEngine(scaleSparkEngineParams);

        // all methods should return a Promise
        expectToBePromise(scaleSparkEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/spark_engines/{id}/scale', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.number_of_nodes).toEqual(numberOfNodes);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const scaleSparkEngineParams = {
          id,
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

  describe('getSparkEngineApplicationStatus', () => {
    describe('positive tests', () => {
      function __getSparkEngineApplicationStatusTest() {
        // Construct the params object for operation getSparkEngineApplicationStatus
        const engineId = 'testString';
        const id = 'testString';
        const authInstanceId = 'testString';
        const getSparkEngineApplicationStatusParams = {
          engineId,
          id,
          authInstanceId,
        };

        const getSparkEngineApplicationStatusResult = watsonxDataService.getSparkEngineApplicationStatus(getSparkEngineApplicationStatusParams);

        // all methods should return a Promise
        expectToBePromise(getSparkEngineApplicationStatusResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/spark_engines/{engine_id}/applications/{id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSparkEngineApplicationStatusParams = {
          engineId,
          id,
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

  describe('deleteSparkEngineApplication', () => {
    describe('positive tests', () => {
      function __deleteSparkEngineApplicationTest() {
        // Construct the params object for operation deleteSparkEngineApplication
        const engineId = 'testString';
        const id = 'testString';
        const authInstanceId = 'testString';
        const deleteSparkEngineApplicationParams = {
          engineId,
          id,
          authInstanceId,
        };

        const deleteSparkEngineApplicationResult = watsonxDataService.deleteSparkEngineApplication(deleteSparkEngineApplicationParams);

        // all methods should return a Promise
        expectToBePromise(deleteSparkEngineApplicationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/spark_engines/{engine_id}/applications/{id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.id).toEqual(id);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteSparkEngineApplicationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteSparkEngineApplicationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteSparkEngineApplicationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteSparkEngineApplicationParams = {
          engineId,
          id,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteSparkEngineApplication(deleteSparkEngineApplicationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteSparkEngineApplication({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteSparkEngineApplication();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getSparkEngineApplicationUi', () => {
    describe('positive tests', () => {
      function __getSparkEngineApplicationUiTest() {
        // Construct the params object for operation getSparkEngineApplicationUi
        const engineId = 'testString';
        const id = 'testString';
        const authInstanceId = 'testString';
        const getSparkEngineApplicationUiParams = {
          engineId,
          id,
          authInstanceId,
        };

        const getSparkEngineApplicationUiResult = watsonxDataService.getSparkEngineApplicationUi(getSparkEngineApplicationUiParams);

        // all methods should return a Promise
        expectToBePromise(getSparkEngineApplicationUiResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/spark_engines/{engine_id}/applications/{id}/ui', 'GET');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.id).toEqual(id);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSparkEngineApplicationUiTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getSparkEngineApplicationUiTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getSparkEngineApplicationUiTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSparkEngineApplicationUiParams = {
          engineId,
          id,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getSparkEngineApplicationUi(getSparkEngineApplicationUiParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getSparkEngineApplicationUi({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getSparkEngineApplicationUi();
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
        const id = 'testString';
        const authInstanceId = 'testString';
        const state = ['testString'];
        const submissionTimeInterval = 'testString';
        const startTimeInterval = 'testString';
        const endTimeInterval = 'testString';
        const limit = 500;
        const start = 'testString';
        const listSparkEngineApplicationsParams = {
          id,
          authInstanceId,
          state,
          submissionTimeInterval,
          startTimeInterval,
          endTimeInterval,
          limit,
          start,
        };

        const listSparkEngineApplicationsResult = watsonxDataService.listSparkEngineApplications(listSparkEngineApplicationsParams);

        // all methods should return a Promise
        expectToBePromise(listSparkEngineApplicationsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/spark_engines/{id}/applications', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.state).toEqual(state);
        expect(mockRequestOptions.qs.submission_time_interval).toEqual(submissionTimeInterval);
        expect(mockRequestOptions.qs.start_time_interval).toEqual(startTimeInterval);
        expect(mockRequestOptions.qs.end_time_interval).toEqual(endTimeInterval);
        expect(mockRequestOptions.qs.limit).toEqual(limit);
        expect(mockRequestOptions.qs.start).toEqual(start);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listSparkEngineApplicationsParams = {
          id,
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

    describe('SparkEngineApplicationsPager tests', () => {
      const serviceUrl = watsonxDataServiceOptions.url;
      const path = '/v3/spark_engines/testString/applications';
      const mockPagerResponse1 =
        '{"next":{"href":"https://myhost.com/somePath?start=1"},"total_count":2,"limit":1,"applications":[{"auto_termination_time":"2020-12-08T10:00:00.000Z","creation_time":"Saturday 28 October 2023 07:17:06.856+0000","deploy_mode":"stand-alone","end_time":"2020-12-08T10:00:00.000Z","failed_time":"Saturday 28 October 2023 07:17:26.649+0000","finish_time":"Saturday 28 October 2023 07:17:38.966+0000","id":"cd7cbf1f-8893-4c51-aa3d-d92729f05e99","idempotency_key":"idempotency_key","init_scripts":["file://init_scripts/test.sh"],"max_retries":"3","min_retry_interval_in_seconds":"30","retry_attempt":"2","runtime":{"spark_version":"3.4"},"spark_application_id":"app-20231028071726-0000","spark_application_name":"PythonWordCount","spark_ui":"$HOST/v1/1698311655308796/engines/spark817/applications/c7b3fccf-badb-46b0-b1ef-9b3154424021/ui","spark_version":"3.4","start_time":"Saturday 28 October 2023 07:17:26.649+0000","state":"FINISHED","state_details":[{"code":"code","message":"message","type":"type"}],"submission_time":"2023-11-01T11:18:49.758Z","template_id":"spark-3.3-jaas-v2-cp4d-template","timeout_in_seconds":"60","wxd_application_ui_endpoint":"$HOST/v1/1698311655308796/engines/spark817/applications/c7b3fccf-badb-46b0-b1ef-9b3154424021/ui"}]}';
      const mockPagerResponse2 =
        '{"total_count":2,"limit":1,"applications":[{"auto_termination_time":"2020-12-08T10:00:00.000Z","creation_time":"Saturday 28 October 2023 07:17:06.856+0000","deploy_mode":"stand-alone","end_time":"2020-12-08T10:00:00.000Z","failed_time":"Saturday 28 October 2023 07:17:26.649+0000","finish_time":"Saturday 28 October 2023 07:17:38.966+0000","id":"cd7cbf1f-8893-4c51-aa3d-d92729f05e99","idempotency_key":"idempotency_key","init_scripts":["file://init_scripts/test.sh"],"max_retries":"3","min_retry_interval_in_seconds":"30","retry_attempt":"2","runtime":{"spark_version":"3.4"},"spark_application_id":"app-20231028071726-0000","spark_application_name":"PythonWordCount","spark_ui":"$HOST/v1/1698311655308796/engines/spark817/applications/c7b3fccf-badb-46b0-b1ef-9b3154424021/ui","spark_version":"3.4","start_time":"Saturday 28 October 2023 07:17:26.649+0000","state":"FINISHED","state_details":[{"code":"code","message":"message","type":"type"}],"submission_time":"2023-11-01T11:18:49.758Z","template_id":"spark-3.3-jaas-v2-cp4d-template","timeout_in_seconds":"60","wxd_application_ui_endpoint":"$HOST/v1/1698311655308796/engines/spark817/applications/c7b3fccf-badb-46b0-b1ef-9b3154424021/ui"}]}';

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
          id: 'testString',
          authInstanceId: 'testString',
          state: ['testString'],
          submissionTimeInterval: 'testString',
          startTimeInterval: 'testString',
          endTimeInterval: 'testString',
          limit: 10,
        };
        const allResults = [];
        const pager = new WatsonxDataV3.SparkEngineApplicationsPager(watsonxDataService, params);
        while (pager.hasNext()) {
          const nextPage = await pager.getNext();
          expect(nextPage).not.toBeNull();
          allResults.push(...nextPage);
        }
        expect(allResults).not.toBeNull();
        expect(allResults).toHaveLength(2);
      });

      test('getAll()', async () => {
        const params = {
          id: 'testString',
          authInstanceId: 'testString',
          state: ['testString'],
          submissionTimeInterval: 'testString',
          startTimeInterval: 'testString',
          endTimeInterval: 'testString',
          limit: 10,
        };
        const pager = new WatsonxDataV3.SparkEngineApplicationsPager(watsonxDataService, params);
        const allResults = await pager.getAll();
        expect(allResults).not.toBeNull();
        expect(allResults).toHaveLength(2);
      });
    });
  });

  describe('createSparkEngineApplication', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // SparkApplicationRuntime
      const sparkApplicationRuntimeModel = {
        spark_version: '3.4',
      };

      // SparkApplicationDetails
      const sparkApplicationDetailsModel = {
        application: 's3://mybucket/wordcount.py',
        archives: 's3://mybucket/myarchive.zip',
        arguments: ['people.txt'],
        class: 'org.apache.spark.examples.SparkPi',
        conf: { 'key1': 'configuration' },
        env: { 'key1': 'configuration' },
        files: 's3://mybucket/myfile.txt',
        jars: 'testString',
        name: 'SparkApplicaton1',
        packages: 'org.apache.spark:example_1.2.3',
        repositories: 'https://repo1.maven.org/maven2/',
        runtime: sparkApplicationRuntimeModel,
        spark_version: '3.3',
      };

      // SparkEngineApplicationCallback
      const sparkEngineApplicationCallbackModel = {
        url: 'testString',
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
        const id = 'testString';
        const applicationDetails = sparkApplicationDetailsModel;
        const callback = sparkEngineApplicationCallbackModel;
        const contextId = 'testString';
        const contextType = 'project';
        const deployMode = 'local';
        const idempotencyKey = 'testString';
        const initScripts = ['file://init_scripts/test.sh'];
        const jobEndpoint = '<host>/v4/analytics_engines/c7b3fccf-badb-46b0-b1ef-9b3154424021/engine_applications';
        const maxRetries = '3';
        const minRetryIntervalInSeconds = '30';
        const serviceInstanceId = 'iae';
        const timeoutInSeconds = '60';
        const type = 'spark';
        const volumes = [sparkVolumeDetailsModel];
        const authInstanceId = 'testString';
        const createSparkEngineApplicationParams = {
          id,
          applicationDetails,
          callback,
          contextId,
          contextType,
          deployMode,
          idempotencyKey,
          initScripts,
          jobEndpoint,
          maxRetries,
          minRetryIntervalInSeconds,
          serviceInstanceId,
          timeoutInSeconds,
          type,
          volumes,
          authInstanceId,
        };

        const createSparkEngineApplicationResult = watsonxDataService.createSparkEngineApplication(createSparkEngineApplicationParams);

        // all methods should return a Promise
        expectToBePromise(createSparkEngineApplicationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/spark_engines/{id}/applications', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.application_details).toEqual(applicationDetails);
        expect(mockRequestOptions.body.callback).toEqual(callback);
        expect(mockRequestOptions.body.context_id).toEqual(contextId);
        expect(mockRequestOptions.body.context_type).toEqual(contextType);
        expect(mockRequestOptions.body.deploy_mode).toEqual(deployMode);
        expect(mockRequestOptions.body.idempotency_key).toEqual(idempotencyKey);
        expect(mockRequestOptions.body.init_scripts).toEqual(initScripts);
        expect(mockRequestOptions.body.job_endpoint).toEqual(jobEndpoint);
        expect(mockRequestOptions.body.max_retries).toEqual(maxRetries);
        expect(mockRequestOptions.body.min_retry_interval_in_seconds).toEqual(minRetryIntervalInSeconds);
        expect(mockRequestOptions.body.service_instance_id).toEqual(serviceInstanceId);
        expect(mockRequestOptions.body.timeout_in_seconds).toEqual(timeoutInSeconds);
        expect(mockRequestOptions.body.type).toEqual(type);
        expect(mockRequestOptions.body.volumes).toEqual(volumes);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const applicationDetails = sparkApplicationDetailsModel;
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createSparkEngineApplicationParams = {
          id,
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

  describe('getSparkEngineHistoryServer', () => {
    describe('positive tests', () => {
      function __getSparkEngineHistoryServerTest() {
        // Construct the params object for operation getSparkEngineHistoryServer
        const id = 'testString';
        const authInstanceId = 'testString';
        const getSparkEngineHistoryServerParams = {
          id,
          authInstanceId,
        };

        const getSparkEngineHistoryServerResult = watsonxDataService.getSparkEngineHistoryServer(getSparkEngineHistoryServerParams);

        // all methods should return a Promise
        expectToBePromise(getSparkEngineHistoryServerResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/spark_engines/{id}/history_server', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSparkEngineHistoryServerParams = {
          id,
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
        const id = 'testString';
        const cores = '1';
        const memory = '4G';
        const authInstanceId = 'testString';
        const startSparkEngineHistoryServerParams = {
          id,
          cores,
          memory,
          authInstanceId,
        };

        const startSparkEngineHistoryServerResult = watsonxDataService.startSparkEngineHistoryServer(startSparkEngineHistoryServerParams);

        // all methods should return a Promise
        expectToBePromise(startSparkEngineHistoryServerResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/spark_engines/{id}/history_server', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.cores).toEqual(cores);
        expect(mockRequestOptions.body.memory).toEqual(memory);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const startSparkEngineHistoryServerParams = {
          id,
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
        const id = 'testString';
        const authInstanceId = 'testString';
        const deleteSparkEngineHistoryServerParams = {
          id,
          authInstanceId,
        };

        const deleteSparkEngineHistoryServerResult = watsonxDataService.deleteSparkEngineHistoryServer(deleteSparkEngineHistoryServerParams);

        // all methods should return a Promise
        expectToBePromise(deleteSparkEngineHistoryServerResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/spark_engines/{id}/history_server', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteSparkEngineHistoryServerParams = {
          id,
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

  describe('getSparkEngineHistoryServerUi', () => {
    describe('positive tests', () => {
      function __getSparkEngineHistoryServerUiTest() {
        // Construct the params object for operation getSparkEngineHistoryServerUi
        const id = 'testString';
        const authInstanceId = 'testString';
        const getSparkEngineHistoryServerUiParams = {
          id,
          authInstanceId,
        };

        const getSparkEngineHistoryServerUiResult = watsonxDataService.getSparkEngineHistoryServerUi(getSparkEngineHistoryServerUiParams);

        // all methods should return a Promise
        expectToBePromise(getSparkEngineHistoryServerUiResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/spark_engines/{id}/history_server/ui', 'GET');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSparkEngineHistoryServerUiTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getSparkEngineHistoryServerUiTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getSparkEngineHistoryServerUiTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSparkEngineHistoryServerUiParams = {
          id,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getSparkEngineHistoryServerUi(getSparkEngineHistoryServerUiParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getSparkEngineHistoryServerUi({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getSparkEngineHistoryServerUi();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('validateIntegration', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // Catalogs
      const catalogsModel = {
        catalog_names: ['iceberg_data', 'hive_data'],
      };

      function __validateIntegrationTest() {
        // Construct the params object for operation validateIntegration
        const type = 'ranger';
        const accessToken = 'Header.Payload.Signature';
        const apikey = 'apikey';
        const catalogs = catalogsModel;
        const certificate = 'certificate_content_base64_encoded';
        const password = 'password';
        const ssl = true;
        const url = 'https://www.abcd.com';
        const username = 'username';
        const authInstanceId = 'testString';
        const validateIntegrationParams = {
          type,
          accessToken,
          apikey,
          catalogs,
          certificate,
          password,
          ssl,
          url,
          username,
          authInstanceId,
        };

        const validateIntegrationResult = watsonxDataService.validateIntegration(validateIntegrationParams);

        // all methods should return a Promise
        expectToBePromise(validateIntegrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/integration_validation', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.type).toEqual(type);
        expect(mockRequestOptions.body.access_token).toEqual(accessToken);
        expect(mockRequestOptions.body.apikey).toEqual(apikey);
        expect(mockRequestOptions.body.catalogs).toEqual(catalogs);
        expect(mockRequestOptions.body.certificate).toEqual(certificate);
        expect(mockRequestOptions.body.password).toEqual(password);
        expect(mockRequestOptions.body.ssl).toEqual(ssl);
        expect(mockRequestOptions.body.url).toEqual(url);
        expect(mockRequestOptions.body.username).toEqual(username);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __validateIntegrationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __validateIntegrationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __validateIntegrationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const type = 'ranger';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const validateIntegrationParams = {
          type,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.validateIntegration(validateIntegrationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.validateIntegration({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.validateIntegration();
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
        const type = ['testString'];
        const state = ['active'];
        const listAllIntegrationsParams = {
          authInstanceId,
          secret,
          type,
          state,
        };

        const listAllIntegrationsResult = watsonxDataService.listAllIntegrations(listAllIntegrationsParams);

        // all methods should return a Promise
        expectToBePromise(listAllIntegrationsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/integrations', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        checkUserHeader(createRequestMock, 'Secret', secret);
        expect(mockRequestOptions.qs.type).toEqual(type);
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
      // Request models needed by this operation.

      // Catalogs
      const catalogsModel = {
        catalog_names: ['iceberg_data', 'hive_data'],
      };

      function __createIntegrationTest() {
        // Construct the params object for operation createIntegration
        const accessToken = 'Header.Payload.Signature';
        const apikey = 'apikey';
        const catalogs = catalogsModel;
        const certificate = 'certificate_content_base64_encoded';
        const certificateExtension = 'pem';
        const connectionMode = 'external';
        const crossAccountIntegration = false;
        const enableDataPolicyWithinWxd = false;
        const ikcUserAccountId = 'ikc_user_account_id';
        const password = 'password';
        const policyCacheTimeConfiguration = '123456789';
        const resource = 'presto01';
        const ssl = true;
        const type = 'ranger';
        const url = 'https://abcd.efgh.com';
        const username = 'username';
        const authInstanceId = 'testString';
        const createIntegrationParams = {
          accessToken,
          apikey,
          catalogs,
          certificate,
          certificateExtension,
          connectionMode,
          crossAccountIntegration,
          enableDataPolicyWithinWxd,
          ikcUserAccountId,
          password,
          policyCacheTimeConfiguration,
          resource,
          ssl,
          type,
          url,
          username,
          authInstanceId,
        };

        const createIntegrationResult = watsonxDataService.createIntegration(createIntegrationParams);

        // all methods should return a Promise
        expectToBePromise(createIntegrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/integrations', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.access_token).toEqual(accessToken);
        expect(mockRequestOptions.body.apikey).toEqual(apikey);
        expect(mockRequestOptions.body.catalogs).toEqual(catalogs);
        expect(mockRequestOptions.body.certificate).toEqual(certificate);
        expect(mockRequestOptions.body.certificate_extension).toEqual(certificateExtension);
        expect(mockRequestOptions.body.connection_mode).toEqual(connectionMode);
        expect(mockRequestOptions.body.cross_account_integration).toEqual(crossAccountIntegration);
        expect(mockRequestOptions.body.enable_data_policy_within_wxd).toEqual(enableDataPolicyWithinWxd);
        expect(mockRequestOptions.body.ikc_user_account_id).toEqual(ikcUserAccountId);
        expect(mockRequestOptions.body.password).toEqual(password);
        expect(mockRequestOptions.body.policy_cache_time_configuration).toEqual(policyCacheTimeConfiguration);
        expect(mockRequestOptions.body.resource).toEqual(resource);
        expect(mockRequestOptions.body.ssl).toEqual(ssl);
        expect(mockRequestOptions.body.type).toEqual(type);
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
        const id = 'testString';
        const authInstanceId = 'testString';
        const getIntegrationsParams = {
          id,
          authInstanceId,
        };

        const getIntegrationsResult = watsonxDataService.getIntegrations(getIntegrationsParams);

        // all methods should return a Promise
        expectToBePromise(getIntegrationsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/integrations/{id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getIntegrationsParams = {
          id,
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
        const id = 'testString';
        const authInstanceId = 'testString';
        const deleteIntegrationParams = {
          id,
          authInstanceId,
        };

        const deleteIntegrationResult = watsonxDataService.deleteIntegration(deleteIntegrationParams);

        // all methods should return a Promise
        expectToBePromise(deleteIntegrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/integrations/{id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteIntegrationParams = {
          id,
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
      // Request models needed by this operation.

      // Catalogs
      const catalogsModel = {
        catalog_names: ['iceberg_data', 'hive_data'],
      };

      function __updateIntegrationTest() {
        // Construct the params object for operation updateIntegration
        const id = 'testString';
        const accessToken = 'Header.Payload.Signature';
        const apikey = 'apikey';
        const catalogs = catalogsModel;
        const certificate = 'certificate_content_base64_encoded';
        const certificateExtension = 'pem';
        const connectionMode = 'external';
        const crossAccountIntegration = false;
        const enableDataPolicyWithinWxd = false;
        const ikcUserAccountId = 'ikc_user_account_id';
        const password = 'password';
        const policyCacheTimeConfiguration = '123456789';
        const resource = 'presto01';
        const ssl = true;
        const state = 'active';
        const url = 'https://abcd.efgh.com';
        const username = 'username';
        const authInstanceId = 'testString';
        const secret = 'testString';
        const updateIntegrationParams = {
          id,
          accessToken,
          apikey,
          catalogs,
          certificate,
          certificateExtension,
          connectionMode,
          crossAccountIntegration,
          enableDataPolicyWithinWxd,
          ikcUserAccountId,
          password,
          policyCacheTimeConfiguration,
          resource,
          ssl,
          state,
          url,
          username,
          authInstanceId,
          secret,
        };

        const updateIntegrationResult = watsonxDataService.updateIntegration(updateIntegrationParams);

        // all methods should return a Promise
        expectToBePromise(updateIntegrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/integrations/{id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        checkUserHeader(createRequestMock, 'Secret', secret);
        expect(mockRequestOptions.body.access_token).toEqual(accessToken);
        expect(mockRequestOptions.body.apikey).toEqual(apikey);
        expect(mockRequestOptions.body.catalogs).toEqual(catalogs);
        expect(mockRequestOptions.body.certificate).toEqual(certificate);
        expect(mockRequestOptions.body.certificate_extension).toEqual(certificateExtension);
        expect(mockRequestOptions.body.connection_mode).toEqual(connectionMode);
        expect(mockRequestOptions.body.cross_account_integration).toEqual(crossAccountIntegration);
        expect(mockRequestOptions.body.enable_data_policy_within_wxd).toEqual(enableDataPolicyWithinWxd);
        expect(mockRequestOptions.body.ikc_user_account_id).toEqual(ikcUserAccountId);
        expect(mockRequestOptions.body.password).toEqual(password);
        expect(mockRequestOptions.body.policy_cache_time_configuration).toEqual(policyCacheTimeConfiguration);
        expect(mockRequestOptions.body.resource).toEqual(resource);
        expect(mockRequestOptions.body.ssl).toEqual(ssl);
        expect(mockRequestOptions.body.state).toEqual(state);
        expect(mockRequestOptions.body.url).toEqual(url);
        expect(mockRequestOptions.body.username).toEqual(username);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateIntegrationParams = {
          id,
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

  describe('registerTable', () => {
    describe('positive tests', () => {
      function __registerTableTest() {
        // Construct the params object for operation registerTable
        const catalogId = 'testString';
        const schemaId = 'testString';
        const metadataLocation = 's3a://storagename/path/to/table/metadata_location/_delta_log';
        const tableName = 'table1';
        const authInstanceId = 'testString';
        const registerTableParams = {
          catalogId,
          schemaId,
          metadataLocation,
          tableName,
          authInstanceId,
        };

        const registerTableResult = watsonxDataService.registerTable(registerTableParams);

        // all methods should return a Promise
        expectToBePromise(registerTableResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/catalogs/{catalog_id}/schemas/{schema_id}/register', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.metadata_location).toEqual(metadataLocation);
        expect(mockRequestOptions.body.table_name).toEqual(tableName);
        expect(mockRequestOptions.path.catalog_id).toEqual(catalogId);
        expect(mockRequestOptions.path.schema_id).toEqual(schemaId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __registerTableTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __registerTableTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __registerTableTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const catalogId = 'testString';
        const schemaId = 'testString';
        const metadataLocation = 's3a://storagename/path/to/table/metadata_location/_delta_log';
        const tableName = 'table1';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const registerTableParams = {
          catalogId,
          schemaId,
          metadataLocation,
          tableName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.registerTable(registerTableParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.registerTable({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.registerTable();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('loadTable', () => {
    describe('positive tests', () => {
      function __loadTableTest() {
        // Construct the params object for operation loadTable
        const catalogId = 'testString';
        const schemaId = 'testString';
        const tableId = 'testString';
        const authInstanceId = 'testString';
        const loadTableParams = {
          catalogId,
          schemaId,
          tableId,
          authInstanceId,
        };

        const loadTableResult = watsonxDataService.loadTable(loadTableParams);

        // all methods should return a Promise
        expectToBePromise(loadTableResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/catalogs/{catalog_id}/schemas/{schema_id}/tables/{table_id}/metadata', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.catalog_id).toEqual(catalogId);
        expect(mockRequestOptions.path.schema_id).toEqual(schemaId);
        expect(mockRequestOptions.path.table_id).toEqual(tableId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __loadTableTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __loadTableTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __loadTableTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const catalogId = 'testString';
        const schemaId = 'testString';
        const tableId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const loadTableParams = {
          catalogId,
          schemaId,
          tableId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.loadTable(loadTableParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.loadTable({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.loadTable();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listCatalogs', () => {
    describe('positive tests', () => {
      function __listCatalogsTest() {
        // Construct the params object for operation listCatalogs
        const authInstanceId = 'testString';
        const secret = 'testString';
        const defaultCatalogs = false;
        const view = 'testString';
        const listCatalogsParams = {
          authInstanceId,
          secret,
          defaultCatalogs,
          view,
        };

        const listCatalogsResult = watsonxDataService.listCatalogs(listCatalogsParams);

        // all methods should return a Promise
        expectToBePromise(listCatalogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/catalogs', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        checkUserHeader(createRequestMock, 'Secret', secret);
        expect(mockRequestOptions.qs.default_catalogs).toEqual(defaultCatalogs);
        expect(mockRequestOptions.qs.view).toEqual(view);
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

  describe('getCatalogEngineAssociation', () => {
    describe('positive tests', () => {
      function __getCatalogEngineAssociationTest() {
        // Construct the params object for operation getCatalogEngineAssociation
        const catalogName = 'testString';
        const authInstanceId = 'testString';
        const getCatalogEngineAssociationParams = {
          catalogName,
          authInstanceId,
        };

        const getCatalogEngineAssociationResult = watsonxDataService.getCatalogEngineAssociation(getCatalogEngineAssociationParams);

        // all methods should return a Promise
        expectToBePromise(getCatalogEngineAssociationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/catalogs/{catalog_name}/engines', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.catalog_name).toEqual(catalogName);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getCatalogEngineAssociationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getCatalogEngineAssociationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getCatalogEngineAssociationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const catalogName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getCatalogEngineAssociationParams = {
          catalogName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getCatalogEngineAssociation(getCatalogEngineAssociationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getCatalogEngineAssociation({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getCatalogEngineAssociation();
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
        const catalogName = 'testString';
        const schemaName = 'testString';
        const authInstanceId = 'testString';
        const deleteSchemaParams = {
          engineId,
          catalogName,
          schemaName,
          authInstanceId,
        };

        const deleteSchemaResult = watsonxDataService.deleteSchema(deleteSchemaParams);

        // all methods should return a Promise
        expectToBePromise(deleteSchemaResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/catalogs/{catalog_name}/schemas/{schema_name}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.path.schema_name).toEqual(schemaName);
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
        const catalogName = 'testString';
        const schemaName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteSchemaParams = {
          engineId,
          catalogName,
          schemaName,
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
        const catalogName = 'testString';
        const schemaName = 'testString';
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const listTablesParams = {
          catalogName,
          schemaName,
          engineId,
          authInstanceId,
        };

        const listTablesResult = watsonxDataService.listTables(listTablesParams);

        // all methods should return a Promise
        expectToBePromise(listTablesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/catalogs/{catalog_name}/schemas/{schema_name}/tables', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.path.schema_name).toEqual(schemaName);
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
        const catalogName = 'testString';
        const schemaName = 'testString';
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listTablesParams = {
          catalogName,
          schemaName,
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
        const catalogName = 'testString';
        const schemaName = 'testString';
        const tableName = 'testString';
        const engineId = 'testString';
        const type = 'testString';
        const authInstanceId = 'testString';
        const getTableParams = {
          catalogName,
          schemaName,
          tableName,
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

        checkUrlAndMethod(mockRequestOptions, '/v3/catalogs/{catalog_name}/schemas/{schema_name}/tables/{table_name}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.qs.type).toEqual(type);
        expect(mockRequestOptions.path.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.path.schema_name).toEqual(schemaName);
        expect(mockRequestOptions.path.table_name).toEqual(tableName);
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
        const catalogName = 'testString';
        const schemaName = 'testString';
        const tableName = 'testString';
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getTableParams = {
          catalogName,
          schemaName,
          tableName,
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
        const catalogName = 'testString';
        const schemaName = 'testString';
        const tableName = 'testString';
        const engineId = 'testString';
        const type = 'testString';
        const authInstanceId = 'testString';
        const deleteTableParams = {
          catalogName,
          schemaName,
          tableName,
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

        checkUrlAndMethod(mockRequestOptions, '/v3/catalogs/{catalog_name}/schemas/{schema_name}/tables/{table_name}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.qs.type).toEqual(type);
        expect(mockRequestOptions.path.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.path.schema_name).toEqual(schemaName);
        expect(mockRequestOptions.path.table_name).toEqual(tableName);
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
        const catalogName = 'testString';
        const schemaName = 'testString';
        const tableName = 'testString';
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteTableParams = {
          catalogName,
          schemaName,
          tableName,
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
        const catalogName = 'testString';
        const schemaName = 'testString';
        const tableName = 'testString';
        const engineId = 'testString';
        const name = 'updated_table_name';
        const type = 'testString';
        const authInstanceId = 'testString';
        const updateTableParams = {
          catalogName,
          schemaName,
          tableName,
          engineId,
          name,
          type,
          authInstanceId,
        };

        const updateTableResult = watsonxDataService.updateTable(updateTableParams);

        // all methods should return a Promise
        expectToBePromise(updateTableResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/catalogs/{catalog_name}/schemas/{schema_name}/tables/{table_name}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.qs.type).toEqual(type);
        expect(mockRequestOptions.path.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.path.schema_name).toEqual(schemaName);
        expect(mockRequestOptions.path.table_name).toEqual(tableName);
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
        const catalogName = 'testString';
        const schemaName = 'testString';
        const tableName = 'testString';
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateTableParams = {
          catalogName,
          schemaName,
          tableName,
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
        const catalogName = 'testString';
        const schemaName = 'testString';
        const tableName = 'testString';
        const authInstanceId = 'testString';
        const listColumnsParams = {
          engineId,
          catalogName,
          schemaName,
          tableName,
          authInstanceId,
        };

        const listColumnsResult = watsonxDataService.listColumns(listColumnsParams);

        // all methods should return a Promise
        expectToBePromise(listColumnsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/catalogs/{catalog_name}/schemas/{schema_name}/tables/{table_name}/columns', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.path.schema_name).toEqual(schemaName);
        expect(mockRequestOptions.path.table_name).toEqual(tableName);
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
        const catalogName = 'testString';
        const schemaName = 'testString';
        const tableName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listColumnsParams = {
          engineId,
          catalogName,
          schemaName,
          tableName,
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
        comment: 'Expenses column for each department',
        extra: 'AUTO_INCREMENT',
        length: '30',
        name: 'expenses',
        precision: '10',
        scale: '2',
        type: 'varchar',
      };

      function __createColumnsTest() {
        // Construct the params object for operation createColumns
        const engineId = 'testString';
        const catalogName = 'testString';
        const schemaName = 'testString';
        const tableName = 'testString';
        const columns = [columnModel];
        const authInstanceId = 'testString';
        const createColumnsParams = {
          engineId,
          catalogName,
          schemaName,
          tableName,
          columns,
          authInstanceId,
        };

        const createColumnsResult = watsonxDataService.createColumns(createColumnsParams);

        // all methods should return a Promise
        expectToBePromise(createColumnsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/catalogs/{catalog_name}/schemas/{schema_name}/tables/{table_name}/columns', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.columns).toEqual(columns);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.path.schema_name).toEqual(schemaName);
        expect(mockRequestOptions.path.table_name).toEqual(tableName);
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
        const catalogName = 'testString';
        const schemaName = 'testString';
        const tableName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createColumnsParams = {
          engineId,
          catalogName,
          schemaName,
          tableName,
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
        const catalogName = 'testString';
        const schemaName = 'testString';
        const tableName = 'testString';
        const columnName = 'testString';
        const authInstanceId = 'testString';
        const deleteColumnParams = {
          engineId,
          catalogName,
          schemaName,
          tableName,
          columnName,
          authInstanceId,
        };

        const deleteColumnResult = watsonxDataService.deleteColumn(deleteColumnParams);

        // all methods should return a Promise
        expectToBePromise(deleteColumnResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/catalogs/{catalog_name}/schemas/{schema_name}/tables/{table_name}/columns/{column_name}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.path.schema_name).toEqual(schemaName);
        expect(mockRequestOptions.path.table_name).toEqual(tableName);
        expect(mockRequestOptions.path.column_name).toEqual(columnName);
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
        const catalogName = 'testString';
        const schemaName = 'testString';
        const tableName = 'testString';
        const columnName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteColumnParams = {
          engineId,
          catalogName,
          schemaName,
          tableName,
          columnName,
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
        const catalogName = 'testString';
        const schemaName = 'testString';
        const tableName = 'testString';
        const columnName = 'testString';
        const name = 'expenses';
        const authInstanceId = 'testString';
        const updateColumnParams = {
          engineId,
          catalogName,
          schemaName,
          tableName,
          columnName,
          name,
          authInstanceId,
        };

        const updateColumnResult = watsonxDataService.updateColumn(updateColumnParams);

        // all methods should return a Promise
        expectToBePromise(updateColumnResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/catalogs/{catalog_name}/schemas/{schema_name}/tables/{table_name}/columns/{column_name}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.path.schema_name).toEqual(schemaName);
        expect(mockRequestOptions.path.table_name).toEqual(tableName);
        expect(mockRequestOptions.path.column_name).toEqual(columnName);
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
        const catalogName = 'testString';
        const schemaName = 'testString';
        const tableName = 'testString';
        const columnName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateColumnParams = {
          engineId,
          catalogName,
          schemaName,
          tableName,
          columnName,
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

  describe('rollbackTable', () => {
    describe('positive tests', () => {
      function __rollbackTableTest() {
        // Construct the params object for operation rollbackTable
        const catalogName = 'testString';
        const schemaName = 'testString';
        const tableName = 'testString';
        const snapshotId = '12357647';
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const rollbackTableParams = {
          catalogName,
          schemaName,
          tableName,
          snapshotId,
          engineId,
          authInstanceId,
        };

        const rollbackTableResult = watsonxDataService.rollbackTable(rollbackTableParams);

        // all methods should return a Promise
        expectToBePromise(rollbackTableResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/catalogs/{catalog_name}/schemas/{schema_name}/tables/{table_name}/rollback', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.snapshot_id).toEqual(snapshotId);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.path.schema_name).toEqual(schemaName);
        expect(mockRequestOptions.path.table_name).toEqual(tableName);
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
        const catalogName = 'testString';
        const schemaName = 'testString';
        const tableName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const rollbackTableParams = {
          catalogName,
          schemaName,
          tableName,
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

  describe('listTableSnapshots', () => {
    describe('positive tests', () => {
      function __listTableSnapshotsTest() {
        // Construct the params object for operation listTableSnapshots
        const catalogName = 'testString';
        const schemaName = 'testString';
        const tableName = 'testString';
        const engineId = 'testString';
        const authInstanceId = 'testString';
        const listTableSnapshotsParams = {
          catalogName,
          schemaName,
          tableName,
          engineId,
          authInstanceId,
        };

        const listTableSnapshotsResult = watsonxDataService.listTableSnapshots(listTableSnapshotsParams);

        // all methods should return a Promise
        expectToBePromise(listTableSnapshotsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/catalogs/{catalog_name}/schemas/{schema_name}/tables/{table_name}/snapshots', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.path.schema_name).toEqual(schemaName);
        expect(mockRequestOptions.path.table_name).toEqual(tableName);
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
        const catalogName = 'testString';
        const schemaName = 'testString';
        const tableName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listTableSnapshotsParams = {
          catalogName,
          schemaName,
          tableName,
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

  describe('listSchemas', () => {
    describe('positive tests', () => {
      function __listSchemasTest() {
        // Construct the params object for operation listSchemas
        const engineId = 'testString';
        const id = 'testString';
        const authInstanceId = 'testString';
        const listSchemasParams = {
          engineId,
          id,
          authInstanceId,
        };

        const listSchemasResult = watsonxDataService.listSchemas(listSchemasParams);

        // all methods should return a Promise
        expectToBePromise(listSchemasResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/catalogs/{id}/schemas', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listSchemasParams = {
          engineId,
          id,
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
        const id = 'testString';
        const customPath = 'sample-path';
        const name = 'SampleSchema1';
        const hostname = 'db2@hostname.com';
        const port = 4553;
        const storageName = 'sample-bucket';
        const authInstanceId = 'testString';
        const createSchemaParams = {
          engineId,
          id,
          customPath,
          name,
          hostname,
          port,
          storageName,
          authInstanceId,
        };

        const createSchemaResult = watsonxDataService.createSchema(createSchemaParams);

        // all methods should return a Promise
        expectToBePromise(createSchemaResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/catalogs/{id}/schemas', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.custom_path).toEqual(customPath);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.hostname).toEqual(hostname);
        expect(mockRequestOptions.body.port).toEqual(port);
        expect(mockRequestOptions.body.storage_name).toEqual(storageName);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const customPath = 'sample-path';
        const name = 'SampleSchema1';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createSchemaParams = {
          engineId,
          id,
          customPath,
          name,
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

  describe('updateSyncCatalog', () => {
    describe('positive tests', () => {
      function __updateSyncCatalogTest() {
        // Construct the params object for operation updateSyncCatalog
        const id = 'testString';
        const autoAddNewTables = true;
        const registerNewTables = true;
        const syncExistingTables = true;
        const syncIcebergMd = true;
        const syncPath = 'sample-path';
        const authInstanceId = 'testString';
        const updateSyncCatalogParams = {
          id,
          autoAddNewTables,
          registerNewTables,
          syncExistingTables,
          syncIcebergMd,
          syncPath,
          authInstanceId,
        };

        const updateSyncCatalogResult = watsonxDataService.updateSyncCatalog(updateSyncCatalogParams);

        // all methods should return a Promise
        expectToBePromise(updateSyncCatalogResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/catalogs/{id}/sync', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.auto_add_new_tables).toEqual(autoAddNewTables);
        expect(mockRequestOptions.body.register_new_tables).toEqual(registerNewTables);
        expect(mockRequestOptions.body.sync_existing_tables).toEqual(syncExistingTables);
        expect(mockRequestOptions.body.sync_iceberg_md).toEqual(syncIcebergMd);
        expect(mockRequestOptions.body.sync_path).toEqual(syncPath);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateSyncCatalogParams = {
          id,
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

  describe('getCatalog', () => {
    describe('positive tests', () => {
      function __getCatalogTest() {
        // Construct the params object for operation getCatalog
        const name = 'testString';
        const authInstanceId = 'testString';
        const getCatalogParams = {
          name,
          authInstanceId,
        };

        const getCatalogResult = watsonxDataService.getCatalog(getCatalogParams);

        // all methods should return a Promise
        expectToBePromise(getCatalogResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/catalogs/{name}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.name).toEqual(name);
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
        const name = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getCatalogParams = {
          name,
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

  describe('deleteCatalog', () => {
    describe('positive tests', () => {
      function __deleteCatalogTest() {
        // Construct the params object for operation deleteCatalog
        const name = 'testString';
        const authInstanceId = 'testString';
        const skipMdsCall = false;
        const deleteCatalogParams = {
          name,
          authInstanceId,
          skipMdsCall,
        };

        const deleteCatalogResult = watsonxDataService.deleteCatalog(deleteCatalogParams);

        // all methods should return a Promise
        expectToBePromise(deleteCatalogResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/catalogs/{name}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.skip_mds_call).toEqual(skipMdsCall);
        expect(mockRequestOptions.path.name).toEqual(name);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteCatalogTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteCatalogTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteCatalogTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const name = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteCatalogParams = {
          name,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteCatalog(deleteCatalogParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteCatalog({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteCatalog();
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

        const listMilvusServicesResult = watsonxDataService.listMilvusServices(listMilvusServicesParams);

        // all methods should return a Promise
        expectToBePromise(listMilvusServicesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/milvus_services', 'GET');
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
        const displayName = 'sampleService';
        const origin = 'native';
        const rootPath = 'Sample/path';
        const tshirtSize = 'small';
        const dcCpu = 0.01;
        const dcMemory = 0.01;
        const dcReplicas = 1;
        const description = 'milvus service for running sql queries';
        const dwCpu = 0.01;
        const dwMemory = 0.01;
        const dwReplicas = 1;
        const etcdCpu = 0.01;
        const etcdMemory = 0.01;
        const id = 'milvus123';
        const indexType = 'ivf_sq8';
        const iwCpu = 0.01;
        const iwMemory = 0.01;
        const iwReplicas = 1;
        const kafkaCpu = 0.01;
        const kafkaMemory = 0.01;
        const proxyCpu = 0.01;
        const proxyMemory = 0.01;
        const proxyReplicas = 1;
        const qcCpu = 0.01;
        const qcMemory = 0.01;
        const qcReplicas = 1;
        const qwCpu = 0.01;
        const qwMemory = 0.01;
        const qwReplicas = 1;
        const rcCpu = 0.01;
        const rcMemory = 0.01;
        const rcReplicas = 1;
        const storageName = 'Sample_storage_name';
        const tags = ['tag1', 'tag2'];
        const vector = 1;
        const vectorDimension = 384;
        const authInstanceId = 'testString';
        const createMilvusServiceParams = {
          displayName,
          origin,
          rootPath,
          tshirtSize,
          dcCpu,
          dcMemory,
          dcReplicas,
          description,
          dwCpu,
          dwMemory,
          dwReplicas,
          etcdCpu,
          etcdMemory,
          id,
          indexType,
          iwCpu,
          iwMemory,
          iwReplicas,
          kafkaCpu,
          kafkaMemory,
          proxyCpu,
          proxyMemory,
          proxyReplicas,
          qcCpu,
          qcMemory,
          qcReplicas,
          qwCpu,
          qwMemory,
          qwReplicas,
          rcCpu,
          rcMemory,
          rcReplicas,
          storageName,
          tags,
          vector,
          vectorDimension,
          authInstanceId,
        };

        const createMilvusServiceResult = watsonxDataService.createMilvusService(createMilvusServiceParams);

        // all methods should return a Promise
        expectToBePromise(createMilvusServiceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/milvus_services', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.display_name).toEqual(displayName);
        expect(mockRequestOptions.body.origin).toEqual(origin);
        expect(mockRequestOptions.body.root_path).toEqual(rootPath);
        expect(mockRequestOptions.body.tshirt_size).toEqual(tshirtSize);
        expect(mockRequestOptions.body.dc_cpu).toEqual(dcCpu);
        expect(mockRequestOptions.body.dc_memory).toEqual(dcMemory);
        expect(mockRequestOptions.body.dc_replicas).toEqual(dcReplicas);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.dw_cpu).toEqual(dwCpu);
        expect(mockRequestOptions.body.dw_memory).toEqual(dwMemory);
        expect(mockRequestOptions.body.dw_replicas).toEqual(dwReplicas);
        expect(mockRequestOptions.body.etcd_cpu).toEqual(etcdCpu);
        expect(mockRequestOptions.body.etcd_memory).toEqual(etcdMemory);
        expect(mockRequestOptions.body.id).toEqual(id);
        expect(mockRequestOptions.body.index_type).toEqual(indexType);
        expect(mockRequestOptions.body.iw_cpu).toEqual(iwCpu);
        expect(mockRequestOptions.body.iw_memory).toEqual(iwMemory);
        expect(mockRequestOptions.body.iw_replicas).toEqual(iwReplicas);
        expect(mockRequestOptions.body.kafka_cpu).toEqual(kafkaCpu);
        expect(mockRequestOptions.body.kafka_memory).toEqual(kafkaMemory);
        expect(mockRequestOptions.body.proxy_cpu).toEqual(proxyCpu);
        expect(mockRequestOptions.body.proxy_memory).toEqual(proxyMemory);
        expect(mockRequestOptions.body.proxy_replicas).toEqual(proxyReplicas);
        expect(mockRequestOptions.body.qc_cpu).toEqual(qcCpu);
        expect(mockRequestOptions.body.qc_memory).toEqual(qcMemory);
        expect(mockRequestOptions.body.qc_replicas).toEqual(qcReplicas);
        expect(mockRequestOptions.body.qw_cpu).toEqual(qwCpu);
        expect(mockRequestOptions.body.qw_memory).toEqual(qwMemory);
        expect(mockRequestOptions.body.qw_replicas).toEqual(qwReplicas);
        expect(mockRequestOptions.body.rc_cpu).toEqual(rcCpu);
        expect(mockRequestOptions.body.rc_memory).toEqual(rcMemory);
        expect(mockRequestOptions.body.rc_replicas).toEqual(rcReplicas);
        expect(mockRequestOptions.body.storage_name).toEqual(storageName);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.vector).toEqual(vector);
        expect(mockRequestOptions.body.vector_dimension).toEqual(vectorDimension);
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
        const displayName = 'sampleService';
        const origin = 'native';
        const rootPath = 'Sample/path';
        const tshirtSize = 'small';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createMilvusServiceParams = {
          displayName,
          origin,
          rootPath,
          tshirtSize,
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
        const id = 'testString';
        const authInstanceId = 'testString';
        const getMilvusServiceParams = {
          id,
          authInstanceId,
        };

        const getMilvusServiceResult = watsonxDataService.getMilvusService(getMilvusServiceParams);

        // all methods should return a Promise
        expectToBePromise(getMilvusServiceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/milvus_services/{id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getMilvusServiceParams = {
          id,
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
        const id = 'testString';
        const authInstanceId = 'testString';
        const deleteMilvusServiceParams = {
          id,
          authInstanceId,
        };

        const deleteMilvusServiceResult = watsonxDataService.deleteMilvusService(deleteMilvusServiceParams);

        // all methods should return a Promise
        expectToBePromise(deleteMilvusServiceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/milvus_services/{id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteMilvusServiceParams = {
          id,
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
        const id = 'testString';
        const description = 'updated description for milvus service';
        const displayName = 'sampleService';
        const tags = ['tag1', 'tag2'];
        const authInstanceId = 'testString';
        const updateMilvusServiceParams = {
          id,
          description,
          displayName,
          tags,
          authInstanceId,
        };

        const updateMilvusServiceResult = watsonxDataService.updateMilvusService(updateMilvusServiceParams);

        // all methods should return a Promise
        expectToBePromise(updateMilvusServiceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/milvus_services/{id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.display_name).toEqual(displayName);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateMilvusServiceParams = {
          id,
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

  describe('createMilvusServicePause', () => {
    describe('positive tests', () => {
      function __createMilvusServicePauseTest() {
        // Construct the params object for operation createMilvusServicePause
        const id = 'testString';
        const authInstanceId = 'testString';
        const createMilvusServicePauseParams = {
          id,
          authInstanceId,
        };

        const createMilvusServicePauseResult = watsonxDataService.createMilvusServicePause(createMilvusServicePauseParams);

        // all methods should return a Promise
        expectToBePromise(createMilvusServicePauseResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/milvus_services/{id}/pause', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createMilvusServicePauseParams = {
          id,
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
        const id = 'testString';
        const authInstanceId = 'testString';
        const createMilvusServiceResumeParams = {
          id,
          authInstanceId,
        };

        const createMilvusServiceResumeResult = watsonxDataService.createMilvusServiceResume(createMilvusServiceResumeParams);

        // all methods should return a Promise
        expectToBePromise(createMilvusServiceResumeResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/milvus_services/{id}/resume', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createMilvusServiceResumeParams = {
          id,
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
        const id = 'testString';
        const tshirtSize = 'small';
        const dcCpu = 0.01;
        const dcMemory = 0.01;
        const dcReplicas = 1;
        const dwCpu = 0.01;
        const dwMemory = 0.01;
        const dwReplicas = 1;
        const etcdCpu = 0.01;
        const etcdMemory = 0.01;
        const indexType = 'flat';
        const iwCpu = 0.01;
        const iwMemory = 0.01;
        const iwReplicas = 1;
        const kafkaCpu = 0.01;
        const kafkaMemory = 0.01;
        const proxyCpu = 0.01;
        const proxyMemory = 0.01;
        const proxyReplicas = 1;
        const qcCpu = 0.01;
        const qcMemory = 0.01;
        const qcReplicas = 1;
        const qwCpu = 0.01;
        const qwMemory = 0.01;
        const qwReplicas = 1;
        const rcCpu = 0.01;
        const rcMemory = 0.01;
        const rcReplicas = 1;
        const vector = 1;
        const vectorDimension = 384;
        const authInstanceId = 'testString';
        const createMilvusServiceScaleParams = {
          id,
          tshirtSize,
          dcCpu,
          dcMemory,
          dcReplicas,
          dwCpu,
          dwMemory,
          dwReplicas,
          etcdCpu,
          etcdMemory,
          indexType,
          iwCpu,
          iwMemory,
          iwReplicas,
          kafkaCpu,
          kafkaMemory,
          proxyCpu,
          proxyMemory,
          proxyReplicas,
          qcCpu,
          qcMemory,
          qcReplicas,
          qwCpu,
          qwMemory,
          qwReplicas,
          rcCpu,
          rcMemory,
          rcReplicas,
          vector,
          vectorDimension,
          authInstanceId,
        };

        const createMilvusServiceScaleResult = watsonxDataService.createMilvusServiceScale(createMilvusServiceScaleParams);

        // all methods should return a Promise
        expectToBePromise(createMilvusServiceScaleResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/milvus_services/{id}/scale', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.tshirt_size).toEqual(tshirtSize);
        expect(mockRequestOptions.body.dc_cpu).toEqual(dcCpu);
        expect(mockRequestOptions.body.dc_memory).toEqual(dcMemory);
        expect(mockRequestOptions.body.dc_replicas).toEqual(dcReplicas);
        expect(mockRequestOptions.body.dw_cpu).toEqual(dwCpu);
        expect(mockRequestOptions.body.dw_memory).toEqual(dwMemory);
        expect(mockRequestOptions.body.dw_replicas).toEqual(dwReplicas);
        expect(mockRequestOptions.body.etcd_cpu).toEqual(etcdCpu);
        expect(mockRequestOptions.body.etcd_memory).toEqual(etcdMemory);
        expect(mockRequestOptions.body.index_type).toEqual(indexType);
        expect(mockRequestOptions.body.iw_cpu).toEqual(iwCpu);
        expect(mockRequestOptions.body.iw_memory).toEqual(iwMemory);
        expect(mockRequestOptions.body.iw_replicas).toEqual(iwReplicas);
        expect(mockRequestOptions.body.kafka_cpu).toEqual(kafkaCpu);
        expect(mockRequestOptions.body.kafka_memory).toEqual(kafkaMemory);
        expect(mockRequestOptions.body.proxy_cpu).toEqual(proxyCpu);
        expect(mockRequestOptions.body.proxy_memory).toEqual(proxyMemory);
        expect(mockRequestOptions.body.proxy_replicas).toEqual(proxyReplicas);
        expect(mockRequestOptions.body.qc_cpu).toEqual(qcCpu);
        expect(mockRequestOptions.body.qc_memory).toEqual(qcMemory);
        expect(mockRequestOptions.body.qc_replicas).toEqual(qcReplicas);
        expect(mockRequestOptions.body.qw_cpu).toEqual(qwCpu);
        expect(mockRequestOptions.body.qw_memory).toEqual(qwMemory);
        expect(mockRequestOptions.body.qw_replicas).toEqual(qwReplicas);
        expect(mockRequestOptions.body.rc_cpu).toEqual(rcCpu);
        expect(mockRequestOptions.body.rc_memory).toEqual(rcMemory);
        expect(mockRequestOptions.body.rc_replicas).toEqual(rcReplicas);
        expect(mockRequestOptions.body.vector).toEqual(vector);
        expect(mockRequestOptions.body.vector_dimension).toEqual(vectorDimension);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const tshirtSize = 'small';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createMilvusServiceScaleParams = {
          id,
          tshirtSize,
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

        const listMilvusServiceDatabasesResult = watsonxDataService.listMilvusServiceDatabases(listMilvusServiceDatabasesParams);

        // all methods should return a Promise
        expectToBePromise(listMilvusServiceDatabasesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/milvus_services/{service_id}/databases', 'GET');
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

        const listMilvusDatabaseCollectionsResult = watsonxDataService.listMilvusDatabaseCollections(listMilvusDatabaseCollectionsParams);

        // all methods should return a Promise
        expectToBePromise(listMilvusDatabaseCollectionsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/milvus_services/{service_id}/databases/{database_id}/collections', 'GET');
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

  describe('listMilvusDatabasePartitions', () => {
    describe('positive tests', () => {
      function __listMilvusDatabasePartitionsTest() {
        // Construct the params object for operation listMilvusDatabasePartitions
        const serviceId = 'testString';
        const databaseId = 'testString';
        const collectionName = 'testString';
        const authInstanceId = 'testString';
        const listMilvusDatabasePartitionsParams = {
          serviceId,
          databaseId,
          collectionName,
          authInstanceId,
        };

        const listMilvusDatabasePartitionsResult = watsonxDataService.listMilvusDatabasePartitions(listMilvusDatabasePartitionsParams);

        // all methods should return a Promise
        expectToBePromise(listMilvusDatabasePartitionsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/milvus_services/{service_id}/databases/{database_id}/collections/{collection_name}/partitions', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.service_id).toEqual(serviceId);
        expect(mockRequestOptions.path.database_id).toEqual(databaseId);
        expect(mockRequestOptions.path.collection_name).toEqual(collectionName);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listMilvusDatabasePartitionsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listMilvusDatabasePartitionsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listMilvusDatabasePartitionsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const serviceId = 'testString';
        const databaseId = 'testString';
        const collectionName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listMilvusDatabasePartitionsParams = {
          serviceId,
          databaseId,
          collectionName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listMilvusDatabasePartitions(listMilvusDatabasePartitionsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.listMilvusDatabasePartitions({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.listMilvusDatabasePartitions();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateMilvusServiceBucket', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // JsonPatchOperation
      const jsonPatchOperationModel = {
        op: 'add',
        path: 'testString',
        from: 'testString',
        value: 'testString',
      };

      function __updateMilvusServiceBucketTest() {
        // Construct the params object for operation updateMilvusServiceBucket
        const serviceId = 'testString';
        const body = [jsonPatchOperationModel];
        const authInstanceId = 'testString';
        const updateMilvusServiceBucketParams = {
          serviceId,
          body,
          authInstanceId,
        };

        const updateMilvusServiceBucketResult = watsonxDataService.updateMilvusServiceBucket(updateMilvusServiceBucketParams);

        // all methods should return a Promise
        expectToBePromise(updateMilvusServiceBucketResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/milvus_services/{service_id}/storage', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body).toEqual(body);
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
        const body = [jsonPatchOperationModel];
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateMilvusServiceBucketParams = {
          serviceId,
          body,
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

  describe('getSalIntegration', () => {
    describe('positive tests', () => {
      function __getSalIntegrationTest() {
        // Construct the params object for operation getSalIntegration
        const authInstanceId = 'testString';
        const getSalIntegrationParams = {
          authInstanceId,
        };

        const getSalIntegrationResult = watsonxDataService.getSalIntegration(getSalIntegrationParams);

        // all methods should return a Promise
        expectToBePromise(getSalIntegrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/sal_integration', 'GET');
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
        const apikey = '67GveYtUdovRFEfnMLYP8x0S1b2mY1BkEGqBYbJK';
        const engineId = 'presto-01';
        const storageResourceCrn = 'crn:v1:staging:public:cloud-object-storage:global:a/a7026b374f39f570d20984c1ac6ecf63:5778e94f-c8c7-46a8-9878-d5eeadb51161';
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

        const createSalIntegrationResult = watsonxDataService.createSalIntegration(createSalIntegrationParams);

        // all methods should return a Promise
        expectToBePromise(createSalIntegrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/sal_integration', 'POST');
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
        const apikey = '67GveYtUdovRFEfnMLYP8x0S1b2mY1BkEGqBYbJK';
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

        const deleteSalIntegrationResult = watsonxDataService.deleteSalIntegration(deleteSalIntegrationParams);

        // all methods should return a Promise
        expectToBePromise(deleteSalIntegrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/sal_integration', 'DELETE');
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
        const apikey = '67GveYtUdovRFEfnMLYP8x0S1b2mY1BkEGqBYbJK';
        const engineId = 'presto-01';
        const authInstanceId = 'testString';
        const updateSalIntegrationParams = {
          apikey,
          engineId,
          authInstanceId,
        };

        const updateSalIntegrationResult = watsonxDataService.updateSalIntegration(updateSalIntegrationParams);

        // all methods should return a Promise
        expectToBePromise(updateSalIntegrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/sal_integration', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.apikey).toEqual(apikey);
        expect(mockRequestOptions.body.engine_id).toEqual(engineId);
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
        schema: 'schema1',
        tables: ['table1'],
      };

      function __createSalIntegrationEnrichmentTest() {
        // Construct the params object for operation createSalIntegrationEnrichment
        const changes = [enrichmentObjModel];
        const authInstanceId = 'testString';
        const createSalIntegrationEnrichmentParams = {
          changes,
          authInstanceId,
        };

        const createSalIntegrationEnrichmentResult = watsonxDataService.createSalIntegrationEnrichment(createSalIntegrationEnrichmentParams);

        // all methods should return a Promise
        expectToBePromise(createSalIntegrationEnrichmentResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/sal_integration/enrichment', 'POST');
        const expectedAccept = undefined;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.changes).toEqual(changes);
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

  describe('listSalIntegrationEnrichmentAssets', () => {
    describe('positive tests', () => {
      function __listSalIntegrationEnrichmentAssetsTest() {
        // Construct the params object for operation listSalIntegrationEnrichmentAssets
        const projectId = 'testString';
        const authInstanceId = 'testString';
        const listSalIntegrationEnrichmentAssetsParams = {
          projectId,
          authInstanceId,
        };

        const listSalIntegrationEnrichmentAssetsResult = watsonxDataService.listSalIntegrationEnrichmentAssets(listSalIntegrationEnrichmentAssetsParams);

        // all methods should return a Promise
        expectToBePromise(listSalIntegrationEnrichmentAssetsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/sal_integration/enrichment/data_assets', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.project_id).toEqual(projectId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listSalIntegrationEnrichmentAssetsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listSalIntegrationEnrichmentAssetsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listSalIntegrationEnrichmentAssetsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const projectId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listSalIntegrationEnrichmentAssetsParams = {
          projectId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listSalIntegrationEnrichmentAssets(listSalIntegrationEnrichmentAssetsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.listSalIntegrationEnrichmentAssets({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.listSalIntegrationEnrichmentAssets();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getSalIntegrationEnrichmentAssetsById', () => {
    describe('positive tests', () => {
      function __getSalIntegrationEnrichmentAssetsByIdTest() {
        // Construct the params object for operation getSalIntegrationEnrichmentAssetsById
        const projectId = 'testString';
        const id = 'testString';
        const authInstanceId = 'testString';
        const getSalIntegrationEnrichmentAssetsByIdParams = {
          projectId,
          id,
          authInstanceId,
        };

        const getSalIntegrationEnrichmentAssetsByIdResult = watsonxDataService.getSalIntegrationEnrichmentAssetsById(getSalIntegrationEnrichmentAssetsByIdParams);

        // all methods should return a Promise
        expectToBePromise(getSalIntegrationEnrichmentAssetsByIdResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/sal_integration/enrichment/data_assets/{id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.project_id).toEqual(projectId);
        expect(mockRequestOptions.path.id).toEqual(id);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSalIntegrationEnrichmentAssetsByIdTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getSalIntegrationEnrichmentAssetsByIdTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getSalIntegrationEnrichmentAssetsByIdTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const projectId = 'testString';
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSalIntegrationEnrichmentAssetsByIdParams = {
          projectId,
          id,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getSalIntegrationEnrichmentAssetsById(getSalIntegrationEnrichmentAssetsByIdParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getSalIntegrationEnrichmentAssetsById({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getSalIntegrationEnrichmentAssetsById();
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

        const getSalIntegrationEnrichmentGlobalSettingsResult = watsonxDataService.getSalIntegrationEnrichmentGlobalSettings(getSalIntegrationEnrichmentGlobalSettingsParams);

        // all methods should return a Promise
        expectToBePromise(getSalIntegrationEnrichmentGlobalSettingsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/sal_integration/enrichment/global_settings', 'GET');
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

        watsonxDataService.getSalIntegrationEnrichmentGlobalSettings(getSalIntegrationEnrichmentGlobalSettingsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.getSalIntegrationEnrichmentGlobalSettings({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('replaceSalIntegrationEnrichmentGlobalSettings', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // SalEnrichmentSettingsExpansionDescriptionConfiguration
      const salEnrichmentSettingsExpansionDescriptionConfigurationModel = {
        assignment_threshold: 0.14,
        suggestion_threshold: 0.9,
      };

      // SalEnrichmentSettingsExpansionNameConfiguration
      const salEnrichmentSettingsExpansionNameConfigurationModel = {
        assignment_threshold: 0.1,
        suggestion_threshold: 0.1,
      };

      // SalEnrichmentSettingsExpansion
      const salEnrichmentSettingsExpansionModel = {
        description: true,
        description_configuration: salEnrichmentSettingsExpansionDescriptionConfigurationModel,
        name: true,
        name_configuration: salEnrichmentSettingsExpansionNameConfigurationModel,
      };

      // SalEnrichmentSettingsTermAssignment
      const salEnrichmentSettingsTermAssignmentModel = {
        class_based_assignments: false,
        evaluate_negative_assignments: false,
        llm_based_assignments: false,
        ml_based_assignments_custom: false,
        ml_based_assignments_default: false,
        name_matching: false,
        term_assignment_threshold: 0.3,
        term_suggestion_threshold: 0.4,
      };

      function __replaceSalIntegrationEnrichmentGlobalSettingsTest() {
        // Construct the params object for operation replaceSalIntegrationEnrichmentGlobalSettings
        const expansion = salEnrichmentSettingsExpansionModel;
        const termAssignment = salEnrichmentSettingsTermAssignmentModel;
        const authInstanceId = 'testString';
        const replaceSalIntegrationEnrichmentGlobalSettingsParams = {
          expansion,
          termAssignment,
          authInstanceId,
        };

        const replaceSalIntegrationEnrichmentGlobalSettingsResult = watsonxDataService.replaceSalIntegrationEnrichmentGlobalSettings(replaceSalIntegrationEnrichmentGlobalSettingsParams);

        // all methods should return a Promise
        expectToBePromise(replaceSalIntegrationEnrichmentGlobalSettingsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/sal_integration/enrichment/global_settings', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.expansion).toEqual(expansion);
        expect(mockRequestOptions.body.term_assignment).toEqual(termAssignment);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __replaceSalIntegrationEnrichmentGlobalSettingsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __replaceSalIntegrationEnrichmentGlobalSettingsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __replaceSalIntegrationEnrichmentGlobalSettingsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const expansion = salEnrichmentSettingsExpansionModel;
        const termAssignment = salEnrichmentSettingsTermAssignmentModel;
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const replaceSalIntegrationEnrichmentGlobalSettingsParams = {
          expansion,
          termAssignment,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.replaceSalIntegrationEnrichmentGlobalSettings(replaceSalIntegrationEnrichmentGlobalSettingsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.replaceSalIntegrationEnrichmentGlobalSettings({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.replaceSalIntegrationEnrichmentGlobalSettings();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listSalIntegrationEnrichmentJobs', () => {
    describe('positive tests', () => {
      function __listSalIntegrationEnrichmentJobsTest() {
        // Construct the params object for operation listSalIntegrationEnrichmentJobs
        const projectId = 'testString';
        const authInstanceId = 'testString';
        const listSalIntegrationEnrichmentJobsParams = {
          projectId,
          authInstanceId,
        };

        const listSalIntegrationEnrichmentJobsResult = watsonxDataService.listSalIntegrationEnrichmentJobs(listSalIntegrationEnrichmentJobsParams);

        // all methods should return a Promise
        expectToBePromise(listSalIntegrationEnrichmentJobsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/sal_integration/enrichment/jobs', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.project_id).toEqual(projectId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listSalIntegrationEnrichmentJobsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listSalIntegrationEnrichmentJobsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listSalIntegrationEnrichmentJobsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const projectId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listSalIntegrationEnrichmentJobsParams = {
          projectId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listSalIntegrationEnrichmentJobs(listSalIntegrationEnrichmentJobsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.listSalIntegrationEnrichmentJobs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.listSalIntegrationEnrichmentJobs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listSalIntegrationEnrichmentJobRuns', () => {
    describe('positive tests', () => {
      function __listSalIntegrationEnrichmentJobRunsTest() {
        // Construct the params object for operation listSalIntegrationEnrichmentJobRuns
        const jobId = 'testString';
        const projectId = 'testString';
        const authInstanceId = 'testString';
        const listSalIntegrationEnrichmentJobRunsParams = {
          jobId,
          projectId,
          authInstanceId,
        };

        const listSalIntegrationEnrichmentJobRunsResult = watsonxDataService.listSalIntegrationEnrichmentJobRuns(listSalIntegrationEnrichmentJobRunsParams);

        // all methods should return a Promise
        expectToBePromise(listSalIntegrationEnrichmentJobRunsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/sal_integration/enrichment/jobs/{job_id}/runs', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.project_id).toEqual(projectId);
        expect(mockRequestOptions.path.job_id).toEqual(jobId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listSalIntegrationEnrichmentJobRunsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listSalIntegrationEnrichmentJobRunsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listSalIntegrationEnrichmentJobRunsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const jobId = 'testString';
        const projectId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listSalIntegrationEnrichmentJobRunsParams = {
          jobId,
          projectId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listSalIntegrationEnrichmentJobRuns(listSalIntegrationEnrichmentJobRunsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.listSalIntegrationEnrichmentJobRuns({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.listSalIntegrationEnrichmentJobRuns();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getSalIntegrationEnrichmentJobRunLogs', () => {
    describe('positive tests', () => {
      function __getSalIntegrationEnrichmentJobRunLogsTest() {
        // Construct the params object for operation getSalIntegrationEnrichmentJobRunLogs
        const jobId = 'testString';
        const runId = 'testString';
        const projectId = 'testString';
        const authInstanceId = 'testString';
        const getSalIntegrationEnrichmentJobRunLogsParams = {
          jobId,
          runId,
          projectId,
          authInstanceId,
        };

        const getSalIntegrationEnrichmentJobRunLogsResult = watsonxDataService.getSalIntegrationEnrichmentJobRunLogs(getSalIntegrationEnrichmentJobRunLogsParams);

        // all methods should return a Promise
        expectToBePromise(getSalIntegrationEnrichmentJobRunLogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/sal_integration/enrichment/jobs/{job_id}/runs/{run_id}/logs', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.project_id).toEqual(projectId);
        expect(mockRequestOptions.path.job_id).toEqual(jobId);
        expect(mockRequestOptions.path.run_id).toEqual(runId);
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
        const jobId = 'testString';
        const runId = 'testString';
        const projectId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSalIntegrationEnrichmentJobRunLogsParams = {
          jobId,
          runId,
          projectId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getSalIntegrationEnrichmentJobRunLogs(getSalIntegrationEnrichmentJobRunLogsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getSalIntegrationEnrichmentJobRunLogs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getSalIntegrationEnrichmentJobRunLogs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getSalIntegrationEnrichmentProjectSettings', () => {
    describe('positive tests', () => {
      function __getSalIntegrationEnrichmentProjectSettingsTest() {
        // Construct the params object for operation getSalIntegrationEnrichmentProjectSettings
        const projectId = 'testString';
        const authInstanceId = 'testString';
        const getSalIntegrationEnrichmentProjectSettingsParams = {
          projectId,
          authInstanceId,
        };

        const getSalIntegrationEnrichmentProjectSettingsResult = watsonxDataService.getSalIntegrationEnrichmentProjectSettings(getSalIntegrationEnrichmentProjectSettingsParams);

        // all methods should return a Promise
        expectToBePromise(getSalIntegrationEnrichmentProjectSettingsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/sal_integration/enrichment/project_settings', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.project_id).toEqual(projectId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSalIntegrationEnrichmentProjectSettingsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getSalIntegrationEnrichmentProjectSettingsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getSalIntegrationEnrichmentProjectSettingsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const projectId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSalIntegrationEnrichmentProjectSettingsParams = {
          projectId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getSalIntegrationEnrichmentProjectSettings(getSalIntegrationEnrichmentProjectSettingsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getSalIntegrationEnrichmentProjectSettings({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getSalIntegrationEnrichmentProjectSettings();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('replaceSalIntegrationEnrichmentProjectSettings', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // SalEnrichmentSettingsExpansionDescriptionConfiguration
      const salEnrichmentSettingsExpansionDescriptionConfigurationModel = {
        assignment_threshold: 0.14,
        suggestion_threshold: 0.9,
      };

      // SalEnrichmentSettingsExpansionNameConfiguration
      const salEnrichmentSettingsExpansionNameConfigurationModel = {
        assignment_threshold: 0.1,
        suggestion_threshold: 0.1,
      };

      // SalEnrichmentSettingsExpansion
      const salEnrichmentSettingsExpansionModel = {
        description: true,
        description_configuration: salEnrichmentSettingsExpansionDescriptionConfigurationModel,
        name: true,
        name_configuration: salEnrichmentSettingsExpansionNameConfigurationModel,
      };

      // SalEnrichmentSettingsTermAssignment
      const salEnrichmentSettingsTermAssignmentModel = {
        class_based_assignments: false,
        evaluate_negative_assignments: false,
        llm_based_assignments: false,
        ml_based_assignments_custom: false,
        ml_based_assignments_default: false,
        name_matching: false,
        term_assignment_threshold: 0.3,
        term_suggestion_threshold: 0.4,
      };

      function __replaceSalIntegrationEnrichmentProjectSettingsTest() {
        // Construct the params object for operation replaceSalIntegrationEnrichmentProjectSettings
        const projectId = 'testString';
        const expansion = salEnrichmentSettingsExpansionModel;
        const termAssignment = salEnrichmentSettingsTermAssignmentModel;
        const authInstanceId = 'testString';
        const replaceSalIntegrationEnrichmentProjectSettingsParams = {
          projectId,
          expansion,
          termAssignment,
          authInstanceId,
        };

        const replaceSalIntegrationEnrichmentProjectSettingsResult = watsonxDataService.replaceSalIntegrationEnrichmentProjectSettings(replaceSalIntegrationEnrichmentProjectSettingsParams);

        // all methods should return a Promise
        expectToBePromise(replaceSalIntegrationEnrichmentProjectSettingsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/sal_integration/enrichment/project_settings', 'PUT');
        const expectedAccept = undefined;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.expansion).toEqual(expansion);
        expect(mockRequestOptions.body.term_assignment).toEqual(termAssignment);
        expect(mockRequestOptions.qs.project_id).toEqual(projectId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __replaceSalIntegrationEnrichmentProjectSettingsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __replaceSalIntegrationEnrichmentProjectSettingsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __replaceSalIntegrationEnrichmentProjectSettingsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const projectId = 'testString';
        const expansion = salEnrichmentSettingsExpansionModel;
        const termAssignment = salEnrichmentSettingsTermAssignmentModel;
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const replaceSalIntegrationEnrichmentProjectSettingsParams = {
          projectId,
          expansion,
          termAssignment,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.replaceSalIntegrationEnrichmentProjectSettings(replaceSalIntegrationEnrichmentProjectSettingsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.replaceSalIntegrationEnrichmentProjectSettings({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.replaceSalIntegrationEnrichmentProjectSettings();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
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

        const getSalIntegrationGlossaryTermsResult = watsonxDataService.getSalIntegrationGlossaryTerms(getSalIntegrationGlossaryTermsParams);

        // all methods should return a Promise
        expectToBePromise(getSalIntegrationGlossaryTermsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/sal_integration/glossary/terms', 'GET');
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

        const createSalIntegrationUploadGlossaryResult = watsonxDataService.createSalIntegrationUploadGlossary(createSalIntegrationUploadGlossaryParams);

        // all methods should return a Promise
        expectToBePromise(createSalIntegrationUploadGlossaryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/sal_integration/glossary/upload_processes', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'multipart/form-data';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.formData.replace_option).toEqual(replaceOption);
        expect(mockRequestOptions.formData.glossary_csv.data).toEqual(glossaryCsv);
        expect(mockRequestOptions.formData.glossary_csv.contentType).toEqual(glossaryCsvContentType);
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

        watsonxDataService.createSalIntegrationUploadGlossary(createSalIntegrationUploadGlossaryParams);
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
        const id = 'testString';
        const authInstanceId = 'testString';
        const getSalIntegrationUploadGlossaryStatusParams = {
          id,
          authInstanceId,
        };

        const getSalIntegrationUploadGlossaryStatusResult = watsonxDataService.getSalIntegrationUploadGlossaryStatus(getSalIntegrationUploadGlossaryStatusParams);

        // all methods should return a Promise
        expectToBePromise(getSalIntegrationUploadGlossaryStatusResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/sal_integration/glossary/upload_processes/{id}/status', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSalIntegrationUploadGlossaryStatusParams = {
          id,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getSalIntegrationUploadGlossaryStatus(getSalIntegrationUploadGlossaryStatusParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getSalIntegrationUploadGlossaryStatus({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getSalIntegrationUploadGlossaryStatus();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listSalIntegrationEnrichmentMappings', () => {
    describe('positive tests', () => {
      function __listSalIntegrationEnrichmentMappingsTest() {
        // Construct the params object for operation listSalIntegrationEnrichmentMappings
        const catalogName = 'testString';
        const schemaName = 'testString';
        const next = 'testString';
        const authInstanceId = 'testString';
        const listSalIntegrationEnrichmentMappingsParams = {
          catalogName,
          schemaName,
          next,
          authInstanceId,
        };

        const listSalIntegrationEnrichmentMappingsResult = watsonxDataService.listSalIntegrationEnrichmentMappings(listSalIntegrationEnrichmentMappingsParams);

        // all methods should return a Promise
        expectToBePromise(listSalIntegrationEnrichmentMappingsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/sal_integration/mappings', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.qs.schema_name).toEqual(schemaName);
        expect(mockRequestOptions.qs.next).toEqual(next);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listSalIntegrationEnrichmentMappingsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listSalIntegrationEnrichmentMappingsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listSalIntegrationEnrichmentMappingsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listSalIntegrationEnrichmentMappingsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listSalIntegrationEnrichmentMappings(listSalIntegrationEnrichmentMappingsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.listSalIntegrationEnrichmentMappings({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('listSemanticSearchQueries', () => {
    describe('positive tests', () => {
      function __listSemanticSearchQueriesTest() {
        // Construct the params object for operation listSemanticSearchQueries
        const engineId = 'testString';
        const schemaSearchEnabled = true;
        const columnSearchEnabled = true;
        const maxResultNumber = 5;
        const runSearch = true;
        const authInstanceId = 'testString';
        const listSemanticSearchQueriesParams = {
          engineId,
          schemaSearchEnabled,
          columnSearchEnabled,
          maxResultNumber,
          runSearch,
          authInstanceId,
        };

        const listSemanticSearchQueriesResult = watsonxDataService.listSemanticSearchQueries(listSemanticSearchQueriesParams);

        // all methods should return a Promise
        expectToBePromise(listSemanticSearchQueriesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/sal_integration/semantic_search/queries', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.qs.schema_search_enabled).toEqual(schemaSearchEnabled);
        expect(mockRequestOptions.qs.column_search_enabled).toEqual(columnSearchEnabled);
        expect(mockRequestOptions.qs.max_result_number).toEqual(maxResultNumber);
        expect(mockRequestOptions.qs.run_search).toEqual(runSearch);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listSemanticSearchQueriesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listSemanticSearchQueriesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listSemanticSearchQueriesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listSemanticSearchQueriesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listSemanticSearchQueries(listSemanticSearchQueriesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.listSemanticSearchQueries({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createSemanticSearchQueries', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // SemanticSearchBodySearchConfig
      const semanticSearchBodySearchConfigModel = {
        column_search_enabled: true,
        fields: ['metadata.name', 'metadata.description', 'metadata.tags'],
        max_result_number: 1,
        schema_search_enabled: true,
      };

      function __createSemanticSearchQueriesTest() {
        // Construct the params object for operation createSemanticSearchQueries
        const engineId = 'presto01';
        const queryInput = 'catalog_table';
        const searchConfig = semanticSearchBodySearchConfigModel;
        const authInstanceId = 'testString';
        const createSemanticSearchQueriesParams = {
          engineId,
          queryInput,
          searchConfig,
          authInstanceId,
        };

        const createSemanticSearchQueriesResult = watsonxDataService.createSemanticSearchQueries(createSemanticSearchQueriesParams);

        // all methods should return a Promise
        expectToBePromise(createSemanticSearchQueriesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/sal_integration/semantic_search/queries', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.engine_id).toEqual(engineId);
        expect(mockRequestOptions.body.query_input).toEqual(queryInput);
        expect(mockRequestOptions.body.search_config).toEqual(searchConfig);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createSemanticSearchQueriesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createSemanticSearchQueriesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createSemanticSearchQueriesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'presto01';
        const queryInput = 'catalog_table';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createSemanticSearchQueriesParams = {
          engineId,
          queryInput,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createSemanticSearchQueries(createSemanticSearchQueriesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createSemanticSearchQueries({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createSemanticSearchQueries();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteSemanticSearchQueries', () => {
    describe('positive tests', () => {
      function __deleteSemanticSearchQueriesTest() {
        // Construct the params object for operation deleteSemanticSearchQueries
        const batchSize = 1;
        const authInstanceId = 'testString';
        const deleteSemanticSearchQueriesParams = {
          batchSize,
          authInstanceId,
        };

        const deleteSemanticSearchQueriesResult = watsonxDataService.deleteSemanticSearchQueries(deleteSemanticSearchQueriesParams);

        // all methods should return a Promise
        expectToBePromise(deleteSemanticSearchQueriesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/sal_integration/semantic_search/queries', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.batch_size).toEqual(batchSize);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteSemanticSearchQueriesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteSemanticSearchQueriesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteSemanticSearchQueriesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteSemanticSearchQueriesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteSemanticSearchQueries(deleteSemanticSearchQueriesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.deleteSemanticSearchQueries({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('deleteSemanticSearchQueriesById', () => {
    describe('positive tests', () => {
      function __deleteSemanticSearchQueriesByIdTest() {
        // Construct the params object for operation deleteSemanticSearchQueriesById
        const id = 'testString';
        const authInstanceId = 'testString';
        const deleteSemanticSearchQueriesByIdParams = {
          id,
          authInstanceId,
        };

        const deleteSemanticSearchQueriesByIdResult = watsonxDataService.deleteSemanticSearchQueriesById(deleteSemanticSearchQueriesByIdParams);

        // all methods should return a Promise
        expectToBePromise(deleteSemanticSearchQueriesByIdResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/sal_integration/semantic_search/queries/{id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteSemanticSearchQueriesByIdTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteSemanticSearchQueriesByIdTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteSemanticSearchQueriesByIdTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteSemanticSearchQueriesByIdParams = {
          id,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteSemanticSearchQueriesById(deleteSemanticSearchQueriesByIdParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteSemanticSearchQueriesById({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteSemanticSearchQueriesById();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteSalMetadata', () => {
    describe('positive tests', () => {
      function __deleteSalMetadataTest() {
        // Construct the params object for operation deleteSalMetadata
        const deleteSalMetadataParams = {};

        const deleteSalMetadataResult = watsonxDataService.deleteSalMetadata(deleteSalMetadataParams);

        // all methods should return a Promise
        expectToBePromise(deleteSalMetadataResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/sal_metadata', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteSalMetadataTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteSalMetadataTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteSalMetadataTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteSalMetadataParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteSalMetadata(deleteSalMetadataParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.deleteSalMetadata({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('listIngestionJobs', () => {
    describe('positive tests', () => {
      function __listIngestionJobsTest() {
        // Construct the params object for operation listIngestionJobs
        const authInstanceId = 'testString';
        const start = 'testString';
        const limit = 10;
        const listIngestionJobsParams = {
          authInstanceId,
          start,
          limit,
        };

        const listIngestionJobsResult = watsonxDataService.listIngestionJobs(listIngestionJobsParams);

        // all methods should return a Promise
        expectToBePromise(listIngestionJobsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/lhingestion/api/v1/ingestion/jobs', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.start).toEqual(start);
        expect(mockRequestOptions.qs.limit).toEqual(limit);
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
      const path = '/v3/lhingestion/api/v1/ingestion/jobs';
      const mockPagerResponse1 =
        '{"next":{"href":"https://myhost.com/somePath?start=1"},"total_count":2,"jobs":[{"instance_id":"instance_id","job_id":"job_id","application_id":"application_id","username":"username","start_timestamp":"2019-01-01T12:00:00.000Z","end_timestamp":"2019-01-01T12:00:00.000Z","status":"status","source_data_files":"source_data_files","target_table":"target_table","details":"details","engine_logs":"engine_logs","engine_id":"engine_id","engine_name":"engine_name","partition_by":"column1,column2","is_new_schema":false,"is_new_table":false}],"limit":1}';
      const mockPagerResponse2 =
        '{"total_count":2,"jobs":[{"instance_id":"instance_id","job_id":"job_id","application_id":"application_id","username":"username","start_timestamp":"2019-01-01T12:00:00.000Z","end_timestamp":"2019-01-01T12:00:00.000Z","status":"status","source_data_files":"source_data_files","target_table":"target_table","details":"details","engine_logs":"engine_logs","engine_id":"engine_id","engine_name":"engine_name","partition_by":"column1,column2","is_new_schema":false,"is_new_table":false}],"limit":1}';

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
          limit: 10,
        };
        const allResults = [];
        const pager = new WatsonxDataV3.IngestionJobsPager(watsonxDataService, params);
        while (pager.hasNext()) {
          const nextPage = await pager.getNext();
          expect(nextPage).not.toBeNull();
          allResults.push(...nextPage);
        }
        expect(allResults).not.toBeNull();
        expect(allResults).toHaveLength(2);
      });

      test('getAll()', async () => {
        const params = {
          authInstanceId: 'testString',
          limit: 10,
        };
        const pager = new WatsonxDataV3.IngestionJobsPager(watsonxDataService, params);
        const allResults = await pager.getAll();
        expect(allResults).not.toBeNull();
        expect(allResults).toHaveLength(2);
      });
    });
  });

  describe('createIngestionJob', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // SchemaTransformation
      const schemaTransformationModel = {
        old_column: 'old_column_name',
        new_column: 'new_column_name',
        new_type: 'string',
      };

      // BucketDetails
      const bucketDetailsModel = {
        access_key: 'testString',
        account_name: 'testString',
        application_id: 'testString',
        container_name: 'testString',
        directory_id: 'testString',
        endpoint: 'testString',
        region: 'testString',
        secret_key: 'testString',
        auth_mode: 'aws_assume_role',
        role_arn: 'testString',
        managed_by: 'testString',
        name: 'testString',
        type: 'adls_gen1',
      };

      // IcebergSourceTable
      const icebergSourceTableModel = {
        schema_name: 'testString',
        table_name: 'testString',
        catalog_name: 'testString',
        warehouse_name: 'testString',
        snapshot_id: 0,
      };

      // DbConnectionModel
      const dbConnectionModelModel = {
        database_id: 'testString',
        db_type: 'testString',
        host: 'testString',
        port: 'testString',
        db_name: 'testString',
        db_username: 'testString',
        password: 'testString',
        authentication_value: 'testString',
        is_ssl: false,
        cert_extension: 'testString',
        cert_content: 'testString',
        connection_mode: 'testString',
        connection_mode_value: 'testString',
        jdbc_url: 'testString',
      };

      // FileFormatProperties
      const fileFormatPropertiesModel = {
        encoding: 'testString',
        escape_character: 'testString',
        field_delimiter: 'testString',
        header: true,
        line_delimiter: 'testString',
      };

      // SourceDetails
      const sourceDetailsModel = {
        file_paths: 'testString',
        file_type: 'csv',
        source_type: 'STORAGE',
        schema_transformations: [schemaTransformationModel],
        schema_name: 'testString',
        table_name: 'testString',
        bucket_details: bucketDetailsModel,
        iceberg_source_table: icebergSourceTableModel,
        source_database: dbConnectionModelModel,
        file_format_properties: fileFormatPropertiesModel,
        is_local_ingestion: false,
      };

      // TargetDetails
      const targetDetailsModel = {
        catalog: 'testString',
        schema: 'testString',
        table: 'testString',
        write_mode: 'testString',
        merge_on_read: false,
        schema_mode: 'testString',
        schema_infer: true,
        catalog_uri: 'testString',
        bucket_details: bucketDetailsModel,
        location: 'testString',
        is_new_schema: false,
        is_new_table: false,
      };

      // ExecuteConfig
      const executeConfigModel = {
        driver_memory: 'testString',
        driver_cores: 1,
        executor_memory: 'testString',
        executor_cores: 1,
        num_executors: 1,
      };

      // IngestionEngine
      const ingestionEngineModel = {
        engine_id: 'testString',
        name: 'testString',
        endpoint: 'testString',
        origin: 'testString',
        execute_config: executeConfigModel,
        bucket_details: bucketDetailsModel,
        log_path: 'testString',
      };

      // CapacityDetails
      const capacityDetailsModel = {
        id: '6f51248a-4cda-459a-b141-eb9b76bb6689',
      };

      function __createIngestionJobTest() {
        // Construct the params object for operation createIngestionJob
        const authInstanceId = 'testString';
        const id = 'testString';
        const source = sourceDetailsModel;
        const target = targetDetailsModel;
        const engine = ingestionEngineModel;
        const engineId = 'spark123';
        const executeConfig = executeConfigModel;
        const sourceIcebergTable = icebergSourceTableModel;
        const partitionBy = 'column1,column2';
        const capacity = capacityDetailsModel;
        const createIngestionJobParams = {
          authInstanceId,
          id,
          source,
          target,
          engine,
          engineId,
          executeConfig,
          sourceIcebergTable,
          partitionBy,
          capacity,
        };

        const createIngestionJobResult = watsonxDataService.createIngestionJob(createIngestionJobParams);

        // all methods should return a Promise
        expectToBePromise(createIngestionJobResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/lhingestion/api/v1/ingestion/jobs', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.id).toEqual(id);
        expect(mockRequestOptions.body.source).toEqual(source);
        expect(mockRequestOptions.body.target).toEqual(target);
        expect(mockRequestOptions.body.engine).toEqual(engine);
        expect(mockRequestOptions.body.engine_id).toEqual(engineId);
        expect(mockRequestOptions.body.execute_config).toEqual(executeConfig);
        expect(mockRequestOptions.body.source_iceberg_table).toEqual(sourceIcebergTable);
        expect(mockRequestOptions.body.partition_by).toEqual(partitionBy);
        expect(mockRequestOptions.body.capacity).toEqual(capacity);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createIngestionJobTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createIngestionJobTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createIngestionJobTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const authInstanceId = 'testString';
        const id = 'testString';
        const source = sourceDetailsModel;
        const target = targetDetailsModel;
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createIngestionJobParams = {
          authInstanceId,
          id,
          source,
          target,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createIngestionJob(createIngestionJobParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createIngestionJob({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createIngestionJob();
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
        const authInstanceId = 'testString';
        const id = 'testString';
        const getIngestionJobParams = {
          authInstanceId,
          id,
        };

        const getIngestionJobResult = watsonxDataService.getIngestionJob(getIngestionJobParams);

        // all methods should return a Promise
        expectToBePromise(getIngestionJobResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/lhingestion/api/v1/ingestion/jobs/{id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.id).toEqual(id);
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
        const authInstanceId = 'testString';
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getIngestionJobParams = {
          authInstanceId,
          id,
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

  describe('listResourceAccessPolicies', () => {
    describe('positive tests', () => {
      function __listResourceAccessPoliciesTest() {
        // Construct the params object for operation listResourceAccessPolicies
        const authInstanceId = 'testString';
        const resourceType = 'catalog';
        const resourceId = ['testString'];
        const resourceName = ['testString'];
        const listResourceAccessPoliciesParams = {
          authInstanceId,
          resourceType,
          resourceId,
          resourceName,
        };

        const listResourceAccessPoliciesResult = watsonxDataService.listResourceAccessPolicies(listResourceAccessPoliciesParams);

        // all methods should return a Promise
        expectToBePromise(listResourceAccessPoliciesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/access/access_policies', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.resource_type).toEqual(resourceType);
        expect(mockRequestOptions.qs.resource_id).toEqual(resourceId);
        expect(mockRequestOptions.qs.resource_name).toEqual(resourceName);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listResourceAccessPoliciesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listResourceAccessPoliciesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listResourceAccessPoliciesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listResourceAccessPoliciesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listResourceAccessPolicies(listResourceAccessPoliciesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.listResourceAccessPolicies({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('bulkUpdateResourceAccessPolicies', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // ResourceDetailsBulkUpdate
      const resourceDetailsBulkUpdateModel = {
        id: 'presto01',
        name: 'hive_data',
        type: 'presto',
      };

      // Subject
      const subjectModel = {
        type: 'user',
        value: 'user1',
      };

      // SubjectBulkUpdate
      const subjectBulkUpdateModel = {
        permissions: ['testString'],
        subject: subjectModel,
      };

      // AccessPolicyBulkUpdate
      const accessPolicyBulkUpdateModel = {
        resources: [resourceDetailsBulkUpdateModel],
        subjects: [subjectBulkUpdateModel],
      };

      function __bulkUpdateResourceAccessPoliciesTest() {
        // Construct the params object for operation bulkUpdateResourceAccessPolicies
        const accessPolicies = [accessPolicyBulkUpdateModel];
        const authInstanceId = 'testString';
        const bulkUpdateResourceAccessPoliciesParams = {
          accessPolicies,
          authInstanceId,
        };

        const bulkUpdateResourceAccessPoliciesResult = watsonxDataService.bulkUpdateResourceAccessPolicies(bulkUpdateResourceAccessPoliciesParams);

        // all methods should return a Promise
        expectToBePromise(bulkUpdateResourceAccessPoliciesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/access/access_policies/bulk_update', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.access_policies).toEqual(accessPolicies);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __bulkUpdateResourceAccessPoliciesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __bulkUpdateResourceAccessPoliciesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __bulkUpdateResourceAccessPoliciesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const bulkUpdateResourceAccessPoliciesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.bulkUpdateResourceAccessPolicies(bulkUpdateResourceAccessPoliciesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.bulkUpdateResourceAccessPolicies({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('revokeResourceAccessPolicies', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // ResourceDetails
      const resourceDetailsModel = {
        id: 'presto01',
        name: 'hive_data',
        type: 'presto',
      };

      // Subject
      const subjectModel = {
        type: 'user',
        value: 'user1',
      };

      // SubjectRevoke
      const subjectRevokeModel = {
        permissions: ['testString'],
        subject: subjectModel,
      };

      function __revokeResourceAccessPoliciesTest() {
        // Construct the params object for operation revokeResourceAccessPolicies
        const resources = [resourceDetailsModel];
        const subjects = [subjectRevokeModel];
        const authInstanceId = 'testString';
        const revokeResourceAccessPoliciesParams = {
          resources,
          subjects,
          authInstanceId,
        };

        const revokeResourceAccessPoliciesResult = watsonxDataService.revokeResourceAccessPolicies(revokeResourceAccessPoliciesParams);

        // all methods should return a Promise
        expectToBePromise(revokeResourceAccessPoliciesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/access/access_policies/revoke', 'POST');
        const expectedAccept = undefined;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.resources).toEqual(resources);
        expect(mockRequestOptions.body.subjects).toEqual(subjects);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __revokeResourceAccessPoliciesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __revokeResourceAccessPoliciesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __revokeResourceAccessPoliciesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const revokeResourceAccessPoliciesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.revokeResourceAccessPolicies(revokeResourceAccessPoliciesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.revokeResourceAccessPolicies({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('filterResourceAccessPoliciesOnUsersAndUsergroups', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // ResourceDetails
      const resourceDetailsModel = {
        id: 'presto01',
        name: 'hive_data',
        type: 'presto',
      };

      // Subject
      const subjectModel = {
        type: 'user',
        value: 'user1',
      };

      // AccessPoliciesSearch
      const accessPoliciesSearchModel = {
        resources: [resourceDetailsModel],
        subjects_to_search: [subjectModel],
      };

      function __filterResourceAccessPoliciesOnUsersAndUsergroupsTest() {
        // Construct the params object for operation filterResourceAccessPoliciesOnUsersAndUsergroups
        const accessPoliciesSearch = [accessPoliciesSearchModel];
        const authInstanceId = 'testString';
        const filterResourceAccessPoliciesOnUsersAndUsergroupsParams = {
          accessPoliciesSearch,
          authInstanceId,
        };

        const filterResourceAccessPoliciesOnUsersAndUsergroupsResult = watsonxDataService.filterResourceAccessPoliciesOnUsersAndUsergroups(filterResourceAccessPoliciesOnUsersAndUsergroupsParams);

        // all methods should return a Promise
        expectToBePromise(filterResourceAccessPoliciesOnUsersAndUsergroupsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/access/advanced_policy_search', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.access_policies_search).toEqual(accessPoliciesSearch);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __filterResourceAccessPoliciesOnUsersAndUsergroupsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __filterResourceAccessPoliciesOnUsersAndUsergroupsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __filterResourceAccessPoliciesOnUsersAndUsergroupsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accessPoliciesSearch = [accessPoliciesSearchModel];
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const filterResourceAccessPoliciesOnUsersAndUsergroupsParams = {
          accessPoliciesSearch,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.filterResourceAccessPoliciesOnUsersAndUsergroups(filterResourceAccessPoliciesOnUsersAndUsergroupsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.filterResourceAccessPoliciesOnUsersAndUsergroups({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.filterResourceAccessPoliciesOnUsersAndUsergroups();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listDataPolicies', () => {
    describe('positive tests', () => {
      function __listDataPoliciesTest() {
        // Construct the params object for operation listDataPolicies
        const authInstanceId = 'testString';
        const catalogName = 'testString';
        const resourceId = 'testString';
        const status = 'testString';
        const includeMetadata = true;
        const includeRules = true;
        const bucketName = 'testString';
        const serviceName = 'testString';
        const dataArtifact = 'testString';
        const listDataPoliciesParams = {
          authInstanceId,
          catalogName,
          resourceId,
          status,
          includeMetadata,
          includeRules,
          bucketName,
          serviceName,
          dataArtifact,
        };

        const listDataPoliciesResult = watsonxDataService.listDataPolicies(listDataPoliciesParams);

        // all methods should return a Promise
        expectToBePromise(listDataPoliciesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/access/data_policies', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.qs.resource_id).toEqual(resourceId);
        expect(mockRequestOptions.qs.status).toEqual(status);
        expect(mockRequestOptions.qs.include_metadata).toEqual(includeMetadata);
        expect(mockRequestOptions.qs.include_rules).toEqual(includeRules);
        expect(mockRequestOptions.qs.bucket_name).toEqual(bucketName);
        expect(mockRequestOptions.qs.service_name).toEqual(serviceName);
        expect(mockRequestOptions.qs.data_artifact).toEqual(dataArtifact);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listDataPoliciesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __listDataPoliciesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __listDataPoliciesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listDataPoliciesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.listDataPolicies(listDataPoliciesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.listDataPolicies({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createDataPolicy', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // RuleGrantee
      const ruleGranteeModel = {
        key: 'user_name',
        type: 'user_identity',
        value: 'user1',
      };

      // TransformColumnProperties
      const transformColumnPropertiesModel = {
        mask_condition: 'NIL',
        mask_type: 'mask_show_last_4',
        mask_value: 'NIL',
      };

      // RowFilterProperties
      const rowFilterPropertiesModel = {
        filter_condition: 'NIL',
        row_filter: 'addr_country=\'US\'',
      };

      // RuleV2
      const ruleV2Model = {
        actions: ['alter', 'create'],
        effect: 'allow',
        grantees: [ruleGranteeModel],
        transform_columns: transformColumnPropertiesModel,
        transform_rows: rowFilterPropertiesModel,
      };

      function __createDataPolicyTest() {
        // Construct the params object for operation createDataPolicy
        const dataArtifact = 'schema1/table1/(column1|column2)';
        const rules = [ruleV2Model];
        const catalogName = 'catalog1';
        const catalogType = 'catalog1';
        const description = 'policy description';
        const policyName = 'policy1';
        const resourceId = 'catalog1';
        const status = 'active';
        const authInstanceId = 'testString';
        const createDataPolicyParams = {
          dataArtifact,
          rules,
          catalogName,
          catalogType,
          description,
          policyName,
          resourceId,
          status,
          authInstanceId,
        };

        const createDataPolicyResult = watsonxDataService.createDataPolicy(createDataPolicyParams);

        // all methods should return a Promise
        expectToBePromise(createDataPolicyResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/access/data_policies', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.data_artifact).toEqual(dataArtifact);
        expect(mockRequestOptions.body.rules).toEqual(rules);
        expect(mockRequestOptions.body.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.body.catalog_type).toEqual(catalogType);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.policy_name).toEqual(policyName);
        expect(mockRequestOptions.body.resource_id).toEqual(resourceId);
        expect(mockRequestOptions.body.status).toEqual(status);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createDataPolicyTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createDataPolicyTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createDataPolicyTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const dataArtifact = 'schema1/table1/(column1|column2)';
        const rules = [ruleV2Model];
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createDataPolicyParams = {
          dataArtifact,
          rules,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createDataPolicy(createDataPolicyParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createDataPolicy({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createDataPolicy();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteDataPolicies', () => {
    describe('positive tests', () => {
      function __deleteDataPoliciesTest() {
        // Construct the params object for operation deleteDataPolicies
        const authInstanceId = 'testString';
        const policies = 'testString';
        const deleteDataPoliciesParams = {
          authInstanceId,
          policies,
        };

        const deleteDataPoliciesResult = watsonxDataService.deleteDataPolicies(deleteDataPoliciesParams);

        // all methods should return a Promise
        expectToBePromise(deleteDataPoliciesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/access/data_policies', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.policies).toEqual(policies);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteDataPoliciesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteDataPoliciesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteDataPoliciesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteDataPoliciesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteDataPolicies(deleteDataPoliciesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.deleteDataPolicies({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getDataPolicy', () => {
    describe('positive tests', () => {
      function __getDataPolicyTest() {
        // Construct the params object for operation getDataPolicy
        const name = 'testString';
        const authInstanceId = 'testString';
        const getDataPolicyParams = {
          name,
          authInstanceId,
        };

        const getDataPolicyResult = watsonxDataService.getDataPolicy(getDataPolicyParams);

        // all methods should return a Promise
        expectToBePromise(getDataPolicyResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/access/data_policies/{name}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.name).toEqual(name);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getDataPolicyTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getDataPolicyTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getDataPolicyTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const name = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getDataPolicyParams = {
          name,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getDataPolicy(getDataPolicyParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getDataPolicy({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getDataPolicy();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('replaceDataPolicy', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // RuleGrantee
      const ruleGranteeModel = {
        key: 'user_name',
        type: 'user_identity',
        value: 'user1',
      };

      // TransformColumnProperties
      const transformColumnPropertiesModel = {
        mask_condition: 'NIL',
        mask_type: 'mask_show_last_4',
        mask_value: 'NIL',
      };

      // RowFilterProperties
      const rowFilterPropertiesModel = {
        filter_condition: 'NIL',
        row_filter: 'addr_country=\'US\'',
      };

      // RuleV2
      const ruleV2Model = {
        actions: ['alter', 'create'],
        effect: 'allow',
        grantees: [ruleGranteeModel],
        transform_columns: transformColumnPropertiesModel,
        transform_rows: rowFilterPropertiesModel,
      };

      function __replaceDataPolicyTest() {
        // Construct the params object for operation replaceDataPolicy
        const name = 'testString';
        const dataArtifact = 'schema1/table1/(column1|column2)';
        const rules = [ruleV2Model];
        const catalogName = 'catalog1';
        const catalogType = 'catalog1';
        const description = 'policy description';
        const policyName = 'policy1';
        const resourceId = 'catalog1';
        const status = 'active';
        const authInstanceId = 'testString';
        const replaceDataPolicyParams = {
          name,
          dataArtifact,
          rules,
          catalogName,
          catalogType,
          description,
          policyName,
          resourceId,
          status,
          authInstanceId,
        };

        const replaceDataPolicyResult = watsonxDataService.replaceDataPolicy(replaceDataPolicyParams);

        // all methods should return a Promise
        expectToBePromise(replaceDataPolicyResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/access/data_policies/{name}', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.data_artifact).toEqual(dataArtifact);
        expect(mockRequestOptions.body.rules).toEqual(rules);
        expect(mockRequestOptions.body.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.body.catalog_type).toEqual(catalogType);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.policy_name).toEqual(policyName);
        expect(mockRequestOptions.body.resource_id).toEqual(resourceId);
        expect(mockRequestOptions.body.status).toEqual(status);
        expect(mockRequestOptions.path.name).toEqual(name);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __replaceDataPolicyTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __replaceDataPolicyTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __replaceDataPolicyTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const name = 'testString';
        const dataArtifact = 'schema1/table1/(column1|column2)';
        const rules = [ruleV2Model];
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const replaceDataPolicyParams = {
          name,
          dataArtifact,
          rules,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.replaceDataPolicy(replaceDataPolicyParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.replaceDataPolicy({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.replaceDataPolicy();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteDataPolicy', () => {
    describe('positive tests', () => {
      function __deleteDataPolicyTest() {
        // Construct the params object for operation deleteDataPolicy
        const name = 'testString';
        const authInstanceId = 'testString';
        const deleteDataPolicyParams = {
          name,
          authInstanceId,
        };

        const deleteDataPolicyResult = watsonxDataService.deleteDataPolicy(deleteDataPolicyParams);

        // all methods should return a Promise
        expectToBePromise(deleteDataPolicyResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/access/data_policies/{name}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.name).toEqual(name);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteDataPolicyTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteDataPolicyTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteDataPolicyTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const name = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteDataPolicyParams = {
          name,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteDataPolicy(deleteDataPolicyParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteDataPolicy({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteDataPolicy();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateDataPolicy', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // JsonPatchOperation
      const jsonPatchOperationModel = {
        op: 'add',
        path: 'testString',
        from: 'testString',
        value: 'testString',
      };

      function __updateDataPolicyTest() {
        // Construct the params object for operation updateDataPolicy
        const name = 'testString';
        const body = [jsonPatchOperationModel];
        const authInstanceId = 'testString';
        const updateDataPolicyParams = {
          name,
          body,
          authInstanceId,
        };

        const updateDataPolicyResult = watsonxDataService.updateDataPolicy(updateDataPolicyParams);

        // all methods should return a Promise
        expectToBePromise(updateDataPolicyResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/access/data_policies/{name}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body).toEqual(body);
        expect(mockRequestOptions.path.name).toEqual(name);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateDataPolicyTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updateDataPolicyTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updateDataPolicyTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const name = 'testString';
        const body = [jsonPatchOperationModel];
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateDataPolicyParams = {
          name,
          body,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updateDataPolicy(updateDataPolicyParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updateDataPolicy({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updateDataPolicy();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });
});
