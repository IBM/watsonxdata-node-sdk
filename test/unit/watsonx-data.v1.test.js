/**
 * (C) Copyright IBM Corp. 2023.
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

// need to import the whole package to mock getAuthenticatorFromEnvironment
const sdkCorePackage = require('ibm-cloud-sdk-core');

const { NoAuthAuthenticator, unitTestUtils } = sdkCorePackage;

const WatsonxDataV1 = require('../../dist/watsonx-data/v1');

const {
  getOptions,
  checkUrlAndMethod,
  checkMediaHeaders,
  expectToBePromise,
  checkUserHeader,
  checkForSuccessfulExecution,
} = unitTestUtils;

const watsonxDataServiceOptions = {
  authenticator: new NoAuthAuthenticator(),
  url: 'https://lakehouse/api/v1',
};

const watsonxDataService = new WatsonxDataV1(watsonxDataServiceOptions);

let createRequestMock = null;
function mock_createRequest() {
  if (!createRequestMock) {
    createRequestMock = jest.spyOn(watsonxDataService, 'createRequest');
    createRequestMock.mockImplementation(() => Promise.resolve());
  }
}

// dont actually construct an authenticator
const getAuthenticatorMock = jest.spyOn(sdkCorePackage, 'getAuthenticatorFromEnvironment');
getAuthenticatorMock.mockImplementation(() => new NoAuthAuthenticator());

describe('WatsonxDataV1', () => {
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
      const testInstance = WatsonxDataV1.newInstance();

      expect(getAuthenticatorMock).toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceName).toBe(WatsonxDataV1.DEFAULT_SERVICE_NAME);
      expect(testInstance.baseOptions.serviceUrl).toBe(WatsonxDataV1.DEFAULT_SERVICE_URL);
      expect(testInstance).toBeInstanceOf(WatsonxDataV1);
    });

    test('should set serviceName, serviceUrl, and authenticator when provided', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
        serviceName: 'my-service',
      };

      const testInstance = WatsonxDataV1.newInstance(options);

      expect(getAuthenticatorMock).not.toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
      expect(testInstance.baseOptions.serviceName).toBe('my-service');
      expect(testInstance).toBeInstanceOf(WatsonxDataV1);
    });
  });

  describe('the constructor', () => {
    test('use user-given service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
      };

      const testInstance = new WatsonxDataV1(options);

      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
    });

    test('use default service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
      };

      const testInstance = new WatsonxDataV1(options);

      expect(testInstance.baseOptions.serviceUrl).toBe(WatsonxDataV1.DEFAULT_SERVICE_URL);
    });
  });

  describe('createDbConnUsers', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // BucketDbConnGroupsMetadata
      const bucketDbConnGroupsMetadataModel = {
        group_id: 'testString',
        permission: 'can_administer',
      };

      // BucketDbConnUsersMetadata
      const bucketDbConnUsersMetadataModel = {
        user_name: 'testString',
        permission: 'can_administer',
      };

      function __createDbConnUsersTest() {
        // Construct the params object for operation createDbConnUsers
        const databaseId = 'testString';
        const groups = [bucketDbConnGroupsMetadataModel];
        const users = [bucketDbConnUsersMetadataModel];
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const createDbConnUsersParams = {
          databaseId,
          groups,
          users,
          lhInstanceId,
          authInstanceId,
        };

        const createDbConnUsersResult =
          watsonxDataService.createDbConnUsers(createDbConnUsersParams);

        // all methods should return a Promise
        expectToBePromise(createDbConnUsersResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/databases', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.database_id).toEqual(databaseId);
        expect(mockRequestOptions.body.groups).toEqual(groups);
        expect(mockRequestOptions.body.users).toEqual(users);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createDbConnUsersTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createDbConnUsersTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createDbConnUsersTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const databaseId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createDbConnUsersParams = {
          databaseId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createDbConnUsers(createDbConnUsersParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createDbConnUsers({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createDbConnUsers();
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
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const catalogName = 'testString';
        const status = 'testString';
        const includeMetadata = true;
        const includeRules = true;
        const listDataPoliciesParams = {
          lhInstanceId,
          authInstanceId,
          catalogName,
          status,
          includeMetadata,
          includeRules,
        };

        const listDataPoliciesResult = watsonxDataService.listDataPolicies(listDataPoliciesParams);

        // all methods should return a Promise
        expectToBePromise(listDataPoliciesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/data_policies', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.qs.status).toEqual(status);
        expect(mockRequestOptions.qs.include_metadata).toEqual(includeMetadata);
        expect(mockRequestOptions.qs.include_rules).toEqual(includeRules);
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
        value: 'testString',
        key: 'user_name',
        type: 'user_identity',
      };

      // Rule
      const ruleModel = {
        actions: ['all'],
        effect: 'allow',
        grantee: ruleGranteeModel,
      };

      function __createDataPolicyTest() {
        // Construct the params object for operation createDataPolicy
        const catalogName = 'testString';
        const dataArtifact = 'schema1/table1/(column1|column2)';
        const policyName = 'testString';
        const rules = [ruleModel];
        const description = 'testString';
        const status = 'active';
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const createDataPolicyParams = {
          catalogName,
          dataArtifact,
          policyName,
          rules,
          description,
          status,
          lhInstanceId,
          authInstanceId,
        };

        const createDataPolicyResult = watsonxDataService.createDataPolicy(createDataPolicyParams);

        // all methods should return a Promise
        expectToBePromise(createDataPolicyResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/data_policies', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.body.data_artifact).toEqual(dataArtifact);
        expect(mockRequestOptions.body.policy_name).toEqual(policyName);
        expect(mockRequestOptions.body.rules).toEqual(rules);
        expect(mockRequestOptions.body.description).toEqual(description);
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
        const catalogName = 'testString';
        const dataArtifact = 'schema1/table1/(column1|column2)';
        const policyName = 'testString';
        const rules = [ruleModel];
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createDataPolicyParams = {
          catalogName,
          dataArtifact,
          policyName,
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
        const dataPolicies = ['testString'];
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const deleteDataPoliciesParams = {
          dataPolicies,
          lhInstanceId,
          authInstanceId,
        };

        const deleteDataPoliciesResult =
          watsonxDataService.deleteDataPolicies(deleteDataPoliciesParams);

        // all methods should return a Promise
        expectToBePromise(deleteDataPoliciesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/data_policies', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.data_policies).toEqual(dataPolicies);
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

  describe('getEngineUsers', () => {
    describe('positive tests', () => {
      function __getEngineUsersTest() {
        // Construct the params object for operation getEngineUsers
        const engineId = 'testString';
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const getEngineUsersParams = {
          engineId,
          lhInstanceId,
          authInstanceId,
        };

        const getEngineUsersResult = watsonxDataService.getEngineUsers(getEngineUsersParams);

        // all methods should return a Promise
        expectToBePromise(getEngineUsersResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/engines/{engine_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getEngineUsersTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getEngineUsersTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getEngineUsersTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getEngineUsersParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getEngineUsers(getEngineUsersParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getEngineUsers({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getEngineUsers();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteEngineUsers', () => {
    describe('positive tests', () => {
      function __deleteEngineUsersTest() {
        // Construct the params object for operation deleteEngineUsers
        const engineId = 'testString';
        const groups = ['testString'];
        const users = ['testString'];
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const deleteEngineUsersParams = {
          engineId,
          groups,
          users,
          lhInstanceId,
          authInstanceId,
        };

        const deleteEngineUsersResult =
          watsonxDataService.deleteEngineUsers(deleteEngineUsersParams);

        // all methods should return a Promise
        expectToBePromise(deleteEngineUsersResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/engines/{engine_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.groups).toEqual(groups);
        expect(mockRequestOptions.body.users).toEqual(users);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteEngineUsersTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteEngineUsersTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteEngineUsersTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteEngineUsersParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteEngineUsers(deleteEngineUsersParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteEngineUsers({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteEngineUsers();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateEngineUsers', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // EngineGroupsMetadata
      const engineGroupsMetadataModel = {
        group_id: 'testString',
        permission: 'can_administer',
      };

      // EngineUsersMetadata
      const engineUsersMetadataModel = {
        permission: 'can_administer',
        user_name: 'testString',
      };

      function __updateEngineUsersTest() {
        // Construct the params object for operation updateEngineUsers
        const engineId = 'testString';
        const groups = [engineGroupsMetadataModel];
        const users = [engineUsersMetadataModel];
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const updateEngineUsersParams = {
          engineId,
          groups,
          users,
          lhInstanceId,
          authInstanceId,
        };

        const updateEngineUsersResult =
          watsonxDataService.updateEngineUsers(updateEngineUsersParams);

        // all methods should return a Promise
        expectToBePromise(updateEngineUsersResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/engines/{engine_id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.groups).toEqual(groups);
        expect(mockRequestOptions.body.users).toEqual(users);
        expect(mockRequestOptions.path.engine_id).toEqual(engineId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateEngineUsersTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updateEngineUsersTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updateEngineUsersTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateEngineUsersParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updateEngineUsers(updateEngineUsersParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updateEngineUsers({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updateEngineUsers();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteDbConnUsers', () => {
    describe('positive tests', () => {
      function __deleteDbConnUsersTest() {
        // Construct the params object for operation deleteDbConnUsers
        const databaseId = 'testString';
        const groups = ['testString'];
        const users = ['testString'];
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const deleteDbConnUsersParams = {
          databaseId,
          groups,
          users,
          lhInstanceId,
          authInstanceId,
        };

        const deleteDbConnUsersResult =
          watsonxDataService.deleteDbConnUsers(deleteDbConnUsersParams);

        // all methods should return a Promise
        expectToBePromise(deleteDbConnUsersResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/databases/{database_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.groups).toEqual(groups);
        expect(mockRequestOptions.body.users).toEqual(users);
        expect(mockRequestOptions.path.database_id).toEqual(databaseId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteDbConnUsersTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteDbConnUsersTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteDbConnUsersTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const databaseId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteDbConnUsersParams = {
          databaseId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteDbConnUsers(deleteDbConnUsersParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteDbConnUsers({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteDbConnUsers();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateDbConnUsers', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // BucketDbConnGroupsMetadata
      const bucketDbConnGroupsMetadataModel = {
        group_id: 'testString',
        permission: 'can_administer',
      };

      // BucketDbConnUsersMetadata
      const bucketDbConnUsersMetadataModel = {
        user_name: 'testString',
        permission: 'can_administer',
      };

      function __updateDbConnUsersTest() {
        // Construct the params object for operation updateDbConnUsers
        const databaseId = 'testString';
        const groups = [bucketDbConnGroupsMetadataModel];
        const users = [bucketDbConnUsersMetadataModel];
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const updateDbConnUsersParams = {
          databaseId,
          groups,
          users,
          lhInstanceId,
          authInstanceId,
        };

        const updateDbConnUsersResult =
          watsonxDataService.updateDbConnUsers(updateDbConnUsersParams);

        // all methods should return a Promise
        expectToBePromise(updateDbConnUsersResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/databases/{database_id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.groups).toEqual(groups);
        expect(mockRequestOptions.body.users).toEqual(users);
        expect(mockRequestOptions.path.database_id).toEqual(databaseId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateDbConnUsersTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updateDbConnUsersTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updateDbConnUsersTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const databaseId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateDbConnUsersParams = {
          databaseId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updateDbConnUsers(updateDbConnUsersParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updateDbConnUsers({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updateDbConnUsers();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getDbConnUsers', () => {
    describe('positive tests', () => {
      function __getDbConnUsersTest() {
        // Construct the params object for operation getDbConnUsers
        const databaseId = 'testString';
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const getDbConnUsersParams = {
          databaseId,
          lhInstanceId,
          authInstanceId,
        };

        const getDbConnUsersResult = watsonxDataService.getDbConnUsers(getDbConnUsersParams);

        // all methods should return a Promise
        expectToBePromise(getDbConnUsersResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/databases/{database_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.database_id).toEqual(databaseId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getDbConnUsersTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getDbConnUsersTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getDbConnUsersTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const databaseId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getDbConnUsersParams = {
          databaseId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getDbConnUsers(getDbConnUsersParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getDbConnUsers({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getDbConnUsers();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createCatalogUsers', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // CatalogGroupsMetadata
      const catalogGroupsMetadataModel = {
        group_id: 'testString',
        permission: 'can_administer',
      };

      // CatalogUsersMetadata
      const catalogUsersMetadataModel = {
        permission: 'can_administer',
        user_name: 'testString',
      };

      function __createCatalogUsersTest() {
        // Construct the params object for operation createCatalogUsers
        const catalogName = 'testString';
        const groups = [catalogGroupsMetadataModel];
        const users = [catalogUsersMetadataModel];
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const createCatalogUsersParams = {
          catalogName,
          groups,
          users,
          lhInstanceId,
          authInstanceId,
        };

        const createCatalogUsersResult =
          watsonxDataService.createCatalogUsers(createCatalogUsersParams);

        // all methods should return a Promise
        expectToBePromise(createCatalogUsersResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/catalogs', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.body.groups).toEqual(groups);
        expect(mockRequestOptions.body.users).toEqual(users);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createCatalogUsersTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createCatalogUsersTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createCatalogUsersTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const catalogName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createCatalogUsersParams = {
          catalogName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createCatalogUsers(createCatalogUsersParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createCatalogUsers({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createCatalogUsers();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getCatalogUsers', () => {
    describe('positive tests', () => {
      function __getCatalogUsersTest() {
        // Construct the params object for operation getCatalogUsers
        const catalogName = 'testString';
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const getCatalogUsersParams = {
          catalogName,
          lhInstanceId,
          authInstanceId,
        };

        const getCatalogUsersResult = watsonxDataService.getCatalogUsers(getCatalogUsersParams);

        // all methods should return a Promise
        expectToBePromise(getCatalogUsersResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/catalogs/{catalog_name}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.catalog_name).toEqual(catalogName);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getCatalogUsersTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getCatalogUsersTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getCatalogUsersTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const catalogName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getCatalogUsersParams = {
          catalogName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getCatalogUsers(getCatalogUsersParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getCatalogUsers({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getCatalogUsers();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteCatalogUsers', () => {
    describe('positive tests', () => {
      function __deleteCatalogUsersTest() {
        // Construct the params object for operation deleteCatalogUsers
        const catalogName = 'testString';
        const groups = ['testString'];
        const users = ['testString'];
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const deleteCatalogUsersParams = {
          catalogName,
          groups,
          users,
          lhInstanceId,
          authInstanceId,
        };

        const deleteCatalogUsersResult =
          watsonxDataService.deleteCatalogUsers(deleteCatalogUsersParams);

        // all methods should return a Promise
        expectToBePromise(deleteCatalogUsersResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/catalogs/{catalog_name}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.groups).toEqual(groups);
        expect(mockRequestOptions.body.users).toEqual(users);
        expect(mockRequestOptions.path.catalog_name).toEqual(catalogName);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteCatalogUsersTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteCatalogUsersTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteCatalogUsersTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const catalogName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteCatalogUsersParams = {
          catalogName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteCatalogUsers(deleteCatalogUsersParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteCatalogUsers({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteCatalogUsers();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateCatalogUsers', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // CatalogGroupsMetadata
      const catalogGroupsMetadataModel = {
        group_id: 'testString',
        permission: 'can_administer',
      };

      // CatalogUsersMetadata
      const catalogUsersMetadataModel = {
        permission: 'can_administer',
        user_name: 'testString',
      };

      function __updateCatalogUsersTest() {
        // Construct the params object for operation updateCatalogUsers
        const catalogName = 'testString';
        const groups = [catalogGroupsMetadataModel];
        const users = [catalogUsersMetadataModel];
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const updateCatalogUsersParams = {
          catalogName,
          groups,
          users,
          lhInstanceId,
          authInstanceId,
        };

        const updateCatalogUsersResult =
          watsonxDataService.updateCatalogUsers(updateCatalogUsersParams);

        // all methods should return a Promise
        expectToBePromise(updateCatalogUsersResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/catalogs/{catalog_name}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.groups).toEqual(groups);
        expect(mockRequestOptions.body.users).toEqual(users);
        expect(mockRequestOptions.path.catalog_name).toEqual(catalogName);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateCatalogUsersTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updateCatalogUsersTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updateCatalogUsersTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const catalogName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateCatalogUsersParams = {
          catalogName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updateCatalogUsers(updateCatalogUsersParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updateCatalogUsers({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updateCatalogUsers();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('evaluate', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // ResourcesMetadata
      const resourcesMetadataModel = {
        action: 'testString',
        resource_name: 'testString',
        resource_type: 'engine',
      };

      function __evaluateTest() {
        // Construct the params object for operation evaluate
        const resources = [resourcesMetadataModel];
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const evaluateParams = {
          resources,
          lhInstanceId,
          authInstanceId,
        };

        const evaluateResult = watsonxDataService.evaluate(evaluateParams);

        // all methods should return a Promise
        expectToBePromise(evaluateResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/evaluation', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.resources).toEqual(resources);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __evaluateTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __evaluateTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __evaluateTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const evaluateParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.evaluate(evaluateParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.evaluate({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getPoliciesList', () => {
    describe('positive tests', () => {
      function __getPoliciesListTest() {
        // Construct the params object for operation getPoliciesList
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const catalogList = ['testString'];
        const engineList = ['testString'];
        const dataPoliciesList = ['testString'];
        const includeDataPolicies = true;
        const getPoliciesListParams = {
          lhInstanceId,
          authInstanceId,
          catalogList,
          engineList,
          dataPoliciesList,
          includeDataPolicies,
        };

        const getPoliciesListResult = watsonxDataService.getPoliciesList(getPoliciesListParams);

        // all methods should return a Promise
        expectToBePromise(getPoliciesListResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/policies', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.catalog_list).toEqual(catalogList);
        expect(mockRequestOptions.qs.engine_list).toEqual(engineList);
        expect(mockRequestOptions.qs.data_policies_list).toEqual(dataPoliciesList);
        expect(mockRequestOptions.qs.include_data_policies).toEqual(includeDataPolicies);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getPoliciesListTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getPoliciesListTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getPoliciesListTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getPoliciesListParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getPoliciesList(getPoliciesListParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.getPoliciesList({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createMetastoreUsers', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // GroupsMetadata
      const groupsMetadataModel = {
        group_id: 'testString',
        permission: 'can_administer',
      };

      // UsersMetadata
      const usersMetadataModel = {
        permission: 'can_administer',
        user_name: 'testString',
      };

      function __createMetastoreUsersTest() {
        // Construct the params object for operation createMetastoreUsers
        const metastoreName = 'testString';
        const groups = [groupsMetadataModel];
        const users = [usersMetadataModel];
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const createMetastoreUsersParams = {
          metastoreName,
          groups,
          users,
          lhInstanceId,
          authInstanceId,
        };

        const createMetastoreUsersResult = watsonxDataService.createMetastoreUsers(
          createMetastoreUsersParams
        );

        // all methods should return a Promise
        expectToBePromise(createMetastoreUsersResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/metastores', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.metastore_name).toEqual(metastoreName);
        expect(mockRequestOptions.body.groups).toEqual(groups);
        expect(mockRequestOptions.body.users).toEqual(users);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createMetastoreUsersTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createMetastoreUsersTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createMetastoreUsersTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const metastoreName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createMetastoreUsersParams = {
          metastoreName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createMetastoreUsers(createMetastoreUsersParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createMetastoreUsers({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createMetastoreUsers();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getMetastoreUsers', () => {
    describe('positive tests', () => {
      function __getMetastoreUsersTest() {
        // Construct the params object for operation getMetastoreUsers
        const metastoreName = 'testString';
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const getMetastoreUsersParams = {
          metastoreName,
          lhInstanceId,
          authInstanceId,
        };

        const getMetastoreUsersResult =
          watsonxDataService.getMetastoreUsers(getMetastoreUsersParams);

        // all methods should return a Promise
        expectToBePromise(getMetastoreUsersResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/metastores/{metastore_name}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.metastore_name).toEqual(metastoreName);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getMetastoreUsersTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getMetastoreUsersTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getMetastoreUsersTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const metastoreName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getMetastoreUsersParams = {
          metastoreName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getMetastoreUsers(getMetastoreUsersParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getMetastoreUsers({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getMetastoreUsers();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteMetastoreUsers', () => {
    describe('positive tests', () => {
      function __deleteMetastoreUsersTest() {
        // Construct the params object for operation deleteMetastoreUsers
        const metastoreName = 'testString';
        const groups = ['testString'];
        const users = ['testString'];
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const deleteMetastoreUsersParams = {
          metastoreName,
          groups,
          users,
          lhInstanceId,
          authInstanceId,
        };

        const deleteMetastoreUsersResult = watsonxDataService.deleteMetastoreUsers(
          deleteMetastoreUsersParams
        );

        // all methods should return a Promise
        expectToBePromise(deleteMetastoreUsersResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/metastores/{metastore_name}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.groups).toEqual(groups);
        expect(mockRequestOptions.body.users).toEqual(users);
        expect(mockRequestOptions.path.metastore_name).toEqual(metastoreName);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteMetastoreUsersTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteMetastoreUsersTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteMetastoreUsersTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const metastoreName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteMetastoreUsersParams = {
          metastoreName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteMetastoreUsers(deleteMetastoreUsersParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteMetastoreUsers({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteMetastoreUsers();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateMetastoreUsers', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // GroupsMetadata
      const groupsMetadataModel = {
        group_id: 'testString',
        permission: 'can_administer',
      };

      // UsersMetadata
      const usersMetadataModel = {
        permission: 'can_administer',
        user_name: 'testString',
      };

      function __updateMetastoreUsersTest() {
        // Construct the params object for operation updateMetastoreUsers
        const metastoreName = 'testString';
        const groups = [groupsMetadataModel];
        const users = [usersMetadataModel];
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const updateMetastoreUsersParams = {
          metastoreName,
          groups,
          users,
          lhInstanceId,
          authInstanceId,
        };

        const updateMetastoreUsersResult = watsonxDataService.updateMetastoreUsers(
          updateMetastoreUsersParams
        );

        // all methods should return a Promise
        expectToBePromise(updateMetastoreUsersResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/metastores/{metastore_name}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.groups).toEqual(groups);
        expect(mockRequestOptions.body.users).toEqual(users);
        expect(mockRequestOptions.path.metastore_name).toEqual(metastoreName);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateMetastoreUsersTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updateMetastoreUsersTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updateMetastoreUsersTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const metastoreName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateMetastoreUsersParams = {
          metastoreName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updateMetastoreUsers(updateMetastoreUsersParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updateMetastoreUsers({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updateMetastoreUsers();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createBucketUsers', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // BucketDbConnGroupsMetadata
      const bucketDbConnGroupsMetadataModel = {
        group_id: 'testString',
        permission: 'can_administer',
      };

      // BucketDbConnUsersMetadata
      const bucketDbConnUsersMetadataModel = {
        user_name: 'testString',
        permission: 'can_administer',
      };

      function __createBucketUsersTest() {
        // Construct the params object for operation createBucketUsers
        const bucketId = 'testString';
        const groups = [bucketDbConnGroupsMetadataModel];
        const users = [bucketDbConnUsersMetadataModel];
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const createBucketUsersParams = {
          bucketId,
          groups,
          users,
          lhInstanceId,
          authInstanceId,
        };

        const createBucketUsersResult =
          watsonxDataService.createBucketUsers(createBucketUsersParams);

        // all methods should return a Promise
        expectToBePromise(createBucketUsersResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/buckets', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.bucket_id).toEqual(bucketId);
        expect(mockRequestOptions.body.groups).toEqual(groups);
        expect(mockRequestOptions.body.users).toEqual(users);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createBucketUsersTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createBucketUsersTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createBucketUsersTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const bucketId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createBucketUsersParams = {
          bucketId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createBucketUsers(createBucketUsersParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createBucketUsers({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createBucketUsers();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getDefaultPolicies', () => {
    describe('positive tests', () => {
      function __getDefaultPoliciesTest() {
        // Construct the params object for operation getDefaultPolicies
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const getDefaultPoliciesParams = {
          lhInstanceId,
          authInstanceId,
        };

        const getDefaultPoliciesResult =
          watsonxDataService.getDefaultPolicies(getDefaultPoliciesParams);

        // all methods should return a Promise
        expectToBePromise(getDefaultPoliciesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/default_policies', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getDefaultPoliciesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getDefaultPoliciesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getDefaultPoliciesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getDefaultPoliciesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getDefaultPolicies(getDefaultPoliciesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.getDefaultPolicies({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getPolicyVersion', () => {
    describe('positive tests', () => {
      function __getPolicyVersionTest() {
        // Construct the params object for operation getPolicyVersion
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const getPolicyVersionParams = {
          lhInstanceId,
          authInstanceId,
        };

        const getPolicyVersionResult = watsonxDataService.getPolicyVersion(getPolicyVersionParams);

        // all methods should return a Promise
        expectToBePromise(getPolicyVersionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/policy_versions', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getPolicyVersionTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getPolicyVersionTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getPolicyVersionTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getPolicyVersionParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getPolicyVersion(getPolicyVersionParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.getPolicyVersion({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getDataPolicy', () => {
    describe('positive tests', () => {
      function __getDataPolicyTest() {
        // Construct the params object for operation getDataPolicy
        const policyName = 'testString';
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const getDataPolicyParams = {
          policyName,
          lhInstanceId,
          authInstanceId,
        };

        const getDataPolicyResult = watsonxDataService.getDataPolicy(getDataPolicyParams);

        // all methods should return a Promise
        expectToBePromise(getDataPolicyResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/data_policies/{policy_name}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.policy_name).toEqual(policyName);
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
        const policyName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getDataPolicyParams = {
          policyName,
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
        value: 'testString',
        key: 'user_name',
        type: 'user_identity',
      };

      // Rule
      const ruleModel = {
        actions: ['all'],
        effect: 'allow',
        grantee: ruleGranteeModel,
      };

      function __replaceDataPolicyTest() {
        // Construct the params object for operation replaceDataPolicy
        const policyName = 'testString';
        const catalogName = 'testString';
        const dataArtifact = 'schema1/table1/(column1|column2)';
        const rules = [ruleModel];
        const description = 'testString';
        const status = 'active';
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const replaceDataPolicyParams = {
          policyName,
          catalogName,
          dataArtifact,
          rules,
          description,
          status,
          lhInstanceId,
          authInstanceId,
        };

        const replaceDataPolicyResult =
          watsonxDataService.replaceDataPolicy(replaceDataPolicyParams);

        // all methods should return a Promise
        expectToBePromise(replaceDataPolicyResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/data_policies/{policy_name}', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.body.data_artifact).toEqual(dataArtifact);
        expect(mockRequestOptions.body.rules).toEqual(rules);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.status).toEqual(status);
        expect(mockRequestOptions.path.policy_name).toEqual(policyName);
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
        const policyName = 'testString';
        const catalogName = 'testString';
        const dataArtifact = 'schema1/table1/(column1|column2)';
        const rules = [ruleModel];
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const replaceDataPolicyParams = {
          policyName,
          catalogName,
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
        const policyName = 'testString';
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const deleteDataPolicyParams = {
          policyName,
          lhInstanceId,
          authInstanceId,
        };

        const deleteDataPolicyResult = watsonxDataService.deleteDataPolicy(deleteDataPolicyParams);

        // all methods should return a Promise
        expectToBePromise(deleteDataPolicyResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/data_policies/{policy_name}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.policy_name).toEqual(policyName);
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
        const policyName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteDataPolicyParams = {
          policyName,
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

  describe('createEngineUsers', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // EngineGroupsMetadata
      const engineGroupsMetadataModel = {
        group_id: 'testString',
        permission: 'can_administer',
      };

      // EngineUsersMetadata
      const engineUsersMetadataModel = {
        permission: 'can_administer',
        user_name: 'testString',
      };

      function __createEngineUsersTest() {
        // Construct the params object for operation createEngineUsers
        const engineId = 'testString';
        const groups = [engineGroupsMetadataModel];
        const users = [engineUsersMetadataModel];
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const createEngineUsersParams = {
          engineId,
          groups,
          users,
          lhInstanceId,
          authInstanceId,
        };

        const createEngineUsersResult =
          watsonxDataService.createEngineUsers(createEngineUsersParams);

        // all methods should return a Promise
        expectToBePromise(createEngineUsersResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/engines', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.engine_id).toEqual(engineId);
        expect(mockRequestOptions.body.groups).toEqual(groups);
        expect(mockRequestOptions.body.users).toEqual(users);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createEngineUsersTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createEngineUsersTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createEngineUsersTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createEngineUsersParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createEngineUsers(createEngineUsersParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createEngineUsers({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createEngineUsers();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getBucketUsers', () => {
    describe('positive tests', () => {
      function __getBucketUsersTest() {
        // Construct the params object for operation getBucketUsers
        const bucketId = 'testString';
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const getBucketUsersParams = {
          bucketId,
          lhInstanceId,
          authInstanceId,
        };

        const getBucketUsersResult = watsonxDataService.getBucketUsers(getBucketUsersParams);

        // all methods should return a Promise
        expectToBePromise(getBucketUsersResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/buckets/{bucket_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.bucket_id).toEqual(bucketId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getBucketUsersTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getBucketUsersTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getBucketUsersTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const bucketId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getBucketUsersParams = {
          bucketId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getBucketUsers(getBucketUsersParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getBucketUsers({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getBucketUsers();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteBucketUsers', () => {
    describe('positive tests', () => {
      function __deleteBucketUsersTest() {
        // Construct the params object for operation deleteBucketUsers
        const bucketId = 'testString';
        const groups = ['testString'];
        const users = ['testString'];
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const deleteBucketUsersParams = {
          bucketId,
          groups,
          users,
          lhInstanceId,
          authInstanceId,
        };

        const deleteBucketUsersResult =
          watsonxDataService.deleteBucketUsers(deleteBucketUsersParams);

        // all methods should return a Promise
        expectToBePromise(deleteBucketUsersResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/buckets/{bucket_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.groups).toEqual(groups);
        expect(mockRequestOptions.body.users).toEqual(users);
        expect(mockRequestOptions.path.bucket_id).toEqual(bucketId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteBucketUsersTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteBucketUsersTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteBucketUsersTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const bucketId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteBucketUsersParams = {
          bucketId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteBucketUsers(deleteBucketUsersParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteBucketUsers({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteBucketUsers();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateBucketUsers', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // BucketDbConnGroupsMetadata
      const bucketDbConnGroupsMetadataModel = {
        group_id: 'testString',
        permission: 'can_administer',
      };

      // BucketDbConnUsersMetadata
      const bucketDbConnUsersMetadataModel = {
        user_name: 'testString',
        permission: 'can_administer',
      };

      function __updateBucketUsersTest() {
        // Construct the params object for operation updateBucketUsers
        const bucketId = 'testString';
        const groups = [bucketDbConnGroupsMetadataModel];
        const users = [bucketDbConnUsersMetadataModel];
        const lhInstanceId = 'testString';
        const authInstanceId = 'testString';
        const updateBucketUsersParams = {
          bucketId,
          groups,
          users,
          lhInstanceId,
          authInstanceId,
        };

        const updateBucketUsersResult =
          watsonxDataService.updateBucketUsers(updateBucketUsersParams);

        // all methods should return a Promise
        expectToBePromise(updateBucketUsersResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/access/buckets/{bucket_id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'LhInstanceId', lhInstanceId);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.groups).toEqual(groups);
        expect(mockRequestOptions.body.users).toEqual(users);
        expect(mockRequestOptions.path.bucket_id).toEqual(bucketId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateBucketUsersTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updateBucketUsersTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updateBucketUsersTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const bucketId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateBucketUsersParams = {
          bucketId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updateBucketUsers(updateBucketUsersParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updateBucketUsers({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updateBucketUsers();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getBuckets', () => {
    describe('positive tests', () => {
      function __getBucketsTest() {
        // Construct the params object for operation getBuckets
        const authInstanceId = 'testString';
        const getBucketsParams = {
          authInstanceId,
        };

        const getBucketsResult = watsonxDataService.getBuckets(getBucketsParams);

        // all methods should return a Promise
        expectToBePromise(getBucketsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/buckets', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getBucketsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getBucketsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getBucketsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getBucketsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getBuckets(getBucketsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.getBuckets({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getBucketObjects', () => {
    describe('positive tests', () => {
      function __getBucketObjectsTest() {
        // Construct the params object for operation getBucketObjects
        const bucketId = 'testString';
        const authInstanceId = 'testString';
        const getBucketObjectsParams = {
          bucketId,
          authInstanceId,
        };

        const getBucketObjectsResult = watsonxDataService.getBucketObjects(getBucketObjectsParams);

        // all methods should return a Promise
        expectToBePromise(getBucketObjectsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/buckets/bucket/objects', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.bucket_id).toEqual(bucketId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getBucketObjectsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getBucketObjectsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getBucketObjectsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const bucketId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getBucketObjectsParams = {
          bucketId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getBucketObjects(getBucketObjectsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getBucketObjects({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getBucketObjects();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deactivateBucket', () => {
    describe('positive tests', () => {
      function __deactivateBucketTest() {
        // Construct the params object for operation deactivateBucket
        const bucketId = 'samplebucket123';
        const accept = 'testString';
        const authInstanceId = 'testString';
        const deactivateBucketParams = {
          bucketId,
          accept,
          authInstanceId,
        };

        const deactivateBucketResult = watsonxDataService.deactivateBucket(deactivateBucketParams);

        // all methods should return a Promise
        expectToBePromise(deactivateBucketResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/buckets/bucket/deactivate', 'POST');
        const expectedAccept = accept;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept', accept);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.bucket_id).toEqual(bucketId);
        expect(mockRequestOptions.responseType).toBe('stream');
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deactivateBucketTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deactivateBucketTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deactivateBucketTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const bucketId = 'samplebucket123';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deactivateBucketParams = {
          bucketId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deactivateBucket(deactivateBucketParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deactivateBucket({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deactivateBucket();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('registerBucket', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // BucketDetails
      const bucketDetailsModel = {
        access_key: '<access_key>',
        bucket_name: 'sample-bucket',
        endpoint: 'https://s3.<region>.cloud-object-storage.appdomain.cloud/',
        secret_key: '<secret_key>',
      };

      function __registerBucketTest() {
        // Construct the params object for operation registerBucket
        const bucketDetails = bucketDetailsModel;
        const description = 'COS bucket for customer data';
        const tableType = 'iceberg';
        const bucketType = 'ibm_cos';
        const catalogName = 'sampleCatalog';
        const managedBy = 'ibm';
        const bucketDisplayName = 'sample-bucket-displayname';
        const bucketTags = ['read customer data', 'write customer data'];
        const catalogTags = ['catalog_tag_1', 'catalog_tag_2'];
        const thriftUri = 'thrift://samplehost-metastore:4354';
        const authInstanceId = 'testString';
        const registerBucketParams = {
          bucketDetails,
          description,
          tableType,
          bucketType,
          catalogName,
          managedBy,
          bucketDisplayName,
          bucketTags,
          catalogTags,
          thriftUri,
          authInstanceId,
        };

        const registerBucketResult = watsonxDataService.registerBucket(registerBucketParams);

        // all methods should return a Promise
        expectToBePromise(registerBucketResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/buckets/bucket', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.bucket_details).toEqual(bucketDetails);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.table_type).toEqual(tableType);
        expect(mockRequestOptions.body.bucket_type).toEqual(bucketType);
        expect(mockRequestOptions.body.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.body.managed_by).toEqual(managedBy);
        expect(mockRequestOptions.body.bucket_display_name).toEqual(bucketDisplayName);
        expect(mockRequestOptions.body.bucket_tags).toEqual(bucketTags);
        expect(mockRequestOptions.body.catalog_tags).toEqual(catalogTags);
        expect(mockRequestOptions.body.thrift_uri).toEqual(thriftUri);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __registerBucketTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __registerBucketTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __registerBucketTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const bucketDetails = bucketDetailsModel;
        const description = 'COS bucket for customer data';
        const tableType = 'iceberg';
        const bucketType = 'ibm_cos';
        const catalogName = 'sampleCatalog';
        const managedBy = 'ibm';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const registerBucketParams = {
          bucketDetails,
          description,
          tableType,
          bucketType,
          catalogName,
          managedBy,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.registerBucket(registerBucketParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.registerBucket({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.registerBucket();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('unregisterBucket', () => {
    describe('positive tests', () => {
      function __unregisterBucketTest() {
        // Construct the params object for operation unregisterBucket
        const bucketId = 'bucket_id';
        const authInstanceId = 'testString';
        const unregisterBucketParams = {
          bucketId,
          authInstanceId,
        };

        const unregisterBucketResult = watsonxDataService.unregisterBucket(unregisterBucketParams);

        // all methods should return a Promise
        expectToBePromise(unregisterBucketResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/buckets/bucket', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.bucket_id).toEqual(bucketId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __unregisterBucketTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __unregisterBucketTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __unregisterBucketTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const bucketId = 'bucket_id';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const unregisterBucketParams = {
          bucketId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.unregisterBucket(unregisterBucketParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.unregisterBucket({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.unregisterBucket();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateBucket', () => {
    describe('positive tests', () => {
      function __updateBucketTest() {
        // Construct the params object for operation updateBucket
        const bucketId = 'samplebucket123';
        const accessKey = '<access_key>';
        const bucketDisplayName = 'sample-bucket-displayname';
        const description = 'COS bucket for customer data';
        const secretKey = '<secret_key>';
        const tags = ['testbucket', 'userbucket'];
        const authInstanceId = 'testString';
        const updateBucketParams = {
          bucketId,
          accessKey,
          bucketDisplayName,
          description,
          secretKey,
          tags,
          authInstanceId,
        };

        const updateBucketResult = watsonxDataService.updateBucket(updateBucketParams);

        // all methods should return a Promise
        expectToBePromise(updateBucketResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/buckets/bucket', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.bucket_id).toEqual(bucketId);
        expect(mockRequestOptions.body.access_key).toEqual(accessKey);
        expect(mockRequestOptions.body.bucket_display_name).toEqual(bucketDisplayName);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.secret_key).toEqual(secretKey);
        expect(mockRequestOptions.body.tags).toEqual(tags);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateBucketTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updateBucketTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updateBucketTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const bucketId = 'samplebucket123';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateBucketParams = {
          bucketId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updateBucket(updateBucketParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updateBucket({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updateBucket();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('activateBucket', () => {
    describe('positive tests', () => {
      function __activateBucketTest() {
        // Construct the params object for operation activateBucket
        const bucketId = 'samplebucket123';
        const accept = 'testString';
        const authInstanceId = 'testString';
        const activateBucketParams = {
          bucketId,
          accept,
          authInstanceId,
        };

        const activateBucketResult = watsonxDataService.activateBucket(activateBucketParams);

        // all methods should return a Promise
        expectToBePromise(activateBucketResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/buckets/bucket/activate', 'POST');
        const expectedAccept = accept;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept', accept);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.bucket_id).toEqual(bucketId);
        expect(mockRequestOptions.responseType).toBe('stream');
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __activateBucketTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __activateBucketTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __activateBucketTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const bucketId = 'samplebucket123';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const activateBucketParams = {
          bucketId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.activateBucket(activateBucketParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.activateBucket({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.activateBucket();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getDatabases', () => {
    describe('positive tests', () => {
      function __getDatabasesTest() {
        // Construct the params object for operation getDatabases
        const accept = 'testString';
        const authInstanceId = 'testString';
        const getDatabasesParams = {
          accept,
          authInstanceId,
        };

        const getDatabasesResult = watsonxDataService.getDatabases(getDatabasesParams);

        // all methods should return a Promise
        expectToBePromise(getDatabasesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/databases', 'GET');
        const expectedAccept = accept;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept', accept);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.responseType).toBe('stream');
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getDatabasesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getDatabasesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getDatabasesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getDatabasesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getDatabases(getDatabasesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.getDatabases({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createDatabaseCatalog', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // RegisterDatabaseCatalogBodyDatabaseDetails
      const registerDatabaseCatalogBodyDatabaseDetailsModel = {
        password: 'samplepassword',
        port: '4553',
        ssl: true,
        tables: 'kafka_table_name',
        username: 'sampleuser',
        database_name: 'new_database',
        hostname: 'db2@<hostname>.com',
      };

      function __createDatabaseCatalogTest() {
        // Construct the params object for operation createDatabaseCatalog
        const databaseDisplayName = 'new_database';
        const databaseType = 'db2';
        const catalogName = 'sampleCatalog';
        const databaseDetails = registerDatabaseCatalogBodyDatabaseDetailsModel;
        const description = 'db2 extenal database description';
        const tags = ['tag_1', 'tag_2'];
        const createdBy = '<username>@<domain>.com';
        const createdOn = 38;
        const accept = 'testString';
        const authInstanceId = 'testString';
        const createDatabaseCatalogParams = {
          databaseDisplayName,
          databaseType,
          catalogName,
          databaseDetails,
          description,
          tags,
          createdBy,
          createdOn,
          accept,
          authInstanceId,
        };

        const createDatabaseCatalogResult = watsonxDataService.createDatabaseCatalog(
          createDatabaseCatalogParams
        );

        // all methods should return a Promise
        expectToBePromise(createDatabaseCatalogResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/databases/database', 'POST');
        const expectedAccept = accept;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept', accept);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.database_display_name).toEqual(databaseDisplayName);
        expect(mockRequestOptions.body.database_type).toEqual(databaseType);
        expect(mockRequestOptions.body.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.body.database_details).toEqual(databaseDetails);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.created_by).toEqual(createdBy);
        expect(mockRequestOptions.body.created_on).toEqual(createdOn);
        expect(mockRequestOptions.responseType).toBe('stream');
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createDatabaseCatalogTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createDatabaseCatalogTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createDatabaseCatalogTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const databaseDisplayName = 'new_database';
        const databaseType = 'db2';
        const catalogName = 'sampleCatalog';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createDatabaseCatalogParams = {
          databaseDisplayName,
          databaseType,
          catalogName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createDatabaseCatalog(createDatabaseCatalogParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createDatabaseCatalog({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createDatabaseCatalog();
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
        const databaseId = 'new_db_id';
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

        checkUrlAndMethod(mockRequestOptions, '/databases/database', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.database_id).toEqual(databaseId);
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
        const databaseId = 'new_db_id';
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

      // UpdateDatabaseBodyDatabaseDetails
      const updateDatabaseBodyDatabaseDetailsModel = {
        password: 'samplepassword',
        username: 'sampleuser',
      };

      function __updateDatabaseTest() {
        // Construct the params object for operation updateDatabase
        const databaseId = 'new_db_id';
        const databaseDetails = updateDatabaseBodyDatabaseDetailsModel;
        const databaseDisplayName = 'new_database';
        const description = 'External database description';
        const tags = ['testdatabase', 'userdatabase'];
        const accept = 'testString';
        const authInstanceId = 'testString';
        const updateDatabaseParams = {
          databaseId,
          databaseDetails,
          databaseDisplayName,
          description,
          tags,
          accept,
          authInstanceId,
        };

        const updateDatabaseResult = watsonxDataService.updateDatabase(updateDatabaseParams);

        // all methods should return a Promise
        expectToBePromise(updateDatabaseResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/databases/database', 'PATCH');
        const expectedAccept = accept;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept', accept);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.database_id).toEqual(databaseId);
        expect(mockRequestOptions.body.database_details).toEqual(databaseDetails);
        expect(mockRequestOptions.body.database_display_name).toEqual(databaseDisplayName);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.responseType).toBe('stream');
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
        const databaseId = 'new_db_id';
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

  describe('pauseEngine', () => {
    describe('positive tests', () => {
      function __pauseEngineTest() {
        // Construct the params object for operation pauseEngine
        const engineId = 'testString';
        const createdBy = 'testString';
        const authInstanceId = 'testString';
        const pauseEngineParams = {
          engineId,
          createdBy,
          authInstanceId,
        };

        const pauseEngineResult = watsonxDataService.pauseEngine(pauseEngineParams);

        // all methods should return a Promise
        expectToBePromise(pauseEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/engines/engine/pause', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.engine_id).toEqual(engineId);
        expect(mockRequestOptions.body.created_by).toEqual(createdBy);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __pauseEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __pauseEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __pauseEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const pauseEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.pauseEngine(pauseEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.pauseEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.pauseEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getEngines', () => {
    describe('positive tests', () => {
      function __getEnginesTest() {
        // Construct the params object for operation getEngines
        const authInstanceId = 'testString';
        const getEnginesParams = {
          authInstanceId,
        };

        const getEnginesResult = watsonxDataService.getEngines(getEnginesParams);

        // all methods should return a Promise
        expectToBePromise(getEnginesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/engines', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getEnginesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getEnginesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getEnginesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getEnginesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getEngines(getEnginesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.getEngines({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getDeployments', () => {
    describe('positive tests', () => {
      function __getDeploymentsTest() {
        // Construct the params object for operation getDeployments
        const accept = 'testString';
        const authInstanceId = 'testString';
        const getDeploymentsParams = {
          accept,
          authInstanceId,
        };

        const getDeploymentsResult = watsonxDataService.getDeployments(getDeploymentsParams);

        // all methods should return a Promise
        expectToBePromise(getDeploymentsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/instance', 'GET');
        const expectedAccept = accept;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept', accept);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.responseType).toBe('stream');
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getDeploymentsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getDeploymentsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getDeploymentsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getDeploymentsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getDeployments(getDeploymentsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.getDeployments({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('updateEngine', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // NodeDescription
      const nodeDescriptionModel = {
        node_type: 'worker',
        quantity: 38,
      };

      function __updateEngineTest() {
        // Construct the params object for operation updateEngine
        const engineId = 'sampleEngine123';
        const coordinator = nodeDescriptionModel;
        const description = 'presto engine updated description';
        const engineDisplayName = 'sampleEngine';
        const tags = ['tag1', 'tag2'];
        const worker = nodeDescriptionModel;
        const accept = 'testString';
        const authInstanceId = 'testString';
        const updateEngineParams = {
          engineId,
          coordinator,
          description,
          engineDisplayName,
          tags,
          worker,
          accept,
          authInstanceId,
        };

        const updateEngineResult = watsonxDataService.updateEngine(updateEngineParams);

        // all methods should return a Promise
        expectToBePromise(updateEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/engines/engine', 'PATCH');
        const expectedAccept = accept;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept', accept);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.engine_id).toEqual(engineId);
        expect(mockRequestOptions.body.coordinator).toEqual(coordinator);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.engine_display_name).toEqual(engineDisplayName);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.worker).toEqual(worker);
        expect(mockRequestOptions.responseType).toBe('stream');
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updateEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updateEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'sampleEngine123';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updateEngine(updateEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updateEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updateEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createEngine', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // NodeDescriptionBody
      const nodeDescriptionBodyModel = {
        node_type: 'worker',
        quantity: 38,
      };

      // EngineDetailsBody
      const engineDetailsBodyModel = {
        worker: nodeDescriptionBodyModel,
        coordinator: nodeDescriptionBodyModel,
        size_config: 'starter',
      };

      function __createEngineTest() {
        // Construct the params object for operation createEngine
        const version = '1.2.3';
        const engineDetails = engineDetailsBodyModel;
        const origin = 'ibm';
        const type = 'presto';
        const description = 'presto engine description';
        const engineDisplayName = 'sampleEngine';
        const firstTimeUse = true;
        const region = 'us-south';
        const associatedCatalogs = ['new_catalog_1', 'new_catalog_2'];
        const accept = 'testString';
        const authInstanceId = 'testString';
        const createEngineParams = {
          version,
          engineDetails,
          origin,
          type,
          description,
          engineDisplayName,
          firstTimeUse,
          region,
          associatedCatalogs,
          accept,
          authInstanceId,
        };

        const createEngineResult = watsonxDataService.createEngine(createEngineParams);

        // all methods should return a Promise
        expectToBePromise(createEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/engines/engine', 'POST');
        const expectedAccept = accept;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept', accept);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.version).toEqual(version);
        expect(mockRequestOptions.body.engine_details).toEqual(engineDetails);
        expect(mockRequestOptions.body.origin).toEqual(origin);
        expect(mockRequestOptions.body.type).toEqual(type);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.engine_display_name).toEqual(engineDisplayName);
        expect(mockRequestOptions.body.first_time_use).toEqual(firstTimeUse);
        expect(mockRequestOptions.body.region).toEqual(region);
        expect(mockRequestOptions.body.associated_catalogs).toEqual(associatedCatalogs);
        expect(mockRequestOptions.responseType).toBe('stream');
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __createEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __createEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const version = '1.2.3';
        const engineDetails = engineDetailsBodyModel;
        const origin = 'ibm';
        const type = 'presto';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createEngineParams = {
          version,
          engineDetails,
          origin,
          type,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.createEngine(createEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.createEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.createEngine();
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
        const engineId = 'eng_if';
        const createdBy = '<username>@<domain>.com';
        const authInstanceId = 'testString';
        const deleteEngineParams = {
          engineId,
          createdBy,
          authInstanceId,
        };

        const deleteEngineResult = watsonxDataService.deleteEngine(deleteEngineParams);

        // all methods should return a Promise
        expectToBePromise(deleteEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/engines/engine', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.engine_id).toEqual(engineId);
        expect(mockRequestOptions.body.created_by).toEqual(createdBy);
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
        const engineId = 'eng_if';
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

  describe('resumeEngine', () => {
    describe('positive tests', () => {
      function __resumeEngineTest() {
        // Construct the params object for operation resumeEngine
        const engineId = 'eng_id';
        const createdBy = '<username>@<domain>.com';
        const authInstanceId = 'testString';
        const resumeEngineParams = {
          engineId,
          createdBy,
          authInstanceId,
        };

        const resumeEngineResult = watsonxDataService.resumeEngine(resumeEngineParams);

        // all methods should return a Promise
        expectToBePromise(resumeEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/engines/engine/resume', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.engine_id).toEqual(engineId);
        expect(mockRequestOptions.body.created_by).toEqual(createdBy);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __resumeEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __resumeEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __resumeEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'eng_id';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const resumeEngineParams = {
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.resumeEngine(resumeEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.resumeEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.resumeEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('explainAnalyzeStatement', () => {
    describe('positive tests', () => {
      function __explainAnalyzeStatementTest() {
        // Construct the params object for operation explainAnalyzeStatement
        const catalogName = 'sampleCatalog';
        const engineId = 'sampleEngine1';
        const schemaName = 'new_schema';
        const statement = 'show schemas in catalog';
        const verbose = true;
        const authInstanceId = 'testString';
        const explainAnalyzeStatementParams = {
          catalogName,
          engineId,
          schemaName,
          statement,
          verbose,
          authInstanceId,
        };

        const explainAnalyzeStatementResult = watsonxDataService.explainAnalyzeStatement(
          explainAnalyzeStatementParams
        );

        // all methods should return a Promise
        expectToBePromise(explainAnalyzeStatementResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/explainanalyze', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.body.engine_id).toEqual(engineId);
        expect(mockRequestOptions.body.schema_name).toEqual(schemaName);
        expect(mockRequestOptions.body.statement).toEqual(statement);
        expect(mockRequestOptions.body.verbose).toEqual(verbose);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __explainAnalyzeStatementTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __explainAnalyzeStatementTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __explainAnalyzeStatementTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const catalogName = 'sampleCatalog';
        const engineId = 'sampleEngine1';
        const schemaName = 'new_schema';
        const statement = 'show schemas in catalog';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const explainAnalyzeStatementParams = {
          catalogName,
          engineId,
          schemaName,
          statement,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.explainAnalyzeStatement(explainAnalyzeStatementParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.explainAnalyzeStatement({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.explainAnalyzeStatement();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('explainStatement', () => {
    describe('positive tests', () => {
      function __explainStatementTest() {
        // Construct the params object for operation explainStatement
        const engineId = 'eng_id';
        const statement = 'show schemas';
        const catalogName = 'sampleCatalog';
        const format = 'json';
        const schemaName = 'new_schema';
        const type = 'io';
        const authInstanceId = 'testString';
        const explainStatementParams = {
          engineId,
          statement,
          catalogName,
          format,
          schemaName,
          type,
          authInstanceId,
        };

        const explainStatementResult = watsonxDataService.explainStatement(explainStatementParams);

        // all methods should return a Promise
        expectToBePromise(explainStatementResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/explain', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.engine_id).toEqual(engineId);
        expect(mockRequestOptions.body.statement).toEqual(statement);
        expect(mockRequestOptions.body.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.body.format).toEqual(format);
        expect(mockRequestOptions.body.schema_name).toEqual(schemaName);
        expect(mockRequestOptions.body.type).toEqual(type);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __explainStatementTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __explainStatementTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __explainStatementTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'eng_id';
        const statement = 'show schemas';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const explainStatementParams = {
          engineId,
          statement,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.explainStatement(explainStatementParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.explainStatement({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.explainStatement();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('testLhConsole', () => {
    describe('positive tests', () => {
      function __testLhConsoleTest() {
        // Construct the params object for operation testLhConsole
        const testLhConsoleParams = {};

        const testLhConsoleResult = watsonxDataService.testLhConsole(testLhConsoleParams);

        // all methods should return a Promise
        expectToBePromise(testLhConsoleResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/ready', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __testLhConsoleTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __testLhConsoleTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __testLhConsoleTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const testLhConsoleParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.testLhConsole(testLhConsoleParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.testLhConsole({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getMetastores', () => {
    describe('positive tests', () => {
      function __getMetastoresTest() {
        // Construct the params object for operation getMetastores
        const authInstanceId = 'testString';
        const getMetastoresParams = {
          authInstanceId,
        };

        const getMetastoresResult = watsonxDataService.getMetastores(getMetastoresParams);

        // all methods should return a Promise
        expectToBePromise(getMetastoresResult);

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
        __getMetastoresTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getMetastoresTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getMetastoresTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getMetastoresParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getMetastores(getMetastoresParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.getMetastores({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getHms', () => {
    describe('positive tests', () => {
      function __getHmsTest() {
        // Construct the params object for operation getHms
        const accept = 'testString';
        const authInstanceId = 'testString';
        const getHmsParams = {
          accept,
          authInstanceId,
        };

        const getHmsResult = watsonxDataService.getHms(getHmsParams);

        // all methods should return a Promise
        expectToBePromise(getHmsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/metastores', 'GET');
        const expectedAccept = accept;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept', accept);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.responseType).toBe('stream');
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getHmsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getHmsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getHmsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getHmsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getHms(getHmsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.getHms({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('addMetastoreToEngine', () => {
    describe('positive tests', () => {
      function __addMetastoreToEngineTest() {
        // Construct the params object for operation addMetastoreToEngine
        const catalogName = 'sampleCatalog';
        const engineId = 'sampleEngine123';
        const createdBy = '<username>@<domain>.com';
        const accept = 'testString';
        const authInstanceId = 'testString';
        const addMetastoreToEngineParams = {
          catalogName,
          engineId,
          createdBy,
          accept,
          authInstanceId,
        };

        const addMetastoreToEngineResult = watsonxDataService.addMetastoreToEngine(
          addMetastoreToEngineParams
        );

        // all methods should return a Promise
        expectToBePromise(addMetastoreToEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/catalogs/add_catalog_to_engine', 'POST');
        const expectedAccept = accept;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept', accept);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.body.engine_id).toEqual(engineId);
        expect(mockRequestOptions.body.created_by).toEqual(createdBy);
        expect(mockRequestOptions.responseType).toBe('stream');
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __addMetastoreToEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __addMetastoreToEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __addMetastoreToEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const catalogName = 'sampleCatalog';
        const engineId = 'sampleEngine123';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const addMetastoreToEngineParams = {
          catalogName,
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.addMetastoreToEngine(addMetastoreToEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.addMetastoreToEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.addMetastoreToEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('removeCatalogFromEngine', () => {
    describe('positive tests', () => {
      function __removeCatalogFromEngineTest() {
        // Construct the params object for operation removeCatalogFromEngine
        const catalogName = 'testString';
        const engineId = 'testString';
        const createdBy = 'testString';
        const accept = 'testString';
        const authInstanceId = 'testString';
        const removeCatalogFromEngineParams = {
          catalogName,
          engineId,
          createdBy,
          accept,
          authInstanceId,
        };

        const removeCatalogFromEngineResult = watsonxDataService.removeCatalogFromEngine(
          removeCatalogFromEngineParams
        );

        // all methods should return a Promise
        expectToBePromise(removeCatalogFromEngineResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/catalogs/remove_catalog_from_engine', 'POST');
        const expectedAccept = accept;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept', accept);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.body.engine_id).toEqual(engineId);
        expect(mockRequestOptions.body.created_by).toEqual(createdBy);
        expect(mockRequestOptions.responseType).toBe('stream');
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __removeCatalogFromEngineTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __removeCatalogFromEngineTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __removeCatalogFromEngineTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const catalogName = 'testString';
        const engineId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const removeCatalogFromEngineParams = {
          catalogName,
          engineId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.removeCatalogFromEngine(removeCatalogFromEngineParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.removeCatalogFromEngine({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.removeCatalogFromEngine();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('saveQuery', () => {
    describe('positive tests', () => {
      function __saveQueryTest() {
        // Construct the params object for operation saveQuery
        const queryName = 'testString';
        const createdBy = '<username>@<domain>.com';
        const description = 'query to get expense data';
        const queryString = 'select expenses from expenditure';
        const createdOn = '1608437933';
        const engineId = 'sampleEngine123';
        const authInstanceId = 'testString';
        const saveQueryParams = {
          queryName,
          createdBy,
          description,
          queryString,
          createdOn,
          engineId,
          authInstanceId,
        };

        const saveQueryResult = watsonxDataService.saveQuery(saveQueryParams);

        // all methods should return a Promise
        expectToBePromise(saveQueryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/queries/{query_name}', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.created_by).toEqual(createdBy);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.query_string).toEqual(queryString);
        expect(mockRequestOptions.body.created_on).toEqual(createdOn);
        expect(mockRequestOptions.body.engine_id).toEqual(engineId);
        expect(mockRequestOptions.path.query_name).toEqual(queryName);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __saveQueryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __saveQueryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __saveQueryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const queryName = 'testString';
        const createdBy = '<username>@<domain>.com';
        const description = 'query to get expense data';
        const queryString = 'select expenses from expenditure';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const saveQueryParams = {
          queryName,
          createdBy,
          description,
          queryString,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.saveQuery(saveQueryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.saveQuery({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.saveQuery();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteQuery', () => {
    describe('positive tests', () => {
      function __deleteQueryTest() {
        // Construct the params object for operation deleteQuery
        const queryName = 'testString';
        const authInstanceId = 'testString';
        const deleteQueryParams = {
          queryName,
          authInstanceId,
        };

        const deleteQueryResult = watsonxDataService.deleteQuery(deleteQueryParams);

        // all methods should return a Promise
        expectToBePromise(deleteQueryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/queries/{query_name}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.path.query_name).toEqual(queryName);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteQueryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __deleteQueryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __deleteQueryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const queryName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteQueryParams = {
          queryName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.deleteQuery(deleteQueryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.deleteQuery({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.deleteQuery();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateQuery', () => {
    describe('positive tests', () => {
      function __updateQueryTest() {
        // Construct the params object for operation updateQuery
        const queryName = 'testString';
        const queryString = 'testString';
        const description = 'testString';
        const newQueryName = 'testString';
        const authInstanceId = 'testString';
        const updateQueryParams = {
          queryName,
          queryString,
          description,
          newQueryName,
          authInstanceId,
        };

        const updateQueryResult = watsonxDataService.updateQuery(updateQueryParams);

        // all methods should return a Promise
        expectToBePromise(updateQueryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/queries/{query_name}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.query_string).toEqual(queryString);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.new_query_name).toEqual(newQueryName);
        expect(mockRequestOptions.path.query_name).toEqual(queryName);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateQueryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __updateQueryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __updateQueryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const queryName = 'testString';
        const queryString = 'testString';
        const description = 'testString';
        const newQueryName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateQueryParams = {
          queryName,
          queryString,
          description,
          newQueryName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.updateQuery(updateQueryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.updateQuery({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.updateQuery();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getQueries', () => {
    describe('positive tests', () => {
      function __getQueriesTest() {
        // Construct the params object for operation getQueries
        const authInstanceId = 'testString';
        const getQueriesParams = {
          authInstanceId,
        };

        const getQueriesResult = watsonxDataService.getQueries(getQueriesParams);

        // all methods should return a Promise
        expectToBePromise(getQueriesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/queries', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getQueriesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getQueriesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getQueriesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getQueriesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getQueries(getQueriesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        watsonxDataService.getQueries({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createSchema', () => {
    describe('positive tests', () => {
      function __createSchemaTest() {
        // Construct the params object for operation createSchema
        const catalogName = 'sampleCatalog';
        const engineId = 'sampleEngine123';
        const schemaName = 'new_schema';
        const bucketName = 'sample-bucket';
        const authInstanceId = 'testString';
        const createSchemaParams = {
          catalogName,
          engineId,
          schemaName,
          bucketName,
          authInstanceId,
        };

        const createSchemaResult = watsonxDataService.createSchema(createSchemaParams);

        // all methods should return a Promise
        expectToBePromise(createSchemaResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/schemas/schema', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.body.engine_id).toEqual(engineId);
        expect(mockRequestOptions.body.schema_name).toEqual(schemaName);
        expect(mockRequestOptions.body.bucket_name).toEqual(bucketName);
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
        const catalogName = 'sampleCatalog';
        const engineId = 'sampleEngine123';
        const schemaName = 'new_schema';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createSchemaParams = {
          catalogName,
          engineId,
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
        const catalogName = 'sampleCatalog';
        const engineId = 'sampleEngine123';
        const schemaName = 'new_schema';
        const authInstanceId = 'testString';
        const deleteSchemaParams = {
          catalogName,
          engineId,
          schemaName,
          authInstanceId,
        };

        const deleteSchemaResult = watsonxDataService.deleteSchema(deleteSchemaParams);

        // all methods should return a Promise
        expectToBePromise(deleteSchemaResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/schemas/schema', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.body.engine_id).toEqual(engineId);
        expect(mockRequestOptions.body.schema_name).toEqual(schemaName);
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
        const catalogName = 'sampleCatalog';
        const engineId = 'sampleEngine123';
        const schemaName = 'new_schema';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteSchemaParams = {
          catalogName,
          engineId,
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

  describe('getSchemas', () => {
    describe('positive tests', () => {
      function __getSchemasTest() {
        // Construct the params object for operation getSchemas
        const engineId = 'testString';
        const catalogName = 'testString';
        const authInstanceId = 'testString';
        const getSchemasParams = {
          engineId,
          catalogName,
          authInstanceId,
        };

        const getSchemasResult = watsonxDataService.getSchemas(getSchemasParams);

        // all methods should return a Promise
        expectToBePromise(getSchemasResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/schemas', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.qs.catalog_name).toEqual(catalogName);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSchemasTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getSchemasTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getSchemasTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const catalogName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSchemasParams = {
          engineId,
          catalogName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getSchemas(getSchemasParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getSchemas({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getSchemas();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('postQuery', () => {
    describe('positive tests', () => {
      function __postQueryTest() {
        // Construct the params object for operation postQuery
        const engine = 'testString';
        const catalog = 'testString';
        const schema = 'testString';
        const sqlQuery = 'testString';
        const accept = 'testString';
        const authInstanceId = 'testString';
        const postQueryParams = {
          engine,
          catalog,
          schema,
          sqlQuery,
          accept,
          authInstanceId,
        };

        const postQueryResult = watsonxDataService.postQuery(postQueryParams);

        // all methods should return a Promise
        expectToBePromise(postQueryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/statement', 'POST');
        const expectedAccept = accept;
        const expectedContentType = 'multipart/form-data';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept', accept);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.formData.catalog).toEqual(catalog);
        expect(mockRequestOptions.formData.schema).toEqual(schema);
        expect(mockRequestOptions.formData.sqlQuery).toEqual(sqlQuery);
        expect(mockRequestOptions.qs.engine).toEqual(engine);
        expect(mockRequestOptions.responseType).toBe('stream');
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __postQueryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __postQueryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __postQueryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engine = 'testString';
        const catalog = 'testString';
        const schema = 'testString';
        const sqlQuery = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const postQueryParams = {
          engine,
          catalog,
          schema,
          sqlQuery,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.postQuery(postQueryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.postQuery({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.postQuery();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteTable', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // DeleteTableBodyDeleteTablesItems
      const deleteTableBodyDeleteTablesItemsModel = {
        catalog_name: 'sampleCatalog',
        schema_name: 'new_schema',
        table_name: 'new_table',
      };

      function __deleteTableTest() {
        // Construct the params object for operation deleteTable
        const deleteTables = [deleteTableBodyDeleteTablesItemsModel];
        const engineId = 'sampleEngine123';
        const authInstanceId = 'testString';
        const deleteTableParams = {
          deleteTables,
          engineId,
          authInstanceId,
        };

        const deleteTableResult = watsonxDataService.deleteTable(deleteTableParams);

        // all methods should return a Promise
        expectToBePromise(deleteTableResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/tables/table', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.delete_tables).toEqual(deleteTables);
        expect(mockRequestOptions.body.engine_id).toEqual(engineId);
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
        const deleteTables = [deleteTableBodyDeleteTablesItemsModel];
        const engineId = 'sampleEngine123';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteTableParams = {
          deleteTables,
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
      // Request models needed by this operation.

      // UpdateTableBodyAddColumnsItems
      const updateTableBodyAddColumnsItemsModel = {
        column_comment: 'income column',
        column_name: 'income',
        data_type: 'varchar',
      };

      // UpdateTableBodyDropColumnsItems
      const updateTableBodyDropColumnsItemsModel = {
        column_name: 'expenditure',
      };

      // UpdateTableBodyRenameColumnsItems
      const updateTableBodyRenameColumnsItemsModel = {
        column_name: 'expenditure',
        new_column_name: 'expenses',
      };

      function __updateTableTest() {
        // Construct the params object for operation updateTable
        const engineId = 'testString';
        const catalogName = 'testString';
        const schemaName = 'testString';
        const tableName = 'testString';
        const addColumns = [updateTableBodyAddColumnsItemsModel];
        const dropColumns = [updateTableBodyDropColumnsItemsModel];
        const newTableName = 'updated_table_name';
        const renameColumns = [updateTableBodyRenameColumnsItemsModel];
        const accept = 'testString';
        const authInstanceId = 'testString';
        const updateTableParams = {
          engineId,
          catalogName,
          schemaName,
          tableName,
          addColumns,
          dropColumns,
          newTableName,
          renameColumns,
          accept,
          authInstanceId,
        };

        const updateTableResult = watsonxDataService.updateTable(updateTableParams);

        // all methods should return a Promise
        expectToBePromise(updateTableResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/tables/table', 'PATCH');
        const expectedAccept = accept;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept', accept);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.add_columns).toEqual(addColumns);
        expect(mockRequestOptions.body.drop_columns).toEqual(dropColumns);
        expect(mockRequestOptions.body.new_table_name).toEqual(newTableName);
        expect(mockRequestOptions.body.rename_columns).toEqual(renameColumns);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.qs.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.qs.schema_name).toEqual(schemaName);
        expect(mockRequestOptions.qs.table_name).toEqual(tableName);
        expect(mockRequestOptions.responseType).toBe('stream');
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
        const engineId = 'testString';
        const catalogName = 'testString';
        const schemaName = 'testString';
        const tableName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateTableParams = {
          engineId,
          catalogName,
          schemaName,
          tableName,
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

  describe('getTableSnapshots', () => {
    describe('positive tests', () => {
      function __getTableSnapshotsTest() {
        // Construct the params object for operation getTableSnapshots
        const engineId = 'testString';
        const catalogName = 'testString';
        const schemaName = 'testString';
        const tableName = 'testString';
        const authInstanceId = 'testString';
        const getTableSnapshotsParams = {
          engineId,
          catalogName,
          schemaName,
          tableName,
          authInstanceId,
        };

        const getTableSnapshotsResult =
          watsonxDataService.getTableSnapshots(getTableSnapshotsParams);

        // all methods should return a Promise
        expectToBePromise(getTableSnapshotsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/tables/table/snapshots', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.qs.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.qs.schema_name).toEqual(schemaName);
        expect(mockRequestOptions.qs.table_name).toEqual(tableName);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getTableSnapshotsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getTableSnapshotsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getTableSnapshotsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const catalogName = 'testString';
        const schemaName = 'testString';
        const tableName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getTableSnapshotsParams = {
          engineId,
          catalogName,
          schemaName,
          tableName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getTableSnapshots(getTableSnapshotsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getTableSnapshots({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getTableSnapshots();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('rollbackSnapshot', () => {
    describe('positive tests', () => {
      function __rollbackSnapshotTest() {
        // Construct the params object for operation rollbackSnapshot
        const engineId = 'testString';
        const catalogName = 'testString';
        const schemaName = 'testString';
        const snapshotId = '2332342122211222';
        const tableName = 'new_table';
        const authInstanceId = 'testString';
        const rollbackSnapshotParams = {
          engineId,
          catalogName,
          schemaName,
          snapshotId,
          tableName,
          authInstanceId,
        };

        const rollbackSnapshotResult = watsonxDataService.rollbackSnapshot(rollbackSnapshotParams);

        // all methods should return a Promise
        expectToBePromise(rollbackSnapshotResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/tables/table/rollback', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.body.snapshot_id).toEqual(snapshotId);
        expect(mockRequestOptions.body.table_name).toEqual(tableName);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.qs.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.qs.schema_name).toEqual(schemaName);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __rollbackSnapshotTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __rollbackSnapshotTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __rollbackSnapshotTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const catalogName = 'testString';
        const schemaName = 'testString';
        const snapshotId = '2332342122211222';
        const tableName = 'new_table';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const rollbackSnapshotParams = {
          engineId,
          catalogName,
          schemaName,
          snapshotId,
          tableName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.rollbackSnapshot(rollbackSnapshotParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.rollbackSnapshot({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.rollbackSnapshot();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getTables', () => {
    describe('positive tests', () => {
      function __getTablesTest() {
        // Construct the params object for operation getTables
        const engineId = 'testString';
        const catalogName = 'testString';
        const schemaName = 'testString';
        const authInstanceId = 'testString';
        const getTablesParams = {
          engineId,
          catalogName,
          schemaName,
          authInstanceId,
        };

        const getTablesResult = watsonxDataService.getTables(getTablesParams);

        // all methods should return a Promise
        expectToBePromise(getTablesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/tables', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.qs.engine_id).toEqual(engineId);
        expect(mockRequestOptions.qs.catalog_name).toEqual(catalogName);
        expect(mockRequestOptions.qs.schema_name).toEqual(schemaName);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getTablesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __getTablesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __getTablesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engineId = 'testString';
        const catalogName = 'testString';
        const schemaName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getTablesParams = {
          engineId,
          catalogName,
          schemaName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.getTables(getTablesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.getTables({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.getTables();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('parseCsv', () => {
    describe('positive tests', () => {
      function __parseCsvTest() {
        // Construct the params object for operation parseCsv
        const engine = 'testString';
        const parseFile = 'testString';
        const fileType = 'testString';
        const accept = 'testString';
        const authInstanceId = 'testString';
        const parseCsvParams = {
          engine,
          parseFile,
          fileType,
          accept,
          authInstanceId,
        };

        const parseCsvResult = watsonxDataService.parseCsv(parseCsvParams);

        // all methods should return a Promise
        expectToBePromise(parseCsvResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/parse/csv', 'POST');
        const expectedAccept = accept;
        const expectedContentType = 'multipart/form-data';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept', accept);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.formData.parse_file).toEqual(parseFile);
        expect(mockRequestOptions.formData.file_type).toEqual(fileType);
        expect(mockRequestOptions.qs.engine).toEqual(engine);
        expect(mockRequestOptions.responseType).toBe('stream');
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __parseCsvTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __parseCsvTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __parseCsvTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engine = 'testString';
        const parseFile = 'testString';
        const fileType = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const parseCsvParams = {
          engine,
          parseFile,
          fileType,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.parseCsv(parseCsvParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.parseCsv({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.parseCsv();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('uplaodCsv', () => {
    describe('positive tests', () => {
      function __uplaodCsvTest() {
        // Construct the params object for operation uplaodCsv
        const engine = 'testString';
        const catalog = 'testString';
        const schema = 'testString';
        const tableName = 'testString';
        const ingestionJobName = 'testString';
        const scheduled = 'testString';
        const createdBy = 'testString';
        const targetTable = 'testString';
        const _headers = 'testString';
        const csv = 'testString';
        const accept = 'testString';
        const authInstanceId = 'testString';
        const uplaodCsvParams = {
          engine,
          catalog,
          schema,
          tableName,
          ingestionJobName,
          scheduled,
          createdBy,
          targetTable,
          _headers,
          csv,
          accept,
          authInstanceId,
        };

        const uplaodCsvResult = watsonxDataService.uplaodCsv(uplaodCsvParams);

        // all methods should return a Promise
        expectToBePromise(uplaodCsvResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/upload/csv', 'POST');
        const expectedAccept = accept;
        const expectedContentType = 'multipart/form-data';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept', accept);
        checkUserHeader(createRequestMock, 'AuthInstanceId', authInstanceId);
        expect(mockRequestOptions.formData.catalog).toEqual(catalog);
        expect(mockRequestOptions.formData.schema).toEqual(schema);
        expect(mockRequestOptions.formData.tableName).toEqual(tableName);
        expect(mockRequestOptions.formData.ingestionJobName).toEqual(ingestionJobName);
        expect(mockRequestOptions.formData.scheduled).toEqual(scheduled);
        expect(mockRequestOptions.formData.created_by).toEqual(createdBy);
        expect(mockRequestOptions.formData.targetTable).toEqual(targetTable);
        expect(mockRequestOptions.formData.headers).toEqual(_headers);
        expect(mockRequestOptions.formData.csv).toEqual(csv);
        expect(mockRequestOptions.qs.engine).toEqual(engine);
        expect(mockRequestOptions.responseType).toBe('stream');
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __uplaodCsvTest();

        // enable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.enableRetries();
        __uplaodCsvTest();

        // disable retries and test again
        createRequestMock.mockClear();
        watsonxDataService.disableRetries();
        __uplaodCsvTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const engine = 'testString';
        const catalog = 'testString';
        const schema = 'testString';
        const tableName = 'testString';
        const ingestionJobName = 'testString';
        const scheduled = 'testString';
        const createdBy = 'testString';
        const targetTable = 'testString';
        const _headers = 'testString';
        const csv = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const uplaodCsvParams = {
          engine,
          catalog,
          schema,
          tableName,
          ingestionJobName,
          scheduled,
          createdBy,
          targetTable,
          _headers,
          csv,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        watsonxDataService.uplaodCsv(uplaodCsvParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await watsonxDataService.uplaodCsv({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await watsonxDataService.uplaodCsv();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });
});
