/**
 * (C) Copyright IBM Corp. 2024.
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
const WatsonxDataV2 = require('../../dist/watsonx-data/v2');
const authHelper = require('../resources/auth-helper.js');

// testcase timeout value (200s).
const timeout = 200000;

// Location of our config file.
const configFile = 'watsonx_data_v2.env';

const describe = authHelper.prepareTests(configFile);

describe('WatsonxDataV2_integration', () => {
  jest.setTimeout(timeout);

  // Service instance
  let watsonxDataService;

  test('Initialize service', async () => {
    watsonxDataService = WatsonxDataV2.newInstance();

    expect(watsonxDataService).not.toBeNull();

    const config = readExternalSources(WatsonxDataV2.DEFAULT_SERVICE_NAME);
    expect(config).not.toBeNull();

    watsonxDataService.enableRetries();
  });

  test('listBucketRegistrations()', async () => {
    const params = {
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listBucketRegistrations(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createBucketRegistration()', async () => {
    // Request models needed by this operation.

    // BucketDetails
    const bucketDetailsModel = {
      access_key: '<access_key>',
      bucket_name: 'sample-bucket',
      endpoint: 'https://s3.<region>.cloud-object-storage.appdomain.cloud/',
      secret_key: 'secret_key',
    };

    // BucketCatalog
    const bucketCatalogModel = {
      catalog_name: 'sampleCatalog',
      catalog_tags: ['catalog_tag_1', 'catalog_tag_2'],
      catalog_type: 'iceberg',
    };

    const params = {
      bucketDetails: bucketDetailsModel,
      bucketType: 'ibm_cos',
      description: 'COS bucket for customer data',
      managedBy: 'ibm',
      associatedCatalog: bucketCatalogModel,
      bucketDisplayName: 'sample-bucket-displayname',
      region: 'us-south',
      tags: ['bucket-tag1', 'bucket-tag2'],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createBucketRegistration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getBucketRegistration()', async () => {
    const params = {
      bucketId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getBucketRegistration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updateBucketRegistration()', async () => {
    // Request models needed by this operation.

    // JsonPatchOperation
    const jsonPatchOperationModel = {
      op: 'add',
      path: 'testString',
      from: 'testString',
      value: 'testString',
    };

    const params = {
      bucketId: 'testString',
      body: [jsonPatchOperationModel],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateBucketRegistration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createActivateBucket()', async () => {
    const params = {
      bucketId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createActivateBucket(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('listBucketObjects()', async () => {
    const params = {
      bucketId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listBucketObjects(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('testBucketConnection()', async () => {
    const params = {
      accessKey: '<access_key>',
      bucketName: 'sample-bucket',
      bucketType: 'ibm_cos',
      endpoint: 'https://s3.<region>.cloud-object-storage.appdomain.cloud/',
      region: 'us-south',
      secretKey: 'secret_key',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.testBucketConnection(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createDriverDatabaseCatalog()', async () => {
    const params = {
      driver: Buffer.from('This is a mock file.'),
      driverFileName: 'testString',
      databaseDisplayName: 'testString',
      databaseType: 'testString',
      catalogName: 'testString',
      hostname: 'testString',
      port: 'testString',
      username: 'testString',
      password: 'testString',
      databaseName: 'testString',
      driverContentType: 'testString',
      certificate: 'testString',
      certificateExtension: 'testString',
      ssl: 'testString',
      description: 'testString',
      createdOn: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createDriverDatabaseCatalog(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('listDatabaseRegistrations()', async () => {
    const params = {
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listDatabaseRegistrations(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createDatabaseRegistration()', async () => {
    // Request models needed by this operation.

    // DatabaseCatalog
    const databaseCatalogModel = {
      catalog_name: 'sampleCatalog',
      catalog_tags: ['catalog_tag_1', 'catalog_tag_2'],
      catalog_type: 'iceberg',
    };

    // DatabaseDetails
    const databaseDetailsModel = {
      certificate: 'contents of a pem/crt file',
      certificate_extension: 'pem/crt',
      database_name: 'new_database',
      hostname: 'db2@<hostname>.com',
      hostname_in_certificate: 'samplehostname',
      hosts: 'abc.com:1234,xyz.com:4321',
      password: 'samplepassword',
      port: 4553,
      sasl: true,
      ssl: true,
      tables: 'kafka_table_name',
      username: 'sampleuser',
      validate_server_certificate: true,
    };

    // DatabaseRegistrationPrototypeDatabasePropertiesItems
    const databaseRegistrationPrototypeDatabasePropertiesItemsModel = {
      encrypt: true,
      key: 'abc',
      value: 'xyz',
    };

    const params = {
      databaseDisplayName: 'new_database',
      databaseType: 'db2',
      associatedCatalog: databaseCatalogModel,
      createdOn: '1686792721',
      databaseDetails: databaseDetailsModel,
      databaseProperties: [databaseRegistrationPrototypeDatabasePropertiesItemsModel],
      description: 'db2 extenal database description',
      tags: ['testdatabase', 'userdatabase'],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createDatabaseRegistration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getDatabase()', async () => {
    const params = {
      databaseId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getDatabase(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updateDatabase()', async () => {
    // Request models needed by this operation.

    // JsonPatchOperation
    const jsonPatchOperationModel = {
      op: 'add',
      path: 'testString',
      from: 'testString',
      value: 'testString',
    };

    const params = {
      databaseId: 'testString',
      body: [jsonPatchOperationModel],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateDatabase(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('validateDatabaseConnection()', async () => {
    // Request models needed by this operation.

    // ValidateDatabaseBodyDatabaseDetails
    const validateDatabaseBodyDatabaseDetailsModel = {
      database_name: 'sampledatabase',
      hostname: 'db2@hostname.com',
      password: 'samplepassword',
      port: 4553,
      sasl: true,
      ssl: true,
      tables: 'kafka_table_name',
      username: 'sampleuser',
      validate_server_certificate: true,
    };

    const params = {
      databaseDetails: validateDatabaseBodyDatabaseDetailsModel,
      databaseType: 'netezza',
      certificate: 'contents of a pem/crt file',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.validateDatabaseConnection(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listDb2Engines()', async () => {
    const params = {
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listDb2Engines(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createDb2Engine()', async () => {
    // Request models needed by this operation.

    // Db2EngineDetailsBody
    const db2EngineDetailsBodyModel = {
      connection_string: '1.2.3.4',
    };

    const params = {
      origin: 'external',
      type: 'db2',
      description: 'db2 engine description',
      engineDetails: db2EngineDetailsBodyModel,
      engineDisplayName: 'sampleEngine',
      tags: ['tag1', 'tag2'],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createDb2Engine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('updateDb2Engine()', async () => {
    // Request models needed by this operation.

    // JsonPatchOperation
    const jsonPatchOperationModel = {
      op: 'add',
      path: 'testString',
      from: 'testString',
      value: 'testString',
    };

    const params = {
      engineId: 'testString',
      body: [jsonPatchOperationModel],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateDb2Engine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
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
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getDeployments(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listNetezzaEngines()', async () => {
    const params = {
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listNetezzaEngines(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createNetezzaEngine()', async () => {
    // Request models needed by this operation.

    // NetezzaEngineDetailsBody
    const netezzaEngineDetailsBodyModel = {
      connection_string: '1.2.3.4',
    };

    const params = {
      origin: 'external',
      type: 'netezza',
      description: 'netezza engine description',
      engineDetails: netezzaEngineDetailsBodyModel,
      engineDisplayName: 'sampleEngine',
      tags: ['tag1', 'tag2'],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createNetezzaEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('updateNetezzaEngine()', async () => {
    // Request models needed by this operation.

    // JsonPatchOperation
    const jsonPatchOperationModel = {
      op: 'add',
      path: 'testString',
      from: 'testString',
      value: 'testString',
    };

    const params = {
      engineId: 'testString',
      body: [jsonPatchOperationModel],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateNetezzaEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listOtherEngines()', async () => {
    const params = {
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listOtherEngines(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createOtherEngine()', async () => {
    // Request models needed by this operation.

    // OtherEngineDetailsBody
    const otherEngineDetailsBodyModel = {
      connection_string: '1.2.3.4',
      engine_type: 'netezza',
    };

    const params = {
      engineDetails: otherEngineDetailsBodyModel,
      engineDisplayName: 'sampleEngine01',
      description: 'external engine description',
      origin: 'external',
      tags: ['tag1', 'tag2'],
      type: 'netezza',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createOtherEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('listPrestissimoEngines()', async () => {
    const params = {
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listPrestissimoEngines(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createPrestissimoEngine()', async () => {
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

    const params = {
      origin: 'native',
      type: 'prestissimo',
      associatedCatalogs: ['hive_data'],
      description: 'prestissimo engine description',
      engineDetails: prestissimoEngineDetailsModel,
      engineDisplayName: 'sampleEngine',
      region: 'us-south',
      tags: ['tag1', 'tag2'],
      version: '1.2.3',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createPrestissimoEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getPrestissimoEngine()', async () => {
    const params = {
      engineId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getPrestissimoEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updatePrestissimoEngine()', async () => {
    // Request models needed by this operation.

    // JsonPatchOperation
    const jsonPatchOperationModel = {
      op: 'add',
      path: 'testString',
      from: 'testString',
      value: 'testString',
    };

    const params = {
      engineId: 'testString',
      body: [jsonPatchOperationModel],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updatePrestissimoEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listPrestissimoEngineCatalogs()', async () => {
    const params = {
      engineId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listPrestissimoEngineCatalogs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('replacePrestissimoEngineCatalogs()', async () => {
    const params = {
      engineId: 'testString',
      catalogNames: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.replacePrestissimoEngineCatalogs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getPrestissimoEngineCatalog()', async () => {
    const params = {
      engineId: 'testString',
      catalogId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getPrestissimoEngineCatalog(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createPrestissimoEnginePause()', async () => {
    const params = {
      engineId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createPrestissimoEnginePause(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('runPrestissimoExplainStatement()', async () => {
    const params = {
      engineId: 'testString',
      statement: 'show schemas in catalog_name',
      format: 'json',
      type: 'io',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.runPrestissimoExplainStatement(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('runPrestissimoExplainAnalyzeStatement()', async () => {
    const params = {
      engineId: 'testString',
      statement: 'show schemas in catalog_name',
      verbose: true,
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.runPrestissimoExplainAnalyzeStatement(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createPrestissimoEngineRestart()', async () => {
    const params = {
      engineId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createPrestissimoEngineRestart(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('createPrestissimoEngineResume()', async () => {
    const params = {
      engineId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createPrestissimoEngineResume(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('createPrestissimoEngineScale()', async () => {
    // Request models needed by this operation.

    // PrestissimoNodeDescriptionBody
    const prestissimoNodeDescriptionBodyModel = {
      node_type: 'worker',
      quantity: 38,
    };

    const params = {
      engineId: 'testString',
      coordinator: prestissimoNodeDescriptionBodyModel,
      worker: prestissimoNodeDescriptionBodyModel,
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createPrestissimoEngineScale(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('listPrestoEngines()', async () => {
    const params = {
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listPrestoEngines(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createPrestoEngine()', async () => {
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

    const params = {
      origin: 'native',
      type: 'presto',
      associatedCatalogs: ['iceberg_data', 'hive_data'],
      description: 'presto engine for running sql queries',
      engineDetails: engineDetailsBodyModel,
      engineDisplayName: 'sampleEngine',
      region: 'us-south',
      tags: ['tag1', 'tag2'],
      version: '1.2.3',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createPrestoEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getPrestoEngine()', async () => {
    const params = {
      engineId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getPrestoEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updatePrestoEngine()', async () => {
    // Request models needed by this operation.

    // JsonPatchOperation
    const jsonPatchOperationModel = {
      op: 'add',
      path: 'testString',
      from: 'testString',
      value: 'testString',
    };

    const params = {
      engineId: 'testString',
      body: [jsonPatchOperationModel],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updatePrestoEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listPrestoEngineCatalogs()', async () => {
    const params = {
      engineId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listPrestoEngineCatalogs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('replacePrestoEngineCatalogs()', async () => {
    const params = {
      engineId: 'testString',
      catalogNames: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.replacePrestoEngineCatalogs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getPrestoEngineCatalog()', async () => {
    const params = {
      engineId: 'testString',
      catalogId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getPrestoEngineCatalog(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createEnginePause()', async () => {
    const params = {
      engineId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createEnginePause(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('runExplainStatement()', async () => {
    const params = {
      engineId: 'testString',
      statement: 'show schemas in catalog_name',
      format: 'json',
      type: 'io',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.runExplainStatement(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('runExplainAnalyzeStatement()', async () => {
    const params = {
      engineId: 'testString',
      statement: 'show schemas in catalog_name',
      verbose: true,
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.runExplainAnalyzeStatement(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createEngineRestart()', async () => {
    const params = {
      engineId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createEngineRestart(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('createEngineResume()', async () => {
    const params = {
      engineId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createEngineResume(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('createEngineScale()', async () => {
    // Request models needed by this operation.

    // NodeDescription
    const nodeDescriptionModel = {
      node_type: 'worker',
      quantity: 38,
    };

    const params = {
      engineId: 'testString',
      coordinator: nodeDescriptionModel,
      worker: nodeDescriptionModel,
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createEngineScale(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('listSparkEngines()', async () => {
    const params = {
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listSparkEngines(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createSparkEngine()', async () => {
    // Request models needed by this operation.

    // SparkEngineDetailsPrototype
    const sparkEngineDetailsPrototypeModel = {
      api_key: 'apikey',
      connection_string: '1.2.3.4',
      instance_id: 'spark-id',
      managed_by: 'fully/self',
    };

    const params = {
      origin: 'external',
      type: 'spark',
      description: 'spark engine description',
      engineDetails: sparkEngineDetailsPrototypeModel,
      engineDisplayName: 'sampleEngine',
      tags: ['tag1', 'tag2'],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createSparkEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('updateSparkEngine()', async () => {
    // Request models needed by this operation.

    // JsonPatchOperation
    const jsonPatchOperationModel = {
      op: 'add',
      path: 'testString',
      from: 'testString',
      value: 'testString',
    };

    const params = {
      engineId: 'testString',
      body: [jsonPatchOperationModel],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateSparkEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listSparkEngineApplications()', async () => {
    const params = {
      engineId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listSparkEngineApplications(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createSparkEngineApplication()', async () => {
    // Request models needed by this operation.

    // SparkApplicationDetailsConf
    const sparkApplicationDetailsConfModel = {
      spark_app_name: 'MyJob',
      spark_hive_metastore_client_auth_mode: 'PLAIN',
      spark_hive_metastore_client_plain_password: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...',
      spark_hive_metastore_client_plain_username: 'ibm_lh_token_admin',
      spark_hive_metastore_truststore_password: 'changeit',
      spark_hive_metastore_truststore_path: 'file:///opt/ibm/jdk/lib/security/cacerts',
      spark_hive_metastore_truststore_type: 'JKS',
      spark_hive_metastore_use_ssl: 'true',
      spark_sql_catalog_implementation: 'Spark Catalog Implementation',
      spark_sql_catalog_lakehouse: 'org.apache.iceberg.spark.SparkCatalog',
      spark_sql_catalog_lakehouse_type: 'Spark Catalog Type',
      spark_sql_catalog_lakehouse_uri: 'Spark Catalog URI',
      spark_sql_extensions: 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions',
      spark_sql_iceberg_vectorization_enabled: 'false',
    };

    // SparkApplicationDetails
    const sparkApplicationDetailsModel = {
      application: 's3://mybucket/wordcount.py',
      arguments: ['people.txt'],
      conf: sparkApplicationDetailsConfModel,
      env: { anyKey: 'anyValue' },
      name: 'SparkApplicaton1',
    };

    const params = {
      engineId: 'testString',
      applicationDetails: sparkApplicationDetailsModel,
      jobEndpoint:
        '<host>/v4/analytics_engines/c7b3fccf-badb-46b0-b1ef-9b3154424021/engine_applications',
      serviceInstanceId: 'testString',
      type: 'iae',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createSparkEngineApplication(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getSparkEngineApplicationStatus()', async () => {
    const params = {
      engineId: 'testString',
      applicationId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getSparkEngineApplicationStatus(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('testLhConsole()', async () => {
    const res = await watsonxDataService.testLhConsole();
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listCatalogs()', async () => {
    const params = {
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listCatalogs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getCatalog()', async () => {
    const params = {
      catalogId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getCatalog(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listSchemas()', async () => {
    const params = {
      engineId: 'testString',
      catalogId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listSchemas(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createSchema()', async () => {
    const params = {
      engineId: 'testString',
      catalogId: 'testString',
      customPath: 'sample-path',
      schemaName: 'SampleSchema1',
      bucketName: 'sample-bucket',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createSchema(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('listTables()', async () => {
    const params = {
      catalogId: 'testString',
      schemaId: 'testString',
      engineId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listTables(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getTable()', async () => {
    const params = {
      catalogId: 'testString',
      schemaId: 'testString',
      tableId: 'testString',
      engineId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getTable(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updateTable()', async () => {
    // Request models needed by this operation.

    // JsonPatchOperation
    const jsonPatchOperationModel = {
      op: 'add',
      path: 'testString',
      from: 'testString',
      value: 'testString',
    };

    const params = {
      catalogId: 'testString',
      schemaId: 'testString',
      tableId: 'testString',
      engineId: 'testString',
      body: [jsonPatchOperationModel],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateTable(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listColumns()', async () => {
    const params = {
      engineId: 'testString',
      catalogId: 'testString',
      schemaId: 'testString',
      tableId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listColumns(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createColumns()', async () => {
    // Request models needed by this operation.

    // Column
    const columnModel = {
      column_name: 'expenses',
      comment: 'expenses column',
      extra: 'varchar',
      length: '30',
      scale: '2',
      type: 'varchar',
    };

    const params = {
      engineId: 'testString',
      catalogId: 'testString',
      schemaId: 'testString',
      tableId: 'testString',
      columns: [columnModel],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createColumns(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('updateColumn()', async () => {
    // Request models needed by this operation.

    // JsonPatchOperation
    const jsonPatchOperationModel = {
      op: 'add',
      path: 'testString',
      from: 'testString',
      value: 'testString',
    };

    const params = {
      engineId: 'testString',
      catalogId: 'testString',
      schemaId: 'testString',
      tableId: 'testString',
      columnId: 'testString',
      body: [jsonPatchOperationModel],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateColumn(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listTableSnapshots()', async () => {
    const params = {
      engineId: 'testString',
      catalogId: 'testString',
      schemaId: 'testString',
      tableId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listTableSnapshots(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('replaceSnapshot()', async () => {
    const params = {
      engineId: 'testString',
      catalogId: 'testString',
      schemaId: 'testString',
      tableId: 'testString',
      snapshotId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.replaceSnapshot(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('updateSyncCatalog()', async () => {
    // Request models needed by this operation.

    // JsonPatchOperation
    const jsonPatchOperationModel = {
      op: 'add',
      path: 'testString',
      from: 'testString',
      value: 'testString',
    };

    const params = {
      catalogId: 'testString',
      body: [jsonPatchOperationModel],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateSyncCatalog(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listMilvusServices()', async () => {
    const params = {
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listMilvusServices(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createMilvusService()', async () => {
    const params = {
      origin: 'native',
      type: 'milvus',
      description: 'milvus service for running sql queries',
      serviceDisplayName: 'sampleService',
      tags: ['tag1', 'tag2'],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createMilvusService(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getMilvusService()', async () => {
    const params = {
      serviceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getMilvusService(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updateMilvusService()', async () => {
    // Request models needed by this operation.

    // JsonPatchOperation
    const jsonPatchOperationModel = {
      op: 'add',
      path: 'testString',
      from: 'testString',
      value: 'testString',
    };

    const params = {
      serviceId: 'testString',
      body: [jsonPatchOperationModel],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateMilvusService(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('deleteBucketRegistration()', async () => {
    const params = {
      bucketId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteBucketRegistration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteDeactivateBucket()', async () => {
    const params = {
      bucketId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteDeactivateBucket(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteDatabaseCatalog()', async () => {
    const params = {
      databaseId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteDatabaseCatalog(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteDb2Engine()', async () => {
    const params = {
      engineId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteDb2Engine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteNetezzaEngine()', async () => {
    const params = {
      engineId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteNetezzaEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteOtherEngine()', async () => {
    const params = {
      engineId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteOtherEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deletePrestissimoEngine()', async () => {
    const params = {
      engineId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deletePrestissimoEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deletePrestissimoEngineCatalogs()', async () => {
    const params = {
      engineId: 'testString',
      catalogNames: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deletePrestissimoEngineCatalogs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteEngine()', async () => {
    const params = {
      engineId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deletePrestoEngineCatalogs()', async () => {
    const params = {
      engineId: 'testString',
      catalogNames: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deletePrestoEngineCatalogs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteSparkEngine()', async () => {
    const params = {
      engineId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteSparkEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteSparkEngineApplications()', async () => {
    const params = {
      engineId: 'testString',
      applicationId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteSparkEngineApplications(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteSchema()', async () => {
    const params = {
      engineId: 'testString',
      catalogId: 'testString',
      schemaId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteSchema(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteTable()', async () => {
    const params = {
      catalogId: 'testString',
      schemaId: 'testString',
      tableId: 'testString',
      engineId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteTable(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteColumn()', async () => {
    const params = {
      engineId: 'testString',
      catalogId: 'testString',
      schemaId: 'testString',
      tableId: 'testString',
      columnId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteColumn(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteMilvusService()', async () => {
    const params = {
      serviceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteMilvusService(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });
});
