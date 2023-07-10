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

/* eslint-disable no-console */

const { readExternalSources } = require('ibm-cloud-sdk-core');
const WatsonxDataV1 = require('../../dist/watsonx-data/v1');
const authHelper = require('../resources/auth-helper.js');

// testcase timeout value (200s).
const timeout = 200000;

// Location of our config file.
const configFile = 'watsonx_data_v1.env';

const describe = authHelper.prepareTests(configFile);

describe('WatsonxDataV1_integration', () => {
  jest.setTimeout(timeout);

  // Service instance
  let watsonxDataService;

  test('Initialize service', async () => {
    watsonxDataService = WatsonxDataV1.newInstance();

    expect(watsonxDataService).not.toBeNull();

    const config = readExternalSources(WatsonxDataV1.DEFAULT_SERVICE_NAME);
    expect(config).not.toBeNull();

    watsonxDataService.enableRetries();
  });

  test('createDbConnUsers()', async () => {
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

    const params = {
      databaseId: 'testString',
      groups: [bucketDbConnGroupsMetadataModel],
      users: [bucketDbConnUsersMetadataModel],
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createDbConnUsers(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listDataPolicies()', async () => {
    const params = {
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
      catalogName: 'testString',
      status: 'testString',
      includeMetadata: true,
      includeRules: true,
    };

    const res = await watsonxDataService.listDataPolicies(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createDataPolicy()', async () => {
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

    const params = {
      catalogName: 'testString',
      dataArtifact: 'schema1/table1/(column1|column2)',
      policyName: 'testString',
      rules: [ruleModel],
      description: 'testString',
      status: 'active',
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createDataPolicy(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getEngineUsers()', async () => {
    const params = {
      engineId: 'testString',
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getEngineUsers(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updateEngineUsers()', async () => {
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

    const params = {
      engineId: 'testString',
      groups: [engineGroupsMetadataModel],
      users: [engineUsersMetadataModel],
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateEngineUsers(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updateDbConnUsers()', async () => {
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

    const params = {
      databaseId: 'testString',
      groups: [bucketDbConnGroupsMetadataModel],
      users: [bucketDbConnUsersMetadataModel],
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateDbConnUsers(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getDbConnUsers()', async () => {
    const params = {
      databaseId: 'testString',
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getDbConnUsers(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createCatalogUsers()', async () => {
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

    const params = {
      catalogName: 'testString',
      groups: [catalogGroupsMetadataModel],
      users: [catalogUsersMetadataModel],
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createCatalogUsers(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getCatalogUsers()', async () => {
    const params = {
      catalogName: 'testString',
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getCatalogUsers(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updateCatalogUsers()', async () => {
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

    const params = {
      catalogName: 'testString',
      groups: [catalogGroupsMetadataModel],
      users: [catalogUsersMetadataModel],
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateCatalogUsers(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('evaluate()', async () => {
    // Request models needed by this operation.

    // ResourcesMetadata
    const resourcesMetadataModel = {
      action: 'testString',
      resource_name: 'testString',
      resource_type: 'engine',
    };

    const params = {
      resources: [resourcesMetadataModel],
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.evaluate(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getPoliciesList()', async () => {
    const params = {
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
      catalogList: ['testString'],
      engineList: ['testString'],
      dataPoliciesList: ['testString'],
      includeDataPolicies: true,
    };

    const res = await watsonxDataService.getPoliciesList(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createMetastoreUsers()', async () => {
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

    const params = {
      metastoreName: 'testString',
      groups: [groupsMetadataModel],
      users: [usersMetadataModel],
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createMetastoreUsers(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getMetastoreUsers()', async () => {
    const params = {
      metastoreName: 'testString',
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getMetastoreUsers(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updateMetastoreUsers()', async () => {
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

    const params = {
      metastoreName: 'testString',
      groups: [groupsMetadataModel],
      users: [usersMetadataModel],
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateMetastoreUsers(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createBucketUsers()', async () => {
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

    const params = {
      bucketId: 'testString',
      groups: [bucketDbConnGroupsMetadataModel],
      users: [bucketDbConnUsersMetadataModel],
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createBucketUsers(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getDefaultPolicies()', async () => {
    const params = {
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getDefaultPolicies(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getPolicyVersion()', async () => {
    const params = {
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getPolicyVersion(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getDataPolicy()', async () => {
    const params = {
      policyName: 'testString',
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getDataPolicy(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('replaceDataPolicy()', async () => {
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

    const params = {
      policyName: 'testString',
      catalogName: 'testString',
      dataArtifact: 'schema1/table1/(column1|column2)',
      rules: [ruleModel],
      description: 'testString',
      status: 'active',
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.replaceDataPolicy(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('createEngineUsers()', async () => {
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

    const params = {
      engineId: 'testString',
      groups: [engineGroupsMetadataModel],
      users: [engineUsersMetadataModel],
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createEngineUsers(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getBucketUsers()', async () => {
    const params = {
      bucketId: 'testString',
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getBucketUsers(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updateBucketUsers()', async () => {
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

    const params = {
      bucketId: 'testString',
      groups: [bucketDbConnGroupsMetadataModel],
      users: [bucketDbConnUsersMetadataModel],
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateBucketUsers(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getBuckets()', async () => {
    const params = {
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getBuckets(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getBucketObjects()', async () => {
    const params = {
      bucketId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getBucketObjects(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('deactivateBucket()', async () => {
    const params = {
      bucketId: 'samplebucket123',
      accept: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deactivateBucket(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('registerBucket()', async () => {
    // Request models needed by this operation.

    // BucketDetails
    const bucketDetailsModel = {
      access_key: '<access_key>',
      bucket_name: 'sample-bucket',
      endpoint: 'https://s3.<region>.cloud-object-storage.appdomain.cloud/',
      secret_key: '<secret_key>',
    };

    const params = {
      bucketDetails: bucketDetailsModel,
      description: 'COS bucket for customer data',
      tableType: 'iceberg',
      bucketType: 'ibm_cos',
      catalogName: 'sampleCatalog',
      managedBy: 'ibm',
      bucketDisplayName: 'sample-bucket-displayname',
      bucketTags: ['read customer data', 'write customer data'],
      catalogTags: ['catalog_tag_1', 'catalog_tag_2'],
      thriftUri: 'thrift://samplehost-metastore:4354',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.registerBucket(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('updateBucket()', async () => {
    const params = {
      bucketId: 'samplebucket123',
      accessKey: '<access_key>',
      bucketDisplayName: 'sample-bucket-displayname',
      description: 'COS bucket for customer data',
      secretKey: '<secret_key>',
      tags: ['testbucket', 'userbucket'],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateBucket(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('activateBucket()', async () => {
    const params = {
      bucketId: 'samplebucket123',
      accept: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.activateBucket(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getDatabases()', async () => {
    const params = {
      accept: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getDatabases(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createDatabaseCatalog()', async () => {
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

    const params = {
      databaseDisplayName: 'new_database',
      databaseType: 'db2',
      catalogName: 'sampleCatalog',
      databaseDetails: registerDatabaseCatalogBodyDatabaseDetailsModel,
      description: 'db2 extenal database description',
      tags: ['tag_1', 'tag_2'],
      createdBy: '<username>@<domain>.com',
      createdOn: 38,
      accept: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createDatabaseCatalog(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('updateDatabase()', async () => {
    // Request models needed by this operation.

    // UpdateDatabaseBodyDatabaseDetails
    const updateDatabaseBodyDatabaseDetailsModel = {
      password: 'samplepassword',
      username: 'sampleuser',
    };

    const params = {
      databaseId: 'new_db_id',
      databaseDetails: updateDatabaseBodyDatabaseDetailsModel,
      databaseDisplayName: 'new_database',
      description: 'External database description',
      tags: ['testdatabase', 'userdatabase'],
      accept: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateDatabase(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('pauseEngine()', async () => {
    const params = {
      engineId: 'testString',
      createdBy: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.pauseEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getEngines()', async () => {
    const params = {
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getEngines(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getDeployments()', async () => {
    const params = {
      accept: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getDeployments(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updateEngine()', async () => {
    // Request models needed by this operation.

    // NodeDescription
    const nodeDescriptionModel = {
      node_type: 'worker',
      quantity: 38,
    };

    const params = {
      engineId: 'sampleEngine123',
      coordinator: nodeDescriptionModel,
      description: 'presto engine updated description',
      engineDisplayName: 'sampleEngine',
      tags: ['tag1', 'tag2'],
      worker: nodeDescriptionModel,
      accept: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createEngine()', async () => {
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

    const params = {
      version: '1.2.3',
      engineDetails: engineDetailsBodyModel,
      origin: 'ibm',
      type: 'presto',
      description: 'presto engine description',
      engineDisplayName: 'sampleEngine',
      firstTimeUse: true,
      region: 'us-south',
      associatedCatalogs: ['new_catalog_1', 'new_catalog_2'],
      accept: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('resumeEngine()', async () => {
    const params = {
      engineId: 'eng_id',
      createdBy: '<username>@<domain>.com',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.resumeEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('explainAnalyzeStatement()', async () => {
    const params = {
      catalogName: 'sampleCatalog',
      engineId: 'sampleEngine1',
      schemaName: 'new_schema',
      statement: 'show schemas in catalog',
      verbose: true,
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.explainAnalyzeStatement(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('explainStatement()', async () => {
    const params = {
      engineId: 'eng_id',
      statement: 'show schemas',
      catalogName: 'sampleCatalog',
      format: 'json',
      schemaName: 'new_schema',
      type: 'io',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.explainStatement(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('testLhConsole()', async () => {
    const res = await watsonxDataService.testLhConsole();
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getMetastores()', async () => {
    const params = {
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getMetastores(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getHms()', async () => {
    const params = {
      accept: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getHms(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('addMetastoreToEngine()', async () => {
    const params = {
      catalogName: 'sampleCatalog',
      engineId: 'sampleEngine123',
      createdBy: '<username>@<domain>.com',
      accept: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.addMetastoreToEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('removeCatalogFromEngine()', async () => {
    const params = {
      catalogName: 'testString',
      engineId: 'testString',
      createdBy: 'testString',
      accept: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.removeCatalogFromEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('saveQuery()', async () => {
    const params = {
      queryName: 'testString',
      createdBy: '<username>@<domain>.com',
      description: 'query to get expense data',
      queryString: 'select expenses from expenditure',
      createdOn: '1608437933',
      engineId: 'sampleEngine123',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.saveQuery(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('updateQuery()', async () => {
    const params = {
      queryName: 'testString',
      queryString: 'testString',
      description: 'testString',
      newQueryName: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateQuery(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getQueries()', async () => {
    const params = {
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getQueries(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createSchema()', async () => {
    const params = {
      catalogName: 'sampleCatalog',
      engineId: 'sampleEngine123',
      schemaName: 'new_schema',
      bucketName: 'sample-bucket',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createSchema(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getSchemas()', async () => {
    const params = {
      engineId: 'testString',
      catalogName: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getSchemas(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('postQuery()', async () => {
    const params = {
      engine: 'testString',
      catalog: 'testString',
      schema: 'testString',
      sqlQuery: 'testString',
      accept: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.postQuery(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updateTable()', async () => {
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

    const params = {
      engineId: 'testString',
      catalogName: 'testString',
      schemaName: 'testString',
      tableName: 'testString',
      addColumns: [updateTableBodyAddColumnsItemsModel],
      dropColumns: [updateTableBodyDropColumnsItemsModel],
      newTableName: 'updated_table_name',
      renameColumns: [updateTableBodyRenameColumnsItemsModel],
      accept: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateTable(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getTableSnapshots()', async () => {
    const params = {
      engineId: 'testString',
      catalogName: 'testString',
      schemaName: 'testString',
      tableName: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getTableSnapshots(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('rollbackSnapshot()', async () => {
    const params = {
      engineId: 'testString',
      catalogName: 'testString',
      schemaName: 'testString',
      snapshotId: '2332342122211222',
      tableName: 'new_table',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.rollbackSnapshot(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getTables()', async () => {
    const params = {
      engineId: 'testString',
      catalogName: 'testString',
      schemaName: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getTables(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('parseCsv()', async () => {
    const params = {
      engine: 'testString',
      parseFile: 'testString',
      fileType: 'testString',
      accept: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.parseCsv(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('uplaodCsv()', async () => {
    const params = {
      engine: 'testString',
      catalog: 'testString',
      schema: 'testString',
      tableName: 'testString',
      ingestionJobName: 'testString',
      scheduled: 'testString',
      createdBy: 'testString',
      targetTable: 'testString',
      _headers: 'testString',
      csv: 'testString',
      accept: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.uplaodCsv(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('deleteDataPolicies()', async () => {
    const params = {
      dataPolicies: ['testString'],
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteDataPolicies(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteEngineUsers()', async () => {
    const params = {
      engineId: 'testString',
      groups: ['testString'],
      users: ['testString'],
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteEngineUsers(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteDbConnUsers()', async () => {
    const params = {
      databaseId: 'testString',
      groups: ['testString'],
      users: ['testString'],
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteDbConnUsers(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteCatalogUsers()', async () => {
    const params = {
      catalogName: 'testString',
      groups: ['testString'],
      users: ['testString'],
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteCatalogUsers(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteMetastoreUsers()', async () => {
    const params = {
      metastoreName: 'testString',
      groups: ['testString'],
      users: ['testString'],
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteMetastoreUsers(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteDataPolicy()', async () => {
    const params = {
      policyName: 'testString',
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteDataPolicy(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteBucketUsers()', async () => {
    const params = {
      bucketId: 'testString',
      groups: ['testString'],
      users: ['testString'],
      lhInstanceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteBucketUsers(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('unregisterBucket()', async () => {
    const params = {
      bucketId: 'bucket_id',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.unregisterBucket(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteDatabaseCatalog()', async () => {
    const params = {
      databaseId: 'new_db_id',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteDatabaseCatalog(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteEngine()', async () => {
    const params = {
      engineId: 'eng_if',
      createdBy: '<username>@<domain>.com',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteQuery()', async () => {
    const params = {
      queryName: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteQuery(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteSchema()', async () => {
    const params = {
      catalogName: 'sampleCatalog',
      engineId: 'sampleEngine123',
      schemaName: 'new_schema',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteSchema(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteTable()', async () => {
    // Request models needed by this operation.

    // DeleteTableBodyDeleteTablesItems
    const deleteTableBodyDeleteTablesItemsModel = {
      catalog_name: 'sampleCatalog',
      schema_name: 'new_schema',
      table_name: 'new_table',
    };

    const params = {
      deleteTables: [deleteTableBodyDeleteTablesItemsModel],
      engineId: 'sampleEngine123',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteTable(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });
});
