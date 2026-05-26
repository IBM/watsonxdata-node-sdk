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

/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */

const { readExternalSources } = require('ibm-cloud-sdk-core');
const WatsonxDataV3 = require('../../dist/watsonx-data/v3');
const authHelper = require('../resources/auth-helper.js');

// testcase timeout value (200s).
const timeout = 200000;

// Location of our config file.
const configFile = 'watsonx_data_v3.env';

const describe = authHelper.prepareTests(configFile);

describe('WatsonxDataV3_integration', () => {
  jest.setTimeout(timeout);

  // Service instance
  let watsonxDataService;

  test('Initialize service', async () => {
    watsonxDataService = WatsonxDataV3.newInstance();

    expect(watsonxDataService).not.toBeNull();

    const config = readExternalSources(WatsonxDataV3.DEFAULT_SERVICE_NAME);
    expect(config).not.toBeNull();

    watsonxDataService.enableRetries();
  });

  test('createHdfsStorage()', async () => {
    const params = {
      displayName: 'testString',
      type: 'testString',
      hmsThriftUri: 'testString',
      hmsThriftPort: 1,
      coreSite: 'testString',
      hdfsSite: 'testString',
      kerberos: 'testString',
      catalogName: 'testString',
      catalogType: 'testString',
      krb5Config: 'testString',
      hiveKeytab: Buffer.from('This is a mock file.'),
      hiveKeytabContentType: 'testString',
      hdfsKeytab: Buffer.from('This is a mock file.'),
      hdfsKeytabContentType: 'testString',
      hiveServerPrincipal: 'testString',
      hiveClientPrincipal: 'testString',
      hdfsPrincipal: 'testString',
      description: 'testString',
      createdAt: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createHdfsStorage(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('listStorageRegistrations()', async () => {
    const params = {
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listStorageRegistrations(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createStorageRegistration()', async () => {
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

    const params = {
      description: 'COS storage for customer data',
      displayName: 'sample-storage-displayname',
      managedBy: 'ibm',
      type: 'ibm_cos',
      associatedCatalog: storageCatalogPrototypeModel,
      connection: storageDetailsModel,
      region: 'us-south',
      storageUse: 'acl',
      tags: ['storage-tag1', 'storage-tag2'],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createStorageRegistration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getStorageRegistration()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
      skipMdsCall: false,
    };

    const res = await watsonxDataService.getStorageRegistration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updateStorageRegistration()', async () => {
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

    const params = {
      id: 'testString',
      connection: storageDetailsModel,
      description: 'COS storage for customer data',
      displayName: 'sample-storage-displayname',
      systemStorageUpdateCredentials: true,
      tags: ['teststorage', 'userstorage'],
      skipMdsCall: false,
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateStorageRegistration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('addStorageCatalog()', async () => {
    const params = {
      storageId: 'testString',
      catalogTags: ['catalog_tag_1', 'catalog_tag_2'],
      basePath: '/abc/def',
      catalogName: 'sampleCatalog',
      catalogType: 'iceberg',
      skipMdsCall: false,
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.addStorageCatalog(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getStorageObjectProperties()', async () => {
    // Request models needed by this operation.

    // Path
    const pathModel = {
      path: 'testString',
    };

    const params = {
      storageId: 'testString',
      paths: [pathModel],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getStorageObjectProperties(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('listStorageRegistrationsObjects()', async () => {
    const params = {
      storageId: 'testString',
      authInstanceId: 'testString',
      path: 'testString',
      paginated: true,
      pageSize: 1,
      prefix: 'testString',
      startAfter: 'testString',
    };

    const res = await watsonxDataService.listStorageRegistrationsObjects(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
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

    const params = {
      displayName: 'new_database',
      type: 'db2',
      associatedCatalog: databaseCatalogPrototypeModel,
      connection: databaseDetailsPrototypeModel,
      createdAt: '1686792721',
      description: 'db2 extenal database description',
      properties: [databaseRegistrationPrototypeDatabasePropertiesItemsModel],
      sourceAssetId: 'cc85d899-9ec3-496a-be36-99cabc62f123',
      sourceCatalogId: 'cc85d899-9ec3-496a-be36-99cff962f000',
      sourceProjectId: 'cc85d899-9ec3-496a-be36-99cff9000116',
      tags: ['testdatabase', 'userdatabase'],
      targetCatalogId: 'cc85d899-9ec3-496a-be36-99cff9000116',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createDatabaseRegistration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('addDatabaseCatalog()', async () => {
    const params = {
      databaseId: 'testString',
      catalogName: 'sampleCatalog',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.addDatabaseCatalog(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getDatabase()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getDatabase(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updateDatabase()', async () => {
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

    const params = {
      id: 'testString',
      connection: databaseRegistrationPatchDatabaseDetailsModel,
      description: 'External database description',
      displayName: 'new_database',
      tables: [databaseRegistrationPatchTablesItemsModel],
      tags: ['testdatabase', 'userdatabase'],
      topics: [databaseRegistrationPatchTopicsItemsModel],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateDatabase(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
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

    const params = {
      configuration: engineDetailsModel,
      displayName: 'sampleEngine',
      origin: 'native',
      associatedCatalogs: ['iceberg_data', 'hive_data'],
      description: 'presto engine for running sql queries',
      id: 'presto123',
      tags: ['tag1', 'tag2'],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createPrestoEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('updatePrestoEngineAutoscaling()', async () => {
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

    const params = {
      engineId: 'testString',
      autoscalingConfig: autoScalingConfigModel,
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updatePrestoEngineAutoscaling(params);
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

  test('createPrestoEngineCatalogs()', async () => {
    const params = {
      engineId: 'testString',
      catalogNames: ['iceberg_catalog'],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createPrestoEngineCatalogs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getPrestoEngineCatalog()', async () => {
    const params = {
      engineId: 'testString',
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getPrestoEngineCatalog(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getPrestoEngineConfig()', async () => {
    const params = {
      engineId: 'presto860',
      authInstanceId: 'crn:v1:staging:public:lakehouse:eu-de:a/810fe64a9e3446d1b919d0eff69d3c5f:87495456-c862-4b35-b8de-884b7f15eee4::',
      sections: 'catalog,configuration,jvm',
    };

    const res = await watsonxDataService.getPrestoEngineConfig(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updatePrestoEngineConfig()', async () => {
    // Request models needed by this operation.

    // CatalogProperties
    const catalogPropertiesModel = {
      coordinator: { 'hive.metastore-cache-scope': 'PARTITION', 'hive.metastore-cache-ttl': '2s', 'hive.partition-statistics-based-optimization-enabled': 'true' },
      worker: { 'hive.metastore-cache-ttl': '2s' },
    };

    // ConfigurationProperties
    const configurationPropertiesModel = {
      coordinator: { 'log.max-size': '104857600B', 'node-scheduler.max-pending-splits-per-task': '2000', 'node-scheduler.max-splits-per-node': '2000', 'optimize-nulls-in-join': 'true', 'optimizer.default-filter-factor-enabled': 'true', 'optimizer.exploit-constraints': 'true', 'optimizer.prefer-partial-aggregation': 'true' },
      worker: { 'optimize-nulls-in-join': 'true', 'optimizer.default-filter-factor-enabled': 'true' },
    };

    // JvmProperties
    const jvmPropertiesModel = {
      coordinator: { '-Xmx': '-Xmx6G' },
      worker: { '-Xmx': '-Xmx6G' },
    };

    // LogConfigProperties
    const logConfigPropertiesModel = {
      coordinator: { 'com.facebook.presto.execution.QueryManager': 'INFO', 'com.facebook.presto.metadata.MetadataManager': 'INFO', 'com.facebook.presto.server': 'INFO', 'com.facebook.presto.server.PrestoServer': '' },
      worker: { 'key1': 'log_config_property_value' },
    };

    // PrestoEngineProperties
    const prestoEnginePropertiesModel = {
      catalog: { hive_data: catalogPropertiesModel },
      configuration: configurationPropertiesModel,
      event_listener: { 'event-listener.name': 'event-listener', 'event-listener.config': 'config-value' },
      global: { 'max-concurrent-queries': '100', 'max-queued-queries': '200' },
      jmx_exporter_config: { 'jmx.port': '9090', 'jmx.host': 'localhost' },
      jvm: jvmPropertiesModel,
      log_config: logConfigPropertiesModel,
    };

    const params = {
      engineId: 'presto93',
      authInstanceId: 'crn:v1:staging:public:lakehouse:eu-de:a/810fe64a9e3446d1b919d0eff69d3c5f:87495456-c862-4b35-b8de-884b7f15eee4::',
      engineProperties: prestoEnginePropertiesModel,
    };

    const res = await watsonxDataService.updatePrestoEngineConfig(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getPrestoEngine()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getPrestoEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updatePrestoEngine()', async () => {
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

    const params = {
      id: 'testString',
      description: 'updated description for presto engine',
      displayName: 'sampleEngine',
      properties: enginePropertiesModel,
      removeEngineProperties: removeEnginePropertiesModel,
      restartType: 'force',
      tags: ['tag1', 'tag2'],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updatePrestoEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('pausePrestoEngine()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.pausePrestoEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('runExplainStatement()', async () => {
    const params = {
      id: 'testString',
      statement: 'show schemas in catalog_name',
      catalog: 'catalog_name',
      format: 'json',
      schema: 'schema_name',
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
      id: 'testString',
      statement: 'show schemas in catalog_name',
      verbose: true,
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.runExplainAnalyzeStatement(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('restartPrestoEngine()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.restartPrestoEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('resumePrestoEngine()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.resumePrestoEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('scalePrestoEngine()', async () => {
    // Request models needed by this operation.

    // NodeDescription
    const nodeDescriptionModel = {
      node_type: 'worker',
      quantity: 1,
    };

    const params = {
      id: 'testString',
      coordinator: nodeDescriptionModel,
      worker: nodeDescriptionModel,
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.scalePrestoEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(202);
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

    const params = {
      configuration: prestissimoEngineDetailsModel,
      displayName: 'sampleEngine',
      origin: 'native',
      associatedCatalogs: ['hive_data'],
      description: 'prestissimo engine description',
      id: 'prestissimo123',
      tags: ['tag1', 'tag2'],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createPrestissimoEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getPrestissimoEngineCatalog()', async () => {
    const params = {
      engineId: 'testString',
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getPrestissimoEngineCatalog(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getPrestissimoEngine()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getPrestissimoEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updatePrestissimoEngine()', async () => {
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

    const params = {
      id: 'testString',
      description: 'updated description for prestissimo engine',
      displayName: 'sampleEngine',
      properties: prestissimoEnginePropertiesModel,
      removeEngineProperties: removePrestissimoEnginePropertiesModel,
      restartType: 'force',
      tags: ['tag1', 'tag2'],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updatePrestissimoEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listPrestissimoEngineCatalogs()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listPrestissimoEngineCatalogs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createPrestissimoEngineCatalogs()', async () => {
    const params = {
      id: 'testString',
      catalogNames: ['iceberg_catalog'],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createPrestissimoEngineCatalogs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('pausePrestissimoEngine()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.pausePrestissimoEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('runPrestissimoExplainStatement()', async () => {
    const params = {
      id: 'testString',
      statement: 'show schemas in catalog_name',
      catalog: 'catalog_name',
      format: 'json',
      schema: 'schema_name',
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
      id: 'testString',
      statement: 'show schemas in catalog_name',
      verbose: true,
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.runPrestissimoExplainAnalyzeStatement(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('restartPrestissimoEngine()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.restartPrestissimoEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('resumePrestissimoEngine()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.resumePrestissimoEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('scalePrestissimoEngine()', async () => {
    // Request models needed by this operation.

    // NodeDescription
    const nodeDescriptionModel = {
      node_type: 'worker',
      quantity: 1,
    };

    const params = {
      id: 'testString',
      coordinator: nodeDescriptionModel,
      worker: nodeDescriptionModel,
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.scalePrestissimoEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(202);
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
      configuration: db2EngineDetailsBodyModel,
      displayName: 'sampleEngine',
      origin: 'external',
      description: 'db2 engine description',
      tags: ['tag1', 'tag2'],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createDb2Engine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('updateDb2Engine()', async () => {
    const params = {
      id: 'testString',
      description: 'db2 engine updated description',
      displayName: 'sampleEngine',
      tags: ['tag1', 'tag2'],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateDb2Engine(params);
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

    // OtherEngineConfigurationBody
    const otherEngineConfigurationBodyModel = {
      connection_string: '1.2.3.4',
      type: 'netezza',
    };

    const params = {
      configuration: otherEngineConfigurationBodyModel,
      displayName: 'sampleEngine01',
      origin: 'external',
      description: 'external engine description',
      tags: ['tag1', 'tag2'],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createOtherEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
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

    // NetezzaEngineConfigurationBody
    const netezzaEngineConfigurationBodyModel = {
      connection_string: '1.2.3.4',
    };

    const params = {
      configuration: netezzaEngineConfigurationBodyModel,
      displayName: 'sampleEngine',
      origin: 'external',
      description: 'netezza engine description',
      tags: ['tag1', 'tag2'],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createNetezzaEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('updateNetezzaEngine()', async () => {
    const params = {
      id: 'testString',
      description: 'netezza engine updated description',
      displayName: 'sampleEngine',
      tags: ['tag1', 'tag2'],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateNetezzaEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
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

    const params = {
      displayName: 'sampleEngine',
      origin: 'external',
      associatedCatalogs: ['iceberg_data', 'hive_data'],
      configuration: sparkEngineDetailsModel,
      description: 'spark engine description',
      id: 'spark123',
      status: 'provisioning',
      tags: ['tag1', 'tag2'],
      type: 'spark',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createSparkEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(202);
    expect(res.result).toBeDefined();
  });

  test('getSparkEngineCatalog()', async () => {
    const params = {
      engineId: 'testString',
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getSparkEngineCatalog(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getSparkEngine()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getSparkEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updateSparkEngine()', async () => {
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

    const params = {
      id: 'testString',
      configuration: sparkEnginePatchEngineDetailsModel,
      description: 'updated description for spark engine',
      displayName: 'sampleEngine',
      tags: ['tag1', 'tag2'],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateSparkEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listSparkEngineCatalogs()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listSparkEngineCatalogs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createSparkEngineCatalogs()', async () => {
    const params = {
      id: 'testString',
      catalogNames: ['iceberg_catalog'],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createSparkEngineCatalogs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('pauseSparkEngine()', async () => {
    const params = {
      id: 'testString',
      force: true,
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.pauseSparkEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('resumeSparkEngine()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.resumeSparkEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('scaleSparkEngine()', async () => {
    const params = {
      id: 'testString',
      numberOfNodes: 2,
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.scaleSparkEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(202);
    expect(res.result).toBeDefined();
  });

  test('getSparkEngineApplicationStatus()', async () => {
    const params = {
      engineId: 'testString',
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getSparkEngineApplicationStatus(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getSparkEngineApplicationUi()', async () => {
    const params = {
      engineId: 'testString',
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getSparkEngineApplicationUi(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listSparkEngineApplications()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
      state: ['testString'],
      submissionTimeInterval: 'testString',
      startTimeInterval: 'testString',
      endTimeInterval: 'testString',
      limit: 500,
      start: 'testString',
    };

    const res = await watsonxDataService.listSparkEngineApplications(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listSparkEngineApplications() via SparkEngineApplicationsPager', async () => {
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

    // Test getNext().
    let pager = new WatsonxDataV3.SparkEngineApplicationsPager(watsonxDataService, params);
    while (pager.hasNext()) {
      const nextPage = await pager.getNext();
      expect(nextPage).not.toBeNull();
      allResults.push(...nextPage);
    }

    // Test getAll().
    pager = new WatsonxDataV3.SparkEngineApplicationsPager(watsonxDataService, params);
    const allItems = await pager.getAll();
    expect(allItems).not.toBeNull();
    expect(allItems).toHaveLength(allResults.length);
    console.log(`Retrieved a total of ${allResults.length} items(s) with pagination.`);
  });

  test('createSparkEngineApplication()', async () => {
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

    const params = {
      id: 'testString',
      applicationDetails: sparkApplicationDetailsModel,
      callback: sparkEngineApplicationCallbackModel,
      contextId: 'testString',
      contextType: 'project',
      deployMode: 'local',
      idempotencyKey: 'testString',
      initScripts: ['file://init_scripts/test.sh'],
      jobEndpoint: '<host>/v4/analytics_engines/c7b3fccf-badb-46b0-b1ef-9b3154424021/engine_applications',
      maxRetries: '3',
      minRetryIntervalInSeconds: '30',
      serviceInstanceId: 'iae',
      timeoutInSeconds: '60',
      type: 'spark',
      volumes: [sparkVolumeDetailsModel],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createSparkEngineApplication(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getSparkEngineHistoryServer()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getSparkEngineHistoryServer(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('startSparkEngineHistoryServer()', async () => {
    const params = {
      id: 'testString',
      cores: '1',
      memory: '4G',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.startSparkEngineHistoryServer(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getSparkEngineHistoryServerUi()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getSparkEngineHistoryServerUi(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('validateIntegration()', async () => {
    // Request models needed by this operation.

    // Catalogs
    const catalogsModel = {
      catalog_names: ['iceberg_data', 'hive_data'],
    };

    const params = {
      type: 'ranger',
      accessToken: 'Header.Payload.Signature',
      apikey: 'apikey',
      catalogs: catalogsModel,
      certificate: 'certificate_content_base64_encoded',
      password: 'password',
      ssl: true,
      url: 'https://www.abcd.com',
      username: 'username',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.validateIntegration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listAllIntegrations()', async () => {
    const params = {
      authInstanceId: 'testString',
      secret: 'testString',
      type: ['testString'],
      state: ['active'],
    };

    const res = await watsonxDataService.listAllIntegrations(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createIntegration()', async () => {
    // Request models needed by this operation.

    // Catalogs
    const catalogsModel = {
      catalog_names: ['iceberg_data', 'hive_data'],
    };

    const params = {
      accessToken: 'Header.Payload.Signature',
      apikey: 'apikey',
      catalogs: catalogsModel,
      certificate: 'certificate_content_base64_encoded',
      certificateExtension: 'pem',
      connectionMode: 'external',
      crossAccountIntegration: false,
      enableDataPolicyWithinWxd: false,
      ikcUserAccountId: 'ikc_user_account_id',
      password: 'password',
      policyCacheTimeConfiguration: '123456789',
      resource: 'presto01',
      ssl: true,
      type: 'ranger',
      url: 'https://abcd.efgh.com',
      username: 'username',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createIntegration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getIntegrations()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getIntegrations(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updateIntegration()', async () => {
    // Request models needed by this operation.

    // Catalogs
    const catalogsModel = {
      catalog_names: ['iceberg_data', 'hive_data'],
    };

    const params = {
      id: 'testString',
      accessToken: 'Header.Payload.Signature',
      apikey: 'apikey',
      catalogs: catalogsModel,
      certificate: 'certificate_content_base64_encoded',
      certificateExtension: 'pem',
      connectionMode: 'external',
      crossAccountIntegration: false,
      enableDataPolicyWithinWxd: false,
      ikcUserAccountId: 'ikc_user_account_id',
      password: 'password',
      policyCacheTimeConfiguration: '123456789',
      resource: 'presto01',
      ssl: true,
      state: 'active',
      url: 'https://abcd.efgh.com',
      username: 'username',
      authInstanceId: 'testString',
      secret: 'testString',
    };

    const res = await watsonxDataService.updateIntegration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('registerTable()', async () => {
    const params = {
      catalogId: 'testString',
      schemaId: 'testString',
      metadataLocation: 's3a://storagename/path/to/table/metadata_location/_delta_log',
      tableName: 'table1',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.registerTable(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('loadTable()', async () => {
    const params = {
      catalogId: 'testString',
      schemaId: 'testString',
      tableId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.loadTable(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listCatalogs()', async () => {
    const params = {
      authInstanceId: 'testString',
      secret: 'testString',
      defaultCatalogs: false,
      view: 'testString',
    };

    const res = await watsonxDataService.listCatalogs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getCatalogEngineAssociation()', async () => {
    const params = {
      catalogName: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getCatalogEngineAssociation(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listTables()', async () => {
    const params = {
      catalogName: 'testString',
      schemaName: 'testString',
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
      catalogName: 'testString',
      schemaName: 'testString',
      tableName: 'testString',
      engineId: 'testString',
      type: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getTable(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updateTable()', async () => {
    const params = {
      catalogName: 'testString',
      schemaName: 'testString',
      tableName: 'testString',
      engineId: 'testString',
      name: 'updated_table_name',
      type: 'testString',
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
      catalogName: 'testString',
      schemaName: 'testString',
      tableName: 'testString',
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
      comment: 'Expenses column for each department',
      extra: 'AUTO_INCREMENT',
      length: '30',
      name: 'expenses',
      precision: '10',
      scale: '2',
      type: 'varchar',
    };

    const params = {
      engineId: 'testString',
      catalogName: 'testString',
      schemaName: 'testString',
      tableName: 'testString',
      columns: [columnModel],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createColumns(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('updateColumn()', async () => {
    const params = {
      engineId: 'testString',
      catalogName: 'testString',
      schemaName: 'testString',
      tableName: 'testString',
      columnName: 'testString',
      name: 'expenses',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateColumn(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('rollbackTable()', async () => {
    const params = {
      catalogName: 'testString',
      schemaName: 'testString',
      tableName: 'testString',
      snapshotId: '12357647',
      engineId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.rollbackTable(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('listTableSnapshots()', async () => {
    const params = {
      catalogName: 'testString',
      schemaName: 'testString',
      tableName: 'testString',
      engineId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listTableSnapshots(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listSchemas()', async () => {
    const params = {
      engineId: 'testString',
      id: 'testString',
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
      id: 'testString',
      customPath: 'sample-path',
      name: 'SampleSchema1',
      hostname: 'db2@hostname.com',
      port: 4553,
      storageName: 'sample-bucket',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createSchema(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('updateSyncCatalog()', async () => {
    const params = {
      id: 'testString',
      autoAddNewTables: true,
      registerNewTables: true,
      syncExistingTables: true,
      syncIcebergMd: true,
      syncPath: 'sample-path',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateSyncCatalog(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getCatalog()', async () => {
    const params = {
      name: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getCatalog(params);
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
      displayName: 'sampleService',
      origin: 'native',
      rootPath: 'Sample/path',
      tshirtSize: 'small',
      dcCpu: 0.01,
      dcMemory: 0.01,
      dcReplicas: 1,
      description: 'milvus service for running sql queries',
      dwCpu: 0.01,
      dwMemory: 0.01,
      dwReplicas: 1,
      etcdCpu: 0.01,
      etcdMemory: 0.01,
      id: 'milvus123',
      indexType: 'ivf_sq8',
      iwCpu: 0.01,
      iwMemory: 0.01,
      iwReplicas: 1,
      kafkaCpu: 0.01,
      kafkaMemory: 0.01,
      proxyCpu: 0.01,
      proxyMemory: 0.01,
      proxyReplicas: 1,
      qcCpu: 0.01,
      qcMemory: 0.01,
      qcReplicas: 1,
      qwCpu: 0.01,
      qwMemory: 0.01,
      qwReplicas: 1,
      rcCpu: 0.01,
      rcMemory: 0.01,
      rcReplicas: 1,
      storageName: 'Sample_storage_name',
      tags: ['tag1', 'tag2'],
      vector: 1,
      vectorDimension: 384,
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createMilvusService(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(202);
    expect(res.result).toBeDefined();
  });

  test('getMilvusService()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getMilvusService(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updateMilvusService()', async () => {
    const params = {
      id: 'testString',
      description: 'updated description for milvus service',
      displayName: 'sampleService',
      tags: ['tag1', 'tag2'],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateMilvusService(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createMilvusServicePause()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createMilvusServicePause(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('createMilvusServiceResume()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createMilvusServiceResume(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('createMilvusServiceScale()', async () => {
    const params = {
      id: 'testString',
      tshirtSize: 'small',
      dcCpu: 0.01,
      dcMemory: 0.01,
      dcReplicas: 1,
      dwCpu: 0.01,
      dwMemory: 0.01,
      dwReplicas: 1,
      etcdCpu: 0.01,
      etcdMemory: 0.01,
      indexType: 'flat',
      iwCpu: 0.01,
      iwMemory: 0.01,
      iwReplicas: 1,
      kafkaCpu: 0.01,
      kafkaMemory: 0.01,
      proxyCpu: 0.01,
      proxyMemory: 0.01,
      proxyReplicas: 1,
      qcCpu: 0.01,
      qcMemory: 0.01,
      qcReplicas: 1,
      qwCpu: 0.01,
      qwMemory: 0.01,
      qwReplicas: 1,
      rcCpu: 0.01,
      rcMemory: 0.01,
      rcReplicas: 1,
      vector: 1,
      vectorDimension: 384,
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createMilvusServiceScale(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('listMilvusServiceDatabases()', async () => {
    const params = {
      serviceId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listMilvusServiceDatabases(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listMilvusDatabaseCollections()', async () => {
    const params = {
      serviceId: 'testString',
      databaseId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listMilvusDatabaseCollections(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listMilvusDatabasePartitions()', async () => {
    const params = {
      serviceId: 'testString',
      databaseId: 'testString',
      collectionName: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listMilvusDatabasePartitions(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updateMilvusServiceBucket()', async () => {
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

    const res = await watsonxDataService.updateMilvusServiceBucket(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getSalIntegration()', async () => {
    const params = {
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getSalIntegration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createSalIntegration()', async () => {
    const params = {
      apikey: '67GveYtUdovRFEfnMLYP8x0S1b2mY1BkEGqBYbJK',
      engineId: 'presto-01',
      storageResourceCrn: 'crn:v1:staging:public:cloud-object-storage:global:a/a7026b374f39f570d20984c1ac6ecf63:5778e94f-c8c7-46a8-9878-d5eeadb51161',
      storageType: 'bmcos_object_storage',
      trialPlan: true,
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createSalIntegration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('updateSalIntegration()', async () => {
    const params = {
      apikey: '67GveYtUdovRFEfnMLYP8x0S1b2mY1BkEGqBYbJK',
      engineId: 'presto-01',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateSalIntegration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createSalIntegrationEnrichment()', async () => {
    // Request models needed by this operation.

    // EnrichmentObj
    const enrichmentObjModel = {
      catalog: 'iceberg_data',
      operation: 'create',
      schema: 'schema1',
      tables: ['table1'],
    };

    const params = {
      changes: [enrichmentObjModel],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createSalIntegrationEnrichment(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('listSalIntegrationEnrichmentAssets()', async () => {
    const params = {
      projectId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listSalIntegrationEnrichmentAssets(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getSalIntegrationEnrichmentAssetsById()', async () => {
    const params = {
      projectId: 'testString',
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getSalIntegrationEnrichmentAssetsById(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getSalIntegrationEnrichmentGlobalSettings()', async () => {
    const params = {
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getSalIntegrationEnrichmentGlobalSettings(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('replaceSalIntegrationEnrichmentGlobalSettings()', async () => {
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

    const params = {
      expansion: salEnrichmentSettingsExpansionModel,
      termAssignment: salEnrichmentSettingsTermAssignmentModel,
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.replaceSalIntegrationEnrichmentGlobalSettings(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listSalIntegrationEnrichmentJobs()', async () => {
    const params = {
      projectId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listSalIntegrationEnrichmentJobs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listSalIntegrationEnrichmentJobRuns()', async () => {
    const params = {
      jobId: 'testString',
      projectId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listSalIntegrationEnrichmentJobRuns(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getSalIntegrationEnrichmentJobRunLogs()', async () => {
    const params = {
      jobId: 'testString',
      runId: 'testString',
      projectId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getSalIntegrationEnrichmentJobRunLogs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getSalIntegrationEnrichmentProjectSettings()', async () => {
    const params = {
      projectId: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getSalIntegrationEnrichmentProjectSettings(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('replaceSalIntegrationEnrichmentProjectSettings()', async () => {
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

    const params = {
      projectId: 'testString',
      expansion: salEnrichmentSettingsExpansionModel,
      termAssignment: salEnrichmentSettingsTermAssignmentModel,
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.replaceSalIntegrationEnrichmentProjectSettings(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(202);
    expect(res.result).toBeDefined();
  });

  test('getSalIntegrationGlossaryTerms()', async () => {
    const params = {
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getSalIntegrationGlossaryTerms(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createSalIntegrationUploadGlossary()', async () => {
    const params = {
      replaceOption: 'all',
      glossaryCsv: Buffer.from('This is a mock file.'),
      glossaryCsvContentType: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createSalIntegrationUploadGlossary(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getSalIntegrationUploadGlossaryStatus()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.getSalIntegrationUploadGlossaryStatus(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listSalIntegrationEnrichmentMappings()', async () => {
    const params = {
      catalogName: 'testString',
      schemaName: 'testString',
      next: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listSalIntegrationEnrichmentMappings(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listSemanticSearchQueries()', async () => {
    const params = {
      engineId: 'testString',
      schemaSearchEnabled: true,
      columnSearchEnabled: true,
      maxResultNumber: 5,
      runSearch: true,
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.listSemanticSearchQueries(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createSemanticSearchQueries()', async () => {
    // Request models needed by this operation.

    // SemanticSearchBodySearchConfig
    const semanticSearchBodySearchConfigModel = {
      column_search_enabled: true,
      fields: ['metadata.name', 'metadata.description', 'metadata.tags'],
      max_result_number: 1,
      schema_search_enabled: true,
    };

    const params = {
      engineId: 'presto01',
      queryInput: 'catalog_table',
      searchConfig: semanticSearchBodySearchConfigModel,
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createSemanticSearchQueries(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('listIngestionJobs()', async () => {
    const params = {
      authInstanceId: 'testString',
      start: 'testString',
      limit: 10,
    };

    const res = await watsonxDataService.listIngestionJobs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listIngestionJobs() via IngestionJobsPager', async () => {
    const params = {
      authInstanceId: 'testString',
      limit: 10,
    };

    const allResults = [];

    // Test getNext().
    let pager = new WatsonxDataV3.IngestionJobsPager(watsonxDataService, params);
    while (pager.hasNext()) {
      const nextPage = await pager.getNext();
      expect(nextPage).not.toBeNull();
      allResults.push(...nextPage);
    }

    // Test getAll().
    pager = new WatsonxDataV3.IngestionJobsPager(watsonxDataService, params);
    const allItems = await pager.getAll();
    expect(allItems).not.toBeNull();
    expect(allItems).toHaveLength(allResults.length);
    console.log(`Retrieved a total of ${allResults.length} items(s) with pagination.`);
  });

  test('createIngestionJob()', async () => {
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

    const params = {
      authInstanceId: 'testString',
      id: 'testString',
      source: sourceDetailsModel,
      target: targetDetailsModel,
      engine: ingestionEngineModel,
      engineId: 'spark123',
      executeConfig: executeConfigModel,
      sourceIcebergTable: icebergSourceTableModel,
      partitionBy: 'column1,column2',
      capacity: capacityDetailsModel,
    };

    const res = await watsonxDataService.createIngestionJob(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getIngestionJob()', async () => {
    const params = {
      authInstanceId: 'testString',
      id: 'testString',
    };

    const res = await watsonxDataService.getIngestionJob(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listResourceAccessPolicies()', async () => {
    const params = {
      authInstanceId: 'testString',
      resourceType: 'catalog',
      resourceId: ['testString'],
      resourceName: ['testString'],
    };

    const res = await watsonxDataService.listResourceAccessPolicies(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('bulkUpdateResourceAccessPolicies()', async () => {
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

    const params = {
      accessPolicies: [accessPolicyBulkUpdateModel],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.bulkUpdateResourceAccessPolicies(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('revokeResourceAccessPolicies()', async () => {
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

    const params = {
      resources: [resourceDetailsModel],
      subjects: [subjectRevokeModel],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.revokeResourceAccessPolicies(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('filterResourceAccessPoliciesOnUsersAndUsergroups()', async () => {
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

    const params = {
      accessPoliciesSearch: [accessPoliciesSearchModel],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.filterResourceAccessPoliciesOnUsersAndUsergroups(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listDataPolicies()', async () => {
    const params = {
      authInstanceId: 'testString',
      catalogName: 'testString',
      resourceId: 'testString',
      status: 'testString',
      includeMetadata: true,
      includeRules: true,
      bucketName: 'testString',
      serviceName: 'testString',
      dataArtifact: 'testString',
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

    const params = {
      dataArtifact: 'schema1/table1/(column1|column2)',
      rules: [ruleV2Model],
      catalogName: 'catalog1',
      catalogType: 'catalog1',
      description: 'policy description',
      policyName: 'policy1',
      resourceId: 'catalog1',
      status: 'active',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.createDataPolicy(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getDataPolicy()', async () => {
    const params = {
      name: 'testString',
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

    const params = {
      name: 'testString',
      dataArtifact: 'schema1/table1/(column1|column2)',
      rules: [ruleV2Model],
      catalogName: 'catalog1',
      catalogType: 'catalog1',
      description: 'policy description',
      policyName: 'policy1',
      resourceId: 'catalog1',
      status: 'active',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.replaceDataPolicy(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('updateDataPolicy()', async () => {
    // Request models needed by this operation.

    // JsonPatchOperation
    const jsonPatchOperationModel = {
      op: 'add',
      path: 'testString',
      from: 'testString',
      value: 'testString',
    };

    const params = {
      name: 'testString',
      body: [jsonPatchOperationModel],
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.updateDataPolicy(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('deleteStorageRegistration()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
      skipMdsCall: false,
    };

    const res = await watsonxDataService.deleteStorageRegistration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteDatabaseCatalog()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteDatabaseCatalog(params);
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

  test('deleteEngine()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deletePrestissimoEngine()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deletePrestissimoEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deletePrestissimoEngineCatalogs()', async () => {
    const params = {
      id: 'testString',
      catalogNames: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deletePrestissimoEngineCatalogs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteDb2Engine()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteDb2Engine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteOtherEngine()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteOtherEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteNetezzaEngine()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteNetezzaEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteSparkEngine()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteSparkEngine(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteSparkEngineCatalogs()', async () => {
    const params = {
      id: 'testString',
      catalogNames: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteSparkEngineCatalogs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteSparkEngineApplication()', async () => {
    const params = {
      engineId: 'testString',
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteSparkEngineApplication(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteSparkEngineHistoryServer()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteSparkEngineHistoryServer(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteIntegration()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteIntegration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteSchema()', async () => {
    const params = {
      engineId: 'testString',
      catalogName: 'testString',
      schemaName: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteSchema(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteTable()', async () => {
    const params = {
      catalogName: 'testString',
      schemaName: 'testString',
      tableName: 'testString',
      engineId: 'testString',
      type: 'testString',
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
      catalogName: 'testString',
      schemaName: 'testString',
      tableName: 'testString',
      columnName: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteColumn(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteCatalog()', async () => {
    const params = {
      name: 'testString',
      authInstanceId: 'testString',
      skipMdsCall: false,
    };

    const res = await watsonxDataService.deleteCatalog(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteMilvusService()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteMilvusService(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteSalIntegration()', async () => {
    const res = await watsonxDataService.deleteSalIntegration();
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteSemanticSearchQueries()', async () => {
    const params = {
      batchSize: 1,
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteSemanticSearchQueries(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteSemanticSearchQueriesById()', async () => {
    const params = {
      id: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteSemanticSearchQueriesById(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteSalMetadata()', async () => {
    const res = await watsonxDataService.deleteSalMetadata();
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteDataPolicies()', async () => {
    const params = {
      authInstanceId: 'testString',
      policies: 'testString',
    };

    const res = await watsonxDataService.deleteDataPolicies(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteDataPolicy()', async () => {
    const params = {
      name: 'testString',
      authInstanceId: 'testString',
    };

    const res = await watsonxDataService.deleteDataPolicy(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });
});
