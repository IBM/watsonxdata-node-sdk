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

/**
 * IBM OpenAPI SDK Code Generator Version: 3.104.0-b4a47c49-20250418-184351
 */

/* eslint-disable max-classes-per-file */
/* eslint-disable no-await-in-loop */

import * as extend from 'extend';
import { IncomingHttpHeaders, OutgoingHttpHeaders } from 'http';
import {
  AbortSignal,
  Authenticator,
  BaseService,
  UserOptions,
  getAuthenticatorFromEnvironment,
  getQueryParam,
  validateParams,
} from 'ibm-cloud-sdk-core';
import { getSdkHeaders } from '../lib/common';

/**
 * This is the Public API for IBM watsonx.data
 *
 * API Version: 3.0.0
 */

class WatsonxDataV3 extends BaseService {
  static DEFAULT_SERVICE_URL: string = 'https://region.lakehouse.cloud.ibm.com/lakehouse/api';

  static DEFAULT_SERVICE_NAME: string = 'watsonx_data';

  /*************************
   * Factory method
   ************************/

  /**
   * Constructs an instance of WatsonxDataV3 with passed in options and external configuration.
   *
   * @param {UserOptions} [options] - The parameters to send to the service.
   * @param {string} [options.serviceName] - The name of the service to configure
   * @param {Authenticator} [options.authenticator] - The Authenticator object used to authenticate requests to the service
   * @param {string} [options.serviceUrl] - The base URL for the service
   * @returns {WatsonxDataV3}
   */

  public static newInstance(options: UserOptions): WatsonxDataV3 {
    options = options || {};

    if (!options.serviceName) {
      options.serviceName = this.DEFAULT_SERVICE_NAME;
    }
    if (!options.authenticator) {
      options.authenticator = getAuthenticatorFromEnvironment(options.serviceName);
    }
    const service = new WatsonxDataV3(options);
    service.configureService(options.serviceName);
    if (options.serviceUrl) {
      service.setServiceUrl(options.serviceUrl);
    }
    return service;
  }

  /**
   * Construct a WatsonxDataV3 object.
   *
   * @param {Object} options - Options for the service.
   * @param {string} [options.serviceUrl] - The base URL for the service
   * @param {OutgoingHttpHeaders} [options.headers] - Default headers that shall be included with every request to the service.
   * @param {Authenticator} options.authenticator - The Authenticator object used to authenticate requests to the service
   * @constructor
   * @returns {WatsonxDataV3}
   */
  constructor(options: UserOptions) {
    options = options || {};

    super(options);
    if (options.serviceUrl) {
      this.setServiceUrl(options.serviceUrl);
    } else {
      this.setServiceUrl(WatsonxDataV3.DEFAULT_SERVICE_URL);
    }
  }

  /*************************
   * storages
   ************************/

  /**
   * Add/Create HDFS storage.
   *
   * Add or create a new HDFS database.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.displayName - Storage display name.
   * @param {string} params.type - Storage type.
   * @param {string} params.hmsThriftUri - HMS Thrift URI.
   * @param {number} params.hmsThriftPort - HMS Thrift Port.
   * @param {string} params.coreSite - contents of core-site.xml file.
   * @param {string} params.hdfsSite - contents of hdfs-site.xml file.
   * @param {string} params.kerberos - Kerberos Flag.
   * @param {string} params.catalogName - Catalog name.
   * @param {string} params.catalogType - Catalog type.
   * @param {string} [params.krb5Config] - Kerberos configuration file.
   * @param {NodeJS.ReadableStream | Buffer} [params.hiveKeytab] - Hive keytab file.
   * @param {string} [params.hiveKeytabContentType] - The content type of hiveKeytab.
   * @param {NodeJS.ReadableStream | Buffer} [params.hdfsKeytab] - HDFS keytab file.
   * @param {string} [params.hdfsKeytabContentType] - The content type of hdfsKeytab.
   * @param {string} [params.hiveServerPrincipal] - Hive server principal.
   * @param {string} [params.hiveClientPrincipal] - Hive client principal.
   * @param {string} [params.hdfsPrincipal] - HDFS principal.
   * @param {string} [params.description] - Database description.
   * @param {string} [params.createdAt] - Created on.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.HdfsStorageRegistration>>}
   */
  public createHdfsStorage(
    params: WatsonxDataV3.CreateHdfsStorageParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.HdfsStorageRegistration>> {
    const _params = { ...params };
    const _requiredParams = ['displayName', 'type', 'hmsThriftUri', 'hmsThriftPort', 'coreSite', 'hdfsSite', 'kerberos', 'catalogName', 'catalogType'];
    const _validParams = ['displayName', 'type', 'hmsThriftUri', 'hmsThriftPort', 'coreSite', 'hdfsSite', 'kerberos', 'catalogName', 'catalogType', 'krb5Config', 'hiveKeytab', 'hiveKeytabContentType', 'hdfsKeytab', 'hdfsKeytabContentType', 'hiveServerPrincipal', 'hiveClientPrincipal', 'hdfsPrincipal', 'description', 'createdAt', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const formData = {
      'display_name': _params.displayName,
      'type': _params.type,
      'hms_thrift_uri': _params.hmsThriftUri,
      'hms_thrift_port': _params.hmsThriftPort,
      'core_site': _params.coreSite,
      'hdfs_site': _params.hdfsSite,
      'kerberos': _params.kerberos,
      'catalog_name': _params.catalogName,
      'catalog_type': _params.catalogType,
      'krb5_config': _params.krb5Config,
      'hive_keytab': {
        data: _params.hiveKeytab,
        contentType: _params.hiveKeytabContentType,
      },
      'hdfs_keytab': {
        data: _params.hdfsKeytab,
        contentType: _params.hdfsKeytabContentType,
      },
      'hive_server_principal': _params.hiveServerPrincipal,
      'hive_client_principal': _params.hiveClientPrincipal,
      'hdfs_principal': _params.hdfsPrincipal,
      'description': _params.description,
      'created_at': _params.createdAt,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createHdfsStorage');

    const parameters = {
      options: {
        url: '/v3/storage_hdfs_registrations',
        method: 'POST',
        formData,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get list of storage registrations.
   *
   * Get list of storage registrations.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.StorageRegistrationCollection>>}
   */
  public listStorageRegistrations(
    params?: WatsonxDataV3.ListStorageRegistrationsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.StorageRegistrationCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listStorageRegistrations');

    const parameters = {
      options: {
        url: '/v3/storage_registrations',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Register storage.
   *
   * Register a new storage.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.description - storage description.
   * @param {string} params.displayName - Storage display name.
   * @param {string} params.managedBy - managed by.
   * @param {string} params.type - storage type.
   * @param {StorageCatalogPrototype} [params.associatedCatalog] - storage catalog.
   * @param {StorageDetails} [params.connection] - storage details.
   * @param {string} [params.region] - Region where the storage is located.
   * @param {string} [params.storageUse] - parameter to show whether the bucket is of acl or qhmm use. Allowed values
   * are qhmm or acl.
   * @param {string[]} [params.tags] - tags.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.StorageRegistration>>}
   */
  public createStorageRegistration(
    params: WatsonxDataV3.CreateStorageRegistrationParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.StorageRegistration>> {
    const _params = { ...params };
    const _requiredParams = ['description', 'displayName', 'managedBy', 'type'];
    const _validParams = ['description', 'displayName', 'managedBy', 'type', 'associatedCatalog', 'connection', 'region', 'storageUse', 'tags', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'description': _params.description,
      'display_name': _params.displayName,
      'managed_by': _params.managedBy,
      'type': _params.type,
      'associated_catalog': _params.associatedCatalog,
      'connection': _params.connection,
      'region': _params.region,
      'storage_use': _params.storageUse,
      'tags': _params.tags,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createStorageRegistration');

    const parameters = {
      options: {
        url: '/v3/storage_registrations',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get storage.
   *
   * Get a registered storage.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - storage id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {boolean} [params.skipMdsCall] - Skip MDS call when Unity catalog is added.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.StorageRegistration>>}
   */
  public getStorageRegistration(
    params: WatsonxDataV3.GetStorageRegistrationParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.StorageRegistration>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'skipMdsCall', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'skip_mds_call': _params.skipMdsCall,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getStorageRegistration');

    const parameters = {
      options: {
        url: '/v3/storage_registrations/{id}',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Unregister Storage.
   *
   * Unregister a storage.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - storage id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {boolean} [params.skipMdsCall] - Skip MDS call when Unity catalog is added.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deleteStorageRegistration(
    params: WatsonxDataV3.DeleteStorageRegistrationParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'skipMdsCall', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'skip_mds_call': _params.skipMdsCall,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deleteStorageRegistration');

    const parameters = {
      options: {
        url: '/v3/storage_registrations/{id}',
        method: 'DELETE',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update storage.
   *
   * Update storage details & credentials.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - storage id.
   * @param {StorageDetails} [params.connection] - storage details.
   * @param {string} [params.description] - Modified description.
   * @param {string} [params.displayName] - Storage display name.
   * @param {boolean} [params.systemStorageUpdateCredentials] - Boolean value to specify whether the patch is for
   * updating HMAC credentials for internal system storage.
   * @param {string[]} [params.tags] - Tags.
   * @param {boolean} [params.skipMdsCall] - Skip MDS call when Unity catalog is added.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.StorageRegistration>>}
   */
  public updateStorageRegistration(
    params: WatsonxDataV3.UpdateStorageRegistrationParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.StorageRegistration>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'connection', 'description', 'displayName', 'systemStorageUpdateCredentials', 'tags', 'skipMdsCall', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'connection': _params.connection,
      'description': _params.description,
      'display_name': _params.displayName,
      'system_storage_update_credentials': _params.systemStorageUpdateCredentials,
      'tags': _params.tags,
    };

    const query = {
      'skip_mds_call': _params.skipMdsCall,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'updateStorageRegistration');

    const parameters = {
      options: {
        url: '/v3/storage_registrations/{id}',
        method: 'PATCH',
        body,
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/merge-patch+json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Add storage catalog.
   *
   * Add storage catalog.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.storageId - storage id.
   * @param {string[]} params.catalogTags - catalog tags.
   * @param {string} [params.basePath] - catalog base path.
   * @param {string} [params.catalogName] - catalog name.
   * @param {string} [params.catalogType] - catalog type.
   * @param {boolean} [params.skipMdsCall] - Skip MDS call when Unity catalog is added.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponse>>}
   */
  public addStorageCatalog(
    params: WatsonxDataV3.AddStorageCatalogParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['storageId', 'catalogTags'];
    const _validParams = ['storageId', 'catalogTags', 'basePath', 'catalogName', 'catalogType', 'skipMdsCall', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'catalog_tags': _params.catalogTags,
      'base_path': _params.basePath,
      'catalog_name': _params.catalogName,
      'catalog_type': _params.catalogType,
    };

    const query = {
      'skip_mds_call': _params.skipMdsCall,
    };

    const path = {
      'storage_id': _params.storageId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'addStorageCatalog');

    const parameters = {
      options: {
        url: '/v3/storage_registrations/{storage_id}/catalogs',
        method: 'POST',
        body,
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get storage object properties.
   *
   * Get storage object properties.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.storageId - storage id.
   * @param {Path[]} [params.paths] - storage object size.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.StorageObjectProperties>>}
   */
  public getStorageObjectProperties(
    params: WatsonxDataV3.GetStorageObjectPropertiesParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.StorageObjectProperties>> {
    const _params = { ...params };
    const _requiredParams = ['storageId'];
    const _validParams = ['storageId', 'paths', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'paths': _params.paths,
    };

    const path = {
      'storage_id': _params.storageId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getStorageObjectProperties');

    const parameters = {
      options: {
        url: '/v3/storage_registrations/{storage_id}/object_properties',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List storage objects.
   *
   * Fetch all objects from a given storage.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.storageId - storage id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {string} [params.path] - path.
   * @param {boolean} [params.paginated] - data to be paginated or not.
   * @param {number} [params.pageSize] - The number of items per page (default is 1000 , max 1000).
   * @param {string} [params.prefix] - prefix to filter the objects by.
   * @param {string} [params.startAfter] - StartAfter is where you want Amazon S3 to start listing from.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.StorageRegistrationObjectCollection>>}
   */
  public listStorageRegistrationsObjects(
    params: WatsonxDataV3.ListStorageRegistrationsObjectsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.StorageRegistrationObjectCollection>> {
    const _params = { ...params };
    const _requiredParams = ['storageId'];
    const _validParams = ['storageId', 'authInstanceId', 'path', 'paginated', 'pageSize', 'prefix', 'startAfter', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'path': _params.path,
      'paginated': _params.paginated,
      'page_size': _params.pageSize,
      'prefix': _params.prefix,
      'start_after': _params.startAfter,
    };

    const path = {
      'storage_id': _params.storageId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listStorageRegistrationsObjects');

    const parameters = {
      options: {
        url: '/v3/storage_registrations/{storage_id}/objects',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * databases
   ************************/

  /**
   * Get list of databases.
   *
   * Get list of databases.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.DatabaseRegistrationCollection>>}
   */
  public listDatabaseRegistrations(
    params?: WatsonxDataV3.ListDatabaseRegistrationsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.DatabaseRegistrationCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listDatabaseRegistrations');

    const parameters = {
      options: {
        url: '/v3/database_registrations',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Add/Create database.
   *
   * Add or create a new database.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.displayName - Database display name.
   * @param {string} params.type - Connector type.
   * @param {DatabaseCatalogPrototype} [params.associatedCatalog] - database catalog.
   * @param {DatabaseDetailsPrototype} [params.connection] - database details.
   * @param {string} [params.createdAt] - Created on.
   * @param {string} [params.description] - Database description.
   * @param {DatabaseRegistrationPrototypeDatabasePropertiesItems[]} [params.properties] - This will hold all the
   * properties for a custom database.
   * @param {string} [params.sourceAssetId] - Source connection assset Id from platform.
   * @param {string} [params.sourceCatalogId] - Source catalog Id from platform.
   * @param {string} [params.sourceProjectId] - Source project Id from platform.
   * @param {string[]} [params.tags] - tags.
   * @param {string} [params.targetCatalogId] - Target catalog id in the platform to save the database connection.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.DatabaseRegistration>>}
   */
  public createDatabaseRegistration(
    params: WatsonxDataV3.CreateDatabaseRegistrationParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.DatabaseRegistration>> {
    const _params = { ...params };
    const _requiredParams = ['displayName', 'type'];
    const _validParams = ['displayName', 'type', 'associatedCatalog', 'connection', 'createdAt', 'description', 'properties', 'sourceAssetId', 'sourceCatalogId', 'sourceProjectId', 'tags', 'targetCatalogId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'display_name': _params.displayName,
      'type': _params.type,
      'associated_catalog': _params.associatedCatalog,
      'connection': _params.connection,
      'created_at': _params.createdAt,
      'description': _params.description,
      'properties': _params.properties,
      'source_asset_id': _params.sourceAssetId,
      'source_catalog_id': _params.sourceCatalogId,
      'source_project_id': _params.sourceProjectId,
      'tags': _params.tags,
      'target_catalog_id': _params.targetCatalogId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createDatabaseRegistration');

    const parameters = {
      options: {
        url: '/v3/database_registrations',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Post database catalog.
   *
   * Add catalog to a registered database.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.databaseId - database id.
   * @param {string} [params.catalogName] - catalog name.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponse>>}
   */
  public addDatabaseCatalog(
    params: WatsonxDataV3.AddDatabaseCatalogParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['databaseId'];
    const _validParams = ['databaseId', 'catalogName', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'catalog_name': _params.catalogName,
    };

    const path = {
      'database_id': _params.databaseId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'addDatabaseCatalog');

    const parameters = {
      options: {
        url: '/v3/database_registrations/{database_id}/catalogs',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get database.
   *
   * Get a registered databases.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - database id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.DatabaseRegistration>>}
   */
  public getDatabase(
    params: WatsonxDataV3.GetDatabaseParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.DatabaseRegistration>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getDatabase');

    const parameters = {
      options: {
        url: '/v3/database_registrations/{id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete database.
   *
   * Delete a database.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - database id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deleteDatabaseCatalog(
    params: WatsonxDataV3.DeleteDatabaseCatalogParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deleteDatabaseCatalog');

    const parameters = {
      options: {
        url: '/v3/database_registrations/{id}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update database.
   *
   * Update database details.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - database id.
   * @param {DatabaseRegistrationPatchDatabaseDetails} [params.connection] - Database details update. Only credentials
   * can be updated.
   * @param {string} [params.description] - New database description.
   * @param {string} [params.displayName] - New database display name.
   * @param {DatabaseRegistrationPatchTablesItems[]} [params.tables] - List of tables.
   * @param {string[]} [params.tags] - New tags.
   * @param {DatabaseRegistrationPatchTopicsItems[]} [params.topics] - List of topics.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.DatabaseRegistration>>}
   */
  public updateDatabase(
    params: WatsonxDataV3.UpdateDatabaseParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.DatabaseRegistration>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'connection', 'description', 'displayName', 'tables', 'tags', 'topics', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'connection': _params.connection,
      'description': _params.description,
      'display_name': _params.displayName,
      'tables': _params.tables,
      'tags': _params.tags,
      'topics': _params.topics,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'updateDatabase');

    const parameters = {
      options: {
        url: '/v3/database_registrations/{id}',
        method: 'PATCH',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/merge-patch+json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * prestoEngines
   ************************/

  /**
   * Get list of Presto(Java) engines.
   *
   * Get list of all Presto(Java) engines.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestoEngineCollection>>}
   */
  public listPrestoEngines(
    params?: WatsonxDataV3.ListPrestoEnginesParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestoEngineCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listPrestoEngines');

    const parameters = {
      options: {
        url: '/v3/presto_engines',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create presto engine.
   *
   * Create a new presto engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {EngineDetails} params.configuration - Engine configuration details.
   * @param {string} params.displayName - Engine display name.
   * @param {string} params.origin - Origin of presto engine .
   * @param {string[]} [params.associatedCatalogs] - Catalogs associated to the presto engine.
   * @param {string} [params.description] - Engine description.
   * @param {string} [params.id] - Engine id.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestoEngine>>}
   */
  public createPrestoEngine(
    params: WatsonxDataV3.CreatePrestoEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestoEngine>> {
    const _params = { ...params };
    const _requiredParams = ['configuration', 'displayName', 'origin'];
    const _validParams = ['configuration', 'displayName', 'origin', 'associatedCatalogs', 'description', 'id', 'tags', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'configuration': _params.configuration,
      'display_name': _params.displayName,
      'origin': _params.origin,
      'associated_catalogs': _params.associatedCatalogs,
      'description': _params.description,
      'id': _params.id,
      'tags': _params.tags,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createPrestoEngine');

    const parameters = {
      options: {
        url: '/v3/presto_engines',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update Autoscaling Configuration.
   *
   * Update autoscaling configuration for an existing running Presto engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - Engine ID.
   * @param {AutoScalingConfig} [params.autoscalingConfig] - Autoscaling configuration for engine.
   * @param {string} [params.authInstanceId] - Watsonx.data instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.PatchAutoscalingSuccess>>}
   */
  public updatePrestoEngineAutoscaling(
    params: WatsonxDataV3.UpdatePrestoEngineAutoscalingParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.PatchAutoscalingSuccess>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'autoscalingConfig', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'autoscaling_config': _params.autoscalingConfig,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'updatePrestoEngineAutoscaling');

    const parameters = {
      options: {
        url: '/v3/presto_engines/{engine_id}/autoscaling',
        method: 'PATCH',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/merge-patch+json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get presto engine catalogs.
   *
   * Get list of all catalogs attached to a presto engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.CatalogCollection>>}
   */
  public listPrestoEngineCatalogs(
    params: WatsonxDataV3.ListPrestoEngineCatalogsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.CatalogCollection>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listPrestoEngineCatalogs');

    const parameters = {
      options: {
        url: '/v3/presto_engines/{engine_id}/catalogs',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Associate catalogs to presto engine.
   *
   * Associate one or more catalogs to a presto engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string[]} params.catalogNames - Catalog names.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.Catalog>>}
   */
  public createPrestoEngineCatalogs(
    params: WatsonxDataV3.CreatePrestoEngineCatalogsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.Catalog>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogNames'];
    const _validParams = ['engineId', 'catalogNames', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'catalog_names': _params.catalogNames,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createPrestoEngineCatalogs');

    const parameters = {
      options: {
        url: '/v3/presto_engines/{engine_id}/catalogs',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Disassociate catalogs from a presto engine.
   *
   * Disassociate one or more catalogs from a presto engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} params.catalogNames - Catalog id(s) to be stopped, comma separated.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deletePrestoEngineCatalogs(
    params: WatsonxDataV3.DeletePrestoEngineCatalogsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogNames'];
    const _validParams = ['engineId', 'catalogNames', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'catalog_names': _params.catalogNames,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deletePrestoEngineCatalogs');

    const parameters = {
      options: {
        url: '/v3/presto_engines/{engine_id}/catalogs',
        method: 'DELETE',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get presto engine catalog.
   *
   * Get catalog attached to presto engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} params.id - catalog id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.Catalog>>}
   */
  public getPrestoEngineCatalog(
    params: WatsonxDataV3.GetPrestoEngineCatalogParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.Catalog>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'id'];
    const _validParams = ['engineId', 'id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'engine_id': _params.engineId,
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getPrestoEngineCatalog');

    const parameters = {
      options: {
        url: '/v3/presto_engines/{engine_id}/catalogs/{id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get Presto Engine Configuration.
   *
   * Retrieve Presto engine configuration properties. Supports filtering by sections: catalog, configuration,
   * event_listener, global, jmx_exporter_config, jvm, log_config.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - Engine ID.
   * @param {string} params.authInstanceId - Authentication Instance ID (CRN).
   * @param {string} [params.sections] - Comma-separated list of sections to retrieve
   * (catalog,configuration,event_listener,global,jmx_exporter_config,jvm,log_config).
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestoEnginePropertiesDetails>>}
   */
  public getPrestoEngineConfig(
    params: WatsonxDataV3.GetPrestoEngineConfigParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestoEnginePropertiesDetails>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'authInstanceId'];
    const _validParams = ['engineId', 'authInstanceId', 'sections', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'sections': _params.sections,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getPrestoEngineConfig');

    const parameters = {
      options: {
        url: '/v3/presto_engines/{engine_id}/config',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update Presto Engine Configuration.
   *
   * Update Presto engine configuration properties including catalog, configuration, event_listener, global,
   * jmx_exporter_config, jvm, and log_config settings.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - Engine ID.
   * @param {string} params.authInstanceId - Authentication Instance ID (CRN).
   * @param {PrestoEngineProperties} [params.engineProperties] - Presto engine configuration properties.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public updatePrestoEngineConfig(
    params: WatsonxDataV3.UpdatePrestoEngineConfigParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'authInstanceId'];
    const _validParams = ['engineId', 'authInstanceId', 'engineProperties', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'engine_properties': _params.engineProperties,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'updatePrestoEngineConfig');

    const parameters = {
      options: {
        url: '/v3/presto_engines/{engine_id}/config',
        method: 'PATCH',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Content-Type': 'application/merge-patch+json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get presto engine.
   *
   * Get details of one presto engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestoEngine>>}
   */
  public getPrestoEngine(
    params: WatsonxDataV3.GetPrestoEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestoEngine>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getPrestoEngine');

    const parameters = {
      options: {
        url: '/v3/presto_engines/{id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete presto engine.
   *
   * Delete a presto engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deleteEngine(
    params: WatsonxDataV3.DeleteEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deleteEngine');

    const parameters = {
      options: {
        url: '/v3/presto_engines/{id}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update presto engine.
   *
   * Update details of presto engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.description] - Modified description.
   * @param {string} [params.displayName] - Engine display name.
   * @param {EngineProperties} [params.properties] - Engine properties.
   * @param {RemoveEngineProperties} [params.removeEngineProperties] - The engine properties to be removed which was
   * added through api customisation.
   * @param {string} [params.restartType] - The type of engine restart . The value can be set to forcefully restart an
   * engine.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestoEngine>>}
   */
  public updatePrestoEngine(
    params: WatsonxDataV3.UpdatePrestoEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestoEngine>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'description', 'displayName', 'properties', 'removeEngineProperties', 'restartType', 'tags', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'description': _params.description,
      'display_name': _params.displayName,
      'properties': _params.properties,
      'remove_engine_properties': _params.removeEngineProperties,
      'restart_type': _params.restartType,
      'tags': _params.tags,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'updatePrestoEngine');

    const parameters = {
      options: {
        url: '/v3/presto_engines/{id}',
        method: 'PATCH',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/merge-patch+json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Pause presto engine.
   *
   * Pause a running presto engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestoEngineSuccessResponse>>}
   */
  public pausePrestoEngine(
    params: WatsonxDataV3.PausePrestoEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestoEngineSuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'pausePrestoEngine');

    const parameters = {
      options: {
        url: '/v3/presto_engines/{id}/pause',
        method: 'POST',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Explain presto query.
   *
   * Explain a query statement.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Engine id.
   * @param {string} params.statement - Presto query to determine explain plan.
   * @param {string} [params.catalog] - Catalog name.
   * @param {string} [params.format] - Format.
   * @param {string} [params.schema] - Schema name.
   * @param {string} [params.type] - Type.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestoQueryExplain>>}
   */
  public runExplainStatement(
    params: WatsonxDataV3.RunExplainStatementParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestoQueryExplain>> {
    const _params = { ...params };
    const _requiredParams = ['id', 'statement'];
    const _validParams = ['id', 'statement', 'catalog', 'format', 'schema', 'type', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'statement': _params.statement,
      'catalog': _params.catalog,
      'format': _params.format,
      'schema': _params.schema,
      'type': _params.type,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'runExplainStatement');

    const parameters = {
      options: {
        url: '/v3/presto_engines/{id}/query_explain',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Explain presto analyze.
   *
   * Return query metrics after query is complete.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Engine id.
   * @param {string} params.statement - Presto query to show explain analyze.
   * @param {boolean} [params.verbose] - Verbose.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestoQueryExplain>>}
   */
  public runExplainAnalyzeStatement(
    params: WatsonxDataV3.RunExplainAnalyzeStatementParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestoQueryExplain>> {
    const _params = { ...params };
    const _requiredParams = ['id', 'statement'];
    const _validParams = ['id', 'statement', 'verbose', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'statement': _params.statement,
      'verbose': _params.verbose,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'runExplainAnalyzeStatement');

    const parameters = {
      options: {
        url: '/v3/presto_engines/{id}/query_explain_analyze',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Restart a presto engine.
   *
   * Restart an existing presto engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestoEngineSuccessResponse>>}
   */
  public restartPrestoEngine(
    params: WatsonxDataV3.RestartPrestoEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestoEngineSuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'restartPrestoEngine');

    const parameters = {
      options: {
        url: '/v3/presto_engines/{id}/restart',
        method: 'POST',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Resume Presto(Java) engine.
   *
   * Resume a paused presto engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestoEngineSuccessResponse>>}
   */
  public resumePrestoEngine(
    params: WatsonxDataV3.ResumePrestoEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestoEngineSuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'resumePrestoEngine');

    const parameters = {
      options: {
        url: '/v3/presto_engines/{id}/resume',
        method: 'POST',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Scale a presto engine.
   *
   * Scale an existing presto engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {NodeDescription} [params.coordinator] - Presto engine configurations.
   * @param {NodeDescription} [params.worker] - Presto engine configurations.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestoEngineSuccessResponse>>}
   */
  public scalePrestoEngine(
    params: WatsonxDataV3.ScalePrestoEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestoEngineSuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'coordinator', 'worker', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'coordinator': _params.coordinator,
      'worker': _params.worker,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'scalePrestoEngine');

    const parameters = {
      options: {
        url: '/v3/presto_engines/{id}/scale',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * prestissimoEngines
   ************************/

  /**
   * Get list of prestissimo engines.
   *
   * Get list of prestissimo engines.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestissimoEngineCollection>>}
   */
  public listPrestissimoEngines(
    params?: WatsonxDataV3.ListPrestissimoEnginesParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestissimoEngineCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listPrestissimoEngines');

    const parameters = {
      options: {
        url: '/v3/prestissimo_engines',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create prestissimo engine.
   *
   * Create a new prestissimo engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {PrestissimoEngineDetails} params.configuration - External engine details.
   * @param {string} params.displayName - Engine display name.
   * @param {string} params.origin - Origin - created or registered.
   * @param {string[]} [params.associatedCatalogs] - Associated catalogs.
   * @param {string} [params.description] - Engine description.
   * @param {string} [params.id] - Engine id.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestissimoEngine>>}
   */
  public createPrestissimoEngine(
    params: WatsonxDataV3.CreatePrestissimoEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestissimoEngine>> {
    const _params = { ...params };
    const _requiredParams = ['configuration', 'displayName', 'origin'];
    const _validParams = ['configuration', 'displayName', 'origin', 'associatedCatalogs', 'description', 'id', 'tags', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'configuration': _params.configuration,
      'display_name': _params.displayName,
      'origin': _params.origin,
      'associated_catalogs': _params.associatedCatalogs,
      'description': _params.description,
      'id': _params.id,
      'tags': _params.tags,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createPrestissimoEngine');

    const parameters = {
      options: {
        url: '/v3/prestissimo_engines',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get prestissimo engine catalog.
   *
   * Get catalog attached to a prestissimo engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} params.id - catalog id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.Catalog>>}
   */
  public getPrestissimoEngineCatalog(
    params: WatsonxDataV3.GetPrestissimoEngineCatalogParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.Catalog>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'id'];
    const _validParams = ['engineId', 'id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'engine_id': _params.engineId,
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getPrestissimoEngineCatalog');

    const parameters = {
      options: {
        url: '/v3/prestissimo_engines/{engine_id}/catalogs/{id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get prestissimo engine.
   *
   * Prestissimo engine details.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestissimoEngine>>}
   */
  public getPrestissimoEngine(
    params: WatsonxDataV3.GetPrestissimoEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestissimoEngine>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getPrestissimoEngine');

    const parameters = {
      options: {
        url: '/v3/prestissimo_engines/{id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete prestissimo engine.
   *
   * Delete a prestissimo engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deletePrestissimoEngine(
    params: WatsonxDataV3.DeletePrestissimoEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deletePrestissimoEngine');

    const parameters = {
      options: {
        url: '/v3/prestissimo_engines/{id}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update prestissimo engine.
   *
   * Update details of prestissimo engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.description] - Modified description.
   * @param {string} [params.displayName] - Engine display name.
   * @param {PrestissimoEngineProperties} [params.properties] - Engine properties.
   * @param {RemovePrestissimoEngineProperties} [params.removeEngineProperties] - RemoveEngine properties.
   * @param {string} [params.restartType] - engine will restart accordingily.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestissimoEngine>>}
   */
  public updatePrestissimoEngine(
    params: WatsonxDataV3.UpdatePrestissimoEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.PrestissimoEngine>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'description', 'displayName', 'properties', 'removeEngineProperties', 'restartType', 'tags', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'description': _params.description,
      'display_name': _params.displayName,
      'properties': _params.properties,
      'remove_engine_properties': _params.removeEngineProperties,
      'restart_type': _params.restartType,
      'tags': _params.tags,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'updatePrestissimoEngine');

    const parameters = {
      options: {
        url: '/v3/prestissimo_engines/{id}',
        method: 'PATCH',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/merge-patch+json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get prestissimo engine catalogs.
   *
   * Get list of all catalogs attached a prestissimo engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.CatalogCollection>>}
   */
  public listPrestissimoEngineCatalogs(
    params: WatsonxDataV3.ListPrestissimoEngineCatalogsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.CatalogCollection>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listPrestissimoEngineCatalogs');

    const parameters = {
      options: {
        url: '/v3/prestissimo_engines/{id}/catalogs',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Associate catalogs to a prestissimo engine.
   *
   * Associate one or more catalogs to a prestissimo engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string[]} params.catalogNames - Catalog names.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.CatalogCollection>>}
   */
  public createPrestissimoEngineCatalogs(
    params: WatsonxDataV3.CreatePrestissimoEngineCatalogsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.CatalogCollection>> {
    const _params = { ...params };
    const _requiredParams = ['id', 'catalogNames'];
    const _validParams = ['id', 'catalogNames', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'catalog_names': _params.catalogNames,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createPrestissimoEngineCatalogs');

    const parameters = {
      options: {
        url: '/v3/prestissimo_engines/{id}/catalogs',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Disassociate catalogs from a prestissimo engine.
   *
   * Disassociate one or more catalogs from a prestissimo engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} params.catalogNames - Catalog id(s) to be stopped, comma separated.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deletePrestissimoEngineCatalogs(
    params: WatsonxDataV3.DeletePrestissimoEngineCatalogsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['id', 'catalogNames'];
    const _validParams = ['id', 'catalogNames', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'catalog_names': _params.catalogNames,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deletePrestissimoEngineCatalogs');

    const parameters = {
      options: {
        url: '/v3/prestissimo_engines/{id}/catalogs',
        method: 'DELETE',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Pause prestissimo engine.
   *
   * Pause a running prestissimo engine ie, only available is SAAS.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponse>>}
   */
  public pausePrestissimoEngine(
    params: WatsonxDataV3.PausePrestissimoEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'pausePrestissimoEngine');

    const parameters = {
      options: {
        url: '/v3/prestissimo_engines/{id}/pause',
        method: 'POST',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Explain query.
   *
   * Explain a query statement.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Engine id.
   * @param {string} params.statement - Presto query to determine explain plan.
   * @param {string} [params.catalog] - Catalog name.
   * @param {string} [params.format] - Format.
   * @param {string} [params.schema] - Schema name.
   * @param {string} [params.type] - Type.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.ResultPrestissimoExplainStatement>>}
   */
  public runPrestissimoExplainStatement(
    params: WatsonxDataV3.RunPrestissimoExplainStatementParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.ResultPrestissimoExplainStatement>> {
    const _params = { ...params };
    const _requiredParams = ['id', 'statement'];
    const _validParams = ['id', 'statement', 'catalog', 'format', 'schema', 'type', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'statement': _params.statement,
      'catalog': _params.catalog,
      'format': _params.format,
      'schema': _params.schema,
      'type': _params.type,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'runPrestissimoExplainStatement');

    const parameters = {
      options: {
        url: '/v3/prestissimo_engines/{id}/query_explain',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Explain analyze.
   *
   * Return query metrics after query is complete.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Engine id.
   * @param {string} params.statement - Presto query to show explain analyze.
   * @param {boolean} [params.verbose] - Verbose.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.ResultRunPrestissimoExplainAnalyzeStatement>>}
   */
  public runPrestissimoExplainAnalyzeStatement(
    params: WatsonxDataV3.RunPrestissimoExplainAnalyzeStatementParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.ResultRunPrestissimoExplainAnalyzeStatement>> {
    const _params = { ...params };
    const _requiredParams = ['id', 'statement'];
    const _validParams = ['id', 'statement', 'verbose', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'statement': _params.statement,
      'verbose': _params.verbose,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'runPrestissimoExplainAnalyzeStatement');

    const parameters = {
      options: {
        url: '/v3/prestissimo_engines/{id}/query_explain_analyze',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Restart a prestissimo engine.
   *
   * Restart an existing prestissimo engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponse>>}
   */
  public restartPrestissimoEngine(
    params: WatsonxDataV3.RestartPrestissimoEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'restartPrestissimoEngine');

    const parameters = {
      options: {
        url: '/v3/prestissimo_engines/{id}/restart',
        method: 'POST',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Resume prestissimo engine.
   *
   * Resume a paused prestissimo engine ie, only available is SAAS.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponse>>}
   */
  public resumePrestissimoEngine(
    params: WatsonxDataV3.ResumePrestissimoEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'resumePrestissimoEngine');

    const parameters = {
      options: {
        url: '/v3/prestissimo_engines/{id}/resume',
        method: 'POST',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Scale a prestissimo engine.
   *
   * Scale an existing prestissimo engine ie, only available is SAAS.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {NodeDescription} [params.coordinator] - Presto engine configurations.
   * @param {NodeDescription} [params.worker] - Presto engine configurations.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponse>>}
   */
  public scalePrestissimoEngine(
    params: WatsonxDataV3.ScalePrestissimoEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'coordinator', 'worker', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'coordinator': _params.coordinator,
      'worker': _params.worker,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'scalePrestissimoEngine');

    const parameters = {
      options: {
        url: '/v3/prestissimo_engines/{id}/scale',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * db2Engines
   ************************/

  /**
   * Get list of db2 engines.
   *
   * Get list of all db2 engines.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.Db2EngineCollection>>}
   */
  public listDb2Engines(
    params?: WatsonxDataV3.ListDb2EnginesParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.Db2EngineCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listDb2Engines');

    const parameters = {
      options: {
        url: '/v3/db2_engines',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create db2 engine.
   *
   * Create a new db2 engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {Db2EngineDetailsBody} params.configuration - External engine details.
   * @param {string} params.displayName - Engine display name.
   * @param {string} params.origin - Origin of the engine.
   * @param {string} [params.description] - Engine description.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.Db2Engine>>}
   */
  public createDb2Engine(
    params: WatsonxDataV3.CreateDb2EngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.Db2Engine>> {
    const _params = { ...params };
    const _requiredParams = ['configuration', 'displayName', 'origin'];
    const _validParams = ['configuration', 'displayName', 'origin', 'description', 'tags', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'configuration': _params.configuration,
      'display_name': _params.displayName,
      'origin': _params.origin,
      'description': _params.description,
      'tags': _params.tags,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createDb2Engine');

    const parameters = {
      options: {
        url: '/v3/db2_engines',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete db2 engine.
   *
   * Delete a db2 engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deleteDb2Engine(
    params: WatsonxDataV3.DeleteDb2EngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deleteDb2Engine');

    const parameters = {
      options: {
        url: '/v3/db2_engines/{id}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update db2 engine.
   *
   * Update details of db2 engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.description] - Modified description.
   * @param {string} [params.displayName] - Engine display name.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.Db2Engine>>}
   */
  public updateDb2Engine(
    params: WatsonxDataV3.UpdateDb2EngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.Db2Engine>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'description', 'displayName', 'tags', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'description': _params.description,
      'display_name': _params.displayName,
      'tags': _params.tags,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'updateDb2Engine');

    const parameters = {
      options: {
        url: '/v3/db2_engines/{id}',
        method: 'PATCH',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/merge-patch+json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * otherEngines
   ************************/

  /**
   * Get list of other engines.
   *
   * Get list of other engines.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.OtherEngineCollection>>}
   */
  public listOtherEngines(
    params?: WatsonxDataV3.ListOtherEnginesParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.OtherEngineCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listOtherEngines');

    const parameters = {
      options: {
        url: '/v3/other_engines',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create other engine.
   *
   * Create a new engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {OtherEngineConfigurationBody} params.configuration - External engine details.
   * @param {string} params.displayName - engine display name.
   * @param {string} params.origin - Origin - created or registered.
   * @param {string} [params.description] - engine description.
   * @param {string[]} [params.tags] - other engine tags.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.OtherEngine>>}
   */
  public createOtherEngine(
    params: WatsonxDataV3.CreateOtherEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.OtherEngine>> {
    const _params = { ...params };
    const _requiredParams = ['configuration', 'displayName', 'origin'];
    const _validParams = ['configuration', 'displayName', 'origin', 'description', 'tags', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'configuration': _params.configuration,
      'display_name': _params.displayName,
      'origin': _params.origin,
      'description': _params.description,
      'tags': _params.tags,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createOtherEngine');

    const parameters = {
      options: {
        url: '/v3/other_engines',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete engine.
   *
   * Delete an engine from lakehouse.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deleteOtherEngine(
    params: WatsonxDataV3.DeleteOtherEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deleteOtherEngine');

    const parameters = {
      options: {
        url: '/v3/other_engines/{id}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * netezzaEngines
   ************************/

  /**
   * Get list of Netezza engines.
   *
   * Get list of all netezza engines.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.NetezzaEngineCollection>>}
   */
  public listNetezzaEngines(
    params?: WatsonxDataV3.ListNetezzaEnginesParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.NetezzaEngineCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listNetezzaEngines');

    const parameters = {
      options: {
        url: '/v3/netezza_engines',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create netezza engine.
   *
   * Create a new netezza engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {NetezzaEngineConfigurationBody} params.configuration - External engine details.
   * @param {string} params.displayName - Engine display name.
   * @param {string} params.origin - Origin - created or registered.
   * @param {string} [params.description] - Engine description.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.NetezzaEngine>>}
   */
  public createNetezzaEngine(
    params: WatsonxDataV3.CreateNetezzaEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.NetezzaEngine>> {
    const _params = { ...params };
    const _requiredParams = ['configuration', 'displayName', 'origin'];
    const _validParams = ['configuration', 'displayName', 'origin', 'description', 'tags', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'configuration': _params.configuration,
      'display_name': _params.displayName,
      'origin': _params.origin,
      'description': _params.description,
      'tags': _params.tags,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createNetezzaEngine');

    const parameters = {
      options: {
        url: '/v3/netezza_engines',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete netezza engine.
   *
   * Delete a netezza engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deleteNetezzaEngine(
    params: WatsonxDataV3.DeleteNetezzaEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deleteNetezzaEngine');

    const parameters = {
      options: {
        url: '/v3/netezza_engines/{id}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update netezza engine.
   *
   * Update details of netezza engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.description] - Modified description.
   * @param {string} [params.displayName] - Engine display name.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.NetezzaEngine>>}
   */
  public updateNetezzaEngine(
    params: WatsonxDataV3.UpdateNetezzaEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.NetezzaEngine>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'description', 'displayName', 'tags', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'description': _params.description,
      'display_name': _params.displayName,
      'tags': _params.tags,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'updateNetezzaEngine');

    const parameters = {
      options: {
        url: '/v3/netezza_engines/{id}',
        method: 'PATCH',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/merge-patch+json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * sparkEngines
   ************************/

  /**
   * Get list of spark engines.
   *
   * Get list of spark engines.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SparkEngineCollection>>}
   */
  public listSparkEngines(
    params?: WatsonxDataV3.ListSparkEnginesParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SparkEngineCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listSparkEngines');

    const parameters = {
      options: {
        url: '/v3/spark_engines',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create spark engine.
   *
   * Create a new spark  engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.displayName - Engine display name.
   * @param {string} params.origin - Origin - created or registered.
   * @param {string[]} [params.associatedCatalogs] - Catalogs to be Associated to the engine.
   * @param {SparkEngineDetails} [params.configuration] - Spark engine configuration details.
   * @param {string} [params.description] - Information on the Spark engine.
   * @param {string} [params.id] - Engine id.
   * @param {string} [params.status] - Status of engine.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.type] - Type of spark engine.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SparkEngine>>}
   */
  public createSparkEngine(
    params: WatsonxDataV3.CreateSparkEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SparkEngine>> {
    const _params = { ...params };
    const _requiredParams = ['displayName', 'origin'];
    const _validParams = ['displayName', 'origin', 'associatedCatalogs', 'configuration', 'description', 'id', 'status', 'tags', 'type', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'display_name': _params.displayName,
      'origin': _params.origin,
      'associated_catalogs': _params.associatedCatalogs,
      'configuration': _params.configuration,
      'description': _params.description,
      'id': _params.id,
      'status': _params.status,
      'tags': _params.tags,
      'type': _params.type,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createSparkEngine');

    const parameters = {
      options: {
        url: '/v3/spark_engines',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get spark engine catalog.
   *
   * Get catalog attached to spark engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} params.id - catalog id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.Catalog>>}
   */
  public getSparkEngineCatalog(
    params: WatsonxDataV3.GetSparkEngineCatalogParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.Catalog>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'id'];
    const _validParams = ['engineId', 'id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'engine_id': _params.engineId,
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getSparkEngineCatalog');

    const parameters = {
      options: {
        url: '/v3/spark_engines/{engine_id}/catalogs/{id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get spark engine.
   *
   * Get spark engine by ID.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SparkEngine>>}
   */
  public getSparkEngine(
    params: WatsonxDataV3.GetSparkEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SparkEngine>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getSparkEngine');

    const parameters = {
      options: {
        url: '/v3/spark_engines/{id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete spark engine.
   *
   * Delete a spark engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deleteSparkEngine(
    params: WatsonxDataV3.DeleteSparkEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deleteSparkEngine');

    const parameters = {
      options: {
        url: '/v3/spark_engines/{id}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update spark engine.
   *
   * Update details of spark engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {SparkEnginePatchEngineDetails} [params.configuration] - Engine details.
   * @param {string} [params.description] - Update the information related engine.
   * @param {string} [params.displayName] - Display name to identify engine.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SparkEngine>>}
   */
  public updateSparkEngine(
    params: WatsonxDataV3.UpdateSparkEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SparkEngine>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'configuration', 'description', 'displayName', 'tags', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'configuration': _params.configuration,
      'description': _params.description,
      'display_name': _params.displayName,
      'tags': _params.tags,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'updateSparkEngine');

    const parameters = {
      options: {
        url: '/v3/spark_engines/{id}',
        method: 'PATCH',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/merge-patch+json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get spark engine catalogs.
   *
   * Get list of all catalogs attached to a spark engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.CatalogCollection>>}
   */
  public listSparkEngineCatalogs(
    params: WatsonxDataV3.ListSparkEngineCatalogsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.CatalogCollection>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listSparkEngineCatalogs');

    const parameters = {
      options: {
        url: '/v3/spark_engines/{id}/catalogs',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Associate catalogs to spark engine.
   *
   * Associate one or more catalogs to a spark engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string[]} params.catalogNames - Catalog names.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.CatalogCollection>>}
   */
  public createSparkEngineCatalogs(
    params: WatsonxDataV3.CreateSparkEngineCatalogsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.CatalogCollection>> {
    const _params = { ...params };
    const _requiredParams = ['id', 'catalogNames'];
    const _validParams = ['id', 'catalogNames', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'catalog_names': _params.catalogNames,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createSparkEngineCatalogs');

    const parameters = {
      options: {
        url: '/v3/spark_engines/{id}/catalogs',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Disassociate catalogs from a spark engine.
   *
   * Disassociate one or more catalogs from a spark engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} params.catalogNames - Catalog id(s) to be stopped, comma separated.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deleteSparkEngineCatalogs(
    params: WatsonxDataV3.DeleteSparkEngineCatalogsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['id', 'catalogNames'];
    const _validParams = ['id', 'catalogNames', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'catalog_names': _params.catalogNames,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deleteSparkEngineCatalogs');

    const parameters = {
      options: {
        url: '/v3/spark_engines/{id}/catalogs',
        method: 'DELETE',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Pause engine.
   *
   * Pause engine. this feature is only available in SAAS.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {boolean} [params.force] - force spark engine pause. Default value is false.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponse>>}
   */
  public pauseSparkEngine(
    params: WatsonxDataV3.PauseSparkEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'force', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'force': _params.force,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'pauseSparkEngine');

    const parameters = {
      options: {
        url: '/v3/spark_engines/{id}/pause',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Resume engine. This feature is only available in SAAS.
   *
   * Resume engine. This feature is only available in SAAS.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponse>>}
   */
  public resumeSparkEngine(
    params: WatsonxDataV3.ResumeSparkEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'resumeSparkEngine');

    const parameters = {
      options: {
        url: '/v3/spark_engines/{id}/resume',
        method: 'POST',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Scale engine. This feature is only available in SAAS.
   *
   * Scale engine. This feature is only available in SAAS.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {number} [params.numberOfNodes] - Node count.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponse>>}
   */
  public scaleSparkEngine(
    params: WatsonxDataV3.ScaleSparkEngineParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'numberOfNodes', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'number_of_nodes': _params.numberOfNodes,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'scaleSparkEngine');

    const parameters = {
      options: {
        url: '/v3/spark_engines/{id}/scale',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get spark engine application details.
   *
   * Get spark engine application details.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} params.id - Application id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SparkEngineApplicationResponse>>}
   */
  public getSparkEngineApplicationStatus(
    params: WatsonxDataV3.GetSparkEngineApplicationStatusParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SparkEngineApplicationResponse>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'id'];
    const _validParams = ['engineId', 'id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'engine_id': _params.engineId,
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getSparkEngineApplicationStatus');

    const parameters = {
      options: {
        url: '/v3/spark_engines/{engine_id}/applications/{id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Stop Spark Applications.
   *
   * Stop a running spark application.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} params.id - Application id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deleteSparkEngineApplication(
    params: WatsonxDataV3.DeleteSparkEngineApplicationParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'id'];
    const _validParams = ['engineId', 'id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'engine_id': _params.engineId,
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deleteSparkEngineApplication');

    const parameters = {
      options: {
        url: '/v3/spark_engines/{engine_id}/applications/{id}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Redirect to spark UI.
   *
   * Redirect to spark UI.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} params.id - Application id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public getSparkEngineApplicationUi(
    params: WatsonxDataV3.GetSparkEngineApplicationUiParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'id'];
    const _validParams = ['engineId', 'id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'engine_id': _params.engineId,
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getSparkEngineApplicationUi');

    const parameters = {
      options: {
        url: '/v3/spark_engines/{engine_id}/applications/{id}/ui',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List all applications in a spark engine.
   *
   * List all applications in a spark engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID.
   * @param {string[]} [params.state] - state.
   * @param {string} [params.submissionTimeInterval] - Submission time interval in <lower timestamp limit>,<upper
   * timestamp limit> format.
   * @param {string} [params.startTimeInterval] - Start time interval in <lower timestamp limit>,<upper timestamp limit>
   * format.
   * @param {string} [params.endTimeInterval] - End time interval in <lower timestamp limit>,<upper timestamp limit>
   * format.
   * @param {number} [params.limit] - limit to specify the rows.
   * @param {string} [params.start] - Token used to fetch the next or the previous page of the applications list.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SparkEngineApplicationCollection>>}
   */
  public listSparkEngineApplications(
    params: WatsonxDataV3.ListSparkEngineApplicationsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SparkEngineApplicationCollection>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'state', 'submissionTimeInterval', 'startTimeInterval', 'endTimeInterval', 'limit', 'start', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'state': _params.state,
      'submission_time_interval': _params.submissionTimeInterval,
      'start_time_interval': _params.startTimeInterval,
      'end_time_interval': _params.endTimeInterval,
      'limit': _params.limit,
      'start': _params.start,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listSparkEngineApplications');

    const parameters = {
      options: {
        url: '/v3/spark_engines/{id}/applications',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create spark engine application.
   *
   * Create spark engine application.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {SparkApplicationDetails} params.applicationDetails - Application details.
   * @param {SparkEngineApplicationCallback} [params.callback] - Spark Engine Application Callback.
   * @param {string} [params.contextId] - GUID.
   * @param {string} [params.contextType] - type of context for the spark application.
   * @param {string} [params.deployMode] - mode.
   * @param {string} [params.idempotencyKey] - Unique key to ensure idempotent operation.
   * @param {string[]} [params.initScripts] - Initialization scripts to run before the application starts.
   * @param {string} [params.jobEndpoint] - Job endpoint.
   * @param {string} [params.maxRetries] - Maximum number of retries for the application. Supported only in watsonx.data
   * software.
   * @param {string} [params.minRetryIntervalInSeconds] - Minimum retry interval in seconds between retry attempts.
   * Supported only in watsonx.data software.
   * @param {string} [params.serviceInstanceId] - Service Instance ID for POST.
   * @param {string} [params.timeoutInSeconds] - Timeout for the application in seconds.
   * @param {string} [params.type] - Engine Type.
   * @param {SparkVolumeDetails[]} [params.volumes] - Spark application volumes to mount. This property is applicable
   * only in watsonx.data software.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SparkEngineApplicationSummary>>}
   */
  public createSparkEngineApplication(
    params: WatsonxDataV3.CreateSparkEngineApplicationParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SparkEngineApplicationSummary>> {
    const _params = { ...params };
    const _requiredParams = ['id', 'applicationDetails'];
    const _validParams = ['id', 'applicationDetails', 'callback', 'contextId', 'contextType', 'deployMode', 'idempotencyKey', 'initScripts', 'jobEndpoint', 'maxRetries', 'minRetryIntervalInSeconds', 'serviceInstanceId', 'timeoutInSeconds', 'type', 'volumes', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'application_details': _params.applicationDetails,
      'callback': _params.callback,
      'context_id': _params.contextId,
      'context_type': _params.contextType,
      'deploy_mode': _params.deployMode,
      'idempotency_key': _params.idempotencyKey,
      'init_scripts': _params.initScripts,
      'job_endpoint': _params.jobEndpoint,
      'max_retries': _params.maxRetries,
      'min_retry_interval_in_seconds': _params.minRetryIntervalInSeconds,
      'service_instance_id': _params.serviceInstanceId,
      'timeout_in_seconds': _params.timeoutInSeconds,
      'type': _params.type,
      'volumes': _params.volumes,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createSparkEngineApplication');

    const parameters = {
      options: {
        url: '/v3/spark_engines/{id}/applications',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get Spark history server details.
   *
   * Get Spark history server details.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SparkHistoryServer>>}
   */
  public getSparkEngineHistoryServer(
    params: WatsonxDataV3.GetSparkEngineHistoryServerParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SparkHistoryServer>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getSparkEngineHistoryServer');

    const parameters = {
      options: {
        url: '/v3/spark_engines/{id}/history_server',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Start spark history server.
   *
   * Start spark history server.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.cores] - CPU cores to be allocated to the history server.
   * @param {string} [params.memory] - Memory to be allocated for the history server. Kuberneted memory unit (G) must
   * also be specified.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SparkHistoryServer>>}
   */
  public startSparkEngineHistoryServer(
    params: WatsonxDataV3.StartSparkEngineHistoryServerParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SparkHistoryServer>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'cores', 'memory', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'cores': _params.cores,
      'memory': _params.memory,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'startSparkEngineHistoryServer');

    const parameters = {
      options: {
        url: '/v3/spark_engines/{id}/history_server',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Stop spark history server.
   *
   * Stop spark history server.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deleteSparkEngineHistoryServer(
    params: WatsonxDataV3.DeleteSparkEngineHistoryServerParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deleteSparkEngineHistoryServer');

    const parameters = {
      options: {
        url: '/v3/spark_engines/{id}/history_server',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Redirect to spark history server UI.
   *
   * Redirect to spark history server UI.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - engine id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public getSparkEngineHistoryServerUi(
    params: WatsonxDataV3.GetSparkEngineHistoryServerUiParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getSparkEngineHistoryServerUi');

    const parameters = {
      options: {
        url: '/v3/spark_engines/{id}/history_server/ui',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * integrations
   ************************/

  /**
   * To validate an integration.
   *
   * To validate the details of an integration.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.type - Type of the integration to be integrated. It can only have the following values:
   * `ranger`, `ikc`, `databand` and `manta`.
   * @param {string} [params.accessToken] - Access Token for the integration of type `databand`.
   * @param {string} [params.apikey] - ApiKey for the integration of type `manta` and `ikc`.
   * @param {Catalogs} [params.catalogs] - Details of catalogs associated with `ikc`.
   * @param {string} [params.certificate] - Certificate to be provided if ssl is enabled for integration type `ikc` in
   * Cloud Pack for Data.
   * @param {string} [params.password] - Password for the integration of type `ranger`.
   * @param {boolean} [params.ssl] - SSL enabler/disabler for `ikc` in Cloud Pack for Data.
   * @param {string} [params.url] - URL of the integration to be integrated. Applicable for all the 4 types:  `ranger`,
   * `ikc`, `databand` and `manta`.
   * @param {string} [params.username] - Username of the `ikc`/`manta`/`ranger` integration to be integrated.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.ValidateIntegration>>}
   */
  public validateIntegration(
    params: WatsonxDataV3.ValidateIntegrationParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.ValidateIntegration>> {
    const _params = { ...params };
    const _requiredParams = ['type'];
    const _validParams = ['type', 'accessToken', 'apikey', 'catalogs', 'certificate', 'password', 'ssl', 'url', 'username', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'type': _params.type,
      'access_token': _params.accessToken,
      'apikey': _params.apikey,
      'catalogs': _params.catalogs,
      'certificate': _params.certificate,
      'password': _params.password,
      'ssl': _params.ssl,
      'url': _params.url,
      'username': _params.username,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'validateIntegration');

    const parameters = {
      options: {
        url: '/v3/integration_validation',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List integrations.
   *
   * List all existing integrations (can be filtered based on `type`).
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {string} [params.secret] - API Authentication service token.
   * @param {string[]} [params.type] - Filter based on the type of the integration. It can only have the following
   * values: `ranger`, `ikc`, `databand` and `manta`.
   * @param {string[]} [params.state] - Filter based on the state of the integration. It can only have the following
   * values: `active`, `inactive`, and `failed`.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.IntegrationCollection>>}
   */
  public listAllIntegrations(
    params?: WatsonxDataV3.ListAllIntegrationsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.IntegrationCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'secret', 'type', 'state', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'type': _params.type,
      'state': _params.state,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listAllIntegrations');

    const parameters = {
      options: {
        url: '/v3/integrations',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
            'Secret': _params.secret,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create an integration.
   *
   * To create an integration of type Apache Ranger, IBM Knowlege Catalog, IBM Manta Data lineage or IBM Data
   * Observability by Databand.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.accessToken] - Access Token for the integration of type `databand`.
   * @param {string} [params.apikey] - ApiKey for the integration of type `manta` and `ikc`.
   * @param {Catalogs} [params.catalogs] - Details of catalogs associated with `ikc`.
   * @param {string} [params.certificate] - Certificate if ssl is enabled for integration type `ikc` (ikc hosted in
   * Cloud Pack for Data) and `ranger`.
   * @param {string} [params.certificateExtension] - Certificate extension of the certificate provided if ssl is enabled
   * for integration type `ikc` (ikc hosted in Cloud Pack for Data) and `ranger`.
   * @param {string} [params.connectionMode] - Connection mode for manta.
   * @param {boolean} [params.crossAccountIntegration] - To enable/disable cross account integration for `ikc` in IBM
   * Cloud / MCSP.
   * @param {boolean} [params.enableDataPolicyWithinWxd] - To check if WatsonX.data policies are enabled along with
   * `ranger`.
   * @param {string} [params.ikcUserAccountId] - The Account ID where the `ikc` is existing with which cross account
   * integration needs to be enabled, to be used compulsorily with `cross_account_integration`.
   * @param {string} [params.password] - Password for the integration of type `ranger`.
   * @param {string} [params.policyCacheTimeConfiguration] - Displays the policy cache type configuration for
   * integration type `ranger`.
   * @param {string} [params.resource] - Currently selected resource for `ranger`.
   * @param {boolean} [params.ssl] - SSL enabled/disabled for `ikc` (ikc hosted in Cloud Pack for Data) and `ranger`.
   * @param {string} [params.type] - Type of the integration to be integrated. It can only have the following values:
   * `ranger`, `ikc`, `databand` and `manta`.
   * @param {string} [params.url] - URL of the integration to be integrated. Applicable for all the 4 types:  `ranger`,
   * `ikc`, `databand` and `manta`.
   * @param {string} [params.username] - Username of the `ikc`/`manta`/`ranger` integration to be integrated.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.Integration>>}
   */
  public createIntegration(
    params?: WatsonxDataV3.CreateIntegrationParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.Integration>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['accessToken', 'apikey', 'catalogs', 'certificate', 'certificateExtension', 'connectionMode', 'crossAccountIntegration', 'enableDataPolicyWithinWxd', 'ikcUserAccountId', 'password', 'policyCacheTimeConfiguration', 'resource', 'ssl', 'type', 'url', 'username', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'access_token': _params.accessToken,
      'apikey': _params.apikey,
      'catalogs': _params.catalogs,
      'certificate': _params.certificate,
      'certificate_extension': _params.certificateExtension,
      'connection_mode': _params.connectionMode,
      'cross_account_integration': _params.crossAccountIntegration,
      'enable_data_policy_within_wxd': _params.enableDataPolicyWithinWxd,
      'ikc_user_account_id': _params.ikcUserAccountId,
      'password': _params.password,
      'policy_cache_time_configuration': _params.policyCacheTimeConfiguration,
      'resource': _params.resource,
      'ssl': _params.ssl,
      'type': _params.type,
      'url': _params.url,
      'username': _params.username,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createIntegration');

    const parameters = {
      options: {
        url: '/v3/integrations',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get an Integration.
   *
   * To get the details of an integration.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Unique id to identify the integration.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.Integration>>}
   */
  public getIntegrations(
    params: WatsonxDataV3.GetIntegrationsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.Integration>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getIntegrations');

    const parameters = {
      options: {
        url: '/v3/integrations/{id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete an Integration.
   *
   * Deletes an existing integration completely from WatsonX.data.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Unique id to identify the integration.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deleteIntegration(
    params: WatsonxDataV3.DeleteIntegrationParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deleteIntegration');

    const parameters = {
      options: {
        url: '/v3/integrations/{id}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update an Integration.
   *
   * To Update information details and state of an existing integration.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Unique id to identify the integration.
   * @param {string} [params.accessToken] - Access Token for the integration of type `databand`.
   * @param {string} [params.apikey] - ApiKey for the integration of type `manta` and `ikc`.
   * @param {Catalogs} [params.catalogs] - Details of catalogs associated with `ikc`.
   * @param {string} [params.certificate] - Certificate if ssl is enabled for integration type `ikc` (ikc hosted in
   * Cloud Pack for Data) and `ranger`.
   * @param {string} [params.certificateExtension] - Certificate extension of the certificate provided if ssl is enabled
   * for integration type `ikc` (ikc hosted in Cloud Pack for Data) and `ranger`.
   * @param {string} [params.connectionMode] - Connection mode for manta.
   * @param {boolean} [params.crossAccountIntegration] - To enable/disable cross account integration for `ikc` in IBM
   * Cloud / MCSP.
   * @param {boolean} [params.enableDataPolicyWithinWxd] - To check if WatsonX.data policies are enabled along with
   * `ranger`.
   * @param {string} [params.ikcUserAccountId] - The Account ID where the `ikc` is existing with which cross account
   * integration needs to be enabled, to be used compulsorily with `cross_account_integration`.
   * @param {string} [params.password] - Password for the integration of type `ranger`.
   * @param {string} [params.policyCacheTimeConfiguration] - Displays the policy cache type configuration for
   * integration type `ranger`.
   * @param {string} [params.resource] - Currently selected resource for `ranger`.
   * @param {boolean} [params.ssl] - SSL enabled/disabled for `ikc` (ikc hosted in Cloud Pack for Data) and `ranger`.
   * @param {string} [params.state] - current state.
   * @param {string} [params.url] - URL of the integration to be integrated. Applicable for all the 4 types:  `ranger`,
   * `ikc`, `databand` and `manta`.
   * @param {string} [params.username] - Username of the `ikc`/`manta`/`ranger` integration to be integrated.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {string} [params.secret] - API Authentication service token.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.Integration>>}
   */
  public updateIntegration(
    params: WatsonxDataV3.UpdateIntegrationParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.Integration>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'accessToken', 'apikey', 'catalogs', 'certificate', 'certificateExtension', 'connectionMode', 'crossAccountIntegration', 'enableDataPolicyWithinWxd', 'ikcUserAccountId', 'password', 'policyCacheTimeConfiguration', 'resource', 'ssl', 'state', 'url', 'username', 'authInstanceId', 'secret', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'access_token': _params.accessToken,
      'apikey': _params.apikey,
      'catalogs': _params.catalogs,
      'certificate': _params.certificate,
      'certificate_extension': _params.certificateExtension,
      'connection_mode': _params.connectionMode,
      'cross_account_integration': _params.crossAccountIntegration,
      'enable_data_policy_within_wxd': _params.enableDataPolicyWithinWxd,
      'ikc_user_account_id': _params.ikcUserAccountId,
      'password': _params.password,
      'policy_cache_time_configuration': _params.policyCacheTimeConfiguration,
      'resource': _params.resource,
      'ssl': _params.ssl,
      'state': _params.state,
      'url': _params.url,
      'username': _params.username,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'updateIntegration');

    const parameters = {
      options: {
        url: '/v3/integrations/{id}',
        method: 'PATCH',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/merge-patch+json',
            'AuthInstanceId': _params.authInstanceId,
            'Secret': _params.secret,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * metadata
   ************************/

  /**
   * Register delta and hudi tables.
   *
   * Register delta and hudi tables.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogId - catalog id.
   * @param {string} params.schemaId - URL encoded schema name.
   * @param {string} params.metadataLocation - Metadata location.
   * @param {string} params.tableName - Table name.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.RegisterTableCreatedBody>>}
   */
  public registerTable(
    params: WatsonxDataV3.RegisterTableParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.RegisterTableCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['catalogId', 'schemaId', 'metadataLocation', 'tableName'];
    const _validParams = ['catalogId', 'schemaId', 'metadataLocation', 'tableName', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'metadata_location': _params.metadataLocation,
      'table_name': _params.tableName,
    };

    const path = {
      'catalog_id': _params.catalogId,
      'schema_id': _params.schemaId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'registerTable');

    const parameters = {
      options: {
        url: '/v3/catalogs/{catalog_id}/schemas/{schema_id}/register',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Load delta and hudi tables metadata.
   *
   * Load delta and hudi tables metadata.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogId - catalog id.
   * @param {string} params.schemaId - URL encoded schema name.
   * @param {string} params.tableId - URL encoded table name.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.LoadTableResponse>>}
   */
  public loadTable(
    params: WatsonxDataV3.LoadTableParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.LoadTableResponse>> {
    const _params = { ...params };
    const _requiredParams = ['catalogId', 'schemaId', 'tableId'];
    const _validParams = ['catalogId', 'schemaId', 'tableId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'catalog_id': _params.catalogId,
      'schema_id': _params.schemaId,
      'table_id': _params.tableId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'loadTable');

    const parameters = {
      options: {
        url: '/v3/catalogs/{catalog_id}/schemas/{schema_id}/tables/{table_id}/metadata',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * catalogs
   ************************/

  /**
   * Get list of catalogs.
   *
   * Get list of catalogs.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS or CRN for SAAS.
   * @param {string} [params.secret] - API Authentication service token.
   * @param {boolean} [params.defaultCatalogs] - Default catalogs flag for cornerstone feature.
   * @param {string} [params.view] - Internal view parameter for cornerstone feature.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.CatalogCollection>>}
   */
  public listCatalogs(
    params?: WatsonxDataV3.ListCatalogsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.CatalogCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'secret', 'defaultCatalogs', 'view', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'default_catalogs': _params.defaultCatalogs,
      'view': _params.view,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listCatalogs');

    const parameters = {
      options: {
        url: '/v3/catalogs',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
            'Secret': _params.secret,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get catalog engine association.
   *
   * Get catalog engine association.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogName - catalog name.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.CatalogEngineResponse>>}
   */
  public getCatalogEngineAssociation(
    params: WatsonxDataV3.GetCatalogEngineAssociationParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.CatalogEngineResponse>> {
    const _params = { ...params };
    const _requiredParams = ['catalogName'];
    const _validParams = ['catalogName', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'catalog_name': _params.catalogName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getCatalogEngineAssociation');

    const parameters = {
      options: {
        url: '/v3/catalogs/{catalog_name}/engines',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete schema.
   *
   * Delete a schema.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - Engine id of presto/prestissimo/spark/db2/netezza other engine.
   * @param {string} params.catalogName - Catalog name.
   * @param {string} params.schemaName - URL encoded Schema name.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deleteSchema(
    params: WatsonxDataV3.DeleteSchemaParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogName', 'schemaName'];
    const _validParams = ['engineId', 'catalogName', 'schemaName', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'engine_id': _params.engineId,
    };

    const path = {
      'catalog_name': _params.catalogName,
      'schema_name': _params.schemaName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deleteSchema');

    const parameters = {
      options: {
        url: '/v3/catalogs/{catalog_name}/schemas/{schema_name}',
        method: 'DELETE',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List all tables.
   *
   * List all tables in a schema in a catalog for a given engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogName - catalog name.
   * @param {string} params.schemaName - URL encoded schema name.
   * @param {string} params.engineId - Engine id of presto/prestissimo/spark/db2/netezza other engine.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.TableCollection>>}
   */
  public listTables(
    params: WatsonxDataV3.ListTablesParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.TableCollection>> {
    const _params = { ...params };
    const _requiredParams = ['catalogName', 'schemaName', 'engineId'];
    const _validParams = ['catalogName', 'schemaName', 'engineId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'engine_id': _params.engineId,
    };

    const path = {
      'catalog_name': _params.catalogName,
      'schema_name': _params.schemaName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listTables');

    const parameters = {
      options: {
        url: '/v3/catalogs/{catalog_name}/schemas/{schema_name}/tables',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get table details.
   *
   * Get details of a given table in a catalog and schema.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogName - catalog name.
   * @param {string} params.schemaName - URL encoded schema name.
   * @param {string} params.tableName - URL encoded table name.
   * @param {string} params.engineId - Engine id of presto/prestissimo/spark/db2/netezza other engine.
   * @param {string} [params.type] - URL encoded table type (view,base table).
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.Table>>}
   */
  public getTable(
    params: WatsonxDataV3.GetTableParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.Table>> {
    const _params = { ...params };
    const _requiredParams = ['catalogName', 'schemaName', 'tableName', 'engineId'];
    const _validParams = ['catalogName', 'schemaName', 'tableName', 'engineId', 'type', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'engine_id': _params.engineId,
      'type': _params.type,
    };

    const path = {
      'catalog_name': _params.catalogName,
      'schema_name': _params.schemaName,
      'table_name': _params.tableName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getTable');

    const parameters = {
      options: {
        url: '/v3/catalogs/{catalog_name}/schemas/{schema_name}/tables/{table_name}',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete table.
   *
   * Delete table for a given schema and catalog.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogName - catalog name.
   * @param {string} params.schemaName - URL encoded schema name.
   * @param {string} params.tableName - URL encoded table name.
   * @param {string} params.engineId - Engine id of presto/prestissimo/spark/db2/netezza other engine.
   * @param {string} [params.type] - URL encoded table type (view,base table).
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deleteTable(
    params: WatsonxDataV3.DeleteTableParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['catalogName', 'schemaName', 'tableName', 'engineId'];
    const _validParams = ['catalogName', 'schemaName', 'tableName', 'engineId', 'type', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'engine_id': _params.engineId,
      'type': _params.type,
    };

    const path = {
      'catalog_name': _params.catalogName,
      'schema_name': _params.schemaName,
      'table_name': _params.tableName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deleteTable');

    const parameters = {
      options: {
        url: '/v3/catalogs/{catalog_name}/schemas/{schema_name}/tables/{table_name}',
        method: 'DELETE',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Rename table.
   *
   * Rename table.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogName - catalog name.
   * @param {string} params.schemaName - URL encoded schema name.
   * @param {string} params.tableName - URL encoded table name.
   * @param {string} params.engineId - Engine id of presto/prestissimo/spark/db2/netezza other engine.
   * @param {string} [params.name] - New table name.
   * @param {string} [params.type] - URL encoded table type (view,base table).
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.Table>>}
   */
  public updateTable(
    params: WatsonxDataV3.UpdateTableParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.Table>> {
    const _params = { ...params };
    const _requiredParams = ['catalogName', 'schemaName', 'tableName', 'engineId'];
    const _validParams = ['catalogName', 'schemaName', 'tableName', 'engineId', 'name', 'type', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'name': _params.name,
    };

    const query = {
      'engine_id': _params.engineId,
      'type': _params.type,
    };

    const path = {
      'catalog_name': _params.catalogName,
      'schema_name': _params.schemaName,
      'table_name': _params.tableName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'updateTable');

    const parameters = {
      options: {
        url: '/v3/catalogs/{catalog_name}/schemas/{schema_name}/tables/{table_name}',
        method: 'PATCH',
        body,
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/merge-patch+json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List all columns of a table.
   *
   * List all columns of a table in a given a schema for a given catalog.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} params.catalogName - catalog name.
   * @param {string} params.schemaName - URL encoded schema name.
   * @param {string} params.tableName - URL encoded table name.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.ColumnCollection>>}
   */
  public listColumns(
    params: WatsonxDataV3.ListColumnsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.ColumnCollection>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogName', 'schemaName', 'tableName'];
    const _validParams = ['engineId', 'catalogName', 'schemaName', 'tableName', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'engine_id': _params.engineId,
    };

    const path = {
      'catalog_name': _params.catalogName,
      'schema_name': _params.schemaName,
      'table_name': _params.tableName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listColumns');

    const parameters = {
      options: {
        url: '/v3/catalogs/{catalog_name}/schemas/{schema_name}/tables/{table_name}/columns',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Add column(s).
   *
   * Add one or multiple columns to a table in a schema for a given catalog.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} params.catalogName - catalog name.
   * @param {string} params.schemaName - URL encoded schema name.
   * @param {string} params.tableName - URL encoded table name.
   * @param {Column[]} [params.columns] - List of the tables present in the schema.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.ColumnCollection>>}
   */
  public createColumns(
    params: WatsonxDataV3.CreateColumnsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.ColumnCollection>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogName', 'schemaName', 'tableName'];
    const _validParams = ['engineId', 'catalogName', 'schemaName', 'tableName', 'columns', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'columns': _params.columns,
    };

    const query = {
      'engine_id': _params.engineId,
    };

    const path = {
      'catalog_name': _params.catalogName,
      'schema_name': _params.schemaName,
      'table_name': _params.tableName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createColumns');

    const parameters = {
      options: {
        url: '/v3/catalogs/{catalog_name}/schemas/{schema_name}/tables/{table_name}/columns',
        method: 'POST',
        body,
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete column.
   *
   * Delete column in a table for a given schema and catalog.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} params.catalogName - catalog name.
   * @param {string} params.schemaName - URL encoded schema name.
   * @param {string} params.tableName - URL encoded table name.
   * @param {string} params.columnName - Url encoded column name.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deleteColumn(
    params: WatsonxDataV3.DeleteColumnParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogName', 'schemaName', 'tableName', 'columnName'];
    const _validParams = ['engineId', 'catalogName', 'schemaName', 'tableName', 'columnName', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'engine_id': _params.engineId,
    };

    const path = {
      'catalog_name': _params.catalogName,
      'schema_name': _params.schemaName,
      'table_name': _params.tableName,
      'column_name': _params.columnName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deleteColumn');

    const parameters = {
      options: {
        url: '/v3/catalogs/{catalog_name}/schemas/{schema_name}/tables/{table_name}/columns/{column_name}',
        method: 'DELETE',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Alter column.
   *
   * Update the given column - rename column.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} params.catalogName - catalog name.
   * @param {string} params.schemaName - URL encoded schema name.
   * @param {string} params.tableName - URL encoded table name.
   * @param {string} params.columnName - Url encoded column name.
   * @param {string} [params.name] - Url encoded column name.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.Column>>}
   */
  public updateColumn(
    params: WatsonxDataV3.UpdateColumnParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.Column>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogName', 'schemaName', 'tableName', 'columnName'];
    const _validParams = ['engineId', 'catalogName', 'schemaName', 'tableName', 'columnName', 'name', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'name': _params.name,
    };

    const query = {
      'engine_id': _params.engineId,
    };

    const path = {
      'catalog_name': _params.catalogName,
      'schema_name': _params.schemaName,
      'table_name': _params.tableName,
      'column_name': _params.columnName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'updateColumn');

    const parameters = {
      options: {
        url: '/v3/catalogs/{catalog_name}/schemas/{schema_name}/tables/{table_name}/columns/{column_name}',
        method: 'PATCH',
        body,
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/merge-patch+json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Rollback snapshot.
   *
   * Rollback table to snapshot.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogName - Catalog name.
   * @param {string} params.schemaName - Schema name.
   * @param {string} params.tableName - Table name.
   * @param {string} [params.snapshotId] - Snapshot Id.
   * @param {string} [params.engineId] - Engine id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponsePrototype>>}
   */
  public rollbackTable(
    params: WatsonxDataV3.RollbackTableParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponsePrototype>> {
    const _params = { ...params };
    const _requiredParams = ['catalogName', 'schemaName', 'tableName'];
    const _validParams = ['catalogName', 'schemaName', 'tableName', 'snapshotId', 'engineId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'snapshot_id': _params.snapshotId,
    };

    const query = {
      'engine_id': _params.engineId,
    };

    const path = {
      'catalog_name': _params.catalogName,
      'schema_name': _params.schemaName,
      'table_name': _params.tableName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'rollbackTable');

    const parameters = {
      options: {
        url: '/v3/catalogs/{catalog_name}/schemas/{schema_name}/tables/{table_name}/rollback',
        method: 'POST',
        body,
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get table snapshots.
   *
   * List all table snapshots.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogName - Catalog name.
   * @param {string} params.schemaName - Schema name.
   * @param {string} params.tableName - Table name.
   * @param {string} [params.engineId] - Engine name.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.TableSnapshotCollection>>}
   */
  public listTableSnapshots(
    params: WatsonxDataV3.ListTableSnapshotsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.TableSnapshotCollection>> {
    const _params = { ...params };
    const _requiredParams = ['catalogName', 'schemaName', 'tableName'];
    const _validParams = ['catalogName', 'schemaName', 'tableName', 'engineId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'engine_id': _params.engineId,
    };

    const path = {
      'catalog_name': _params.catalogName,
      'schema_name': _params.schemaName,
      'table_name': _params.tableName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listTableSnapshots');

    const parameters = {
      options: {
        url: '/v3/catalogs/{catalog_name}/schemas/{schema_name}/tables/{table_name}/snapshots',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List all schemas.
   *
   * List all schemas in catalog.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - Engine id.
   * @param {string} params.id - Catalog id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SchemasCollection>>}
   */
  public listSchemas(
    params: WatsonxDataV3.ListSchemasParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SchemasCollection>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'id'];
    const _validParams = ['engineId', 'id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'engine_id': _params.engineId,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listSchemas');

    const parameters = {
      options: {
        url: '/v3/catalogs/{id}/schemas',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create schema.
   *
   * Create a new schema.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - Engine id.
   * @param {string} params.id - Catalog id.
   * @param {string} params.customPath - Path within bucket where schema will be created.
   * @param {string} params.name - Unique schema name, schemas with same names are not allowed in a catalog.
   * @param {string} [params.hostname] - Host name of the HDFS bucket. Need to be provided if using HDFS.
   * @param {number} [params.port] - Port of the HDFS bucket. Need to be provided if using HDFS.
   * @param {string} [params.storageName] - Bucket associated to catalog where schema will be added.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SchemaPrototype>>}
   */
  public createSchema(
    params: WatsonxDataV3.CreateSchemaParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SchemaPrototype>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'id', 'customPath', 'name'];
    const _validParams = ['engineId', 'id', 'customPath', 'name', 'hostname', 'port', 'storageName', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'custom_path': _params.customPath,
      'name': _params.name,
      'hostname': _params.hostname,
      'port': _params.port,
      'storage_name': _params.storageName,
    };

    const query = {
      'engine_id': _params.engineId,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createSchema');

    const parameters = {
      options: {
        url: '/v3/catalogs/{id}/schemas',
        method: 'POST',
        body,
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * External Iceberg table registration.
   *
   * Synchronize the external Iceberg table registration for a catalog identified by catalog_id.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - catalog ID.
   * @param {boolean} [params.autoAddNewTables] - Automatically detect and add new tables to the system when they appear
   * in the source.
   * @param {boolean} [params.registerNewTables] - Register newly discovered tables in the system so they can be tracked
   * and managed.
   * @param {boolean} [params.syncExistingTables] - Synchronize and update metadata for existing tables that are already
   * registered.
   * @param {boolean} [params.syncIcebergMd] - Indicates whether to synchronize metadata from Iceberg tables with the
   * system.
   * @param {string} [params.syncPath] - Path within the bucket from where the details will be sync-ed.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponsePrototype>>}
   */
  public updateSyncCatalog(
    params: WatsonxDataV3.UpdateSyncCatalogParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponsePrototype>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'autoAddNewTables', 'registerNewTables', 'syncExistingTables', 'syncIcebergMd', 'syncPath', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'auto_add_new_tables': _params.autoAddNewTables,
      'register_new_tables': _params.registerNewTables,
      'sync_existing_tables': _params.syncExistingTables,
      'sync_iceberg_md': _params.syncIcebergMd,
      'sync_path': _params.syncPath,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'updateSyncCatalog');

    const parameters = {
      options: {
        url: '/v3/catalogs/{id}/sync',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get catalog properties by catalog_id.
   *
   * Get catalog properties of a catalog identified by catalog_id.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.name - catalog name.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.Catalog>>}
   */
  public getCatalog(
    params: WatsonxDataV3.GetCatalogParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.Catalog>> {
    const _params = { ...params };
    const _requiredParams = ['name'];
    const _validParams = ['name', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'name': _params.name,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getCatalog');

    const parameters = {
      options: {
        url: '/v3/catalogs/{name}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete catalog catalog_id.
   *
   * Delete catalog identified by catalog_id.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.name - catalog name.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {boolean} [params.skipMdsCall] - Skip MDS call when Unity catalog is added.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deleteCatalog(
    params: WatsonxDataV3.DeleteCatalogParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['name'];
    const _validParams = ['name', 'authInstanceId', 'skipMdsCall', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'skip_mds_call': _params.skipMdsCall,
    };

    const path = {
      'name': _params.name,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deleteCatalog');

    const parameters = {
      options: {
        url: '/v3/catalogs/{name}',
        method: 'DELETE',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * services
   ************************/

  /**
   * Get list of milvus services.
   *
   * Get list milvus services.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.MilvusServiceCollection>>}
   */
  public listMilvusServices(
    params?: WatsonxDataV3.ListMilvusServicesParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.MilvusServiceCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listMilvusServices');

    const parameters = {
      options: {
        url: '/v3/milvus_services',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create milvus service.
   *
   * Create milvus service.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.displayName - Display name for milvus services.
   * @param {string} params.origin - Origin of the milvus service.
   * @param {string} params.rootPath - Root path in storage where milvus vectors will be stored.
   * @param {string} params.tshirtSize - Predefined tshirt size for the milvus service.
   * @param {number} [params.dcCpu] - data coordinator cpus, only configurable in cpd.
   * @param {number} [params.dcMemory] - data coordinator memory, only configurable in cpd.
   * @param {number} [params.dcReplicas] - data coordinator replicas, only configurable in cpd.
   * @param {string} [params.description] - Descriptioon of Milvus service added by the user.
   * @param {number} [params.dwCpu] - data worker cpus, only configurable in cpd.
   * @param {number} [params.dwMemory] - data worker memory, only configurable in cpd.
   * @param {number} [params.dwReplicas] - data worker replicas, only configurable in cpd.
   * @param {number} [params.etcdCpu] - etcd cpus, only configurable in cpd.
   * @param {number} [params.etcdMemory] - etcd memory, only configurable in cpd.
   * @param {string} [params.id] - Engine id.
   * @param {string} [params.indexType] - index type.
   * @param {number} [params.iwCpu] - index worker cpu.
   * @param {number} [params.iwMemory] - index worker memory.
   * @param {number} [params.iwReplicas] - index worker replicas.
   * @param {number} [params.kafkaCpu] - kafka cpus, only configurable in cpd.
   * @param {number} [params.kafkaMemory] - kafka memory, only configurable in cpd.
   * @param {number} [params.proxyCpu] - proxy cpus, only configurable in cpd.
   * @param {number} [params.proxyMemory] - proxy memory, only configurable in cpd.
   * @param {number} [params.proxyReplicas] - proxy replicas, only configurable in cpd.
   * @param {number} [params.qcCpu] - query coordinator cpus, only configurable in cpd.
   * @param {number} [params.qcMemory] - query coordinator memory, only configurable in cpd.
   * @param {number} [params.qcReplicas] - query coordinator replicas, only configurable in cpd.
   * @param {number} [params.qwCpu] - query worker cpu.
   * @param {number} [params.qwMemory] - query worker memory.
   * @param {number} [params.qwReplicas] - query worker replicas.
   * @param {number} [params.rcCpu] - root coordinator cpus, only configurable in cpd.
   * @param {number} [params.rcMemory] - root coodinator memory, only configurable in cpd.
   * @param {number} [params.rcReplicas] - root coordinator replicas, only configurable in cpd.
   * @param {string} [params.storageName] - storage name.
   * @param {string[]} [params.tags] - Tags.
   * @param {number} [params.vector] - vector.
   * @param {number} [params.vectorDimension] - vector dimension.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.MilvusService>>}
   */
  public createMilvusService(
    params: WatsonxDataV3.CreateMilvusServiceParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.MilvusService>> {
    const _params = { ...params };
    const _requiredParams = ['displayName', 'origin', 'rootPath', 'tshirtSize'];
    const _validParams = ['displayName', 'origin', 'rootPath', 'tshirtSize', 'dcCpu', 'dcMemory', 'dcReplicas', 'description', 'dwCpu', 'dwMemory', 'dwReplicas', 'etcdCpu', 'etcdMemory', 'id', 'indexType', 'iwCpu', 'iwMemory', 'iwReplicas', 'kafkaCpu', 'kafkaMemory', 'proxyCpu', 'proxyMemory', 'proxyReplicas', 'qcCpu', 'qcMemory', 'qcReplicas', 'qwCpu', 'qwMemory', 'qwReplicas', 'rcCpu', 'rcMemory', 'rcReplicas', 'storageName', 'tags', 'vector', 'vectorDimension', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'display_name': _params.displayName,
      'origin': _params.origin,
      'root_path': _params.rootPath,
      'tshirt_size': _params.tshirtSize,
      'dc_cpu': _params.dcCpu,
      'dc_memory': _params.dcMemory,
      'dc_replicas': _params.dcReplicas,
      'description': _params.description,
      'dw_cpu': _params.dwCpu,
      'dw_memory': _params.dwMemory,
      'dw_replicas': _params.dwReplicas,
      'etcd_cpu': _params.etcdCpu,
      'etcd_memory': _params.etcdMemory,
      'id': _params.id,
      'index_type': _params.indexType,
      'iw_cpu': _params.iwCpu,
      'iw_memory': _params.iwMemory,
      'iw_replicas': _params.iwReplicas,
      'kafka_cpu': _params.kafkaCpu,
      'kafka_memory': _params.kafkaMemory,
      'proxy_cpu': _params.proxyCpu,
      'proxy_memory': _params.proxyMemory,
      'proxy_replicas': _params.proxyReplicas,
      'qc_cpu': _params.qcCpu,
      'qc_memory': _params.qcMemory,
      'qc_replicas': _params.qcReplicas,
      'qw_cpu': _params.qwCpu,
      'qw_memory': _params.qwMemory,
      'qw_replicas': _params.qwReplicas,
      'rc_cpu': _params.rcCpu,
      'rc_memory': _params.rcMemory,
      'rc_replicas': _params.rcReplicas,
      'storage_name': _params.storageName,
      'tags': _params.tags,
      'vector': _params.vector,
      'vector_dimension': _params.vectorDimension,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createMilvusService');

    const parameters = {
      options: {
        url: '/v3/milvus_services',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get milvus service.
   *
   * Get milvus service.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.MilvusService>>}
   */
  public getMilvusService(
    params: WatsonxDataV3.GetMilvusServiceParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.MilvusService>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getMilvusService');

    const parameters = {
      options: {
        url: '/v3/milvus_services/{id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete milvus service.
   *
   * Delete milvus service.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deleteMilvusService(
    params: WatsonxDataV3.DeleteMilvusServiceParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deleteMilvusService');

    const parameters = {
      options: {
        url: '/v3/milvus_services/{id}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update milvus service.
   *
   * Update details of milvus service.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - id.
   * @param {string} [params.description] - Modified description.
   * @param {string} [params.displayName] - Service display name.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.MilvusService>>}
   */
  public updateMilvusService(
    params: WatsonxDataV3.UpdateMilvusServiceParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.MilvusService>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'description', 'displayName', 'tags', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'description': _params.description,
      'display_name': _params.displayName,
      'tags': _params.tags,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'updateMilvusService');

    const parameters = {
      options: {
        url: '/v3/milvus_services/{id}',
        method: 'PATCH',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/merge-patch+json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Pause milvus service.
   *
   * Pause a running milvus service.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponse>>}
   */
  public createMilvusServicePause(
    params: WatsonxDataV3.CreateMilvusServicePauseParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createMilvusServicePause');

    const parameters = {
      options: {
        url: '/v3/milvus_services/{id}/pause',
        method: 'POST',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Resume milvus service.
   *
   * Resume a paused milvus service.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponse>>}
   */
  public createMilvusServiceResume(
    params: WatsonxDataV3.CreateMilvusServiceResumeParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createMilvusServiceResume');

    const parameters = {
      options: {
        url: '/v3/milvus_services/{id}/resume',
        method: 'POST',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Scale a milvus service.
   *
   * Scale an existing milvus service.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - id.
   * @param {string} params.tshirtSize - tshirt size.
   * @param {number} [params.dcCpu] - data coordinator cpus, only configurable in cpd.
   * @param {number} [params.dcMemory] - data coordinator memory, only configurable in cpd.
   * @param {number} [params.dcReplicas] - data coordinator replicas, only configurable in cpd.
   * @param {number} [params.dwCpu] - data worker cpus, only configurable in cpd.
   * @param {number} [params.dwMemory] - data worker memory, only configurable in cpd.
   * @param {number} [params.dwReplicas] - data worker replicas, only configurable in cpd.
   * @param {number} [params.etcdCpu] - etcd cpus, only configurable in cpd.
   * @param {number} [params.etcdMemory] - etcd memory, only configurable in cpd.
   * @param {string} [params.indexType] - index type, required for custom size.
   * @param {number} [params.iwCpu] - index worker cpus.
   * @param {number} [params.iwMemory] - index worker memory.
   * @param {number} [params.iwReplicas] - index worker replicas.
   * @param {number} [params.kafkaCpu] - kafka cpus, only configurable in cpd.
   * @param {number} [params.kafkaMemory] - kafka memory, only configurable in cpd.
   * @param {number} [params.proxyCpu] - proxy cpus, only configurable in cpd.
   * @param {number} [params.proxyMemory] - proxy memory, only configurable in cpd.
   * @param {number} [params.proxyReplicas] - proxy replicas, only configurable in cpd.
   * @param {number} [params.qcCpu] - query coordinator cpus, only configurable in cpd.
   * @param {number} [params.qcMemory] - query coordinator memory, only configurable in cpd.
   * @param {number} [params.qcReplicas] - query coordinator replicas, only configurable in cpd.
   * @param {number} [params.qwCpu] - query worker cpus.
   * @param {number} [params.qwMemory] - query worker memory.
   * @param {number} [params.qwReplicas] - query worker replicas.
   * @param {number} [params.rcCpu] - root coordinator cpus, only configurable in cpd.
   * @param {number} [params.rcMemory] - root coodinator memory, only configurable in cpd.
   * @param {number} [params.rcReplicas] - root coordinator replicas, only configurable in cpd.
   * @param {number} [params.vector] - vector.
   * @param {number} [params.vectorDimension] - vector dimension.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponse>>}
   */
  public createMilvusServiceScale(
    params: WatsonxDataV3.CreateMilvusServiceScaleParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['id', 'tshirtSize'];
    const _validParams = ['id', 'tshirtSize', 'dcCpu', 'dcMemory', 'dcReplicas', 'dwCpu', 'dwMemory', 'dwReplicas', 'etcdCpu', 'etcdMemory', 'indexType', 'iwCpu', 'iwMemory', 'iwReplicas', 'kafkaCpu', 'kafkaMemory', 'proxyCpu', 'proxyMemory', 'proxyReplicas', 'qcCpu', 'qcMemory', 'qcReplicas', 'qwCpu', 'qwMemory', 'qwReplicas', 'rcCpu', 'rcMemory', 'rcReplicas', 'vector', 'vectorDimension', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'tshirt_size': _params.tshirtSize,
      'dc_cpu': _params.dcCpu,
      'dc_memory': _params.dcMemory,
      'dc_replicas': _params.dcReplicas,
      'dw_cpu': _params.dwCpu,
      'dw_memory': _params.dwMemory,
      'dw_replicas': _params.dwReplicas,
      'etcd_cpu': _params.etcdCpu,
      'etcd_memory': _params.etcdMemory,
      'index_type': _params.indexType,
      'iw_cpu': _params.iwCpu,
      'iw_memory': _params.iwMemory,
      'iw_replicas': _params.iwReplicas,
      'kafka_cpu': _params.kafkaCpu,
      'kafka_memory': _params.kafkaMemory,
      'proxy_cpu': _params.proxyCpu,
      'proxy_memory': _params.proxyMemory,
      'proxy_replicas': _params.proxyReplicas,
      'qc_cpu': _params.qcCpu,
      'qc_memory': _params.qcMemory,
      'qc_replicas': _params.qcReplicas,
      'qw_cpu': _params.qwCpu,
      'qw_memory': _params.qwMemory,
      'qw_replicas': _params.qwReplicas,
      'rc_cpu': _params.rcCpu,
      'rc_memory': _params.rcMemory,
      'rc_replicas': _params.rcReplicas,
      'vector': _params.vector,
      'vector_dimension': _params.vectorDimension,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createMilvusServiceScale');

    const parameters = {
      options: {
        url: '/v3/milvus_services/{id}/scale',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get milvus service databases.
   *
   * Get milvus service databases.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.serviceId - service id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.MilvusServiceDatabases>>}
   */
  public listMilvusServiceDatabases(
    params: WatsonxDataV3.ListMilvusServiceDatabasesParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.MilvusServiceDatabases>> {
    const _params = { ...params };
    const _requiredParams = ['serviceId'];
    const _validParams = ['serviceId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'service_id': _params.serviceId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listMilvusServiceDatabases');

    const parameters = {
      options: {
        url: '/v3/milvus_services/{service_id}/databases',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get milvus database collections.
   *
   * Get milvus database collections.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.serviceId - service id.
   * @param {string} params.databaseId - database_id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.MilvusDatabaseCollections>>}
   */
  public listMilvusDatabaseCollections(
    params: WatsonxDataV3.ListMilvusDatabaseCollectionsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.MilvusDatabaseCollections>> {
    const _params = { ...params };
    const _requiredParams = ['serviceId', 'databaseId'];
    const _validParams = ['serviceId', 'databaseId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'service_id': _params.serviceId,
      'database_id': _params.databaseId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listMilvusDatabaseCollections');

    const parameters = {
      options: {
        url: '/v3/milvus_services/{service_id}/databases/{database_id}/collections',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get milvus database collection partitions.
   *
   * Get milvus database collection partitions.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.serviceId - service id.
   * @param {string} params.databaseId - database id.
   * @param {string} params.collectionName - collection name.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.MilvusDatabasePartitions>>}
   */
  public listMilvusDatabasePartitions(
    params: WatsonxDataV3.ListMilvusDatabasePartitionsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.MilvusDatabasePartitions>> {
    const _params = { ...params };
    const _requiredParams = ['serviceId', 'databaseId', 'collectionName'];
    const _validParams = ['serviceId', 'databaseId', 'collectionName', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'service_id': _params.serviceId,
      'database_id': _params.databaseId,
      'collection_name': _params.collectionName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listMilvusDatabasePartitions');

    const parameters = {
      options: {
        url: '/v3/milvus_services/{service_id}/databases/{database_id}/collections/{collection_name}/partitions',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update milvus service storage.
   *
   * Update details of milvus service bucket.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.serviceId - service id.
   * @param {JsonPatchOperation[]} params.body - Update milvus service bucket.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.MilvusService>>}
   */
  public updateMilvusServiceBucket(
    params: WatsonxDataV3.UpdateMilvusServiceBucketParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.MilvusService>> {
    const _params = { ...params };
    const _requiredParams = ['serviceId', 'body'];
    const _validParams = ['serviceId', 'body', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = _params.body;
    const path = {
      'service_id': _params.serviceId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'updateMilvusServiceBucket');

    const parameters = {
      options: {
        url: '/v3/milvus_services/{service_id}/storage',
        method: 'PATCH',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json-patch+json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * semanticAutomationLayer
   ************************/

  /**
   * Get semantic automation layer Integration of the instance.
   *
   * Get basic details of the semantic automation layer(SAL) integration with IBM Knowledge Catalog(IKC).
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SalIntegration>>}
   */
  public getSalIntegration(
    params?: WatsonxDataV3.GetSalIntegrationParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SalIntegration>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getSalIntegration');

    const parameters = {
      options: {
        url: '/v3/sal_integration',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create semantic automation layer integration with IBM Knowledge Catalog.
   *
   * Create semantic automation layer integration(SAL) with IBM Knowledge Catalog(IKC).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.apikey - IAM apikey with IBM Knowledge Catalog access.
   * @param {string} params.engineId - ID of the engine(support presto or prestissimo) to be registered for SAL
   * integration.
   * @param {string} [params.storageResourceCrn] - COS storage resource crn, required on Watsonx.data SaaS and not
   * applicable for CPD.
   * @param {string} [params.storageType] - COS storage type, required on Watsonx.data SaaS and not applicable for CPD.
   * @param {boolean} [params.trialPlan] - whether the integration is based on IKC trial plan, which is available on
   * IBMCloud only.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SalIntegration>>}
   */
  public createSalIntegration(
    params: WatsonxDataV3.CreateSalIntegrationParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SalIntegration>> {
    const _params = { ...params };
    const _requiredParams = ['apikey', 'engineId'];
    const _validParams = ['apikey', 'engineId', 'storageResourceCrn', 'storageType', 'trialPlan', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'apikey': _params.apikey,
      'engine_id': _params.engineId,
      'storage_resource_crn': _params.storageResourceCrn,
      'storage_type': _params.storageType,
      'trial_plan': _params.trialPlan,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createSalIntegration');

    const parameters = {
      options: {
        url: '/v3/sal_integration',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete Semantic Automation Layer(SAL) integration.
   *
   * Remove Semantic automation layer integration.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deleteSalIntegration(
    params?: WatsonxDataV3.DeleteSalIntegrationParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deleteSalIntegration');

    const parameters = {
      options: {
        url: '/v3/sal_integration',
        method: 'DELETE',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Patch Semantic automation layer integration.
   *
   * Update Semantic automation layer(SAL) integration properties.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.apikey] - IAM apikey.
   * @param {string} [params.engineId] - Engine ID(support presto and prestissimo) of which registering for integration.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SalIntegration>>}
   */
  public updateSalIntegration(
    params?: WatsonxDataV3.UpdateSalIntegrationParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SalIntegration>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['apikey', 'engineId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'apikey': _params.apikey,
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'updateSalIntegration');

    const parameters = {
      options: {
        url: '/v3/sal_integration',
        method: 'PATCH',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/merge-patch+json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * create enrichment jobs of schema(or tables in schema).
   *
   * create enrichment job of schemas, notifing the schema(tables) changes to IBM Knowledge Catalog(IKC) and kick off an
   * import and metadata enrichment job.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {EnrichmentObj[]} [params.changes] - changed to be submitted and processed by the enrichment job.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public createSalIntegrationEnrichment(
    params?: WatsonxDataV3.CreateSalIntegrationEnrichmentParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['changes', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'changes': _params.changes,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createSalIntegrationEnrichment');

    const parameters = {
      options: {
        url: '/v3/sal_integration/enrichment',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List semantic enriched data_assets in IBM Knowledge catalog.
   *
   * List semantic enrichment data_assets(enriched tables) associated with the schema by IBM Knowledge Catalog project
   * id, which can be fetched from /sal_integration/mappings.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.projectId - project id of enriched schema in IBM Knowledge Catalog.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SalEnrichmentDataAssetCollection>>}
   */
  public listSalIntegrationEnrichmentAssets(
    params: WatsonxDataV3.ListSalIntegrationEnrichmentAssetsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SalEnrichmentDataAssetCollection>> {
    const _params = { ...params };
    const _requiredParams = ['projectId'];
    const _validParams = ['projectId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'project_id': _params.projectId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listSalIntegrationEnrichmentAssets');

    const parameters = {
      options: {
        url: '/v3/sal_integration/enrichment/data_assets',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get semantic enrichment data_asset associated with the table.
   *
   * Get semantic enrichment data_asset associated with the table by IBM Knowledge Catalog project id and asset id,
   * which can be retrived by /sal_integration/enrichement/data_assets.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.projectId - enrichment project id in IBM Knowledge Catalog.
   * @param {string} params.id - enrichment data asset id in IBM Knowledge Catalog.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SalEnrichmentDataAsset>>}
   */
  public getSalIntegrationEnrichmentAssetsById(
    params: WatsonxDataV3.GetSalIntegrationEnrichmentAssetsByIdParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SalEnrichmentDataAsset>> {
    const _params = { ...params };
    const _requiredParams = ['projectId', 'id'];
    const _validParams = ['projectId', 'id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'project_id': _params.projectId,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getSalIntegrationEnrichmentAssetsById');

    const parameters = {
      options: {
        url: '/v3/sal_integration/enrichment/data_assets/{id}',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get metadata enrichment global settings.
   *
   * Get metadata enrichment global settings.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SalEnrichmentSettings>>}
   */
  public getSalIntegrationEnrichmentGlobalSettings(
    params?: WatsonxDataV3.GetSalIntegrationEnrichmentGlobalSettingsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SalEnrichmentSettings>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getSalIntegrationEnrichmentGlobalSettings');

    const parameters = {
      options: {
        url: '/v3/sal_integration/enrichment/global_settings',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create or update metadata enrichment global settings.
   *
   * Create or update metadata enrichment global settings.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {SalEnrichmentSettingsExpansion} params.expansion - semantic expansion.
   * @param {SalEnrichmentSettingsTermAssignment} params.termAssignment - semantic expansion.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SalEnrichmentSettings>>}
   */
  public replaceSalIntegrationEnrichmentGlobalSettings(
    params: WatsonxDataV3.ReplaceSalIntegrationEnrichmentGlobalSettingsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SalEnrichmentSettings>> {
    const _params = { ...params };
    const _requiredParams = ['expansion', 'termAssignment'];
    const _validParams = ['expansion', 'termAssignment', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'expansion': _params.expansion,
      'term_assignment': _params.termAssignment,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'replaceSalIntegrationEnrichmentGlobalSettings');

    const parameters = {
      options: {
        url: '/v3/sal_integration/enrichment/global_settings',
        method: 'PUT',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List semantic enrichment jobs associated with the schema.
   *
   * List semantic enrichment jobs in wkc that associated with the schema by project id(in the given project from IBM
   * Knowledge Catalog perspective).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.projectId - IBM Knowledge Catalog project id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SalEnrichmentJobs>>}
   */
  public listSalIntegrationEnrichmentJobs(
    params: WatsonxDataV3.ListSalIntegrationEnrichmentJobsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SalEnrichmentJobs>> {
    const _params = { ...params };
    const _requiredParams = ['projectId'];
    const _validParams = ['projectId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'project_id': _params.projectId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listSalIntegrationEnrichmentJobs');

    const parameters = {
      options: {
        url: '/v3/sal_integration/enrichment/jobs',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List semantic enrichment job runs associated with the schema.
   *
   * List runs of an SAL enrichement job associated with the schema(project in IBM Knowledge Catalog perspective).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.jobId - enrichment job id, refered as 'asset_id' in '/Sal_integration/enrichment/jobs'.
   * @param {string} params.projectId - enrichment project id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SalEnrichmentJobRuns>>}
   */
  public listSalIntegrationEnrichmentJobRuns(
    params: WatsonxDataV3.ListSalIntegrationEnrichmentJobRunsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SalEnrichmentJobRuns>> {
    const _params = { ...params };
    const _requiredParams = ['jobId', 'projectId'];
    const _validParams = ['jobId', 'projectId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'project_id': _params.projectId,
    };

    const path = {
      'job_id': _params.jobId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listSalIntegrationEnrichmentJobRuns');

    const parameters = {
      options: {
        url: '/v3/sal_integration/enrichment/jobs/{job_id}/runs',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get semantic enrichment job run logs associated with the job run.
   *
   * Get semantic enrichment job run logs associated with the job run.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.jobId - IBM Knowledge Catalog enrichment job id.
   * @param {string} params.runId - IBM Knowledge Catalog enrichment job run id.
   * @param {string} params.projectId - IBM Knowledge Catalog project id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SalEnrichmentJobRunLogs>>}
   */
  public getSalIntegrationEnrichmentJobRunLogs(
    params: WatsonxDataV3.GetSalIntegrationEnrichmentJobRunLogsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SalEnrichmentJobRunLogs>> {
    const _params = { ...params };
    const _requiredParams = ['jobId', 'runId', 'projectId'];
    const _validParams = ['jobId', 'runId', 'projectId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'project_id': _params.projectId,
    };

    const path = {
      'job_id': _params.jobId,
      'run_id': _params.runId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getSalIntegrationEnrichmentJobRunLogs');

    const parameters = {
      options: {
        url: '/v3/sal_integration/enrichment/jobs/{job_id}/runs/{run_id}/logs',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * get metadata enrichment settings for a IBM Knowledge Catalog project(schema).
   *
   * get metadata enrichment settings for a IBM Knowledge Catalog project(schema).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.projectId - IBM Knowledge Catalog project id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SalEnrichmentSettings>>}
   */
  public getSalIntegrationEnrichmentProjectSettings(
    params: WatsonxDataV3.GetSalIntegrationEnrichmentProjectSettingsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SalEnrichmentSettings>> {
    const _params = { ...params };
    const _requiredParams = ['projectId'];
    const _validParams = ['projectId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'project_id': _params.projectId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getSalIntegrationEnrichmentProjectSettings');

    const parameters = {
      options: {
        url: '/v3/sal_integration/enrichment/project_settings',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create or update project level metadata enrichment settings.
   *
   * Create or update metadata enrichment settings for a IBM Knowledge Catalog project(enriched schema).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.projectId - IBM Knowledge Catalog project id.
   * @param {SalEnrichmentSettingsExpansion} params.expansion - semantic expansion.
   * @param {SalEnrichmentSettingsTermAssignment} params.termAssignment - semantic expansion.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public replaceSalIntegrationEnrichmentProjectSettings(
    params: WatsonxDataV3.ReplaceSalIntegrationEnrichmentProjectSettingsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['projectId', 'expansion', 'termAssignment'];
    const _validParams = ['projectId', 'expansion', 'termAssignment', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'expansion': _params.expansion,
      'term_assignment': _params.termAssignment,
    };

    const query = {
      'project_id': _params.projectId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'replaceSalIntegrationEnrichmentProjectSettings');

    const parameters = {
      options: {
        url: '/v3/sal_integration/enrichment/project_settings',
        method: 'PUT',
        body,
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get list of uploaded glossary terms.
   *
   * Get list of uploaded glossary terms.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SalGlossaryTerms>>}
   */
  public getSalIntegrationGlossaryTerms(
    params?: WatsonxDataV3.GetSalIntegrationGlossaryTermsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SalGlossaryTerms>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getSalIntegrationGlossaryTerms');

    const parameters = {
      options: {
        url: '/v3/sal_integration/glossary/terms',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Upload semantic enrichment business terms glossary.
   *
   * Upload semantic enrichment business terms glossary.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.replaceOption - glossary upload replace option.
   * @param {NodeJS.ReadableStream | Buffer} [params.glossaryCsv] - Glossary CSV file.
   * @param {string} [params.glossaryCsvContentType] - The content type of glossaryCsv.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SalGlossaryUploadProcess>>}
   */
  public createSalIntegrationUploadGlossary(
    params: WatsonxDataV3.CreateSalIntegrationUploadGlossaryParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SalGlossaryUploadProcess>> {
    const _params = { ...params };
    const _requiredParams = ['replaceOption'];
    const _validParams = ['replaceOption', 'glossaryCsv', 'glossaryCsvContentType', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const formData = {
      'replace_option': _params.replaceOption,
      'glossary_csv': {
        data: _params.glossaryCsv,
        contentType: _params.glossaryCsvContentType,
      },
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createSalIntegrationUploadGlossary');

    const parameters = {
      options: {
        url: '/v3/sal_integration/glossary/upload_processes',
        method: 'POST',
        formData,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get status of glossary uploading process(job).
   *
   * Get status of glossary uploading process(job).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - upload process id.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SalGlossaryUploadStatus>>}
   */
  public getSalIntegrationUploadGlossaryStatus(
    params: WatsonxDataV3.GetSalIntegrationUploadGlossaryStatusParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SalGlossaryUploadStatus>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getSalIntegrationUploadGlossaryStatus');

    const parameters = {
      options: {
        url: '/v3/sal_integration/glossary/upload_processes/{id}/status',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Post watsonx.data schema to fetch mapped catalog and project.
   *
   * use the list of watsonx.data catalog and schema to fetch mapped IKC project id and catalog id.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.catalogName] - catalog name in Watsonx.data.
   * @param {string} [params.schemaName] - schema name in Watsonx.data.
   * @param {string} [params.next] - reference as an continue of reading results from earlier query (if the results
   * exceed 100).
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SalIntegrationMappings>>}
   */
  public listSalIntegrationEnrichmentMappings(
    params?: WatsonxDataV3.ListSalIntegrationEnrichmentMappingsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SalIntegrationMappings>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['catalogName', 'schemaName', 'next', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'catalog_name': _params.catalogName,
      'schema_name': _params.schemaName,
      'next': _params.next,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listSalIntegrationEnrichmentMappings');

    const parameters = {
      options: {
        url: '/v3/sal_integration/mappings',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List Semantic Search queries snapshot.
   *
   * List Semantic Search queries snapshot.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.engineId] - engine id.
   * @param {boolean} [params.schemaSearchEnabled] - enable schemas search.
   * @param {boolean} [params.columnSearchEnabled] - enable columns search.
   * @param {number} [params.maxResultNumber] - max history records limitation.
   * @param {boolean} [params.runSearch] - if the response include actual search result.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SemanticSearchList>>}
   */
  public listSemanticSearchQueries(
    params?: WatsonxDataV3.ListSemanticSearchQueriesParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SemanticSearchList>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['engineId', 'schemaSearchEnabled', 'columnSearchEnabled', 'maxResultNumber', 'runSearch', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'engine_id': _params.engineId,
      'schema_search_enabled': _params.schemaSearchEnabled,
      'column_search_enabled': _params.columnSearchEnabled,
      'max_result_number': _params.maxResultNumber,
      'run_search': _params.runSearch,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listSemanticSearchQueries');

    const parameters = {
      options: {
        url: '/v3/sal_integration/semantic_search/queries',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Trigger a global search among IBM Knowledge Catalog metadata by given query.
   *
   * Execute a query of global search among IBM Knowledge Catalog metadata.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} params.queryInput - search string.
   * @param {SemanticSearchBodySearchConfig} [params.searchConfig] - request payload for semantic search configurations.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.SemanticSearch>>}
   */
  public createSemanticSearchQueries(
    params: WatsonxDataV3.CreateSemanticSearchQueriesParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.SemanticSearch>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'queryInput'];
    const _validParams = ['engineId', 'queryInput', 'searchConfig', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'engine_id': _params.engineId,
      'query_input': _params.queryInput,
      'search_config': _params.searchConfig,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createSemanticSearchQueries');

    const parameters = {
      options: {
        url: '/v3/sal_integration/semantic_search/queries',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Clear semantic search query history.
   *
   * Delete the history records of semantic search in batch, if no batch_size given, entire semantic search history list
   * will be removed.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {number} [params.batchSize] - max number to queries to be deleted (most recent to least), if no number
   * provided all queries history will be clear.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deleteSemanticSearchQueries(
    params?: WatsonxDataV3.DeleteSemanticSearchQueriesParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['batchSize', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'batch_size': _params.batchSize,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deleteSemanticSearchQueries');

    const parameters = {
      options: {
        url: '/v3/sal_integration/semantic_search/queries',
        method: 'DELETE',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete semantic search query history by record id.
   *
   * Delete the history records of semantic search by record id.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - id of the semanric search query record.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID for software , CRN for SAAS.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deleteSemanticSearchQueriesById(
    params: WatsonxDataV3.DeleteSemanticSearchQueriesByIdParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['id'];
    const _validParams = ['id', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deleteSemanticSearchQueriesById');

    const parameters = {
      options: {
        url: '/v3/sal_integration/semantic_search/queries/{id}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete Semantic automation layer(SAL) integration metadata.
   *
   * Delete SAL integration metadata.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deleteSalMetadata(
    params?: WatsonxDataV3.DeleteSalMetadataParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deleteSalMetadata');

    const parameters = {
      options: {
        url: '/v3/sal_metadata',
        method: 'DELETE',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * ingestion
   ************************/

  /**
   * List ingestion jobs.
   *
   * Get list of ingestion jobs.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.authInstanceId - Lakehouse Instance ID.
   * @param {string} [params.start] - Page offset.
   * @param {number} [params.limit] - Page size.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.IngestionJobCollection>>}
   */
  public listIngestionJobs(
    params: WatsonxDataV3.ListIngestionJobsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.IngestionJobCollection>> {
    const _params = { ...params };
    const _requiredParams = ['authInstanceId'];
    const _validParams = ['authInstanceId', 'start', 'limit', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'start': _params.start,
      'limit': _params.limit,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listIngestionJobs');

    const parameters = {
      options: {
        url: '/v3/lhingestion/api/v1/ingestion/jobs',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Submit ingestion job.
   *
   * Submit an ingestion job with the provided source and target details.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.authInstanceId - Lakehouse Instance ID.
   * @param {string} params.id - Job ID of the ingestion job.
   * @param {SourceDetails} params.source - Details of ingestion source files.
   * @param {TargetDetails} params.target - Details of ingestion target table.
   * @param {IngestionEngine} [params.engine] - Spark Engine Detail.
   * @param {string} [params.engineId] - ID of the spark engine to be used for ingestion.
   * @param {ExecuteConfig} [params.executeConfig] - Ingestion engine configuration.
   * @param {IcebergSourceTable} [params.sourceIcebergTable] - Iceberg source table information.
   * @param {string} [params.partitionBy] - Comma delimited list of columns to partition by.
   * @param {CapacityDetails} [params.capacity] - Capacity Details.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.IngestionJob>>}
   */
  public createIngestionJob(
    params: WatsonxDataV3.CreateIngestionJobParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.IngestionJob>> {
    const _params = { ...params };
    const _requiredParams = ['authInstanceId', 'id', 'source', 'target'];
    const _validParams = ['authInstanceId', 'id', 'source', 'target', 'engine', 'engineId', 'executeConfig', 'sourceIcebergTable', 'partitionBy', 'capacity', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'id': _params.id,
      'source': _params.source,
      'target': _params.target,
      'engine': _params.engine,
      'engine_id': _params.engineId,
      'execute_config': _params.executeConfig,
      'source_iceberg_table': _params.sourceIcebergTable,
      'partition_by': _params.partitionBy,
      'capacity': _params.capacity,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createIngestionJob');

    const parameters = {
      options: {
        url: '/v3/lhingestion/api/v1/ingestion/jobs',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get ingestion job by ID.
   *
   * Get ingestion job by ID.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.authInstanceId - Lakehouse Instance ID.
   * @param {string} params.id - Ingestion Job ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.IngestionJob>>}
   */
  public getIngestionJob(
    params: WatsonxDataV3.GetIngestionJobParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.IngestionJob>> {
    const _params = { ...params };
    const _requiredParams = ['authInstanceId', 'id'];
    const _validParams = ['authInstanceId', 'id', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getIngestionJob');

    const parameters = {
      options: {
        url: '/v3/lhingestion/api/v1/ingestion/jobs/{id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * accessManagement
   ************************/

  /**
   * List Resource Access Policies.
   *
   * Retrieves a comprehensive list of access control policies that define permissions granted to users and user groups
   * for various watsonx.data resources. This endpoint allows you to query access policies by resource type, resource
   * identifiers, or resource names. The response includes detailed information about subjects (users/groups),
   * resources, permissions, and policy states.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - The unique identifier for your watsonx.data instance.
   * @param {string} [params.resourceType] - Specifies the type of watsonx.data resource for which to retrieve access
   * policies. Valid resource types include: 'catalog', 'database', 'storage', 'presto', 'prestissimo', 'spark',
   * 'milvus', and 'datastax'.
   * @param {string[]} [params.resourceId] - An array of resource identifiers to filter access policies. Specify one or
   * more resource IDs (up to 10) to retrieve policies for specific resources. Resource IDs are applicable for resource
   * types: 'presto', 'prestissimo', 'spark', 'milvus', 'storage', and 'database'.
   * @param {string[]} [params.resourceName] - An array of resource names to filter access policies. Specify one or more
   * resource names (up to 10) to retrieve policies for specific catalog resources. This parameter is primarily used
   * when the resource_type is 'catalog'.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.AccessPolicies>>}
   */
  public listResourceAccessPolicies(
    params?: WatsonxDataV3.ListResourceAccessPoliciesParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.AccessPolicies>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'resourceType', 'resourceId', 'resourceName', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'resource_type': _params.resourceType,
      'resource_id': _params.resourceId,
      'resource_name': _params.resourceName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listResourceAccessPolicies');

    const parameters = {
      options: {
        url: '/v1/access/access_policies',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Bulk Update Resource Access Policies.
   *
   * This API enables bulk updates of resource access policies, which define user access and permissions for specific
   * resources.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {AccessPolicyBulkUpdate[]} [params.accessPolicies] - Array of access policies. Each access policy contains
   * metadata, permission,resource, state and subject.
   * @param {string} [params.authInstanceId] - Unique identifier assigned to a specific watsonx.data instance.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.AccessPolicyBulkUpdateResponse>>}
   */
  public bulkUpdateResourceAccessPolicies(
    params?: WatsonxDataV3.BulkUpdateResourceAccessPoliciesParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.AccessPolicyBulkUpdateResponse>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['accessPolicies', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'access_policies': _params.accessPolicies,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'bulkUpdateResourceAccessPolicies');

    const parameters = {
      options: {
        url: '/v1/access/access_policies/bulk_update',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Revoke Resource Access Policies.
   *
   * Remove users and user groups from the access policy for the resource id or name provided. You require
   * `can_administer` permission to perform this action.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {ResourceDetails[]} [params.resources] - List of resources to which the access policies should be applied.
   * @param {SubjectRevoke[]} [params.subjects] - List of subjects (users and user groups) to which the access policy
   * applies, along with the specified permissions.
   * @param {string} [params.authInstanceId] - Unique identifier assigned to a specific watsonx.data instance.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public revokeResourceAccessPolicies(
    params?: WatsonxDataV3.RevokeResourceAccessPoliciesParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['resources', 'subjects', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'resources': _params.resources,
      'subjects': _params.subjects,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'revokeResourceAccessPolicies');

    const parameters = {
      options: {
        url: '/v1/access/access_policies/revoke',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Filter Resource Access Policies On Users And User Groups.
   *
   * Retrieve the permissions that have been granted to users and user groups for the resource types with specified ids
   * and names and given users or usergroups.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {AccessPoliciesSearch[]} params.accessPoliciesSearch - Array of access policies. Each access policy contains
   * metadata, permission,resource, state and subject.
   * @param {string} [params.authInstanceId] - Unique identifier assigned to a specific watsonx.data instance.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.AccessPolicies>>}
   */
  public filterResourceAccessPoliciesOnUsersAndUsergroups(
    params: WatsonxDataV3.FilterResourceAccessPoliciesOnUsersAndUsergroupsParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.AccessPolicies>> {
    const _params = { ...params };
    const _requiredParams = ['accessPoliciesSearch'];
    const _validParams = ['accessPoliciesSearch', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'access_policies_search': _params.accessPoliciesSearch,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'filterResourceAccessPoliciesOnUsersAndUsergroups');

    const parameters = {
      options: {
        url: '/v1/access/advanced_policy_search',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List data policies.
   *
   * Get a list of all the data policies defined on the data to define, extend, limit, and deny access created by the
   * user with admin privileges.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - Unique identifier assigned to a specific watsonx.data instance.
   * @param {string} [params.catalogName] - name of catalog as query param to filter the data polciies.
   * @param {string} [params.resourceId] - resource identifier as query param to filter the data policies.
   * @param {string} [params.status] - policy status as query param to filter the data policies.
   * @param {boolean} [params.includeMetadata] - include_metadata is a boolean query param which can be set as true if
   * metadata policy is needed in response of get data policies else set it as false.
   * @param {boolean} [params.includeRules] - include_rules is a boolean query param which can be set as true if rules
   * are needed in response of get data policies else set it as false.
   * @param {string} [params.bucketName] - Bucket Name is a qualified name of a storage bucket . It is of the format
   * `bucket name`. Specify `bucket_name` along with `data_artifact` to fetch policy for a bucket applicable to a data
   * artifact.
   * @param {string} [params.serviceName] - Service Name is a qualified name of a service used . It is of the format
   * `service name`. Specify `service_name` along with `data_artifact` to fetch policy for a service applicable to a
   * data artifact.
   * @param {string} [params.dataArtifact] - Data Artifact is a fully qualified table name . It is of the format `schema
   * name:table name`. Specify `catalog_name` along with `data_artifact` to fetch policy applicable to a data artifact.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.PolicyV2Collection>>}
   */
  public listDataPolicies(
    params?: WatsonxDataV3.ListDataPoliciesParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.PolicyV2Collection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'catalogName', 'resourceId', 'status', 'includeMetadata', 'includeRules', 'bucketName', 'serviceName', 'dataArtifact', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'catalog_name': _params.catalogName,
      'resource_id': _params.resourceId,
      'status': _params.status,
      'include_metadata': _params.includeMetadata,
      'include_rules': _params.includeRules,
      'bucket_name': _params.bucketName,
      'service_name': _params.serviceName,
      'data_artifact': _params.dataArtifact,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'listDataPolicies');

    const parameters = {
      options: {
        url: '/v1/access/data_policies',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create a new data policy.
   *
   * This api is used to create a new data policy, which is L3 access policy. This policy defines the users and their
   * permissions on the data level.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.dataArtifact - The data artifact provides the full path of the resource to which the data
   * policy applies.
   * @param {RuleV2[]} params.rules - rules is the array RuleV2. RuleV2 contains the effect, actions and grantees.
   * @param {string} [params.catalogName] - name of the catalog in which the data policy resource is residing.
   * @param {string} [params.catalogType] - type of the catalog in which the data policy resource is residing.
   * @param {string} [params.description] - a more detailed description of the policy.
   * @param {string} [params.policyName] - The unique name of the data policy.It should be in a given pattern.
   * @param {string} [params.resourceId] - identifier of the resource on which the data policy is created on.
   * @param {string} [params.status] - status of data policy. Values can be active or inactive.
   * @param {string} [params.authInstanceId] - Unique identifier assigned to a specific watsonx.data instance.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.PolicyV2>>}
   */
  public createDataPolicy(
    params: WatsonxDataV3.CreateDataPolicyParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.PolicyV2>> {
    const _params = { ...params };
    const _requiredParams = ['dataArtifact', 'rules'];
    const _validParams = ['dataArtifact', 'rules', 'catalogName', 'catalogType', 'description', 'policyName', 'resourceId', 'status', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'data_artifact': _params.dataArtifact,
      'rules': _params.rules,
      'catalog_name': _params.catalogName,
      'catalog_type': _params.catalogType,
      'description': _params.description,
      'policy_name': _params.policyName,
      'resource_id': _params.resourceId,
      'status': _params.status,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'createDataPolicy');

    const parameters = {
      options: {
        url: '/v1/access/data_policies',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Bulk delete data policies.
   *
   * Delete multiple data policies together. You require catalog `can_administer` permission to perform this action.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - Unique identifier assigned to a specific watsonx.data instance.
   * @param {string} [params.policies] - Data policies that must be deleted is passing as query param, for example:
   * ?policies=policy1,policy2.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deleteDataPolicies(
    params?: WatsonxDataV3.DeleteDataPoliciesParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'policies', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'policies': _params.policies,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deleteDataPolicies');

    const parameters = {
      options: {
        url: '/v1/access/data_policies',
        method: 'DELETE',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get data policy.
   *
   * Get a data policy details by passing data policy name as path param.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.name - Policy name which is passing as path param to get the data policy details.
   * @param {string} [params.authInstanceId] - Unique identifier assigned to a specific watsonx.data instance.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.PolicyV2>>}
   */
  public getDataPolicy(
    params: WatsonxDataV3.GetDataPolicyParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.PolicyV2>> {
    const _params = { ...params };
    const _requiredParams = ['name'];
    const _validParams = ['name', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'name': _params.name,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'getDataPolicy');

    const parameters = {
      options: {
        url: '/v1/access/data_policies/{name}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Replace data policy.
   *
   * Replaces existing data policy details with the specified details. You require catalog `can_administer` permission
   * to perform this action.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.name - Name of data policy as path param which needs to be updated.
   * @param {string} params.dataArtifact - The data artifact provides the full path of the resource to which the data
   * policy applies.
   * @param {RuleV2[]} params.rules - rules is the array RuleV2. RuleV2 contains the effect, actions and grantees.
   * @param {string} [params.catalogName] - name of the catalog in which the data policy resource is residing.
   * @param {string} [params.catalogType] - type of the catalog in which the data policy resource is residing.
   * @param {string} [params.description] - a more detailed description of the policy.
   * @param {string} [params.policyName] - The unique name of the data policy.It should be in a given pattern.
   * @param {string} [params.resourceId] - identifier of the resource on which the data policy is created on.
   * @param {string} [params.status] - status of data policy. Values can be active or inactive.
   * @param {string} [params.authInstanceId] - Unique identifier assigned to a specific watsonx.data instance.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.PolicyV2>>}
   */
  public replaceDataPolicy(
    params: WatsonxDataV3.ReplaceDataPolicyParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.PolicyV2>> {
    const _params = { ...params };
    const _requiredParams = ['name', 'dataArtifact', 'rules'];
    const _validParams = ['name', 'dataArtifact', 'rules', 'catalogName', 'catalogType', 'description', 'policyName', 'resourceId', 'status', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'data_artifact': _params.dataArtifact,
      'rules': _params.rules,
      'catalog_name': _params.catalogName,
      'catalog_type': _params.catalogType,
      'description': _params.description,
      'policy_name': _params.policyName,
      'resource_id': _params.resourceId,
      'status': _params.status,
    };

    const path = {
      'name': _params.name,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'replaceDataPolicy');

    const parameters = {
      options: {
        url: '/v1/access/data_policies/{name}',
        method: 'PUT',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete a data policy.
   *
   * Delete a data policy by passing data policy name. You require catalog `can_administer` permission to perform this
   * action.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.name - Policy name which is passing as path param to delete.
   * @param {string} [params.authInstanceId] - Unique identifier assigned to a specific watsonx.data instance.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>>}
   */
  public deleteDataPolicy(
    params: WatsonxDataV3.DeleteDataPolicyParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['name'];
    const _validParams = ['name', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'name': _params.name,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'deleteDataPolicy');

    const parameters = {
      options: {
        url: '/v1/access/data_policies/{name}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update data policy.
   *
   * Update data policy. Currently, you can update only users/groups in the data policy rules. You require
   * `can_administer` permission to perform this action.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.name - data policy name as path param to update the users or user groups using PATCH method.
   * @param {JsonPatchOperation[]} params.body - PolicyV2Patch schema contains operation, path and value. Operation can
   * be add or remove, JSON pointer path of the property to be updated in the data policy. Currently only grantees
   * inside rules (/rules/[ruleIndex]/grantees) can be updated and value contain list of rules.
   * @param {string} [params.authInstanceId] - Unique identifier assigned to a specific watsonx.data instance.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV3.Response<WatsonxDataV3.PolicyV2>>}
   */
  public updateDataPolicy(
    params: WatsonxDataV3.UpdateDataPolicyParams
  ): Promise<WatsonxDataV3.Response<WatsonxDataV3.PolicyV2>> {
    const _params = { ...params };
    const _requiredParams = ['name', 'body'];
    const _validParams = ['name', 'body', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = _params.body;
    const path = {
      'name': _params.name,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV3.DEFAULT_SERVICE_NAME, 'v3', 'updateDataPolicy');

    const parameters = {
      options: {
        url: '/v1/access/data_policies/{name}',
        method: 'PATCH',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          this.baseOptions.headers,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json-patch+json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }
}

/*************************
 * interfaces
 ************************/

namespace WatsonxDataV3 {
  /** An operation response. */
  export interface Response<T = any> {
    result: T;
    status: number;
    statusText: string;
    headers: IncomingHttpHeaders;
  }

  /** The callback for a service request. */
  export type Callback<T> = (error: any, response?: Response<T>) => void;

  /** The body of a service request that returns no response data. */
  export interface EmptyObject {}

  /** A standard JS object, defined to avoid the limitations of `Object` and `object` */
  export interface JsonObject {
    [key: string]: any;
  }

  /*************************
   * request interfaces
   ************************/

   interface DefaultParams {
     headers?: OutgoingHttpHeaders;
     signal?: AbortSignal;
   }

  /** Parameters for the `createHdfsStorage` operation. */
  export interface CreateHdfsStorageParams extends DefaultParams {
    /** Storage display name. */
    displayName: string;
    /** Storage type. */
    type: string;
    /** HMS Thrift URI. */
    hmsThriftUri: string;
    /** HMS Thrift Port. */
    hmsThriftPort: number;
    /** contents of core-site.xml file. */
    coreSite: string;
    /** contents of hdfs-site.xml file. */
    hdfsSite: string;
    /** Kerberos Flag. */
    kerberos: string;
    /** Catalog name. */
    catalogName: string;
    /** Catalog type. */
    catalogType: string;
    /** Kerberos configuration file. */
    krb5Config?: string;
    /** Hive keytab file. */
    hiveKeytab?: NodeJS.ReadableStream | Buffer;
    /** The content type of hiveKeytab. */
    hiveKeytabContentType?: string;
    /** HDFS keytab file. */
    hdfsKeytab?: NodeJS.ReadableStream | Buffer;
    /** The content type of hdfsKeytab. */
    hdfsKeytabContentType?: string;
    /** Hive server principal. */
    hiveServerPrincipal?: string;
    /** Hive client principal. */
    hiveClientPrincipal?: string;
    /** HDFS principal. */
    hdfsPrincipal?: string;
    /** Database description. */
    description?: string;
    /** Created on. */
    createdAt?: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `listStorageRegistrations` operation. */
  export interface ListStorageRegistrationsParams extends DefaultParams {
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `createStorageRegistration` operation. */
  export interface CreateStorageRegistrationParams extends DefaultParams {
    /** storage description. */
    description: string;
    /** Storage display name. */
    displayName: string;
    /** managed by. */
    managedBy: CreateStorageRegistrationConstants.ManagedBy | string;
    /** storage type. */
    type: CreateStorageRegistrationConstants.Type | string;
    /** storage catalog. */
    associatedCatalog?: StorageCatalogPrototype;
    /** storage details. */
    connection?: StorageDetails;
    /** Region where the storage is located. */
    region?: string;
    /** parameter to show whether the bucket is of acl or qhmm use. Allowed values are qhmm or acl. */
    storageUse?: string;
    /** tags. */
    tags?: string[];
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Constants for the `createStorageRegistration` operation. */
  export namespace CreateStorageRegistrationConstants {
    /** managed by. */
    export enum ManagedBy {
      IBM = 'ibm',
      CUSTOMER = 'customer',
    }
    /** storage type. */
    export enum Type {
      AWS_S3 = 'aws_s3',
      MINIO = 'minio',
      IBM_COS = 'ibm_cos',
      IBM_CEPH = 'ibm_ceph',
      ADLS_GEN1 = 'adls_gen1',
      ADLS_GEN2 = 'adls_gen2',
      GOOGLE_CS = 'google_cs',
      OZONE = 'ozone',
      IBM_STORAGE_SCALE = 'ibm_storage_scale',
      S3 = 's3',
    }
  }

  /** Parameters for the `getStorageRegistration` operation. */
  export interface GetStorageRegistrationParams extends DefaultParams {
    /** storage id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
    /** Skip MDS call when Unity catalog is added. */
    skipMdsCall?: boolean;
  }

  /** Parameters for the `deleteStorageRegistration` operation. */
  export interface DeleteStorageRegistrationParams extends DefaultParams {
    /** storage id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
    /** Skip MDS call when Unity catalog is added. */
    skipMdsCall?: boolean;
  }

  /** Parameters for the `updateStorageRegistration` operation. */
  export interface UpdateStorageRegistrationParams extends DefaultParams {
    /** storage id. */
    id: string;
    /** storage details. */
    connection?: StorageDetails;
    /** Modified description. */
    description?: string;
    /** Storage display name. */
    displayName?: string;
    /** Boolean value to specify whether the patch is for updating HMAC credentials for internal system storage. */
    systemStorageUpdateCredentials?: boolean;
    /** Tags. */
    tags?: string[];
    /** Skip MDS call when Unity catalog is added. */
    skipMdsCall?: boolean;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `addStorageCatalog` operation. */
  export interface AddStorageCatalogParams extends DefaultParams {
    /** storage id. */
    storageId: string;
    /** catalog tags. */
    catalogTags: string[];
    /** catalog base path. */
    basePath?: string;
    /** catalog name. */
    catalogName?: string;
    /** catalog type. */
    catalogType?: string;
    /** Skip MDS call when Unity catalog is added. */
    skipMdsCall?: boolean;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `getStorageObjectProperties` operation. */
  export interface GetStorageObjectPropertiesParams extends DefaultParams {
    /** storage id. */
    storageId: string;
    /** storage object size. */
    paths?: Path[];
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `listStorageRegistrationsObjects` operation. */
  export interface ListStorageRegistrationsObjectsParams extends DefaultParams {
    /** storage id. */
    storageId: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
    /** path. */
    path?: string;
    /** data to be paginated or not. */
    paginated?: boolean;
    /** The number of items per page (default is 1000 , max 1000). */
    pageSize?: number;
    /** prefix to filter the objects by. */
    prefix?: string;
    /** StartAfter is where you want Amazon S3 to start listing from. */
    startAfter?: string;
  }

  /** Parameters for the `listDatabaseRegistrations` operation. */
  export interface ListDatabaseRegistrationsParams extends DefaultParams {
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `createDatabaseRegistration` operation. */
  export interface CreateDatabaseRegistrationParams extends DefaultParams {
    /** Database display name. */
    displayName: string;
    /** Connector type. */
    type: string;
    /** database catalog. */
    associatedCatalog?: DatabaseCatalogPrototype;
    /** database details. */
    connection?: DatabaseDetailsPrototype;
    /** Created on. */
    createdAt?: string;
    /** Database description. */
    description?: string;
    /** This will hold all the properties for a custom database. */
    properties?: DatabaseRegistrationPrototypeDatabasePropertiesItems[];
    /** Source connection assset Id from platform. */
    sourceAssetId?: string;
    /** Source catalog Id from platform. */
    sourceCatalogId?: string;
    /** Source project Id from platform. */
    sourceProjectId?: string;
    /** tags. */
    tags?: string[];
    /** Target catalog id in the platform to save the database connection. */
    targetCatalogId?: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `addDatabaseCatalog` operation. */
  export interface AddDatabaseCatalogParams extends DefaultParams {
    /** database id. */
    databaseId: string;
    /** catalog name. */
    catalogName?: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `getDatabase` operation. */
  export interface GetDatabaseParams extends DefaultParams {
    /** database id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteDatabaseCatalog` operation. */
  export interface DeleteDatabaseCatalogParams extends DefaultParams {
    /** database id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `updateDatabase` operation. */
  export interface UpdateDatabaseParams extends DefaultParams {
    /** database id. */
    id: string;
    /** Database details update. Only credentials can be updated. */
    connection?: DatabaseRegistrationPatchDatabaseDetails;
    /** New database description. */
    description?: string;
    /** New database display name. */
    displayName?: string;
    /** List of tables. */
    tables?: DatabaseRegistrationPatchTablesItems[];
    /** New tags. */
    tags?: string[];
    /** List of topics. */
    topics?: DatabaseRegistrationPatchTopicsItems[];
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `listPrestoEngines` operation. */
  export interface ListPrestoEnginesParams extends DefaultParams {
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `createPrestoEngine` operation. */
  export interface CreatePrestoEngineParams extends DefaultParams {
    /** Engine configuration details. */
    configuration: EngineDetails;
    /** Engine display name. */
    displayName: string;
    /** Origin of presto engine . */
    origin: CreatePrestoEngineConstants.Origin | string;
    /** Catalogs associated to the presto engine. */
    associatedCatalogs?: string[];
    /** Engine description. */
    description?: string;
    /** Engine id. */
    id?: string;
    /** Tags. */
    tags?: string[];
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Constants for the `createPrestoEngine` operation. */
  export namespace CreatePrestoEngineConstants {
    /** Origin of presto engine . */
    export enum Origin {
      NATIVE = 'native',
    }
  }

  /** Parameters for the `updatePrestoEngineAutoscaling` operation. */
  export interface UpdatePrestoEngineAutoscalingParams extends DefaultParams {
    /** Engine ID. */
    engineId: string;
    /** Autoscaling configuration for engine. */
    autoscalingConfig?: AutoScalingConfig;
    /** Watsonx.data instance ID. */
    authInstanceId?: string;
  }

  /** Parameters for the `listPrestoEngineCatalogs` operation. */
  export interface ListPrestoEngineCatalogsParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `createPrestoEngineCatalogs` operation. */
  export interface CreatePrestoEngineCatalogsParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** Catalog names. */
    catalogNames: string[];
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `deletePrestoEngineCatalogs` operation. */
  export interface DeletePrestoEngineCatalogsParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** Catalog id(s) to be stopped, comma separated. */
    catalogNames: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `getPrestoEngineCatalog` operation. */
  export interface GetPrestoEngineCatalogParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** catalog id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `getPrestoEngineConfig` operation. */
  export interface GetPrestoEngineConfigParams extends DefaultParams {
    /** Engine ID. */
    engineId: string;
    /** Authentication Instance ID (CRN). */
    authInstanceId: string;
    /** Comma-separated list of sections to retrieve
     *  (catalog,configuration,event_listener,global,jmx_exporter_config,jvm,log_config).
     */
    sections?: string;
  }

  /** Parameters for the `updatePrestoEngineConfig` operation. */
  export interface UpdatePrestoEngineConfigParams extends DefaultParams {
    /** Engine ID. */
    engineId: string;
    /** Authentication Instance ID (CRN). */
    authInstanceId: string;
    /** Presto engine configuration properties. */
    engineProperties?: PrestoEngineProperties;
  }

  /** Parameters for the `getPrestoEngine` operation. */
  export interface GetPrestoEngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteEngine` operation. */
  export interface DeleteEngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `updatePrestoEngine` operation. */
  export interface UpdatePrestoEngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** Modified description. */
    description?: string;
    /** Engine display name. */
    displayName?: string;
    /** Engine properties. */
    properties?: EngineProperties;
    /** The engine properties to be removed which was added through api customisation. */
    removeEngineProperties?: RemoveEngineProperties;
    /** The type of engine restart . The value can be set to forcefully restart an engine. */
    restartType?: string;
    /** Tags. */
    tags?: string[];
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `pausePrestoEngine` operation. */
  export interface PausePrestoEngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `runExplainStatement` operation. */
  export interface RunExplainStatementParams extends DefaultParams {
    /** Engine id. */
    id: string;
    /** Presto query to determine explain plan. */
    statement: string;
    /** Catalog name. */
    catalog?: string;
    /** Format. */
    format?: RunExplainStatementConstants.Format | string;
    /** Schema name. */
    schema?: string;
    /** Type. */
    type?: RunExplainStatementConstants.Type | string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Constants for the `runExplainStatement` operation. */
  export namespace RunExplainStatementConstants {
    /** Format. */
    export enum Format {
      TEXT = 'text',
      GRAPHVIZ = 'graphviz',
      JSON = 'json',
    }
    /** Type. */
    export enum Type {
      LOGICAL = 'logical',
      DISTRIBUTED = 'distributed',
      VALIDATE = 'validate',
      IO = 'io',
    }
  }

  /** Parameters for the `runExplainAnalyzeStatement` operation. */
  export interface RunExplainAnalyzeStatementParams extends DefaultParams {
    /** Engine id. */
    id: string;
    /** Presto query to show explain analyze. */
    statement: string;
    /** Verbose. */
    verbose?: boolean;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `restartPrestoEngine` operation. */
  export interface RestartPrestoEngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `resumePrestoEngine` operation. */
  export interface ResumePrestoEngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `scalePrestoEngine` operation. */
  export interface ScalePrestoEngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** Presto engine configurations. */
    coordinator?: NodeDescription;
    /** Presto engine configurations. */
    worker?: NodeDescription;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `listPrestissimoEngines` operation. */
  export interface ListPrestissimoEnginesParams extends DefaultParams {
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `createPrestissimoEngine` operation. */
  export interface CreatePrestissimoEngineParams extends DefaultParams {
    /** External engine details. */
    configuration: PrestissimoEngineDetails;
    /** Engine display name. */
    displayName: string;
    /** Origin - created or registered. */
    origin: CreatePrestissimoEngineConstants.Origin | string;
    /** Associated catalogs. */
    associatedCatalogs?: string[];
    /** Engine description. */
    description?: string;
    /** Engine id. */
    id?: string;
    /** Tags. */
    tags?: string[];
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Constants for the `createPrestissimoEngine` operation. */
  export namespace CreatePrestissimoEngineConstants {
    /** Origin - created or registered. */
    export enum Origin {
      NATIVE = 'native',
    }
  }

  /** Parameters for the `getPrestissimoEngineCatalog` operation. */
  export interface GetPrestissimoEngineCatalogParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** catalog id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `getPrestissimoEngine` operation. */
  export interface GetPrestissimoEngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `deletePrestissimoEngine` operation. */
  export interface DeletePrestissimoEngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `updatePrestissimoEngine` operation. */
  export interface UpdatePrestissimoEngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** Modified description. */
    description?: string;
    /** Engine display name. */
    displayName?: string;
    /** Engine properties. */
    properties?: PrestissimoEngineProperties;
    /** RemoveEngine properties. */
    removeEngineProperties?: RemovePrestissimoEngineProperties;
    /** engine will restart accordingily. */
    restartType?: string;
    /** Tags. */
    tags?: string[];
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `listPrestissimoEngineCatalogs` operation. */
  export interface ListPrestissimoEngineCatalogsParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `createPrestissimoEngineCatalogs` operation. */
  export interface CreatePrestissimoEngineCatalogsParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** Catalog names. */
    catalogNames: string[];
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `deletePrestissimoEngineCatalogs` operation. */
  export interface DeletePrestissimoEngineCatalogsParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** Catalog id(s) to be stopped, comma separated. */
    catalogNames: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `pausePrestissimoEngine` operation. */
  export interface PausePrestissimoEngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `runPrestissimoExplainStatement` operation. */
  export interface RunPrestissimoExplainStatementParams extends DefaultParams {
    /** Engine id. */
    id: string;
    /** Presto query to determine explain plan. */
    statement: string;
    /** Catalog name. */
    catalog?: string;
    /** Format. */
    format?: RunPrestissimoExplainStatementConstants.Format | string;
    /** Schema name. */
    schema?: string;
    /** Type. */
    type?: RunPrestissimoExplainStatementConstants.Type | string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Constants for the `runPrestissimoExplainStatement` operation. */
  export namespace RunPrestissimoExplainStatementConstants {
    /** Format. */
    export enum Format {
      TEXT = 'text',
      GRAPHVIZ = 'graphviz',
      JSON = 'json',
    }
    /** Type. */
    export enum Type {
      LOGICAL = 'logical',
      DISTRIBUTED = 'distributed',
      VALIDATE = 'validate',
      IO = 'io',
    }
  }

  /** Parameters for the `runPrestissimoExplainAnalyzeStatement` operation. */
  export interface RunPrestissimoExplainAnalyzeStatementParams extends DefaultParams {
    /** Engine id. */
    id: string;
    /** Presto query to show explain analyze. */
    statement: string;
    /** Verbose. */
    verbose?: boolean;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `restartPrestissimoEngine` operation. */
  export interface RestartPrestissimoEngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `resumePrestissimoEngine` operation. */
  export interface ResumePrestissimoEngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `scalePrestissimoEngine` operation. */
  export interface ScalePrestissimoEngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** Presto engine configurations. */
    coordinator?: NodeDescription;
    /** Presto engine configurations. */
    worker?: NodeDescription;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `listDb2Engines` operation. */
  export interface ListDb2EnginesParams extends DefaultParams {
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `createDb2Engine` operation. */
  export interface CreateDb2EngineParams extends DefaultParams {
    /** External engine details. */
    configuration: Db2EngineDetailsBody;
    /** Engine display name. */
    displayName: string;
    /** Origin of the engine. */
    origin: CreateDb2EngineConstants.Origin | string;
    /** Engine description. */
    description?: string;
    /** Tags. */
    tags?: string[];
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Constants for the `createDb2Engine` operation. */
  export namespace CreateDb2EngineConstants {
    /** Origin of the engine. */
    export enum Origin {
      EXTERNAL = 'external',
    }
  }

  /** Parameters for the `deleteDb2Engine` operation. */
  export interface DeleteDb2EngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `updateDb2Engine` operation. */
  export interface UpdateDb2EngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** Modified description. */
    description?: string;
    /** Engine display name. */
    displayName?: string;
    /** Tags. */
    tags?: string[];
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `listOtherEngines` operation. */
  export interface ListOtherEnginesParams extends DefaultParams {
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `createOtherEngine` operation. */
  export interface CreateOtherEngineParams extends DefaultParams {
    /** External engine details. */
    configuration: OtherEngineConfigurationBody;
    /** engine display name. */
    displayName: string;
    /** Origin - created or registered. */
    origin: CreateOtherEngineConstants.Origin | string;
    /** engine description. */
    description?: string;
    /** other engine tags. */
    tags?: string[];
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Constants for the `createOtherEngine` operation. */
  export namespace CreateOtherEngineConstants {
    /** Origin - created or registered. */
    export enum Origin {
      EXTERNAL = 'external',
    }
  }

  /** Parameters for the `deleteOtherEngine` operation. */
  export interface DeleteOtherEngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `listNetezzaEngines` operation. */
  export interface ListNetezzaEnginesParams extends DefaultParams {
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `createNetezzaEngine` operation. */
  export interface CreateNetezzaEngineParams extends DefaultParams {
    /** External engine details. */
    configuration: NetezzaEngineConfigurationBody;
    /** Engine display name. */
    displayName: string;
    /** Origin - created or registered. */
    origin: CreateNetezzaEngineConstants.Origin | string;
    /** Engine description. */
    description?: string;
    /** Tags. */
    tags?: string[];
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Constants for the `createNetezzaEngine` operation. */
  export namespace CreateNetezzaEngineConstants {
    /** Origin - created or registered. */
    export enum Origin {
      EXTERNAL = 'external',
    }
  }

  /** Parameters for the `deleteNetezzaEngine` operation. */
  export interface DeleteNetezzaEngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `updateNetezzaEngine` operation. */
  export interface UpdateNetezzaEngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** Modified description. */
    description?: string;
    /** Engine display name. */
    displayName?: string;
    /** Tags. */
    tags?: string[];
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `listSparkEngines` operation. */
  export interface ListSparkEnginesParams extends DefaultParams {
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `createSparkEngine` operation. */
  export interface CreateSparkEngineParams extends DefaultParams {
    /** Engine display name. */
    displayName: string;
    /** Origin - created or registered. */
    origin: CreateSparkEngineConstants.Origin | string;
    /** Catalogs to be Associated to the engine. */
    associatedCatalogs?: string[];
    /** Spark engine configuration details. */
    configuration?: SparkEngineDetails;
    /** Information on the Spark engine. */
    description?: string;
    /** Engine id. */
    id?: string;
    /** Status of engine. */
    status?: string;
    /** Tags. */
    tags?: string[];
    /** Type of spark engine. */
    type?: CreateSparkEngineConstants.Type | string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Constants for the `createSparkEngine` operation. */
  export namespace CreateSparkEngineConstants {
    /** Origin - created or registered. */
    export enum Origin {
      EXTERNAL = 'external',
      DISCOVER = 'discover',
      NATIVE = 'native',
    }
    /** Type of spark engine. */
    export enum Type {
      SPARK = 'spark',
      GLUTEN = 'gluten',
    }
  }

  /** Parameters for the `getSparkEngineCatalog` operation. */
  export interface GetSparkEngineCatalogParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** catalog id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `getSparkEngine` operation. */
  export interface GetSparkEngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteSparkEngine` operation. */
  export interface DeleteSparkEngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `updateSparkEngine` operation. */
  export interface UpdateSparkEngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** Engine details. */
    configuration?: SparkEnginePatchEngineDetails;
    /** Update the information related engine. */
    description?: string;
    /** Display name to identify engine. */
    displayName?: string;
    /** Tags. */
    tags?: string[];
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `listSparkEngineCatalogs` operation. */
  export interface ListSparkEngineCatalogsParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `createSparkEngineCatalogs` operation. */
  export interface CreateSparkEngineCatalogsParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** Catalog names. */
    catalogNames: string[];
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteSparkEngineCatalogs` operation. */
  export interface DeleteSparkEngineCatalogsParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** Catalog id(s) to be stopped, comma separated. */
    catalogNames: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `pauseSparkEngine` operation. */
  export interface PauseSparkEngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** force spark engine pause. Default value is false. */
    force?: boolean;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `resumeSparkEngine` operation. */
  export interface ResumeSparkEngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `scaleSparkEngine` operation. */
  export interface ScaleSparkEngineParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** Node count. */
    numberOfNodes?: number;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `getSparkEngineApplicationStatus` operation. */
  export interface GetSparkEngineApplicationStatusParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** Application id. */
    id: string;
    /** watsonx.data instance ID. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteSparkEngineApplication` operation. */
  export interface DeleteSparkEngineApplicationParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** Application id. */
    id: string;
    /** watsonx.data instance ID. */
    authInstanceId?: string;
  }

  /** Parameters for the `getSparkEngineApplicationUi` operation. */
  export interface GetSparkEngineApplicationUiParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** Application id. */
    id: string;
    /** watsonx.data instance ID. */
    authInstanceId?: string;
  }

  /** Parameters for the `listSparkEngineApplications` operation. */
  export interface ListSparkEngineApplicationsParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** watsonx.data instance ID. */
    authInstanceId?: string;
    /** state. */
    state?: string[];
    /** Submission time interval in <lower timestamp limit>,<upper timestamp limit> format. */
    submissionTimeInterval?: string;
    /** Start time interval in <lower timestamp limit>,<upper timestamp limit> format. */
    startTimeInterval?: string;
    /** End time interval in <lower timestamp limit>,<upper timestamp limit> format. */
    endTimeInterval?: string;
    /** limit to specify the rows. */
    limit?: number;
    /** Token used to fetch the next or the previous page of the applications list. */
    start?: string;
  }

  /** Parameters for the `createSparkEngineApplication` operation. */
  export interface CreateSparkEngineApplicationParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** Application details. */
    applicationDetails: SparkApplicationDetails;
    /** Spark Engine Application Callback. */
    callback?: SparkEngineApplicationCallback;
    /** GUID. */
    contextId?: string;
    /** type of context for the spark application. */
    contextType?: CreateSparkEngineApplicationConstants.ContextType | string;
    /** mode. */
    deployMode?: string;
    /** Unique key to ensure idempotent operation. */
    idempotencyKey?: string;
    /** Initialization scripts to run before the application starts. */
    initScripts?: string[];
    /** Job endpoint. */
    jobEndpoint?: string;
    /** Maximum number of retries for the application. Supported only in watsonx.data software. */
    maxRetries?: string;
    /** Minimum retry interval in seconds between retry attempts. Supported only in watsonx.data software. */
    minRetryIntervalInSeconds?: string;
    /** Service Instance ID for POST. */
    serviceInstanceId?: CreateSparkEngineApplicationConstants.ServiceInstanceId | string;
    /** Timeout for the application in seconds. */
    timeoutInSeconds?: string;
    /** Engine Type. */
    type?: CreateSparkEngineApplicationConstants.Type | string;
    /** Spark application volumes to mount. This property is applicable only in watsonx.data software. */
    volumes?: SparkVolumeDetails[];
    /** watsonx.data instance ID. */
    authInstanceId?: string;
  }

  /** Constants for the `createSparkEngineApplication` operation. */
  export namespace CreateSparkEngineApplicationConstants {
    /** type of context for the spark application. */
    export enum ContextType {
      PROJECT = 'project',
      GIT_PROJECT = 'git_project',
      SPACE = 'space',
    }
    /** Service Instance ID for POST. */
    export enum ServiceInstanceId {
      IAE = 'iae',
      EMR = 'emr',
    }
    /** Engine Type. */
    export enum Type {
      SPARK = 'spark',
      GLUTEN = 'gluten',
    }
  }

  /** Parameters for the `getSparkEngineHistoryServer` operation. */
  export interface GetSparkEngineHistoryServerParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** watsonx.data instance ID. */
    authInstanceId?: string;
  }

  /** Parameters for the `startSparkEngineHistoryServer` operation. */
  export interface StartSparkEngineHistoryServerParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** CPU cores to be allocated to the history server. */
    cores?: string;
    /** Memory to be allocated for the history server. Kuberneted memory unit (G) must also be specified. */
    memory?: string;
    /** watsonx.data instance ID. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteSparkEngineHistoryServer` operation. */
  export interface DeleteSparkEngineHistoryServerParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** watsonx.data instance ID. */
    authInstanceId?: string;
  }

  /** Parameters for the `getSparkEngineHistoryServerUi` operation. */
  export interface GetSparkEngineHistoryServerUiParams extends DefaultParams {
    /** engine id. */
    id: string;
    /** watsonx.data instance ID. */
    authInstanceId?: string;
  }

  /** Parameters for the `validateIntegration` operation. */
  export interface ValidateIntegrationParams extends DefaultParams {
    /** Type of the integration to be integrated. It can only have the following values: `ranger`, `ikc`, `databand`
     *  and `manta`.
     */
    type: string;
    /** Access Token for the integration of type `databand`. */
    accessToken?: string;
    /** ApiKey for the integration of type `manta` and `ikc`. */
    apikey?: string;
    /** Details of catalogs associated with `ikc`. */
    catalogs?: Catalogs;
    /** Certificate to be provided if ssl is enabled for integration type `ikc` in Cloud Pack for Data. */
    certificate?: string;
    /** Password for the integration of type `ranger`. */
    password?: string;
    /** SSL enabler/disabler for `ikc` in Cloud Pack for Data. */
    ssl?: boolean;
    /** URL of the integration to be integrated. Applicable for all the 4 types:  `ranger`, `ikc`, `databand` and
     *  `manta`.
     */
    url?: string;
    /** Username of the `ikc`/`manta`/`ranger` integration to be integrated. */
    username?: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `listAllIntegrations` operation. */
  export interface ListAllIntegrationsParams extends DefaultParams {
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
    /** API Authentication service token. */
    secret?: string;
    /** Filter based on the type of the integration. It can only have the following values: `ranger`, `ikc`,
     *  `databand` and `manta`.
     */
    type?: string[];
    /** Filter based on the state of the integration. It can only have the following values: `active`, `inactive`,
     *  and `failed`.
     */
    state?: ListAllIntegrationsConstants.State[] | string[];
  }

  /** Constants for the `listAllIntegrations` operation. */
  export namespace ListAllIntegrationsConstants {
    /** Filter based on the state of the integration. It can only have the following values: `active`, `inactive`, and `failed`. */
    export enum State {
      ACTIVE = 'active',
      INACTIVE = 'inactive',
      FAILED = 'failed',
    }
  }

  /** Parameters for the `createIntegration` operation. */
  export interface CreateIntegrationParams extends DefaultParams {
    /** Access Token for the integration of type `databand`. */
    accessToken?: string;
    /** ApiKey for the integration of type `manta` and `ikc`. */
    apikey?: string;
    /** Details of catalogs associated with `ikc`. */
    catalogs?: Catalogs;
    /** Certificate if ssl is enabled for integration type `ikc` (ikc hosted in Cloud Pack for Data) and `ranger`. */
    certificate?: string;
    /** Certificate extension of the certificate provided if ssl is enabled for integration type `ikc` (ikc hosted
     *  in Cloud Pack for Data) and `ranger`.
     */
    certificateExtension?: string;
    /** Connection mode for manta. */
    connectionMode?: string;
    /** To enable/disable cross account integration for `ikc` in IBM Cloud / MCSP. */
    crossAccountIntegration?: boolean;
    /** To check if WatsonX.data policies are enabled along with `ranger`. */
    enableDataPolicyWithinWxd?: boolean;
    /** The Account ID where the `ikc` is existing with which cross account integration needs to be enabled, to be
     *  used compulsorily with `cross_account_integration`.
     */
    ikcUserAccountId?: string;
    /** Password for the integration of type `ranger`. */
    password?: string;
    /** Displays the policy cache type configuration for integration type `ranger`. */
    policyCacheTimeConfiguration?: string;
    /** Currently selected resource for `ranger`. */
    resource?: string;
    /** SSL enabled/disabled for `ikc` (ikc hosted in Cloud Pack for Data) and `ranger`. */
    ssl?: boolean;
    /** Type of the integration to be integrated. It can only have the following values: `ranger`, `ikc`, `databand`
     *  and `manta`.
     */
    type?: string;
    /** URL of the integration to be integrated. Applicable for all the 4 types:  `ranger`, `ikc`, `databand` and
     *  `manta`.
     */
    url?: string;
    /** Username of the `ikc`/`manta`/`ranger` integration to be integrated. */
    username?: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `getIntegrations` operation. */
  export interface GetIntegrationsParams extends DefaultParams {
    /** Unique id to identify the integration. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteIntegration` operation. */
  export interface DeleteIntegrationParams extends DefaultParams {
    /** Unique id to identify the integration. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `updateIntegration` operation. */
  export interface UpdateIntegrationParams extends DefaultParams {
    /** Unique id to identify the integration. */
    id: string;
    /** Access Token for the integration of type `databand`. */
    accessToken?: string;
    /** ApiKey for the integration of type `manta` and `ikc`. */
    apikey?: string;
    /** Details of catalogs associated with `ikc`. */
    catalogs?: Catalogs;
    /** Certificate if ssl is enabled for integration type `ikc` (ikc hosted in Cloud Pack for Data) and `ranger`. */
    certificate?: string;
    /** Certificate extension of the certificate provided if ssl is enabled for integration type `ikc` (ikc hosted
     *  in Cloud Pack for Data) and `ranger`.
     */
    certificateExtension?: string;
    /** Connection mode for manta. */
    connectionMode?: string;
    /** To enable/disable cross account integration for `ikc` in IBM Cloud / MCSP. */
    crossAccountIntegration?: boolean;
    /** To check if WatsonX.data policies are enabled along with `ranger`. */
    enableDataPolicyWithinWxd?: boolean;
    /** The Account ID where the `ikc` is existing with which cross account integration needs to be enabled, to be
     *  used compulsorily with `cross_account_integration`.
     */
    ikcUserAccountId?: string;
    /** Password for the integration of type `ranger`. */
    password?: string;
    /** Displays the policy cache type configuration for integration type `ranger`. */
    policyCacheTimeConfiguration?: string;
    /** Currently selected resource for `ranger`. */
    resource?: string;
    /** SSL enabled/disabled for `ikc` (ikc hosted in Cloud Pack for Data) and `ranger`. */
    ssl?: boolean;
    /** current state. */
    state?: UpdateIntegrationConstants.State | string;
    /** URL of the integration to be integrated. Applicable for all the 4 types:  `ranger`, `ikc`, `databand` and
     *  `manta`.
     */
    url?: string;
    /** Username of the `ikc`/`manta`/`ranger` integration to be integrated. */
    username?: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
    /** API Authentication service token. */
    secret?: string;
  }

  /** Constants for the `updateIntegration` operation. */
  export namespace UpdateIntegrationConstants {
    /** current state. */
    export enum State {
      ACTIVE = 'active',
      INACTIVE = 'inactive',
      FAILED = 'failed',
    }
  }

  /** Parameters for the `registerTable` operation. */
  export interface RegisterTableParams extends DefaultParams {
    /** catalog id. */
    catalogId: string;
    /** URL encoded schema name. */
    schemaId: string;
    /** Metadata location. */
    metadataLocation: string;
    /** Table name. */
    tableName: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `loadTable` operation. */
  export interface LoadTableParams extends DefaultParams {
    /** catalog id. */
    catalogId: string;
    /** URL encoded schema name. */
    schemaId: string;
    /** URL encoded table name. */
    tableId: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `listCatalogs` operation. */
  export interface ListCatalogsParams extends DefaultParams {
    /** watsonx.data instance ID for software , CRN for SAAS or CRN for SAAS. */
    authInstanceId?: string;
    /** API Authentication service token. */
    secret?: string;
    /** Default catalogs flag for cornerstone feature. */
    defaultCatalogs?: boolean;
    /** Internal view parameter for cornerstone feature. */
    view?: string;
  }

  /** Parameters for the `getCatalogEngineAssociation` operation. */
  export interface GetCatalogEngineAssociationParams extends DefaultParams {
    /** catalog name. */
    catalogName: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteSchema` operation. */
  export interface DeleteSchemaParams extends DefaultParams {
    /** Engine id of presto/prestissimo/spark/db2/netezza other engine. */
    engineId: string;
    /** Catalog name. */
    catalogName: string;
    /** URL encoded Schema name. */
    schemaName: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `listTables` operation. */
  export interface ListTablesParams extends DefaultParams {
    /** catalog name. */
    catalogName: string;
    /** URL encoded schema name. */
    schemaName: string;
    /** Engine id of presto/prestissimo/spark/db2/netezza other engine. */
    engineId: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `getTable` operation. */
  export interface GetTableParams extends DefaultParams {
    /** catalog name. */
    catalogName: string;
    /** URL encoded schema name. */
    schemaName: string;
    /** URL encoded table name. */
    tableName: string;
    /** Engine id of presto/prestissimo/spark/db2/netezza other engine. */
    engineId: string;
    /** URL encoded table type (view,base table). */
    type?: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteTable` operation. */
  export interface DeleteTableParams extends DefaultParams {
    /** catalog name. */
    catalogName: string;
    /** URL encoded schema name. */
    schemaName: string;
    /** URL encoded table name. */
    tableName: string;
    /** Engine id of presto/prestissimo/spark/db2/netezza other engine. */
    engineId: string;
    /** URL encoded table type (view,base table). */
    type?: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `updateTable` operation. */
  export interface UpdateTableParams extends DefaultParams {
    /** catalog name. */
    catalogName: string;
    /** URL encoded schema name. */
    schemaName: string;
    /** URL encoded table name. */
    tableName: string;
    /** Engine id of presto/prestissimo/spark/db2/netezza other engine. */
    engineId: string;
    /** New table name. */
    name?: string;
    /** URL encoded table type (view,base table). */
    type?: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `listColumns` operation. */
  export interface ListColumnsParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** catalog name. */
    catalogName: string;
    /** URL encoded schema name. */
    schemaName: string;
    /** URL encoded table name. */
    tableName: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `createColumns` operation. */
  export interface CreateColumnsParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** catalog name. */
    catalogName: string;
    /** URL encoded schema name. */
    schemaName: string;
    /** URL encoded table name. */
    tableName: string;
    /** List of the tables present in the schema. */
    columns?: Column[];
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteColumn` operation. */
  export interface DeleteColumnParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** catalog name. */
    catalogName: string;
    /** URL encoded schema name. */
    schemaName: string;
    /** URL encoded table name. */
    tableName: string;
    /** Url encoded column name. */
    columnName: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `updateColumn` operation. */
  export interface UpdateColumnParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** catalog name. */
    catalogName: string;
    /** URL encoded schema name. */
    schemaName: string;
    /** URL encoded table name. */
    tableName: string;
    /** Url encoded column name. */
    columnName: string;
    /** Url encoded column name. */
    name?: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `rollbackTable` operation. */
  export interface RollbackTableParams extends DefaultParams {
    /** Catalog name. */
    catalogName: string;
    /** Schema name. */
    schemaName: string;
    /** Table name. */
    tableName: string;
    /** Snapshot Id. */
    snapshotId?: string;
    /** Engine id. */
    engineId?: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `listTableSnapshots` operation. */
  export interface ListTableSnapshotsParams extends DefaultParams {
    /** Catalog name. */
    catalogName: string;
    /** Schema name. */
    schemaName: string;
    /** Table name. */
    tableName: string;
    /** Engine name. */
    engineId?: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `listSchemas` operation. */
  export interface ListSchemasParams extends DefaultParams {
    /** Engine id. */
    engineId: string;
    /** Catalog id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `createSchema` operation. */
  export interface CreateSchemaParams extends DefaultParams {
    /** Engine id. */
    engineId: string;
    /** Catalog id. */
    id: string;
    /** Path within bucket where schema will be created. */
    customPath: string;
    /** Unique schema name, schemas with same names are not allowed in a catalog. */
    name: string;
    /** Host name of the HDFS bucket. Need to be provided if using HDFS. */
    hostname?: string;
    /** Port of the HDFS bucket. Need to be provided if using HDFS. */
    port?: number;
    /** Bucket associated to catalog where schema will be added. */
    storageName?: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `updateSyncCatalog` operation. */
  export interface UpdateSyncCatalogParams extends DefaultParams {
    /** catalog ID. */
    id: string;
    /** Automatically detect and add new tables to the system when they appear in the source. */
    autoAddNewTables?: boolean;
    /** Register newly discovered tables in the system so they can be tracked and managed. */
    registerNewTables?: boolean;
    /** Synchronize and update metadata for existing tables that are already registered. */
    syncExistingTables?: boolean;
    /** Indicates whether to synchronize metadata from Iceberg tables with the system. */
    syncIcebergMd?: boolean;
    /** Path within the bucket from where the details will be sync-ed. */
    syncPath?: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `getCatalog` operation. */
  export interface GetCatalogParams extends DefaultParams {
    /** catalog name. */
    name: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteCatalog` operation. */
  export interface DeleteCatalogParams extends DefaultParams {
    /** catalog name. */
    name: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
    /** Skip MDS call when Unity catalog is added. */
    skipMdsCall?: boolean;
  }

  /** Parameters for the `listMilvusServices` operation. */
  export interface ListMilvusServicesParams extends DefaultParams {
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `createMilvusService` operation. */
  export interface CreateMilvusServiceParams extends DefaultParams {
    /** Display name for milvus services. */
    displayName: string;
    /** Origin of the milvus service. */
    origin: CreateMilvusServiceConstants.Origin | string;
    /** Root path in storage where milvus vectors will be stored. */
    rootPath: string;
    /** Predefined tshirt size for the milvus service. */
    tshirtSize: CreateMilvusServiceConstants.TshirtSize | string;
    /** data coordinator cpus, only configurable in cpd. */
    dcCpu?: number;
    /** data coordinator memory, only configurable in cpd. */
    dcMemory?: number;
    /** data coordinator replicas, only configurable in cpd. */
    dcReplicas?: number;
    /** Descriptioon of Milvus service added by the user. */
    description?: string;
    /** data worker cpus, only configurable in cpd. */
    dwCpu?: number;
    /** data worker memory, only configurable in cpd. */
    dwMemory?: number;
    /** data worker replicas, only configurable in cpd. */
    dwReplicas?: number;
    /** etcd cpus, only configurable in cpd. */
    etcdCpu?: number;
    /** etcd memory, only configurable in cpd. */
    etcdMemory?: number;
    /** Engine id. */
    id?: string;
    /** index type. */
    indexType?: CreateMilvusServiceConstants.IndexType | string;
    /** index worker cpu. */
    iwCpu?: number;
    /** index worker memory. */
    iwMemory?: number;
    /** index worker replicas. */
    iwReplicas?: number;
    /** kafka cpus, only configurable in cpd. */
    kafkaCpu?: number;
    /** kafka memory, only configurable in cpd. */
    kafkaMemory?: number;
    /** proxy cpus, only configurable in cpd. */
    proxyCpu?: number;
    /** proxy memory, only configurable in cpd. */
    proxyMemory?: number;
    /** proxy replicas, only configurable in cpd. */
    proxyReplicas?: number;
    /** query coordinator cpus, only configurable in cpd. */
    qcCpu?: number;
    /** query coordinator memory, only configurable in cpd. */
    qcMemory?: number;
    /** query coordinator replicas, only configurable in cpd. */
    qcReplicas?: number;
    /** query worker cpu. */
    qwCpu?: number;
    /** query worker memory. */
    qwMemory?: number;
    /** query worker replicas. */
    qwReplicas?: number;
    /** root coordinator cpus, only configurable in cpd. */
    rcCpu?: number;
    /** root coodinator memory, only configurable in cpd. */
    rcMemory?: number;
    /** root coordinator replicas, only configurable in cpd. */
    rcReplicas?: number;
    /** storage name. */
    storageName?: string;
    /** Tags. */
    tags?: string[];
    /** vector. */
    vector?: number;
    /** vector dimension. */
    vectorDimension?: number;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Constants for the `createMilvusService` operation. */
  export namespace CreateMilvusServiceConstants {
    /** Origin of the milvus service. */
    export enum Origin {
      NATIVE = 'native',
    }
    /** Predefined tshirt size for the milvus service. */
    export enum TshirtSize {
      STARTER = 'starter',
      SMALL = 'small',
      MEDIUM = 'medium',
      LARGE = 'large',
      CUSTOM = 'custom',
    }
    /** index type. */
    export enum IndexType {
      IVF_SQ8 = 'ivf_sq8',
      IVF_PQ = 'ivf_pq',
      HNSW = 'hnsw',
    }
  }

  /** Parameters for the `getMilvusService` operation. */
  export interface GetMilvusServiceParams extends DefaultParams {
    /** id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteMilvusService` operation. */
  export interface DeleteMilvusServiceParams extends DefaultParams {
    /** id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `updateMilvusService` operation. */
  export interface UpdateMilvusServiceParams extends DefaultParams {
    /** id. */
    id: string;
    /** Modified description. */
    description?: string;
    /** Service display name. */
    displayName?: string;
    /** Tags. */
    tags?: string[];
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `createMilvusServicePause` operation. */
  export interface CreateMilvusServicePauseParams extends DefaultParams {
    /** id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `createMilvusServiceResume` operation. */
  export interface CreateMilvusServiceResumeParams extends DefaultParams {
    /** id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `createMilvusServiceScale` operation. */
  export interface CreateMilvusServiceScaleParams extends DefaultParams {
    /** id. */
    id: string;
    /** tshirt size. */
    tshirtSize: CreateMilvusServiceScaleConstants.TshirtSize | string;
    /** data coordinator cpus, only configurable in cpd. */
    dcCpu?: number;
    /** data coordinator memory, only configurable in cpd. */
    dcMemory?: number;
    /** data coordinator replicas, only configurable in cpd. */
    dcReplicas?: number;
    /** data worker cpus, only configurable in cpd. */
    dwCpu?: number;
    /** data worker memory, only configurable in cpd. */
    dwMemory?: number;
    /** data worker replicas, only configurable in cpd. */
    dwReplicas?: number;
    /** etcd cpus, only configurable in cpd. */
    etcdCpu?: number;
    /** etcd memory, only configurable in cpd. */
    etcdMemory?: number;
    /** index type, required for custom size. */
    indexType?: CreateMilvusServiceScaleConstants.IndexType | string;
    /** index worker cpus. */
    iwCpu?: number;
    /** index worker memory. */
    iwMemory?: number;
    /** index worker replicas. */
    iwReplicas?: number;
    /** kafka cpus, only configurable in cpd. */
    kafkaCpu?: number;
    /** kafka memory, only configurable in cpd. */
    kafkaMemory?: number;
    /** proxy cpus, only configurable in cpd. */
    proxyCpu?: number;
    /** proxy memory, only configurable in cpd. */
    proxyMemory?: number;
    /** proxy replicas, only configurable in cpd. */
    proxyReplicas?: number;
    /** query coordinator cpus, only configurable in cpd. */
    qcCpu?: number;
    /** query coordinator memory, only configurable in cpd. */
    qcMemory?: number;
    /** query coordinator replicas, only configurable in cpd. */
    qcReplicas?: number;
    /** query worker cpus. */
    qwCpu?: number;
    /** query worker memory. */
    qwMemory?: number;
    /** query worker replicas. */
    qwReplicas?: number;
    /** root coordinator cpus, only configurable in cpd. */
    rcCpu?: number;
    /** root coodinator memory, only configurable in cpd. */
    rcMemory?: number;
    /** root coordinator replicas, only configurable in cpd. */
    rcReplicas?: number;
    /** vector. */
    vector?: number;
    /** vector dimension. */
    vectorDimension?: number;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Constants for the `createMilvusServiceScale` operation. */
  export namespace CreateMilvusServiceScaleConstants {
    /** tshirt size. */
    export enum TshirtSize {
      STARTER = 'starter',
      SMALL = 'small',
      MEDIUM = 'medium',
      LARGE = 'large',
      XLARGE = 'xlarge',
      XXLARGE = 'xxlarge',
      CUSTOM = 'custom',
    }
    /** index type, required for custom size. */
    export enum IndexType {
      FLAT = 'flat',
      IVF_FLAT = 'ivf_flat',
      IVF_SQ8 = 'ivf_sq8',
      IVF_PQ = 'ivf_pq',
      HNSW = 'hnsw',
      SCANN = 'scann',
      GPU = 'gpu',
      GPU_CAGRA = 'gpu_cagra',
      GPU_IVF_FLAT = 'gpu_ivf_flat',
      GPU_IVF_PQ = 'gpu_ivf_pq',
      GPU_BRUTE_FORCE = 'gpu_brute_force',
    }
  }

  /** Parameters for the `listMilvusServiceDatabases` operation. */
  export interface ListMilvusServiceDatabasesParams extends DefaultParams {
    /** service id. */
    serviceId: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `listMilvusDatabaseCollections` operation. */
  export interface ListMilvusDatabaseCollectionsParams extends DefaultParams {
    /** service id. */
    serviceId: string;
    /** database_id. */
    databaseId: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `listMilvusDatabasePartitions` operation. */
  export interface ListMilvusDatabasePartitionsParams extends DefaultParams {
    /** service id. */
    serviceId: string;
    /** database id. */
    databaseId: string;
    /** collection name. */
    collectionName: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `updateMilvusServiceBucket` operation. */
  export interface UpdateMilvusServiceBucketParams extends DefaultParams {
    /** service id. */
    serviceId: string;
    /** Update milvus service bucket. */
    body: JsonPatchOperation[];
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `getSalIntegration` operation. */
  export interface GetSalIntegrationParams extends DefaultParams {
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `createSalIntegration` operation. */
  export interface CreateSalIntegrationParams extends DefaultParams {
    /** IAM apikey with IBM Knowledge Catalog access. */
    apikey: string;
    /** ID of the engine(support presto or prestissimo) to be registered for SAL integration. */
    engineId: string;
    /** COS storage resource crn, required on Watsonx.data SaaS and not applicable for CPD. */
    storageResourceCrn?: string;
    /** COS storage type, required on Watsonx.data SaaS and not applicable for CPD. */
    storageType?: CreateSalIntegrationConstants.StorageType | string;
    /** whether the integration is based on IKC trial plan, which is available on IBMCloud only. */
    trialPlan?: boolean;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Constants for the `createSalIntegration` operation. */
  export namespace CreateSalIntegrationConstants {
    /** COS storage type, required on Watsonx.data SaaS and not applicable for CPD. */
    export enum StorageType {
      BMCOS_OBJECT_STORAGE = 'bmcos_object_storage',
    }
  }

  /** Parameters for the `deleteSalIntegration` operation. */
  export interface DeleteSalIntegrationParams extends DefaultParams {
  }

  /** Parameters for the `updateSalIntegration` operation. */
  export interface UpdateSalIntegrationParams extends DefaultParams {
    /** IAM apikey. */
    apikey?: string;
    /** Engine ID(support presto and prestissimo) of which registering for integration. */
    engineId?: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `createSalIntegrationEnrichment` operation. */
  export interface CreateSalIntegrationEnrichmentParams extends DefaultParams {
    /** changed to be submitted and processed by the enrichment job. */
    changes?: EnrichmentObj[];
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `listSalIntegrationEnrichmentAssets` operation. */
  export interface ListSalIntegrationEnrichmentAssetsParams extends DefaultParams {
    /** project id of enriched schema in IBM Knowledge Catalog. */
    projectId: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `getSalIntegrationEnrichmentAssetsById` operation. */
  export interface GetSalIntegrationEnrichmentAssetsByIdParams extends DefaultParams {
    /** enrichment project id in IBM Knowledge Catalog. */
    projectId: string;
    /** enrichment data asset id in IBM Knowledge Catalog. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `getSalIntegrationEnrichmentGlobalSettings` operation. */
  export interface GetSalIntegrationEnrichmentGlobalSettingsParams extends DefaultParams {
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `replaceSalIntegrationEnrichmentGlobalSettings` operation. */
  export interface ReplaceSalIntegrationEnrichmentGlobalSettingsParams extends DefaultParams {
    /** semantic expansion. */
    expansion: SalEnrichmentSettingsExpansion;
    /** semantic expansion. */
    termAssignment: SalEnrichmentSettingsTermAssignment;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `listSalIntegrationEnrichmentJobs` operation. */
  export interface ListSalIntegrationEnrichmentJobsParams extends DefaultParams {
    /** IBM Knowledge Catalog project id. */
    projectId: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `listSalIntegrationEnrichmentJobRuns` operation. */
  export interface ListSalIntegrationEnrichmentJobRunsParams extends DefaultParams {
    /** enrichment job id, refered as 'asset_id' in '/Sal_integration/enrichment/jobs'. */
    jobId: string;
    /** enrichment project id. */
    projectId: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `getSalIntegrationEnrichmentJobRunLogs` operation. */
  export interface GetSalIntegrationEnrichmentJobRunLogsParams extends DefaultParams {
    /** IBM Knowledge Catalog enrichment job id. */
    jobId: string;
    /** IBM Knowledge Catalog enrichment job run id. */
    runId: string;
    /** IBM Knowledge Catalog project id. */
    projectId: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `getSalIntegrationEnrichmentProjectSettings` operation. */
  export interface GetSalIntegrationEnrichmentProjectSettingsParams extends DefaultParams {
    /** IBM Knowledge Catalog project id. */
    projectId: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `replaceSalIntegrationEnrichmentProjectSettings` operation. */
  export interface ReplaceSalIntegrationEnrichmentProjectSettingsParams extends DefaultParams {
    /** IBM Knowledge Catalog project id. */
    projectId: string;
    /** semantic expansion. */
    expansion: SalEnrichmentSettingsExpansion;
    /** semantic expansion. */
    termAssignment: SalEnrichmentSettingsTermAssignment;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `getSalIntegrationGlossaryTerms` operation. */
  export interface GetSalIntegrationGlossaryTermsParams extends DefaultParams {
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `createSalIntegrationUploadGlossary` operation. */
  export interface CreateSalIntegrationUploadGlossaryParams extends DefaultParams {
    /** glossary upload replace option. */
    replaceOption: CreateSalIntegrationUploadGlossaryConstants.ReplaceOption | string;
    /** Glossary CSV file. */
    glossaryCsv?: NodeJS.ReadableStream | Buffer;
    /** The content type of glossaryCsv. */
    glossaryCsvContentType?: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Constants for the `createSalIntegrationUploadGlossary` operation. */
  export namespace CreateSalIntegrationUploadGlossaryConstants {
    /** glossary upload replace option. */
    export enum ReplaceOption {
      ALL = 'all',
      SPECIFIED = 'specified',
      EMPTY = 'empty',
    }
  }

  /** Parameters for the `getSalIntegrationUploadGlossaryStatus` operation. */
  export interface GetSalIntegrationUploadGlossaryStatusParams extends DefaultParams {
    /** upload process id. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `listSalIntegrationEnrichmentMappings` operation. */
  export interface ListSalIntegrationEnrichmentMappingsParams extends DefaultParams {
    /** catalog name in Watsonx.data. */
    catalogName?: string;
    /** schema name in Watsonx.data. */
    schemaName?: string;
    /** reference as an continue of reading results from earlier query (if the results exceed 100). */
    next?: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `listSemanticSearchQueries` operation. */
  export interface ListSemanticSearchQueriesParams extends DefaultParams {
    /** engine id. */
    engineId?: string;
    /** enable schemas search. */
    schemaSearchEnabled?: boolean;
    /** enable columns search. */
    columnSearchEnabled?: boolean;
    /** max history records limitation. */
    maxResultNumber?: number;
    /** if the response include actual search result. */
    runSearch?: boolean;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `createSemanticSearchQueries` operation. */
  export interface CreateSemanticSearchQueriesParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** search string. */
    queryInput: string;
    /** request payload for semantic search configurations. */
    searchConfig?: SemanticSearchBodySearchConfig;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteSemanticSearchQueries` operation. */
  export interface DeleteSemanticSearchQueriesParams extends DefaultParams {
    /** max number to queries to be deleted (most recent to least), if no number provided all queries history will
     *  be clear.
     */
    batchSize?: number;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteSemanticSearchQueriesById` operation. */
  export interface DeleteSemanticSearchQueriesByIdParams extends DefaultParams {
    /** id of the semanric search query record. */
    id: string;
    /** watsonx.data instance ID for software , CRN for SAAS. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteSalMetadata` operation. */
  export interface DeleteSalMetadataParams extends DefaultParams {
  }

  /** Parameters for the `listIngestionJobs` operation. */
  export interface ListIngestionJobsParams extends DefaultParams {
    /** Lakehouse Instance ID. */
    authInstanceId: string;
    /** Page offset. */
    start?: string;
    /** Page size. */
    limit?: number;
  }

  /** Parameters for the `createIngestionJob` operation. */
  export interface CreateIngestionJobParams extends DefaultParams {
    /** Lakehouse Instance ID. */
    authInstanceId: string;
    /** Job ID of the ingestion job. */
    id: string;
    /** Details of ingestion source files. */
    source: SourceDetails;
    /** Details of ingestion target table. */
    target: TargetDetails;
    /** Spark Engine Detail. */
    engine?: IngestionEngine;
    /** ID of the spark engine to be used for ingestion. */
    engineId?: string;
    /** Ingestion engine configuration. */
    executeConfig?: ExecuteConfig;
    /** Iceberg source table information. */
    sourceIcebergTable?: IcebergSourceTable;
    /** Comma delimited list of columns to partition by. */
    partitionBy?: string;
    /** Capacity Details. */
    capacity?: CapacityDetails;
  }

  /** Parameters for the `getIngestionJob` operation. */
  export interface GetIngestionJobParams extends DefaultParams {
    /** Lakehouse Instance ID. */
    authInstanceId: string;
    /** Ingestion Job ID. */
    id: string;
  }

  /** Parameters for the `listResourceAccessPolicies` operation. */
  export interface ListResourceAccessPoliciesParams extends DefaultParams {
    /** The unique identifier for your watsonx.data instance. */
    authInstanceId?: string;
    /** Specifies the type of watsonx.data resource for which to retrieve access policies. Valid resource types
     *  include: 'catalog', 'database', 'storage', 'presto', 'prestissimo', 'spark', 'milvus', and 'datastax'.
     */
    resourceType?: ListResourceAccessPoliciesConstants.ResourceType | string;
    /** An array of resource identifiers to filter access policies. Specify one or more resource IDs (up to 10) to
     *  retrieve policies for specific resources. Resource IDs are applicable for resource types: 'presto',
     *  'prestissimo', 'spark', 'milvus', 'storage', and 'database'.
     */
    resourceId?: string[];
    /** An array of resource names to filter access policies. Specify one or more resource names (up to 10) to
     *  retrieve policies for specific catalog resources. This parameter is primarily used when the resource_type is
     *  'catalog'.
     */
    resourceName?: string[];
  }

  /** Constants for the `listResourceAccessPolicies` operation. */
  export namespace ListResourceAccessPoliciesConstants {
    /** Specifies the type of watsonx.data resource for which to retrieve access policies. Valid resource types include: 'catalog', 'database', 'storage', 'presto', 'prestissimo', 'spark', 'milvus', and 'datastax'. */
    export enum ResourceType {
      CATALOG = 'catalog',
      DATABASE = 'database',
      STORAGE = 'storage',
      PRESTO = 'presto',
      PRESTISSIMO = 'prestissimo',
      SPARK = 'spark',
      MILVUS = 'milvus',
      DATASTAX = 'datastax',
    }
  }

  /** Parameters for the `bulkUpdateResourceAccessPolicies` operation. */
  export interface BulkUpdateResourceAccessPoliciesParams extends DefaultParams {
    /** Array of access policies. Each access policy contains metadata, permission,resource, state and subject. */
    accessPolicies?: AccessPolicyBulkUpdate[];
    /** Unique identifier assigned to a specific watsonx.data instance. */
    authInstanceId?: string;
  }

  /** Parameters for the `revokeResourceAccessPolicies` operation. */
  export interface RevokeResourceAccessPoliciesParams extends DefaultParams {
    /** List of resources to which the access policies should be applied. */
    resources?: ResourceDetails[];
    /** List of subjects (users and user groups) to which the access policy applies, along with the specified
     *  permissions.
     */
    subjects?: SubjectRevoke[];
    /** Unique identifier assigned to a specific watsonx.data instance. */
    authInstanceId?: string;
  }

  /** Parameters for the `filterResourceAccessPoliciesOnUsersAndUsergroups` operation. */
  export interface FilterResourceAccessPoliciesOnUsersAndUsergroupsParams extends DefaultParams {
    /** Array of access policies. Each access policy contains metadata, permission,resource, state and subject. */
    accessPoliciesSearch: AccessPoliciesSearch[];
    /** Unique identifier assigned to a specific watsonx.data instance. */
    authInstanceId?: string;
  }

  /** Parameters for the `listDataPolicies` operation. */
  export interface ListDataPoliciesParams extends DefaultParams {
    /** Unique identifier assigned to a specific watsonx.data instance. */
    authInstanceId?: string;
    /** name of catalog as query param to filter the data polciies. */
    catalogName?: string;
    /** resource identifier as query param to filter the data policies. */
    resourceId?: string;
    /** policy status as query param to filter the data policies. */
    status?: string;
    /** include_metadata is a boolean query param which can be set as true if metadata policy is needed in response
     *  of get data policies else set it as false.
     */
    includeMetadata?: boolean;
    /** include_rules is a boolean query param which can be set as true if rules are needed in response of get data
     *  policies else set it as false.
     */
    includeRules?: boolean;
    /** Bucket Name is a qualified name of a storage bucket . It is of the format `bucket name`. Specify
     *  `bucket_name` along with `data_artifact` to fetch policy for a bucket applicable to a data artifact.
     */
    bucketName?: string;
    /** Service Name is a qualified name of a service used . It is of the format `service name`. Specify
     *  `service_name` along with `data_artifact` to fetch policy for a service applicable to a data artifact.
     */
    serviceName?: string;
    /** Data Artifact is a fully qualified table name . It is of the format `schema name:table name`. Specify
     *  `catalog_name` along with `data_artifact` to fetch policy applicable to a data artifact.
     */
    dataArtifact?: string;
  }

  /** Parameters for the `createDataPolicy` operation. */
  export interface CreateDataPolicyParams extends DefaultParams {
    /** The data artifact provides the full path of the resource to which the data policy applies. */
    dataArtifact: string;
    /** rules is the array RuleV2. RuleV2 contains the effect, actions and grantees. */
    rules: RuleV2[];
    /** name of the catalog in which the data policy resource is residing. */
    catalogName?: string;
    /** type of the catalog in which the data policy resource is residing. */
    catalogType?: string;
    /** a more detailed description of the policy. */
    description?: string;
    /** The unique name of the data policy.It should be in a given pattern. */
    policyName?: string;
    /** identifier of the resource on which the data policy is created on. */
    resourceId?: string;
    /** status of data policy. Values can be active or inactive. */
    status?: CreateDataPolicyConstants.Status | string;
    /** Unique identifier assigned to a specific watsonx.data instance. */
    authInstanceId?: string;
  }

  /** Constants for the `createDataPolicy` operation. */
  export namespace CreateDataPolicyConstants {
    /** status of data policy. Values can be active or inactive. */
    export enum Status {
      ACTIVE = 'active',
      INACTIVE = 'inactive',
    }
  }

  /** Parameters for the `deleteDataPolicies` operation. */
  export interface DeleteDataPoliciesParams extends DefaultParams {
    /** Unique identifier assigned to a specific watsonx.data instance. */
    authInstanceId?: string;
    /** Data policies that must be deleted is passing as query param, for example: ?policies=policy1,policy2. */
    policies?: string;
  }

  /** Parameters for the `getDataPolicy` operation. */
  export interface GetDataPolicyParams extends DefaultParams {
    /** Policy name which is passing as path param to get the data policy details. */
    name: string;
    /** Unique identifier assigned to a specific watsonx.data instance. */
    authInstanceId?: string;
  }

  /** Parameters for the `replaceDataPolicy` operation. */
  export interface ReplaceDataPolicyParams extends DefaultParams {
    /** Name of data policy as path param which needs to be updated. */
    name: string;
    /** The data artifact provides the full path of the resource to which the data policy applies. */
    dataArtifact: string;
    /** rules is the array RuleV2. RuleV2 contains the effect, actions and grantees. */
    rules: RuleV2[];
    /** name of the catalog in which the data policy resource is residing. */
    catalogName?: string;
    /** type of the catalog in which the data policy resource is residing. */
    catalogType?: string;
    /** a more detailed description of the policy. */
    description?: string;
    /** The unique name of the data policy.It should be in a given pattern. */
    policyName?: string;
    /** identifier of the resource on which the data policy is created on. */
    resourceId?: string;
    /** status of data policy. Values can be active or inactive. */
    status?: ReplaceDataPolicyConstants.Status | string;
    /** Unique identifier assigned to a specific watsonx.data instance. */
    authInstanceId?: string;
  }

  /** Constants for the `replaceDataPolicy` operation. */
  export namespace ReplaceDataPolicyConstants {
    /** status of data policy. Values can be active or inactive. */
    export enum Status {
      ACTIVE = 'active',
      INACTIVE = 'inactive',
    }
  }

  /** Parameters for the `deleteDataPolicy` operation. */
  export interface DeleteDataPolicyParams extends DefaultParams {
    /** Policy name which is passing as path param to delete. */
    name: string;
    /** Unique identifier assigned to a specific watsonx.data instance. */
    authInstanceId?: string;
  }

  /** Parameters for the `updateDataPolicy` operation. */
  export interface UpdateDataPolicyParams extends DefaultParams {
    /** data policy name as path param to update the users or user groups using PATCH method. */
    name: string;
    /** PolicyV2Patch schema contains operation, path and value. Operation can be add or remove, JSON pointer path
     *  of the property to be updated in the data policy. Currently only grantees inside rules
     *  (/rules/[ruleIndex]/grantees) can be updated and value contain list of rules.
     */
    body: JsonPatchOperation[];
    /** Unique identifier assigned to a specific watsonx.data instance. */
    authInstanceId?: string;
  }

  /*************************
   * model interfaces
   ************************/

  /**
   * A list of access policies applied to users and user groups for the specified resources.
   */
  export interface AccessPolicies {
    /** Array of access policies. Each access policy contains metadata, permission,resource, state and subject. */
    access_policies: AccessPolicy[];
    /** account id of the logged in user. */
    account_id?: string;
    /** Unique identifier assigned to a specific watsonx.data instance. */
    instance_id?: string;
    /** maximum number of records in a page. */
    limit?: number;
    /** number of records to skip from the start of the list. */
    offset?: number;
    /** Total number of access policies matching the query criteria across all pages. This value represents the
     *  complete count of policies in the system and is used for pagination calculations.
     */
    total_count?: number;
  }

  /**
   * Access Policies search request object which contains resources and subjects (users and user groups) to which the
   * access policy .
   */
  export interface AccessPoliciesSearch {
    /** List of resources to which the access policies should be applied. */
    resources?: ResourceDetails[];
    /** List of subjects (users and user groups) to which the access policy applies, along with the specified
     *  permissions.
     */
    subjects_to_search?: Subject[];
  }

  /**
   * access policy details of the provided resource type and resource id or name. This details include metadata,
   * permissions, resource, state and subject.
   */
  export interface AccessPolicy {
    /** metadata of each access policy such as created at, created by, last modified at and last modified by. */
    metadata?: Metadata;
    /** the permissions the given user or group has, on the provided resource. */
    permissions: Permission[];
    /** This resource details contain resource type and resource id or name. */
    resource?: ResourceDetails;
    /** state of each policy. It can be either active or inactive. */
    state: AccessPolicy.Constants.State | string;
    /** subject can be user or group who can access on the provided resource. */
    subject?: Subject;
  }
  export namespace AccessPolicy {
    export namespace Constants {
      /** state of each policy. It can be either active or inactive. */
      export enum State {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
      }
    }
  }

  /**
   * Add or update the access permissions of the specified users and user groups on the provided resource.
   */
  export interface AccessPolicyBulkUpdate {
    /** List of resources to which the access policies should be applied. */
    resources?: ResourceDetailsBulkUpdate[];
    /** List of subjects (users and user groups) to which the access policy applies, along with the specified
     *  permissions.
     */
    subjects?: SubjectBulkUpdate[];
  }

  /**
   * access policy details of the provided resource type and resource id or name. This details include metadata,
   * permissions, resource, state and subject.
   */
  export interface AccessPolicyBulkUpdateData {
    /** metadata of each access policy such as created at, created by, last modified at and last modified by. */
    metadata?: Metadata;
    /** the permissions the given user or group has, on the provided resource. */
    permissions: Permission[];
    /** This resource details contain resource type and resource id or name. */
    resource?: ResourceDetailsBulkUpdate;
    /** state of each policy. It can be either active or inactive. */
    state: AccessPolicyBulkUpdateData.Constants.State | string;
    /** subject can be user or group who can access on the provided resource. */
    subject?: SubjectBulkUpdateData;
  }
  export namespace AccessPolicyBulkUpdateData {
    export namespace Constants {
      /** state of each policy. It can be either active or inactive. */
      export enum State {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
      }
    }
  }

  /**
   * A list of access policies applied to users and user groups for the specified resources after.
   */
  export interface AccessPolicyBulkUpdateResponse {
    /** Array of access policies. Each access policy contains metadata, permission,resource, state and subject. */
    access_policies: AccessPolicyBulkUpdateData[];
    /** account id of the logged in user. */
    account_id?: string;
    /** Unique identifier assigned to a specific watsonx.data instance. */
    instance_id?: string;
  }

  /**
   * Autoscaling configuration for engine.
   */
  export interface AutoScalingConfig {
    /** Target CPU utilization percentage. */
    target?: number;
    /** Minimum number of worker nodes. */
    min_worker_quantity?: number;
    /** Maximum number of worker nodes. */
    max_worker_quantity?: number;
    /** Grace period in minutes before terminating queries. */
    query_termination_grace_period_min?: number;
    /** Stabilization window in minutes for scale-in. */
    scale_in_stabilization_window_min?: number;
    /** Number of nodes to add/remove per scaling action. */
    scaling_step_size?: number;
  }

  /**
   * Autoscaling configuration for the engine.
   */
  export interface AutoscalingConfig {
    /** Autoscaling type. */
    type: AutoscalingConfig.Constants.Type | string;
    /** Target utilization percentage. */
    target?: number;
    /** Minimum number of worker nodes. */
    min_worker_quantity?: number;
    /** Maximum number of worker nodes. */
    max_worker_quantity?: number;
    /** Grace period in minutes before terminating queries. */
    query_termination_grace_period_min?: number;
    /** Stabilization window in minutes for scale-in. */
    scale_in_stabilization_window_min?: number;
    /** Number of nodes to add/remove per scaling action. */
    scaling_step_size?: number;
  }
  export namespace AutoscalingConfig {
    export namespace Constants {
      /** Autoscaling type. */
      export enum Type {
        CPU = 'cpu',
        MEMORY = 'memory',
      }
    }
  }

  /**
   * Storage connection details.
   */
  export interface BucketDetails {
    /** Storage access key. */
    access_key?: string;
    /** Storage account name. */
    account_name?: string;
    /** Storage application ID. */
    application_id?: string;
    /** Storage container name. */
    container_name?: string;
    /** Storage directory ID. */
    directory_id?: string;
    /** Storage endpoint. */
    endpoint?: string;
    /** Storage region. */
    region?: string;
    /** Storage secret key. */
    secret_key?: string;
    /** Storage authentication type. */
    auth_mode?: BucketDetails.Constants.AuthMode | string;
    /** STS Role ARN. */
    role_arn?: string;
    /** Bucket managed by. */
    managed_by?: string;
    /** Storage name. */
    name: string;
    /** Storage type. */
    type: BucketDetails.Constants.Type | string;
  }
  export namespace BucketDetails {
    export namespace Constants {
      /** Storage authentication type. */
      export enum AuthMode {
        AWS_ASSUME_ROLE = 'aws_assume_role',
        AWS_ASSUME_ROLE_WITH_WEBIDENTITY = 'aws_assume_role_with_webidentity',
        HMAC = 'hmac',
      }
      /** Storage type. */
      export enum Type {
        ADLS_GEN1 = 'adls_gen1',
        ADLS_GEN2 = 'adls_gen2',
        IBM_COS = 'ibm_cos',
        IBM_CEPH = 'ibm_ceph',
        IBM_STORAGE_SCALE = 'ibm_storage_scale',
        MINIO = 'minio',
        AMAZON_S3 = 'amazon_s3',
        AWS_S3 = 'aws_s3',
        GOOGLE_CS = 'google_cs',
        OZONE = 'ozone',
        HDFS = 'hdfs',
        S3 = 's3',
      }
    }
  }

  /**
   * Capacity Details.
   */
  export interface CapacityDetails {
    /** Capacity ID for given spark engine. */
    id?: string;
  }

  /**
   * Define the catalog details.
   */
  export interface Catalog {
    /** List of allowed actions. */
    actions: Catalog.Constants.Actions[] | string[];
    /** List of associated databases. */
    associated_databases: string[];
    /** List of associated engines. */
    associated_engines: string[];
    /** List of associated storage. */
    associated_storage: string[];
    /** catalog base path. */
    base_path?: string;
    /** Catalog synchronization metadata. */
    catalog_sync_metadata?: CatalogSyncMetadata;
    /** Epoch timestamp when the catalog was created. */
    created_at?: string;
    /** Created by. */
    created_by?: string;
    /** Days left for catalog dissociation in case of vulnerability. */
    days_left?: string;
    /** The description if added, for the catalog. */
    description?: string;
    /** catalog location uri. */
    location_uri?: string;
    /** Managed by. */
    managed_by: Catalog.Constants.ManagedBy | string;
    /** MDS Thrift server connection details. */
    mds_connection_information?: MdsConnectionInfo;
    /** Underlying catalog or storage backend used for metadata operations.For example,if the database type is
     *  `hive_hadoop2` or `iceberg`, the metastore is often set to `glue`.For HDFS, the metastore may be set to `hdfs`.
     */
    metastore?: string;
    /** Name of the catalog. */
    name?: string;
    /** Catalog status. */
    status?: string;
    /** List of tags added to this catalog. */
    tags: string[];
    /** Catalog names. */
    catalog_names: string[];
    /** Catalog type like iceberg,hive etc. */
    type?: string;
  }
  export namespace Catalog {
    export namespace Constants {
      /** List of allowed actions. */
      export enum Actions {
        SELECT = 'select',
        USE = 'use',
        SHOW = 'show',
        VIEW = 'view',
        CREATE = 'create',
        DROP = 'drop',
        ALTER = 'alter',
        INSERT = 'insert',
        GRANT = 'grant',
        REVOKE = 'revoke',
        DELETE = 'delete',
        UPDATE = 'update',
        REMOVE = 'remove',
        REGISTER = 'register',
      }
      /** Managed by. */
      export enum ManagedBy {
        IBM = 'ibm',
        CUSTOMER = 'customer',
      }
    }
  }

  /**
   * Collection of catalogs.
   */
  export interface CatalogCollection {
    /** List of catalogs. */
    catalogs: Catalog[];
  }

  /**
   * Collection of catalogs.
   */
  export interface CatalogEngineResponse {
    /** List of associated engines. */
    associated_engines: string[];
    /** Name of the catalog. */
    catalog_name?: string;
    /** Catalog type like iceberg,hive etc. */
    catalog_type?: string;
  }

  /**
   * Catalog configuration properties for coordinator and worker nodes.
   */
  export interface CatalogProperties {
    /** Catalog properties for coordinator node. */
    coordinator?: JsonObject;
    /** Catalog properties for worker nodes. */
    worker?: JsonObject;
  }

  /**
   * Catalog synchronization metadata.
   */
  export interface CatalogSyncMetadata {
    /** The time the catalog was last synced at, in epoch timestamp format. If no sync has happened, this property
     *  will be empty.
     */
    last_sync_at?: string;
    /** Catalog synchronization status message. */
    sync_description?: string;
    /** Catalog synchronization error messages. */
    sync_exception: string[];
    /** Catalog synchronization status. */
    sync_status?: string;
  }

  /**
   * Details of catalogs associated with `ikc`.
   */
  export interface Catalogs {
    /** Comma separated list of catalogs for which `ikc` needs to be enabled. */
    catalog_names: string[];
  }

  /**
   * Column details.
   */
  export interface Column {
    /** Optional comment or description of the column. */
    comment?: string;
    /** Extra column attributes, e.g., AUTO_INCREMENT, DEFAULT, etc. */
    extra?: string;
    /** Length for types like VARCHAR or CHAR. Should be a numeric string. */
    length?: string;
    /** Valid SQL column name. */
    name?: string;
    /** Precision (total number of digits) for numeric types like DECIMAL. */
    precision?: string;
    /** Scale (number of digits after the decimal point) for numeric types like DECIMAL. */
    scale?: string;
    /** SQL data type, e.g., varchar, int, decimal(10,2), etc. */
    type?: string;
  }

  /**
   * collection of columns in a table.
   */
  export interface ColumnCollection {
    /** List of the columns present in the table. */
    columns: Column[];
  }

  /**
   * Configuration properties for coordinator and worker nodes.
   */
  export interface ConfigurationProperties {
    /** Configuration properties for coordinator node. */
    coordinator?: JsonObject;
    /** Configuration properties for worker nodes. */
    worker?: JsonObject;
  }

  /**
   * Presto engine configurations.
   */
  export interface CoordinatorNodeDescriptionBody {
    /** Presto engine coordinator node type. */
    node_type: string;
    /** Quantity of presto engine nodes. */
    quantity: number;
  }

  /**
   * database catalog.
   */
  export interface DatabaseCatalog {
    /** catalog name. */
    catalog_name?: string;
    /** catalog tags. */
    catalog_tags: string[];
    /** catalog type. */
    catalog_type?: string;
  }

  /**
   * database catalog.
   */
  export interface DatabaseCatalogPrototype {
    /** catalog name. */
    catalog_name?: string;
    /** catalog type. */
    catalog_type?: string;
  }

  /**
   * database details.
   */
  export interface DatabaseDetails {
    /** Authentication method. */
    authentication_type?: string;
    /** Authentication method. */
    authentication_value?: string;
    /** secret details. */
    authentication_value_key_vault?: SecretDetails;
    /** Broker authentication password. */
    broker_authentication_password?: string;
    /** Broker authentication type. */
    broker_authentication_type?: string;
    /** Broker authentication user. */
    broker_authentication_user?: string;
    /** Broker host. */
    broker_host?: string;
    /** Broker port. */
    broker_port?: number;
    /** contents of a pem/crt file. */
    certificate?: string;
    /** extension of the certificate file. */
    certificate_extension?: string;
    /** connection mode. */
    connection_method?: string;
    /** connection mode. */
    connection_mode?: string;
    /** connection mode value. */
    connection_mode_value?: string;
    /** Connection type. */
    connection_type?: string;
    /** Controller authentication password. */
    controller_authentication_password?: string;
    /** Controller authentication type. */
    controller_authentication_type?: string;
    /** secret details. */
    password_key_vault?: SecretDetails;
    /** Controller authentication user. */
    controller_authentication_user?: string;
    /** Coordinator host. */
    coordinator_host?: string;
    /** Coordinator port. */
    coordinator_port?: number;
    /** CPD Hostname. */
    cpd_hostname?: string;
    /** Base 64 encoded json file. */
    credentials_key?: string;
    /** Domain name. */
    domain_name?: string;
    /** Host name. */
    hostname?: string;
    /** Hostname in certificate. */
    hostname_in_certificate?: string;
    /** String of hostname:port. */
    hosts?: string;
    /** informix server value. */
    informix_server?: string;
    /** Database name. */
    name?: string;
    /** Psssword. */
    password?: string;
    /** Port. */
    port?: number;
    /** Project ID. */
    project_id?: string;
    /** This will hold all the properties for a custom database. */
    properties: DatabaseRegistrationPatchDatabaseDetailsDatabasePropertiesItems[];
    /** SASL Mode. */
    sasl?: boolean;
    /** sasl mechanism for kafka. Allowed values are plain, scram_sha_256, scram_sha_512. */
    sasl_mechanism?: string;
    /** Schema name. */
    schema_name?: string;
    /** Add tables. */
    schemas?: string;
    /** service api key. */
    service_api_key?: string;
    /** service hostname. */
    service_hostname?: string;
    /** service password. */
    service_password?: string;
    /** Service Port. */
    service_port?: number;
    /** Service SSL Mode. */
    service_ssl?: boolean;
    /** service token url. */
    service_token_url?: string;
    /** service username. */
    service_username?: string;
    /** SSL Mode. */
    ssl?: boolean;
    /** Add tables. */
    tables?: string;
    /** Username. */
    username?: string;
    /** Verify certificate. */
    validate_server_certificate?: boolean;
    /** Verify host name. */
    verify_host_name?: boolean;
    /** secret details. */
    sslcertificate_key_vault?: SecretDetails;
    /** vault enabled or not. */
    vault_enabled?: boolean;
    /** secret details. */
    username_key_vault?: SecretDetails;
    /** Warehouse name. */
    warehouse_name?: string;
  }

  /**
   * database details.
   */
  export interface DatabaseDetailsPrototype {
    /** Authentication method. */
    authentication_type?: string;
    /** Authentication method. */
    authentication_value?: string;
    /** secret details. */
    authentication_value_key_vault?: SecretDetails;
    /** Broker authentication password. */
    broker_authentication_password?: string;
    /** Broker authentication type. */
    broker_authentication_type?: string;
    /** Broker authentication user. */
    broker_authentication_user?: string;
    /** Broker host. */
    broker_host?: string;
    /** Broker port. */
    broker_port?: number;
    /** contents of a pem/crt file. */
    certificate?: string;
    /** extension of the certificate file. */
    certificate_extension?: string;
    /** connection mode. */
    connection_method?: string;
    /** connection mode. */
    connection_mode?: string;
    /** connection mode value. */
    connection_mode_value?: string;
    /** Connection type. */
    connection_type?: string;
    /** Controller authentication password. */
    controller_authentication_password?: string;
    /** Controller authentication type. */
    controller_authentication_type?: string;
    /** Controller authentication user. */
    controller_authentication_user?: string;
    /** Coordinator host. */
    coordinator_host?: string;
    /** Coordinator port. */
    coordinator_port?: number;
    /** CPD Hostname. */
    cpd_hostname?: string;
    /** Base 64 encoded json file. */
    credentials_key?: string;
    /** Domain name. */
    domain_name?: string;
    /** Host name. */
    hostname?: string;
    /** Hostname in certificate. */
    hostname_in_certificate?: string;
    /** String of hostname:port. */
    hosts?: string;
    /** informix server value. */
    informix_server?: string;
    /** Database name. */
    name?: string;
    /** Psssword. */
    password?: string;
    /** secret details. */
    password_key_vault?: SecretDetails;
    /** Port. */
    port?: number;
    /** Project ID. */
    project_id?: string;
    /** SASL Mode. */
    sasl?: boolean;
    /** sasl mechanism for kafka. Allowed values are plain, scram_sha_256, scram_sha_512. */
    sasl_mechanism?: string;
    /** Schema name. */
    schema_name?: string;
    /** Add tables. */
    schemas?: string;
    /** service api key. */
    service_api_key?: string;
    /** service hostname. */
    service_hostname?: string;
    /** service password. */
    service_password?: string;
    /** Service Port. */
    service_port?: number;
    /** Service SSL Mode. */
    service_ssl?: boolean;
    /** service token url. */
    service_token_url?: string;
    /** service username. */
    service_username?: string;
    /** SSL Mode. */
    ssl?: boolean;
    /** secret details. */
    sslcertificate_key_vault?: SecretDetails;
    /** Add tables. */
    tables?: string;
    /** Username. */
    username?: string;
    /** secret details. */
    username_key_vault?: SecretDetails;
    /** Verify certificate. */
    validate_server_certificate?: boolean;
    /** vault enabled or not. */
    vault_enabled?: boolean;
    /** Verify host name. */
    verify_host_name?: boolean;
    /** Warehouse name. */
    warehouse_name?: string;
  }

  /**
   * Database registration object.
   */
  export interface DatabaseRegistration {
    /** actions. */
    actions: string[];
    /** database catalog. */
    associated_catalog?: DatabaseCatalog;
    /** Catalog name. */
    catalog_name?: string;
    /** database details. */
    connection: DatabaseDetails;
    /** Created on. */
    created_at?: string;
    /** Created by. */
    created_by?: string;
    /** Database description. */
    description?: string;
    /** Database display name. */
    display_name: string;
    /** Database ID. */
    id?: string;
    /** This will hold all the properties for a custom database. */
    properties: DatabaseRegistrationDatabasePropertiesItems[];
    /** Target catalog id in the platform to save the database connection. */
    target_catalog_id?: string;
    /** Source connection assset Id from platform. */
    source_asset_id?: string;
    /** Source catalog Id from platform. */
    source_catalog_id?: string;
    /** Source project Id from platform. */
    source_project_id?: string;
    /** List of tables. */
    tables: DatabaseRegistrationTablesItems[];
    /** tags. */
    tags: string[];
    /** List of topics. */
    topics: DatabaseRegistrationTopicsItems[];
    /** Connector type. */
    type: string;
    /** vault enabled or not. */
    vault_enabled?: boolean;
  }

  /**
   * Database registrations collection.
   */
  export interface DatabaseRegistrationCollection {
    /** Database body. */
    database_registrations: DatabaseRegistration[];
  }

  /**
   * Key value object.
   */
  export interface DatabaseRegistrationDatabasePropertiesItems {
    /** Indicates if the value must be encrypted before storing. */
    encrypt: boolean;
    /** Key of the database property. */
    key: string;
    /** Value of the database property. */
    value: string;
  }

  /**
   * Database details update. Only credentials can be updated.
   */
  export interface DatabaseRegistrationPatchDatabaseDetails {
    /** Authentication method. */
    authentication_value?: string;
    /** Broker authentication password. */
    broker_authentication_password?: string;
    /** Broker authentication type. */
    broker_authentication_type?: string;
    /** Broker authentication user. */
    broker_authentication_user?: string;
    /** Controller authentication password. */
    controller_authentication_password?: string;
    /** Controller authentication type. */
    controller_authentication_type?: string;
    /** Controller authentication user. */
    controller_authentication_user?: string;
    /** Base 64 encoded json file. */
    credentials_key?: string;
    /** New password. */
    password?: string;
    /** This will hold all the properties for a custom database. */
    properties?: DatabaseRegistrationPatchDatabaseDetailsDatabasePropertiesItems[];
    /** New username. */
    username?: string;
  }

  /**
   * Key value object.
   */
  export interface DatabaseRegistrationPatchDatabaseDetailsDatabasePropertiesItems {
    /** Indicates if the value must be encrypted before storing. */
    encrypt: boolean;
    /** Key of the database property. */
    key: string;
    /** Value of the database property. */
    value: string;
  }

  /**
   * Table.
   */
  export interface DatabaseRegistrationPatchTablesItems {
    /** Created on. */
    created_at?: string;
    /** file content. */
    file_contents?: string;
    /** file name. */
    file_name?: string;
    /** schema name. */
    schema_name?: string;
    /** table name. */
    table_name?: string;
  }

  /**
   * Topic.
   */
  export interface DatabaseRegistrationPatchTopicsItems {
    /** Created on. */
    created_at?: string;
    /** file contents. */
    file_contents?: string;
    /** file name. */
    file_name?: string;
    /** topic name. */
    topic_name?: string;
  }

  /**
   * Key value object.
   */
  export interface DatabaseRegistrationPrototypeDatabasePropertiesItems {
    /** Indicates if the value must be encrypted before storing. */
    encrypt: boolean;
    /** Key of the database property. */
    key: string;
    /** Value of the database property. */
    value: string;
  }

  /**
   * Table.
   */
  export interface DatabaseRegistrationTablesItems {
    /** Created on. */
    created_at?: string;
    /** file content. */
    file_contents?: string;
    /** file name. */
    file_name?: string;
    /** schema name. */
    schema_name?: string;
    /** table name. */
    table_name?: string;
  }

  /**
   * Topic.
   */
  export interface DatabaseRegistrationTopicsItems {
    /** Created on. */
    created_at?: string;
    /** file content. */
    file_contents?: string;
    /** file name. */
    file_name?: string;
    /** topic name. */
    topic_name?: string;
  }

  /**
   * Db2 engine details.
   */
  export interface Db2Engine {
    /** Actions. */
    actions: string[];
    /** watsonx.data build version. */
    build_version?: string;
    /** External engine details. */
    configuration?: Db2EngineDetails;
    /** Created time in epoch format. */
    created_at?: number;
    /** Username of the user who created the watsonx.data instance. */
    created_by?: string;
    /** Engine description. */
    description?: string;
    /** Engine display name. */
    display_name?: string;
    /** Engine host name. In case of OCP based clusters, this is internal hostname. */
    host_name?: string;
    /** Engine programmatic name. */
    id?: string;
    /** Origin - place holder. */
    origin?: string;
    /** Engine port. */
    port?: number;
    /** Status of db2 engnine. */
    status?: string;
    /** Tags. */
    tags: string[];
    /** Engine type. */
    type?: string;
  }

  /**
   * list db2 engines.
   */
  export interface Db2EngineCollection {
    /** list db2 engines. */
    db2_engines: Db2Engine[];
  }

  /**
   * External engine details.
   */
  export interface Db2EngineDetails {
    /** External engine connection string. */
    connection_string?: string;
    /** Metastore host. */
    metastore_host?: string;
  }

  /**
   * External engine details.
   */
  export interface Db2EngineDetailsBody {
    /** External engine connection string. */
    connection_string: string;
  }

  /**
   * Database credentials model.
   */
  export interface DbConnectionModel {
    /** ID of database. */
    database_id?: string;
    /** Type of DB. */
    db_type?: string;
    /** DB host. */
    host?: string;
    /** DB connection port. */
    port?: string;
    /** Name of DB. */
    db_name?: string;
    /** DB username. */
    db_username?: string;
    /** DB user password. */
    password?: string;
    /** Authentication value. */
    authentication_value?: string;
    /** Indication whether connection is SSL. */
    is_ssl?: boolean;
    /** Location of certificate. */
    cert_extension?: string;
    /** Content of certificate. */
    cert_content?: string;
    /** Connection mode. */
    connection_mode?: string;
    /** Value of connection mode. */
    connection_mode_value?: string;
    /** JDBC URL. */
    jdbc_url?: string;
  }

  /**
   * Driver.
   */
  export interface Driver {
    /** Connection type. */
    connection_type?: string;
    /** Driver name. */
    driver_id?: string;
    /** Driver name. */
    driver_name?: string;
    /** Driver version. */
    driver_version?: string;
  }

  /**
   * Engine configuration details.
   */
  export interface EngineDetails {
    /** Presto engine configurations. */
    coordinator: CoordinatorNodeDescriptionBody;
    /** CPD supported sizes are: custom, starter, small, medium, large, xlarge, and xxlarge. IBM cloud supported
     *  sizes are: custom, starter, small, medium, large, cache_optimized, compute_optimized and lite.
     */
    size_config: string;
    /** Presto engine configurations. */
    worker: WorkerNodeDescriptionBody;
    /** Enable autoscaling for the engine. */
    autoscaling_enabled?: boolean;
    /** Autoscaling configuration for the engine. */
    autoscaling_config?: AutoscalingConfig;
  }

  /**
   * Engine properties.
   */
  export interface EngineProperties {
    /** Engine Catalog properties. */
    catalog?: JsonObject;
    /** Engine configuration properties. */
    configuration?: EnginePropertiesConfiguration;
    /** Event listener engine properties. */
    event_listener?: JsonObject;
    /** Global engine properties. */
    global?: JsonObject;
    /** JMX engine properties. */
    jmx_exporter_config?: JsonObject;
    /** Engine JVM properties. */
    jvm?: EnginePropertiesJvm;
    /** Engine Logconfig properties. */
    log_config?: EnginePropertiesLogConfig;
  }

  /**
   * Engine Catalog properties.
   */
  export interface EnginePropertiesCatalogAdditionalProperties {
    /** Engine Catalog coordinator properties. */
    coordinator?: JsonObject;
    /** Engine Catalog worker properties. */
    worker?: JsonObject;
  }

  /**
   * Engine configuration properties.
   */
  export interface EnginePropertiesConfiguration {
    /** Engine configuration coordinator properties. */
    coordinator?: JsonObject;
    /** Engine configuration worker properties. */
    worker?: JsonObject;
  }

  /**
   * Engine JVM properties.
   */
  export interface EnginePropertiesJvm {
    /** Engine JVM coordinator properties. */
    coordinator?: JsonObject;
    /** Engine JVM worker properties. */
    worker?: JsonObject;
  }

  /**
   * Engine Logconfig properties.
   */
  export interface EnginePropertiesLogConfig {
    /** Engine Logconfig coordinator properties. */
    coordinator?: JsonObject;
    /** Engine Logconfig worker properties. */
    worker?: JsonObject;
  }

  /**
   * Item of request payload of SAL Encrichment job detail, notifiying schema changes to IKC for metadata enrich
   * process.
   */
  export interface EnrichmentObj {
    /** watsonx.data catalog name of where is the schema. */
    catalog: string;
    /** schema change operation type. */
    operation: EnrichmentObj.Constants.Operation | string;
    /** watsonx.data schema name. */
    schema: string;
    /** list of the changed table names in the schema. */
    tables: string[];
  }
  export namespace EnrichmentObj {
    export namespace Constants {
      /** schema change operation type. */
      export enum Operation {
        CREATE = 'create',
        UPDATE = 'update',
      }
    }
  }

  /**
   * integration error object.
   */
  export interface ErrorObj {
    /** error code. */
    code?: string;
    /** error message. */
    message?: string;
  }

  /**
   * Ingestion engine configuration.
   */
  export interface ExecuteConfig {
    /** Driver memory configuration (in GB) for Spark engine. */
    driver_memory?: string;
    /** Driver core(s) configuration for Spark engine. */
    driver_cores?: number;
    /** Executor memory configuration (in GB) for Spark engine. */
    executor_memory?: string;
    /** Executor core(s) configuration for Spark engine. */
    executor_cores?: number;
    /** Number of executors to assign for Spark engine. */
    num_executors?: number;
  }

  /**
   * Options used to read CSV or Text file.
   */
  export interface FileFormatProperties {
    /** Encoding format of the CSV or Text file (e.g., UTF-8). */
    encoding?: string;
    /** Character used to escape special characters in the CSV or Text file. */
    escape_character?: string;
    /** Character used to delimit fields in the CSV or Text file. */
    field_delimiter?: string;
    /** Indicates if the CSV or Text file has a header row. */
    header?: boolean;
    /** Characters used to delimit lines in the CSV or Text file. */
    line_delimiter?: string;
  }

  /**
   * Metadata for data policy. It contains  policy identifier, creator of the policy, time when thw policy got created,
   * time when the policy got updated, last modifier of the policy and the version of data policy.
   */
  export interface GetDataPolicyMetadata {
    /** time when the policy was created. */
    created_at?: string;
    /** an identifier for the creator of the policy. */
    creator?: string;
    /** an identifier for the last modifier of the policy. */
    modifier?: string;
    /** an unique identifier for the policy. */
    pid?: string;
    /** time when the policy was last updated. */
    updated_at?: string;
    /** data policy version. This version will update on each data policy update. */
    version?: string;
  }

  /**
   * glossary object.
   */
  export interface GlossaryObject {
    /** description. */
    description?: string;
    /** glossary term. */
    name?: string;
  }

  /**
   * HDFS storage registration.
   */
  export interface HdfsStorageRegistration {
    /** Actions. */
    actions: string[];
    /** storage catalog. */
    associated_catalog: StorageCatalog;
    /** Creation date. */
    created_at: string;
    /** Username who created the HDFS storage. */
    created_by: string;
    /** HDFS description. */
    description: string;
    /** HDFS storage display name. */
    display_name?: string;
    /** HDFS Storage ID auto generated during registration. */
    id?: string;
    /** managed by. */
    managed_by: HdfsStorageRegistration.Constants.ManagedBy | string;
    /** mark hdfs active or inactive. */
    state: HdfsStorageRegistration.Constants.State | string;
    /** tags. */
    tags: string[];
    /** HDFS type. */
    type: HdfsStorageRegistration.Constants.Type | string;
  }
  export namespace HdfsStorageRegistration {
    export namespace Constants {
      /** managed by. */
      export enum ManagedBy {
        CUSTOMER = 'customer',
      }
      /** mark hdfs active or inactive. */
      export enum State {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
      }
      /** HDFS type. */
      export enum Type {
        HDFS = 'hdfs',
      }
    }
  }

  /**
   * Iceberg source table information.
   */
  export interface IcebergSourceTable {
    /** Iceberg schema name. */
    schema_name?: string;
    /** Iceberg table name. */
    table_name?: string;
    /** Iceberg catalog name. */
    catalog_name?: string;
    /** Iceberg warehouse name. */
    warehouse_name?: string;
    /** Iceberg snapshot ID. */
    snapshot_id?: number;
  }

  /**
   * Spark Engine Detail.
   */
  export interface IngestionEngine {
    /** Engine programmatic name. */
    engine_id?: string;
    /** Engine display name. */
    name?: string;
    /** Engine endpoint. */
    endpoint?: string;
    /** Origin - created or registered. */
    origin?: string;
    /** Ingestion engine configuration. */
    execute_config?: ExecuteConfig;
    /** Storage connection details. */
    bucket_details?: BucketDetails;
    /** Engine log path. */
    log_path?: string;
  }

  /**
   * Ingestion job.
   */
  export interface IngestionJob {
    /** Instance ID of the lakehouse where ingestion job is executed. */
    instance_id?: string;
    /** Job ID of the ingestion job. */
    job_id?: string;
    /** Application ID of the ingestion job. */
    application_id?: string;
    /** Ingestion job user. */
    username?: string;
    /** Unix timestamp of ingestion job starting. */
    start_timestamp?: string;
    /** Unix timestamp of ingestion job completing. */
    end_timestamp?: string;
    /** Current state of ingestion job. */
    status?: string;
    /** Source data location of the ingestion job. */
    source_data_files?: string;
    /** Target table name in format catalog.schema.table. */
    target_table?: string;
    /** Error messages of failed ingestion job. */
    details?: string;
    /** Engine application logs. */
    engine_logs?: string;
    /** ID of the spark engine to be used for ingestion. */
    engine_id?: string;
    /** Name of the spark engine to be used for ingestion. */
    engine_name?: string;
    /** Comma delimited list of columns to partition by. */
    partition_by?: string;
    /** Determine if target schema was created in this ingestion job. */
    is_new_schema?: boolean;
    /** Determine if target table was created in this ingestion job. */
    is_new_table?: boolean;
  }

  /**
   * Paged result for Ingestion Jobs.
   */
  export interface IngestionJobCollection {
    /** Pagination Limit. */
    limit: number;
    /** Pagination Offset. */
    offset: number;
    /** Pagination Result Total Count. */
    total_count: number;
    /** List ingestion jobs. */
    jobs: IngestionJob[];
    /** Pagination next/previous page links. */
    first?: PagedResultsLink;
    /** Pagination next/previous page links. */
    last?: PagedResultsLink;
    /** Pagination next/previous page links. */
    next?: PagedResultsLink;
  }

  /**
   * Schema information derived from file.
   */
  export interface IngestionSchemaResponse {
    /** Schema column field ID. */
    field_id?: number;
    /** Schema column header name. */
    header_name?: string;
    /** Schema column data type. */
    type?: string;
  }

  /**
   * Response body for the POST/GET/PATCH Request for an integration in watsonx.Data.
   */
  export interface Integration {
    /** Access Token for the integration of type `databand`. The value will be encrypted. */
    access_token?: string;
    /** ApiKey for the integration of type `manta` and `ikc`. The value will be encrypted. */
    apikey?: string;
    /** Authentication url for the corresponding `manta` integration in saas (Internal use only). */
    auth_url?: string;
    /** Details of catalogs associated with `ikc`. */
    catalogs?: Catalogs;
    /** Certificate if ssl is enabled for integration type `ikc` (ikc hosted in Cloud Pack for Data) and `ranger`. */
    certificate?: string;
    /** Certificate extension of the certificate provided if ssl is enabled for integration type `ikc` (ikc hosted
     *  in Cloud Pack for Data) and `ranger`.
     */
    certificate_extension?: string;
    /** Properties for `ikc`. */
    config_properties?: string;
    /** Connection mode for manta. */
    connection_mode?: string;
    /** To enable/disable cross account integration for `ikc` in IBM Cloud / MCSP. */
    cross_account_integration?: boolean;
    /** To check if WatsonX.data policies are enabled along with `ranger`. */
    enable_data_policy_within_wxd?: boolean;
    /** Properties for `ikc`. */
    governance_properties?: string;
    /** Unique id to identify the integration. */
    id?: string;
    /** The Account ID where the `ikc` is existing with which cross account integration needs to be enabled, to be
     *  used compulsorily with `cross_account_integration`.
     */
    ikc_user_account_id?: string;
    /** Manta specific Url derived from the url provided for `manta` integration in Saas. */
    manta_url?: string;
    /** Last Modified time for the corresponding integration in epoch format. */
    modified_at?: number;
    /** Last Modified user name for the corresponding integration. */
    modified_by?: string;
    /** Password for the integration of type `ranger`. The value will be encrypted. */
    password?: string;
    /** Displays the policy cache type configuration for integration type `ranger`. */
    policy_cache_time_configuration?: string;
    /** Currently selected resource for `ranger`. */
    resource?: string;
    /** SSL enabled/disabled for `ikc` (ikc hosted in Cloud Pack for Data) and `ranger`. */
    ssl?: boolean;
    /** Current state of the integration. */
    state: Integration.Constants.State | string;
    /** Type of the integration integrated. It  will only have the following values: `ranger`, `ikc`, `databand` and
     *  `manta`.
     */
    type?: string;
    /** URL of the integration. Applicable for all the 4 types:  `ranger`, `ikc`, `databand` and `manta`. */
    url?: string;
    /** Username of the `ikc`/`manta`/`ranger` integration. */
    username?: string;
    /** Zen API key for the integration of type `manta` (Internal use only). */
    zen_apikey?: string;
  }
  export namespace Integration {
    export namespace Constants {
      /** Current state of the integration. */
      export enum State {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        FAILED = 'failed',
        PENDING = 'pending',
      }
    }
  }

  /**
   * list all existing integrations.
   */
  export interface IntegrationCollection {
    /** Database body. */
    integrations: Integration[];
  }

  /**
   * This model represents an individual patch operation to be performed on a JSON document, as defined by RFC 6902.
   */
  export interface JsonPatchOperation {
    /** The operation to be performed. */
    op: JsonPatchOperation.Constants.Op | string;
    /** The JSON Pointer that identifies the field that is the target of the operation. */
    path: string;
    /** The JSON Pointer that identifies the field that is the source of the operation. */
    from?: string;
    /** The value to be used within the operation. */
    value?: any;
  }
  export namespace JsonPatchOperation {
    export namespace Constants {
      /** The operation to be performed. */
      export enum Op {
        ADD = 'add',
        REMOVE = 'remove',
        REPLACE = 'replace',
        MOVE = 'move',
        COPY = 'copy',
        TEST = 'test',
      }
    }
  }

  /**
   * JVM configuration properties for coordinator and worker nodes.
   */
  export interface JvmProperties {
    /** JVM properties for coordinator node. */
    coordinator?: JsonObject;
    /** JVM properties for worker nodes. */
    worker?: JsonObject;
  }

  /**
   * Load table metadata.
   */
  export interface LoadTableResponse {
    /** Metadata location. */
    metadata_location?: string;
    /** Path to the table. */
    table_path?: string;
  }

  /**
   * Logging configuration properties for coordinator and worker nodes.
   */
  export interface LogConfigProperties {
    /** Log configuration for coordinator node. */
    coordinator?: JsonObject;
    /** Log configuration for worker nodes. */
    worker?: JsonObject;
  }

  /**
   * MDS Thrift server connection details.
   */
  export interface MdsConnectionInfo {
    /** External MDS rest uri. */
    external_metastore_rest_uri?: string;
    /** External MDS thrift uri. */
    external_metastore_thrift_uri?: string;
    /** MDS thrift server hostname. */
    hostname?: string;
    /** MDS thrift server port. */
    port?: string;
    /** Internal MDS REST uri. */
    rest_uri?: string;
    /** Internal MDS thrift uri. */
    thrift_uri?: string;
  }

  /**
   * metadata of each access policy such as created at, created by, last modified at and last modified by.
   */
  export interface Metadata {
    /** Access policy creation timestamp. */
    created_at?: string;
    /** an identifier for the creator of the policy. */
    created_by?: string;
    /** access policy last udpated timestamp. */
    last_modified_at?: string;
    /** an identifier for the last modifier of the policy. */
    last_modified_by?: string;
  }

  /**
   * milvus database collection partition details.
   */
  export interface MilvusDBPartition {
    /** milvus partition id. */
    id?: number;
    /** milvus partition name. */
    name?: string;
  }

  /**
   * List Milvus database collections.
   */
  export interface MilvusDatabaseCollections {
    /** List of Milvus database collections. */
    collections: MilvusDbcollection[];
  }

  /**
   * List milvus database collection partitions.
   */
  export interface MilvusDatabasePartitions {
    /** List of milvus database collection partitions. */
    partitions: MilvusDBPartition[];
  }

  /**
   * Details of the Milvus database collection.
   */
  export interface MilvusDbcollection {
    /** milvus collection id. */
    id?: number;
    /** Name of the collection. */
    name?: string;
    /** list of physical channels. */
    physical_channels: string[];
    /** list of virtual channels. */
    virtual_channels: string[];
  }

  /**
   * milvus service details.
   */
  export interface MilvusService {
    /** storage access key. */
    access_key?: string;
    /** Actions. */
    actions: string[];
    /** Created time in epoch format. */
    created_at?: number;
    /** Username of the user who created the watsonx.data instance. */
    created_by?: string;
    /** data coordinator cpus, only configurable in cpd. */
    dc_cpu?: number;
    /** data coordinator memory, only configurable in cpd. */
    dc_memory?: number;
    /** data coordinator replicas, only configurable in cpd. */
    dc_replicas?: number;
    /** Descriptioon of Milvus service added by the user. */
    description?: string;
    /** Display name for milvus services. */
    display_name?: string;
    /** data worker cpus, only configurable in cpd. */
    dw_cpu?: number;
    /** data worker memory, only configurable in cpd. */
    dw_memory?: number;
    /** data worker replicas, only configurable in cpd. */
    dw_replicas?: number;
    /** storage endpoint. */
    endpoint?: string;
    /** etcd cpus, only configurable in cpd. */
    etcd_cpu?: number;
    /** etcd memory, only configurable in cpd. */
    etcd_memory?: number;
    /** Failure message. */
    failure_message?: string;
    /** milvus grpc_host. */
    grpc_host?: string;
    /** milvus port. */
    grpc_port?: number;
    /** milvus display name. */
    host_name?: string;
    /** milvus https_host. */
    https_host?: string;
    /** milvus port. */
    https_port?: number;
    /** Engine id. */
    id?: string;
    /** Index type of milvus engine. */
    index_type: MilvusService.Constants.IndexType | string;
    /** index worker cpu. */
    iw_cpu?: number;
    /** index worker memory. */
    iw_memory?: number;
    /** index worker replicas. */
    iw_replicas?: number;
    /** kafka cpus, only configurable in cpd. */
    kafka_cpu?: number;
    /** kafka memory, only configurable in cpd. */
    kafka_memory?: number;
    /** How is the Milvus instance managed. */
    managed_by?: string;
    /** Origin of the milvus service. */
    origin: MilvusService.Constants.Origin | string;
    /** proxy cpus, only configurable in cpd. */
    proxy_cpu?: number;
    /** milvus proxy host. */
    proxy_host?: string;
    /** proxy memory, only configurable in cpd. */
    proxy_memory?: number;
    /** milvus proxy port. */
    proxy_port?: number;
    /** proxy replicas, only configurable in cpd. */
    proxy_replicas?: number;
    /** query coordinator cpus, only configurable in cpd. */
    qc_cpu?: number;
    /** query coordinator memory, only configurable in cpd. */
    qc_memory?: number;
    /** query coordinator replicas, only configurable in cpd. */
    qc_replicas?: number;
    /** query worker cpu. */
    qw_cpu?: number;
    /** query worker memory. */
    qw_memory?: number;
    /** query worker replicas. */
    qw_replicas?: number;
    /** root coordinator cpus, only configurable in cpd. */
    rc_cpu?: number;
    /** root coodinator memory, only configurable in cpd. */
    rc_memory?: number;
    /** root coordinator replicas, only configurable in cpd. */
    rc_replicas?: number;
    /** Root path in storage where milvus vectors will be stored. */
    root_path?: string;
    /** storage secret access key. */
    secret_key?: string;
    /** milvus status. */
    status: MilvusService.Constants.Status | string;
    /** milvus status code. */
    status_code: number;
    /** storage name. */
    storage_name?: string;
    /** Tags. */
    tags: string[];
    /** Predefined tshirt size for the milvus service. */
    tshirt_size: MilvusService.Constants.TshirtSize | string;
    /** service type. */
    type?: string;
    /** vector. */
    vector?: number;
    /** vector dimension. */
    vector_dimension?: number;
    /** Milvus version. */
    version?: string;
  }
  export namespace MilvusService {
    export namespace Constants {
      /** Index type of milvus engine. */
      export enum IndexType {
        IVF_SQ8 = 'ivf_sq8',
        IVF_PQ = 'ivf_pq',
        HNSW = 'hnsw',
      }
      /** Origin of the milvus service. */
      export enum Origin {
        NATIVE = 'native',
      }
      /** milvus status. */
      export enum Status {
        RUNNING = 'running',
        PENDING = 'pending',
        STOPPED = 'stopped',
      }
      /** Predefined tshirt size for the milvus service. */
      export enum TshirtSize {
        STARTER = 'starter',
        SMALL = 'small',
        MEDIUM = 'medium',
        LARGE = 'large',
        CUSTOM = 'custom',
      }
    }
  }

  /**
   * List milvus services.
   */
  export interface MilvusServiceCollection {
    /** List of milvus services. */
    milvus_services: MilvusService[];
  }

  /**
   * List milvus service databases.
   */
  export interface MilvusServiceDatabases {
    /** List of milvus service databases. */
    databases: Milvusdb[];
  }

  /**
   * Details of the Milvus database.
   */
  export interface Milvusdb {
    /** List of databases. */
    id?: string;
  }

  /**
   * Netezza engine details.
   */
  export interface NetezzaEngine {
    /** Actions. */
    actions: string[];
    /** watsonx.data build version. */
    build_version?: string;
    /** External engine details. */
    configuration?: NetezzaEngineConfiguration;
    /** Created time in epoch format. */
    created_at?: number;
    /** Username of the user who created the watsonx.data instance. */
    created_by?: string;
    /** Engine description. */
    description?: string;
    /** Engine display name. */
    display_name?: string;
    /** Engine host name. In case of OCP based clusters, this is internal hostname. */
    host_name?: string;
    /** Engine programmatic name. */
    id?: string;
    /** Origin - place holder. */
    origin?: string;
    /** Engine port. */
    port?: number;
    /** Engine status. */
    status?: string;
    /** Tags. */
    tags: string[];
    /** Engine type. */
    type?: string;
  }

  /**
   * list Netezza engines.
   */
  export interface NetezzaEngineCollection {
    /** list Netezza engines. */
    netezza_engines: NetezzaEngine[];
  }

  /**
   * External engine details.
   */
  export interface NetezzaEngineConfiguration {
    /** External engine connection string. */
    connection_string?: string;
    /** Metastore host. */
    metastore_host?: string;
  }

  /**
   * External engine details.
   */
  export interface NetezzaEngineConfigurationBody {
    /** External engine connection string. */
    connection_string: string;
  }

  /**
   * Presto engine configurations.
   */
  export interface NodeDescription {
    /** Presto engine node type. */
    node_type?: string;
    /** Quantity of presto engine node. */
    quantity?: number;
  }

  /**
   * external engine details.
   */
  export interface OtherEngine {
    /** Actions. */
    actions: string[];
    /** External engine details. */
    configuration?: OtherEngineConfiguration;
    /** created time in epoch format. */
    created_at?: number;
    /** Username of the user who created the watsonx.data instance. */
    created_by?: string;
    /** engine description. */
    description?: string;
    /** Engine display name. */
    display_name?: string;
    /** Engine host name. In case of OCP based clusters, this is internal hostname. */
    host_name?: string;
    /** engine programmatic name. */
    id?: string;
    /** origin. */
    origin?: string;
    /** Engine port. */
    port?: number;
    /** engine status. */
    status?: string;
    /** Tags. */
    tags: string[];
    /** Type like presto, netezza, external,.. */
    type?: string;
  }

  /**
   * list other engines.
   */
  export interface OtherEngineCollection {
    /** list other engines. */
    other_engines: OtherEngine[];
  }

  /**
   * External engine details.
   */
  export interface OtherEngineConfiguration {
    /** external engine connection string. */
    connection_string: string;
    /** metastore host - not required while registering an engine. */
    metastore_host?: string;
    /** Actual engine type. */
    type: string;
  }

  /**
   * External engine details.
   */
  export interface OtherEngineConfigurationBody {
    /** External engine connection string. */
    connection_string: string;
    /** Actual engine type. */
    type: string;
  }

  /**
   * Pagination next/previous page links.
   */
  export interface PagedResultsLink {
    /** Pagination Link. */
    href?: string;
  }

  /**
   * Link to a page of results.
   */
  export interface PaginationLink {
    /** URL to a specific page. */
    href?: string;
  }

  /**
   * Updated autoscaling configuration.
   */
  export interface PatchAutoscalingConfig {
    /** CPU target in percentage for autoscaling event. */
    target?: number;
    /** Minimum number of worker nodes. */
    min_worker_quantity?: number;
    /** Maximum number of worker nodes. */
    max_worker_quantity?: number;
    /** Pod termination wait time in minutes. */
    query_termination_grace_period_min?: number;
    /** Wait time between scale-in operations in minutes. */
    scale_in_stabilization_window_min?: number;
    /** Number of workers to add/remove per scaling operation. */
    scaling_step_size?: number;
  }

  /**
   * Autoscaling configuration update success response.
   */
  export interface PatchAutoscalingSuccess {
    /** Whether autoscaling is enabled. */
    autoscaling_enabled?: boolean;
    /** Updated autoscaling configuration. */
    autoscaling_config?: PatchAutoscalingConfig;
  }

  /**
   * Storage object size.
   */
  export interface Path {
    /** object path. */
    path?: string;
  }

  /**
   * Permission.
   */
  export interface Permission {
    /** Eligible permission that the specific user can have on the resource type identifier provided. Resource types
     *  can be presto, prestissimo, spark, milvus, database, catalogs and storages.
     */
    action: Permission.Constants.Action | string;
    /** Permission type to the resource. It can be explicit or implicit. */
    permission_type: Permission.Constants.PermissionType | string;
  }
  export namespace Permission {
    export namespace Constants {
      /** Eligible permission that the specific user can have on the resource type identifier provided. Resource types can be presto, prestissimo, spark, milvus, database, catalogs and storages. */
      export enum Action {
        CAN_ADMINISTER = 'can_administer',
        CAN_MANAGE = 'can_manage',
        CAN_USE = 'can_use',
        CAN_WRITE = 'can_write',
        CAN_READ = 'can_read',
        MILVUS_DB_CREATOR = 'milvus_db_creator',
        MILVUS_COLLECTION_CREATOR = 'milvus_collection_creator',
        MILVUS_PARTITION_CREATOR = 'milvus_partition_creator',
        SCHEMA_OWNER = 'schema_owner',
        TABLE_OWNER = 'table_owner',
      }
      /** Permission type to the resource. It can be explicit or implicit. */
      export enum PermissionType {
        EXPLICIT = 'explicit',
        IMPLICIT = 'implicit',
      }
    }
  }

  /**
   * PolicyRuleV2.
   */
  export interface PolicyRuleV2 {
    /** the actions to enforce when the data policy triggers. */
    actions: string[];
    /** defines the effect of the data policy. Values can be allow or deny. Deny will have priority over allow. */
    effect: PolicyRuleV2.Constants.Effect | string;
    /** the grantees to be granted. */
    grantees: RuleGrantee[];
    /** Defines column-level data masking transformation properties. This schema specifies the type of masking to
     *  apply to sensitive data columns, optional masking conditions, and the list of users or groups (grantees) who are
     *  authorized to view the masked data. Column masking helps protect sensitive information while maintaining data
     *  utility for authorized users.
     */
    transform_columns?: TransformColumnResponseProperties;
    /** Defines row-level filtering properties for data access control. This schema specifies filter conditions that
     *  determine which rows of data are visible to specific users or groups (grantees). Row filtering enables
     *  fine-grained access control by restricting data visibility based on row attribute values, ensuring users only
     *  see data they are authorized to access.
     */
    transform_rows?: RowFilterProperties;
  }
  export namespace PolicyRuleV2 {
    export namespace Constants {
      /** defines the effect of the data policy. Values can be allow or deny. Deny will have priority over allow. */
      export enum Effect {
        ALLOW = 'allow',
        DENY = 'deny',
      }
    }
  }

  /**
   * This data policy object contains the unique name of data policy, metadata of the data policy, catalog name, data
   * artifact which is used to identify the object in the resource, policy status, resource id and the list of rules in
   * data policy.
   */
  export interface PolicyV2 {
    /** name of catalog on which the data policy applies. */
    catalog_name?: string;
    /** The data artifact used to identify the object in the resource. */
    data_artifact?: string;
    /** More detailed description of the policy. */
    description?: string;
    /** Metadata for data policy. It contains  policy identifier, creator of the policy, time when thw policy got
     *  created, time when the policy got updated, last modifier of the policy and the version of data policy.
     */
    metadata?: GetDataPolicyMetadata;
    /** The unique name of the data policy. */
    policy_name?: string;
    /** identifier of the resource on which the data policy applies. */
    resource_id?: string;
    /** Total number of rules in each data policy. Rule defines who can access what. */
    rule_count?: number;
    /** The rules list. */
    rules: PolicyRuleV2[];
    /** The data policy status. Values can be active or inactive. */
    status: PolicyV2.Constants.Status | string;
  }
  export namespace PolicyV2 {
    export namespace Constants {
      /** The data policy status. Values can be active or inactive. */
      export enum Status {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
      }
    }
  }

  /**
   * PolicyV2Collection schema contains the list of data policies.
   */
  export interface PolicyV2Collection {
    /** policy collection. */
    data_policies: PolicyV2[];
    /** Total number of policies retrieved as reponse of get data policies. */
    total_count: number;
  }

  /**
   * EngineDetail.
   */
  export interface PrestissimoEngine {
    /** Actions. */
    actions: string[];
    /** status of optimizer sync. */
    analyze_status?: string;
    /** List of catalogs associated with the the engine. */
    associated_catalogs: string[];
    /** watsonx.data build version. */
    build_version?: string;
    /** External engine details. */
    configuration?: PrestissimoEngineDetails;
    /** Presto engine configurations. */
    coordinator?: NodeDescription;
    /** Created time in epoch format. */
    created_at?: number;
    /** Username of the user who created the watsonx.data instance. */
    created_by?: string;
    /** Engine description. */
    description?: string;
    /** Engine display name. */
    display_name?: string;
    /** Applicable only for OCP based clusters.  This is typically  servicename+route. */
    external_host_name: string;
    /** Failure message. */
    failure_message?: string;
    /** Group ID. */
    group_id?: string;
    /** Engine host name. In case of OCP based clusters, this is internal hostname. */
    host_name?: string;
    /** Engine programmatic name. */
    id?: string;
    /** Is QHMM engine. */
    is_qhmm_engine?: boolean;
    /** last optimizer sync call. */
    last_time_analyzed?: string;
    /** optimizer enabled status. */
    optimizer_enabled?: string;
    /** Origin - place holder. */
    origin: PrestissimoEngine.Constants.Origin | string;
    /** Engine port. */
    port?: number;
    /** Engine properties. */
    properties?: PrestissimoEngineProperties;
    /** Query status. */
    query_status?: string;
    /** Region - place holder. */
    region?: string;
    /** CPD supported sizes are: custom, starter, small, medium, large, xlarge, and xxlarge. IBM cloud supported
     *  sizes are: custom, starter, small, medium, large, cache_optimized, compute_optimized and lite.
     */
    size_config?: string;
    /** Engine status. */
    status: PrestissimoEngine.Constants.Status | string;
    /** Engine status code. */
    status_code: number;
    /** Tags. */
    tags: string[];
    /** RemoveEngine properties. */
    remove_engine_properties?: RemovePrestissimoEngineProperties;
    /** engine will restart accordingily. */
    restart_type?: string;
    /** Engine type. */
    type?: string;
    /** Version of the engine. */
    version?: string;
    /** Presto engine configurations. */
    worker?: NodeDescription;
  }
  export namespace PrestissimoEngine {
    export namespace Constants {
      /** Origin - place holder. */
      export enum Origin {
        NATIVE = 'native',
        EXTERNAL = 'external',
        DISCOVER = 'discover',
      }
      /** Engine status. */
      export enum Status {
        RUNNING = 'running',
        PENDING = 'pending',
        STOPPED = 'stopped',
      }
    }
  }

  /**
   * list Prestissimo Engines.
   */
  export interface PrestissimoEngineCollection {
    /** list prestissimo engines. */
    prestissimo_engines: PrestissimoEngine[];
  }

  /**
   * External engine details.
   */
  export interface PrestissimoEngineDetails {
    /** Presto engine configurations. */
    coordinator: NodeDescription;
    /** CPD supported sizes are: custom, starter, small, medium, large, xlarge, and xxlarge. IBM cloud supported
     *  sizes are: custom, starter, small, medium, large, cache_optimized, compute_optimized and lite.
     */
    size_config: string;
    /** Presto engine configurations. */
    worker: NodeDescription;
  }

  /**
   * Engine properties.
   */
  export interface PrestissimoEngineProperties {
    /** Catalog Properties for Prestissimo. */
    catalog?: JsonObject;
    /** Engine Properties for Prestissimo. */
    configuration?: PrestissimoEnginePropertiesConfiguration;
    /** Global engine properties. */
    global?: JsonObject;
    /** JVM Properties for Prestissimo. */
    jvm?: PrestissimoEnginePropertiesJvm;
    /** LogConfig Properties for Prestissimo. */
    log_config?: PrestissimoEnginePropertiesLogConfig;
    /** Optimizer engine properties. */
    optimizer_properties?: JsonObject;
    /** Velox Properties. */
    velox?: JsonObject;
  }

  /**
   * PrestissimoEnginePropertiesCatalogAdditionalProperties.
   */
  export interface PrestissimoEnginePropertiesCatalogAdditionalProperties {
    /** Coordinator Properties for Prestissimo. */
    coordinator?: JsonObject;
    /** Worker Properties for Prestissimo. */
    worker?: JsonObject;
  }

  /**
   * Engine Properties for Prestissimo.
   */
  export interface PrestissimoEnginePropertiesConfiguration {
    /** Configuration Coordinator Properties of Prestissimo. */
    coordinator?: JsonObject;
    /** Configuration Worker Properties of Prestissimo. */
    worker?: JsonObject;
  }

  /**
   * JVM Properties for Prestissimo.
   */
  export interface PrestissimoEnginePropertiesJvm {
    /** JVM coordinator Properties of Prestissimo. */
    coordinator?: JsonObject;
  }

  /**
   * LogConfig Properties for Prestissimo.
   */
  export interface PrestissimoEnginePropertiesLogConfig {
    /** LogConfig coordinator Properties of Prestissimo. */
    coordinator?: JsonObject;
    /** LogConfig worker Properties of Prestissimo. */
    worker?: JsonObject;
  }

  /**
   * Presto engine details.
   */
  export interface PrestoEngine {
    /** Actions. */
    actions: string[];
    /** Catalogs associated to the presto engine. */
    associated_catalogs: string[];
    /** watsonx.data build version. */
    build_version?: string;
    /** Engine configuration details. */
    configuration?: EngineDetails;
    /** Presto engine configurations. */
    coordinator?: NodeDescription;
    /** Created time in epoch format. */
    created_at?: number;
    /** Username of the user who created the watsonx.data instance. */
    created_by?: string;
    /** Engine description. */
    description?: string;
    /** Engine display name. */
    display_name?: string;
    /** Driver details. */
    drivers: Driver[];
    /** Engine properties. */
    properties?: EngineProperties;
    /** The engine properties to be removed which was added through api customisation. */
    remove_engine_properties?: RemoveEngineProperties;
    /** The type of engine restart . The value can be set to forcefully restart an engine. */
    restart_type?: string;
    /** Applicable only for OCP based clusters.  This is typically  servicename+route. */
    external_host_name: string;
    /** Failure message. */
    failure_message?: string;
    /** Group ID. */
    group_id?: string;
    /** Engine host name. In case of OCP based clusters, this is internal hostname. */
    host_name?: string;
    /** The unigue identifier for the engine. */
    id?: string;
    /** Is QHMM engine. */
    is_qhmm_engine?: boolean;
    /** Origin. */
    origin: PrestoEngine.Constants.Origin | string;
    /** Engine port. */
    port?: number;
    /** Query status. */
    query_status?: string;
    /** Resource group details. */
    resource_groups: ResourceGroupForEngine[];
    /** CPD supported sizes are: custom, starter, small, medium, large, xlarge, and xxlarge. IBM cloud supported
     *  sizes are: custom, starter, small, medium, large, cache_optimized, compute_optimized and lite.
     */
    size_config?: string;
    /** Engine status. */
    status: PrestoEngine.Constants.Status | string;
    /** Engine status code. */
    status_code: number;
    /** Tags. */
    tags: string[];
    /** Engine type presto. */
    type?: string;
    /** Version of the engine. */
    version?: string;
    /** Presto engine configurations. */
    worker?: NodeDescription;
    /** Enable autoscaling for the engine. */
    autoscaling_enabled?: boolean;
    /** Autoscaling configuration for the engine. */
    autoscaling_config?: AutoscalingConfig;
  }
  export namespace PrestoEngine {
    export namespace Constants {
      /** Origin. */
      export enum Origin {
        NATIVE = 'native',
        EXTERNAL = 'external',
        DISCOVER = 'discover',
      }
      /** Engine status. */
      export enum Status {
        RUNNING = 'running',
        PENDING = 'pending',
        STOPPED = 'stopped',
      }
    }
  }

  /**
   * Collection of Presto engines.
   */
  export interface PrestoEngineCollection {
    /** List of Presto engines. */
    presto_engines: PrestoEngine[];
  }

  /**
   * Complete Presto engine configuration properties.
   */
  export interface PrestoEngineProperties {
    /** Catalog configurations mapped by catalog name. */
    catalog?: JsonObject;
    /** General configuration properties. */
    configuration?: ConfigurationProperties;
    /** Event listener configuration properties. */
    event_listener?: JsonObject;
    /** Global configuration properties. */
    global?: JsonObject;
    /** JMX exporter configuration properties. */
    jmx_exporter_config?: JsonObject;
    /** JVM configuration properties. */
    jvm?: JvmProperties;
    /** Logging configuration properties. */
    log_config?: LogConfigProperties;
  }

  /**
   * Wrapper object containing Presto engine properties.
   */
  export interface PrestoEnginePropertiesDetails {
    /** Presto engine configuration properties. */
    engine_properties?: PrestoEngineProperties;
  }

  /**
   * Presto engine success message.
   */
  export interface PrestoEngineSuccessResponse {
    /** Response of success. */
    response?: SuccessResponse;
  }

  /**
   * ExplainStatement OK.
   */
  export interface PrestoQueryExplain {
    /** Response of success. */
    response: SuccessResponse;
    /** Result. */
    result: string;
  }

  /**
   * Details realted to the available resources for `ranger`.
   */
  export interface RangerDetails {
    /** Lists all available resources for ranger. */
    resources: RangerResource[];
  }

  /**
   * The ranger resource.
   */
  export interface RangerResource {
    /** Currently selected resource for `ranger`. */
    name?: string;
    /** The type of the ranger resource. */
    type?: string;
  }

  /**
   * Register table.
   */
  export interface RegisterTableCreatedBody {
    /** Response of success. */
    response?: SuccessResponse;
  }

  /**
   * The engine properties to be removed which was added through api customisation.
   */
  export interface RemoveEngineProperties {
    /** Catalog properties with dynamic catalog names. */
    catalog: JsonObject;
    /** RemoveEngine configuration properties. */
    configuration: RemoveEnginePropertiesConfiguration;
    /** The event listener engine properties to be removed which was added through api customisation. */
    event_listener: string[];
    /** The global properties to be removed which was added through api customisation. */
    global: string[];
    /** The jm properties to be removed which was added through api customisation. */
    jmx_exporter_config: string[];
    /** JVM properties. */
    jvm: RemoveEnginePropertiesJvm;
    /** Remove engine log configuration properties. */
    log_config: RemoveEnginePropertiesLogConfig;
  }

  /**
   * RemoveEnginePropertiesCatalogAdditionalProperties.
   */
  export interface RemoveEnginePropertiesCatalogAdditionalProperties {
    /** The catalog properties to be removed. */
    coordinator: string[];
    /** The catalog properties to be removed. */
    worker: string[];
  }

  /**
   * RemoveEngine configuration properties.
   */
  export interface RemoveEnginePropertiesConfiguration {
    /** The configuration properties to be removed. */
    coordinator: string[];
    /** The configuration properties to be removed. */
    worker: string[];
  }

  /**
   * JVM properties.
   */
  export interface RemoveEnginePropertiesJvm {
    /** The JVM properties to be removed. */
    coordinator: string[];
    /** The JVM properties to be removed. */
    worker: string[];
  }

  /**
   * Remove engine log configuration properties.
   */
  export interface RemoveEnginePropertiesLogConfig {
    /** The LogConfig properties to be removed. */
    coordinator: string[];
    /** The LogConfig properties to be removed. */
    worker: string[];
  }

  /**
   * RemoveEngine properties.
   */
  export interface RemovePrestissimoEngineProperties {
    /** Catalog properties with dynamic catalog names. */
    catalog: JsonObject;
    /** Configuration properties of prestissimo that should be removed. */
    configuration: RemovePrestissimoEnginePropertiesConfiguration;
    /** Global properties of prestissimo that should be removed. */
    global: string[];
    /** JVM properties of prestissimo that should be removed. */
    jvm: RemovePrestissimoEnginePropertiesJvm;
    /** LogConfig properties of prestissimo that should be removed. */
    log_config: RemovePrestissimoEnginePropertiesLogConfig;
    /** Optimizer properties of prestissimo that should be removed. */
    optimizer_properties: string[];
    /** Velox properties of prestissimo that should be removed. */
    velox: string[];
  }

  /**
   * Catalog properties of prestissimo that should be removed.
   */
  export interface RemovePrestissimoEnginePropertiesCatalogAdditionalProperties {
    /** Catalog coordinator properties of prestissimo that should be removed. */
    coordinator: string[];
    /** Catalog worker properties of prestissimo that should be removed. */
    worker: string[];
  }

  /**
   * Configuration properties of prestissimo that should be removed.
   */
  export interface RemovePrestissimoEnginePropertiesConfiguration {
    /** Coordinator Properties that should be deleted for Prestissimo. */
    coordinator: string[];
    /** Worker Properties that should be deleted for Prestissimo. */
    worker: string[];
  }

  /**
   * JVM properties of prestissimo that should be removed.
   */
  export interface RemovePrestissimoEnginePropertiesJvm {
    /** JVM coordinator properties of prestissimo that should be removed. */
    coordinator: string[];
  }

  /**
   * LogConfig properties of prestissimo that should be removed.
   */
  export interface RemovePrestissimoEnginePropertiesLogConfig {
    /** LogConfig coordinator properties of prestissimo that should be removed. */
    coordinator: string[];
    /** LogConfig worker properties of prestissimo that should be removed. */
    worker: string[];
  }

  /**
   * This resource details contain resource type and resource id or name.
   */
  export interface ResourceDetails {
    /** Identifier of the resource. */
    id?: string;
    /** Name of the resource. */
    name?: string;
    /** Type of resource. */
    type: ResourceDetails.Constants.Type | string;
  }
  export namespace ResourceDetails {
    export namespace Constants {
      /** Type of resource. */
      export enum Type {
        CATALOG = 'catalog',
        STORAGE = 'storage',
        PRESTO = 'presto',
        DATABASE = 'database',
        PRESTISSIMO = 'prestissimo',
        MILVUS = 'milvus',
        SPARK = 'spark',
        DATASTAX = 'datastax',
      }
    }
  }

  /**
   * This resource details contain resource type and resource id or name.
   */
  export interface ResourceDetailsBulkUpdate {
    /** Identifier of the resource. */
    id?: string;
    /** Name of the resource. */
    name?: string;
    /** Type of resource. */
    type: ResourceDetailsBulkUpdate.Constants.Type | string;
  }
  export namespace ResourceDetailsBulkUpdate {
    export namespace Constants {
      /** Type of resource. */
      export enum Type {
        CATALOG = 'catalog',
        STORAGE = 'storage',
        PRESTO = 'presto',
        DATABASE = 'database',
        PRESTISSIMO = 'prestissimo',
        MILVUS = 'milvus',
        SPARK = 'spark',
        DATASTAX = 'datastax',
      }
    }
  }

  /**
   * ResourceGroupForEngine.
   */
  export interface ResourceGroupForEngine {
    /** Resource group file name. */
    resource_group_file_name?: string;
    /** Resource group id. */
    resource_group_id?: string;
  }

  /**
   * ExplainStatement OK.
   */
  export interface ResultPrestissimoExplainStatement {
    /** result. */
    result?: string;
  }

  /**
   * explainAnalyzeStatement OK.
   */
  export interface ResultRunPrestissimoExplainAnalyzeStatement {
    /** explainAnalyzeStatement result. */
    result?: string;
  }

  /**
   * Defines row-level filtering properties for data access control. This schema specifies filter conditions that
   * determine which rows of data are visible to specific users or groups (grantees). Row filtering enables fine-grained
   * access control by restricting data visibility based on row attribute values, ensuring users only see data they are
   * authorized to access.
   */
  export interface RowFilterProperties {
    /** Additional filter condition for row filtering. */
    filter_condition?: string;
    /** Row filter expression that determines which rows are visible. */
    row_filter?: string;
  }

  /**
   * RuleGrantee contain type which can be user_identity or tag. Use user_identity as type for user or group. Key can be
   * user_name for user or group_id for acess groups. Value can be username and access group id.
   */
  export interface RuleGrantee {
    /** grantee key can be user_name for user and group_id for user group. */
    key: RuleGrantee.Constants.Key | string;
    /** grantee type. Values can be user_identity or tag. */
    type: RuleGrantee.Constants.Type | string;
    /** grantee value can be username or group id. */
    value: string;
  }
  export namespace RuleGrantee {
    export namespace Constants {
      /** grantee key can be user_name for user and group_id for user group. */
      export enum Key {
        USER_NAME = 'user_name',
        GROUP_ID = 'group_id',
        ATTRIBUTE_NAME = 'attribute_name',
      }
      /** grantee type. Values can be user_identity or tag. */
      export enum Type {
        USER_IDENTITY = 'user_identity',
        TAG = 'tag',
      }
    }
  }

  /**
   * RuleV2.
   */
  export interface RuleV2 {
    /** the actions to enforce when the data policy triggers. */
    actions: string[];
    /** defines the effect of the data policy. Values can be allow or deny. Deny will have priority over allow. */
    effect?: RuleV2.Constants.Effect | string;
    /** the grantees to be granted. Each rule grantee contains type, key and value. Type can be user_identity or
     *  tag. key can be user_name, group_id or attribute_name. Value can be name of user_name or the group id of access
     *  user group.
     */
    grantees: RuleGrantee[];
    /** Defines column-level data masking transformation properties. This schema specifies the type of masking to
     *  apply to sensitive data columns, optional masking conditions, and the list of users or groups (grantees) who are
     *  authorized to view the masked data. Column masking helps protect sensitive information while maintaining data
     *  utility for authorized users.
     */
    transform_columns?: TransformColumnProperties;
    /** Defines row-level filtering properties for data access control. This schema specifies filter conditions that
     *  determine which rows of data are visible to specific users or groups (grantees). Row filtering enables
     *  fine-grained access control by restricting data visibility based on row attribute values, ensuring users only
     *  see data they are authorized to access.
     */
    transform_rows?: RowFilterProperties;
  }
  export namespace RuleV2 {
    export namespace Constants {
      /** defines the effect of the data policy. Values can be allow or deny. Deny will have priority over allow. */
      export enum Effect {
        ALLOW = 'allow',
        DENY = 'deny',
      }
    }
  }

  /**
   * SAL encrichmed asset in IKC associated with table in Watsonx.data.
   */
  export interface SalEnrichmentDataAsset {
    /** attributes of the asset. */
    attributes: string[];
    /** data asset id in IKC. */
    id?: string;
    /** asset name (table name). */
    name?: string;
    /** unique resource name of IKC asset. */
    resource_key?: string;
    /** schema name. */
    schema_name?: string;
  }

  /**
   * Collection if SAL enriched assets in IKC.
   */
  export interface SalEnrichmentDataAssetCollection {
    /** list of enrichment asset in IKC. */
    data_assets: SalEnrichmentDataAsset[];
  }

  /**
   * collection of the enrichment job run log results.
   */
  export interface SalEnrichmentJobRunLogs {
    /** response from enrichment job run log request. */
    results: string[];
    /** name. */
    total_count?: number;
  }

  /**
   * Collection of job runs for a specific enrichment job.
   */
  export interface SalEnrichmentJobRuns {
    /** list of job runs as response. */
    runs: string[];
  }

  /**
   * Collection of SAL integration enrichment jobs.
   */
  export interface SalEnrichmentJobs {
    /** list of enrichment jobs. */
    jobs: string[];
  }

  /**
   * Request payload object of SAL Integration Enrichment Global Settings.
   */
  export interface SalEnrichmentSettings {
    /** semantic expansion. */
    expansion: SalEnrichmentSettingsExpansion;
    /** semantic expansion. */
    term_assignment: SalEnrichmentSettingsTermAssignment;
  }

  /**
   * semantic expansion.
   */
  export interface SalEnrichmentSettingsExpansion {
    /** if enable description generation (generate semantic description). */
    description: boolean;
    /** description generation configuration. */
    description_configuration: SalEnrichmentSettingsExpansionDescriptionConfiguration;
    /** if enable name expansion (generate semantic name). */
    name: boolean;
    /** if enable name expansion configuration. */
    name_configuration: SalEnrichmentSettingsExpansionNameConfiguration;
  }

  /**
   * description generation configuration.
   */
  export interface SalEnrichmentSettingsExpansionDescriptionConfiguration {
    /** assignment threshold (auto accept the semantic description). */
    assignment_threshold?: number;
    /** suggestion threshold (suggestion visible as semantic description). */
    suggestion_threshold?: number;
  }

  /**
   * if enable name expansion configuration.
   */
  export interface SalEnrichmentSettingsExpansionNameConfiguration {
    /** assignment threshold (auto accept the semantic name). */
    assignment_threshold: number;
    /** suggestion threshold (suggestion visible as semantic name). */
    suggestion_threshold: number;
  }

  /**
   * semantic expansion.
   */
  export interface SalEnrichmentSettingsTermAssignment {
    /** if use class based assignments. */
    class_based_assignments: boolean;
    /** if enable evaluate negative assignments. */
    evaluate_negative_assignments: boolean;
    /** if enable llm based assignments. */
    llm_based_assignments: boolean;
    /** if enable machinelearning based assignments custom. */
    ml_based_assignments_custom: boolean;
    /** if enable machinelearning based assignments default. */
    ml_based_assignments_default: boolean;
    /** if assign by name matching. */
    name_matching: boolean;
    /** term assignment threshold. */
    term_assignment_threshold: number;
    /** term suggestion threshold. */
    term_suggestion_threshold: number;
  }

  /**
   * Sal Integration Glossary terms list.
   */
  export interface SalGlossaryTerms {
    /** collection of glossary terms. */
    glossary_terms: GlossaryObject[];
  }

  /**
   * Sal Integration Upload Glossary Process.
   */
  export interface SalGlossaryUploadProcess {
    /** glossary uploading process id. */
    id?: string;
  }

  /**
   * Sal Integration Upload Glossary.
   */
  export interface SalGlossaryUploadStatus {
    /** response of the uploading process status in json. */
    response?: string;
  }

  /**
   * Basic Semantic Automation Layer(SAL) integration settings.
   */
  export interface SalIntegration {
    /** IBM Knowledge Catalog(IKC) category UUID. */
    category_id?: string;
    /** SAL integration creation timestamp. */
    created_at_epoch?: string;
    /** registered engine id of the SAL integration. */
    engine_id?: string;
    /** exceptions happens when creating integration with IKC on remote side. */
    errors: ErrorObj[];
    /** SAL integration instance id. */
    instance_id?: string;
    /** status of the SAL integration. */
    status?: string;
    /** COS resource CRN. */
    storage_resource_crn?: string;
    /** COS storage type. */
    storage_type?: string;
    /** whether the integration is based on IKC trial plan, which is available on watsonx.data Saas only. */
    trial_plan?: boolean;
    /** ID of the user who enabled the SAL integration. */
    username?: string;
  }

  /**
   * Item of SAL metadata Mappings details for watsonx.data schema in IKC metadata.
   */
  export interface SalIntegrationMappingObj {
    /** corresponding catalog id in IKC. */
    wkc_catalog_id?: string;
    /** corresponding project id in IKC. */
    wkc_project_id?: string;
    /** catalog name in Watsonx.data. */
    wxd_catalog_name?: string;
    /** schema name in Watsonx.data. */
    wxd_schema_name?: string;
  }

  /**
   * Collection of SAL Mapping details of given watsonx.data schemas.
   */
  export interface SalIntegrationMappings {
    /** list of results as sal maapping in Watsonx.data vs IKC metadata. */
    mappings: SalIntegrationMappingObj[];
    /** reference for next part of the query results (if results number exceed 100). */
    next?: string;
  }

  /**
   * Schema creation request details.
   */
  export interface SchemaPrototype {
    /** Path within bucket where schema will be created. */
    custom_path: string;
    /** Host name of the HDFS bucket. Need to be provided if using HDFS. */
    hostname?: string;
    /** Unique schema name, schemas with same names are not allowed in a catalog. */
    name: string;
    /** Port of the HDFS bucket. Need to be provided if using HDFS. */
    port?: number;
    /** Bucket associated to catalog where schema will be added. */
    storage_name?: string;
  }

  /**
   * SchemaTransformation.
   */
  export interface SchemaTransformation {
    /** The original column name. */
    old_column: string;
    /** The new column name. */
    new_column?: string;
    /** The new column type. */
    new_type?: string;
  }

  /**
   * Collection of schemas.
   */
  export interface SchemasCollection {
    /** List of schemas fetched from given catalog. */
    schemas: string[];
  }

  /**
   * secret details.
   */
  export interface SecretDetails {
    /** secret key. */
    key?: string;
    /** secret name. */
    secret_name?: string;
    /** secret urn. */
    secret_urn?: string;
  }

  /**
   * semantic search object of the returning result.
   */
  export interface SemanticSearch {
    /** id of the semantic search query record. */
    id?: string;
    /** last time of searching the same query string. */
    last_search_time?: string;
    /** search results of given query. */
    results: SemanticSearchResultsItem[];
    /** input search query. */
    search_query?: string;
  }

  /**
   * request payload for semantic search configurations.
   */
  export interface SemanticSearchBodySearchConfig {
    /** enable columns search. */
    column_search_enabled?: boolean;
    /** search fields. */
    fields?: string[];
    /** max result number limitation. */
    max_result_number?: number;
    /** enable schemas search. */
    schema_search_enabled?: boolean;
  }

  /**
   * collection of query results of Semantic search history queries response object.
   */
  export interface SemanticSearchList {
    /** List of semantic search results. */
    queries: SemanticSearch[];
  }

  /**
   * collection of semantic search query results.
   */
  export interface SemanticSearchResultsItem {
    /** artifact type. */
    artifact_type?: string;
    /** IKC asset id. */
    asset_id?: string;
    /** catalog name. */
    catalog_name?: string;
    /** semantic description. */
    description?: string;
    /** matching fields details from elasticsearch highlight. */
    highlight?: JsonObject;
    /** collection of columns hit by search. */
    matched_columns: SemanticSearchResultsItemMatchedColumnsItems[];
    /** asset name. */
    name: string;
    /** asset path. */
    path?: string;
    /** IKC project id. */
    project_id?: string;
    /** asset provider type. */
    provider_type?: string;
    /** schema name. */
    schema_name?: string;
    /** global search score. */
    search_score: number;
    /** semantic description. */
    semantic_description?: string;
    /** semantic name. */
    semantic_name?: string;
    /** status of the asset. */
    state?: string;
    /** table name. */
    table_name?: string;
    /** asset tags. */
    tags: string[];
    /** bussiness terms. */
    terms: string[];
  }

  /**
   * SemanticSearchResultsItemMatchedColumnsItems.
   */
  export interface SemanticSearchResultsItemMatchedColumnsItems {
    /** IKC asset id. */
    asset_id?: string;
    /** column description. */
    description?: string;
    /** matching fields details from elasticsearch highlight. */
    highlight?: JsonObject;
    /** column name. */
    name?: string;
    /** semantic description. */
    semantic_description?: string;
    /** semantic name. */
    semantic_name?: string;
  }

  /**
   * Details of ingestion source files.
   */
  export interface SourceDetails {
    /** Comma separated source file or directory path. */
    file_paths?: string;
    /** Source file types (parquet, csv, json, orc, avro or text). */
    file_type?: SourceDetails.Constants.FileType | string;
    /** Ingestion source type. */
    source_type: SourceDetails.Constants.SourceType | string;
    /** List of schema information derived from file. Updates to a schema must be added to schema_transformations. */
    schema?: IngestionSchemaResponse[];
    /** List of additions/transformations applied to the schema. */
    schema_transformations?: SchemaTransformation[];
    /** Source DB Schema Name. */
    schema_name?: string;
    /** Source DB Table Name. */
    table_name?: string;
    /** Storage connection details. */
    bucket_details?: BucketDetails;
    /** Iceberg source table information. */
    iceberg_source_table?: IcebergSourceTable;
    /** Database credentials model. */
    source_database?: DbConnectionModel;
    /** Options used to read CSV or Text file. */
    file_format_properties?: FileFormatProperties;
    /** Determine if ingestion job is a local ingestion job. */
    is_local_ingestion?: boolean;
  }
  export namespace SourceDetails {
    export namespace Constants {
      /** Source file types (parquet, csv, json, orc, avro or text). */
      export enum FileType {
        CSV = 'csv',
        PARQUET = 'parquet',
        JSON = 'json',
        ORC = 'orc',
        AVRO = 'avro',
        TXT = 'txt',
      }
      /** Ingestion source type. */
      export enum SourceType {
        ICEBERG = 'iceberg',
        DB = 'db',
        LOCAL = 'local',
        STORAGE = 'storage',
      }
    }
  }

  /**
   * Application details.
   */
  export interface SparkApplicationDetails {
    /** Path/URL for the application script or jar file. The file can be in object storage or in a mounted volume
     *  (volumes available only in software).
     */
    application: string;
    /** Comma separated list of zip file paths in object storage or volumes. These files will be extracted and
     *  loaded into the working directory of all executor nodes of the Spark cluster created to run this application.
     */
    archives?: string;
    /** List of arguments. This should be set if the application script requires any arguments. */
    arguments?: string[];
    /** Main class for application jar. Set only if using a jar file for application. */
    class?: string;
    /** Default Spark configuration properties to be updated. To remove a property, set its value to null. */
    conf?: JsonObject;
    /** Default Spark configuration properties to be updated. To remove a property, set its value to null. */
    env?: JsonObject;
    /** Comma separated list of file paths in object storage or volumes. These files will be loaded into the working
     *  directory of all executor nodes of the Spark cluster created to run this application.
     */
    files?: string;
    /** Comma separated list for file paths for jars in object storage or volumes. These files will be loaded into
     *  the classpath of executor and driver nodes of the Spark application cluster. This should be set only if the
     *  application is a jar file and if you want to satisfy third party library dependencies of the application via
     *  these jars.
     */
    jars?: string;
    /** Display name of the spark application. */
    name?: string;
    /** Comma separated list of package identifiers that recognizable by maven. These packages will be downloaded
     *  from default maven repo or any additional maven repositories that you may have specified in the request.
     *  Applicable only for java/scala applications.
     */
    packages?: string;
    /** Comma separated list of maven repository urls. In addition to default maven repo, the repositories specified
     *  here will be used to search for any specified packages. Applicable only for java/scala applications.
     */
    repositories?: string;
    /** Application runtime configuration. */
    runtime?: SparkApplicationRuntime;
    /** Spark Version. */
    spark_version?: string;
  }

  /**
   * Application runtime configuration.
   */
  export interface SparkApplicationRuntime {
    /** Spark Version. */
    spark_version?: string;
  }

  /**
   * State details.
   */
  export interface SparkApplicationStateDetail {
    /** State details code. */
    code?: string;
    /** State details message. */
    message?: string;
    /** State details type. */
    type?: string;
  }

  /**
   * Spark engine endpoints.
   */
  export interface SparkEndpoints {
    /** Application API. This property is available only for external Spark engines. */
    applications_api?: string;
    /** History server endpoint. This property is available only for external Spark engines. */
    history_server_endpoint?: string;
    /** Details UI for Analytics Engine instance being used as external Spark engine. This property is available
     *  only for external Spark engines.
     */
    spark_access_endpoint?: string;
    /** Spark jobs V4 endpoint. This property is available only for external Spark engines. */
    spark_jobs_v4_endpoint?: string;
    /** Spark kernel endpoint. This property is available only for external Spark engines. */
    spark_kernel_endpoint?: string;
    /** View history server. This property is available only for external Spark engines. */
    view_history_server?: string;
    /** Native Spark engine  application endpoint. This property is available only for native Spark engines. */
    wxd_application_endpoint?: string;
    /** Native Spark engine endpoint. This property is available only for native Spark engines. */
    wxd_engine_endpoint?: string;
    /** Native Spark engine  history server management endpoint. This property is available only for native Spark
     *  engines.
     */
    wxd_history_server_endpoint?: string;
    /** Native Spark engine history UI URL. This property is available only for native Spark engines. */
    wxd_history_server_ui_endpoint?: string;
  }

  /**
   * Information on the Spark engine.
   */
  export interface SparkEngine {
    /** Actions. */
    actions: string[];
    /** Catalogs to be Associated to the engine. */
    associated_catalogs: string[];
    /** watsonx.data build version. */
    build_version?: string;
    /** Spark engine configuration details. */
    configuration?: SparkEngineDetails;
    /** Created time in epoch format. */
    created_at?: number;
    /** Username of the user who created the watsonx.data instance. */
    created_by?: string;
    /** Information on the Spark engine. */
    description?: string;
    /** Engine display name. */
    display_name?: string;
    /** Engine id. */
    id?: string;
    /** Mode of spark engine. */
    mode?: string;
    /** Origin - created or registered. */
    origin: SparkEngine.Constants.Origin | string;
    /** Status of engine. */
    status?: string;
    /** Tags. */
    tags: string[];
    /** Type of spark engine. */
    type: SparkEngine.Constants.Type | string;
  }
  export namespace SparkEngine {
    export namespace Constants {
      /** Origin - created or registered. */
      export enum Origin {
        EXTERNAL = 'external',
        DISCOVER = 'discover',
        NATIVE = 'native',
      }
      /** Type of spark engine. */
      export enum Type {
        SPARK = 'spark',
        GLUTEN = 'gluten',
      }
    }
  }

  /**
   * Spark Engine Application Callback.
   */
  export interface SparkEngineApplicationCallback {
    /** callback url. */
    url?: string;
  }

  /**
   * Engine Application Detail.
   */
  export interface SparkEngineApplicationCollection {
    /** Application body. */
    applications: SparkEngineApplicationSummary[];
    /** Link to a page of results. */
    first?: PaginationLink;
    /** The number of items returned per page. */
    limit: number;
    /** Link to a page of results. */
    next?: PaginationLink;
  }

  /**
   * Engine Application Status.
   *
   * This type supports additional properties of type any.
   */
  export interface SparkEngineApplicationResponse {
    /** Application details. */
    application_details?: SparkApplicationDetails;
    /** Time when the application is automatically stopped. This property is available only in SAAS. */
    auto_termination_time?: string;
    /** Time when the application request was accepted. Software only. */
    creation_time?: string;
    /** Deployment mode. */
    deploy_mode?: string;
    /** End Time. */
    end_time?: string;
    /** Failed time. */
    failed_time?: string;
    /** Time when the application finished running or was stopped. This property is available only after the
     *  application finishes running.
     */
    finish_time?: string;
    /** Application ID. */
    id: string;
    /** Initialization scripts to run before the application starts. */
    init_scripts?: string[];
    /** Maximum number of retries for the application. Supported only in watsonx.data software. */
    max_retries?: string;
    /** Minimum retry interval in seconds between retry attempts. Supported only in watsonx.data software. */
    min_retry_interval_in_seconds?: string;
    /** Current retry attempt number. */
    retry_attempt?: string;
    /** Application runtime configuration. */
    runtime?: SparkApplicationRuntime;
    /** Spark application ID. */
    spark_application_id?: string;
    /** Spark application name. */
    spark_application_name?: string;
    /** Spark UI Endpoint. */
    spark_ui?: string;
    /** Included if spark_version was specified in application creation request or a default value was set in spark
     *  engine details.
     */
    spark_version?: string;
    /** Time when the application started running. This property is available only if/after the application starts
     *  running.
     */
    start_time?: string;
    /** Application state. */
    state: string;
    /** Application state details. */
    state_details?: SparkApplicationStateDetail[];
    /** Time when the request was accepted. SAAS only. */
    submission_time?: string;
    /** Image template id based on spark version. Software only. */
    template_id?: string;
    /** Wxd history_server endpoint. */
    wxd_application_ui_endpoint?: string;

    /**
     * SparkEngineApplicationResponse accepts additional properties of type any.
     */
    [propName: string]: any;
  }

  /**
   * Engine Application Status.
   *
   * This type supports additional properties of type any.
   */
  export interface SparkEngineApplicationSummary {
    /** Time when the application is automatically stopped. This property is available only in SAAS. */
    auto_termination_time?: string;
    /** Time when the application request was accepted. Software only. */
    creation_time?: string;
    /** Deployment mode. */
    deploy_mode?: string;
    /** End Time. */
    end_time?: string;
    /** Failed time. */
    failed_time?: string;
    /** Time when the application finished running or was stopped. This property is available only after the
     *  application finishes running.
     */
    finish_time?: string;
    /** Application ID. */
    id: string;
    /** Unique key to ensure idempotent operation. */
    idempotency_key?: string;
    /** Initialization scripts to run before the application starts. */
    init_scripts?: string[];
    /** Maximum number of retries for the application. Supported only in watsonx.data software. */
    max_retries?: string;
    /** Minimum retry interval in seconds between retry attempts. Supported only in watsonx.data software. */
    min_retry_interval_in_seconds?: string;
    /** Current retry attempt number. Supported only in watsonx.data software. */
    retry_attempt?: string;
    /** Application runtime configuration. */
    runtime?: SparkApplicationRuntime;
    /** Spark application ID. */
    spark_application_id?: string;
    /** Spark application name. */
    spark_application_name?: string;
    /** Spark UI Endpoint. */
    spark_ui?: string;
    /** Included if spark_version was specified in application creation request or a default value was set in spark
     *  engine details.
     */
    spark_version?: string;
    /** Time when the application started running. This property is available only if/after the application starts
     *  running.
     */
    start_time?: string;
    /** Application state. */
    state: string;
    /** Application state details. */
    state_details?: SparkApplicationStateDetail[];
    /** Time when the request was accepted. SAAS only. */
    submission_time?: string;
    /** Image template id based on spark version. Software only. */
    template_id?: string;
    /** Timeout for the application in seconds. */
    timeout_in_seconds?: string;
    /** Wxd history_server endpoint. */
    wxd_application_ui_endpoint?: string;

    /**
     * SparkEngineApplicationSummary accepts additional properties of type any.
     */
    [propName: string]: any;
  }

  /**
   * Collection of Spark engines.
   */
  export interface SparkEngineCollection {
    /** List of spark engines. */
    spark_engines: SparkEngine[];
  }

  /**
   * Spark engine configuration details.
   */
  export interface SparkEngineDetails {
    /** Api key to be used for connecting with external Analytics engine instance. Applicable only for external
     *  engine.
     */
    api_key?: string;
    /** External engine connection string. Applicable only for  external engine. */
    connection_string?: string;
    /** Default Spark configuration properties to be applied for all applications running on this Spark engine. */
    default_config?: JsonObject;
    /** Default spark version for applications run on this Spark engine. */
    default_version?: string;
    /** Spark engine endpoints. */
    endpoints?: SparkEndpoints;
    /** Engine home properties for Spark engine configuration. */
    engine_home?: SparkEngineHome;
    /** spark engine sub type. */
    engine_sub_type?: string;
    /** Id of Analytics engine instance used as external engine. */
    instance_id?: string;
    /** How is the spark instance managed. */
    managed_by?: string;
    /** Resource limit enabled flag. */
    resource_limit_enabled?: boolean;
    /** Native spark engine resource quota. */
    resource_limits?: SparkEngineResourceLimit;
    /** Native spark engine resource utilisation. */
    resource_utilisation?: SparkEngineResourceUtilisation;
    /** Spark instance scale configuration. */
    scale_config?: SparkScaleConfig;
    /** Spark vscode configuration. */
    vscode_config?: SparkVscodeConfig;
  }

  /**
   * Engine home properties for Spark engine configuration.
   */
  export interface SparkEngineHome {
    /** Path in specified storage where engine home data will be stored. This is relevant for SAAS. */
    path?: string;
    /** Name of the registered object storage instance to be used as Spark engine home. This is available only in
     *  SAAS.
     */
    storage_name?: string;
    /** Qualified name of the persistent volume to be used as Spark engine home. This is available only in CPD. */
    volume?: string;
    /** ID of the persistent volume to be used as Spark engine home. This is available only in CPD. To be specified
     *  when creating a new Spark engine with existing volume.
     */
    volume_id?: string;
    /** Name of the persistent volume to be created. This is available only in CPD. To be specified when creating a
     *  new Spark engine along with a new volume.
     */
    volume_name?: string;
  }

  /**
   * Engine home properties for Spark engine configuration for Patch.
   */
  export interface SparkEngineHomePatch {
    /** Name of the registered object storage instance to be used as Spark engine home. This is available only in
     *  SAAS.
     */
    storage_name?: string;
  }

  /**
   * Engine details.
   */
  export interface SparkEnginePatchEngineDetails {
    /** Default Spark configuration properties to be updated. To remove a property, set its value to null. */
    default_config?: JsonObject;
    /** The default spark version for the native engine. */
    default_version?: string;
    /** Engine home properties for Spark engine configuration for Patch. */
    engine_home?: SparkEngineHomePatch;
    /** Resource limit enabled flag. */
    resource_limit_enabled?: boolean;
    /** Native spark engine resource quota. */
    resource_limits?: SparkEngineResourceLimit;
  }

  /**
   * Native spark engine resource quota.
   */
  export interface SparkEngineResourceLimit {
    /** CPU. */
    cores?: string;
    /** Memory in GiB. */
    memory?: string;
  }

  /**
   * Native spark engine resource utilisation.
   */
  export interface SparkEngineResourceUtilisation {
    /** CPU. */
    cores?: string;
    /** Memory. */
    memory?: string;
  }

  /**
   * Native spark history server.
   */
  export interface SparkHistoryServer {
    /** The time when the Spark history server will automatically stop. Applicable only in SAAS. */
    auto_termination_time?: string;
    /** CPU cores allocated for the history server. Available when the history server is running. */
    cores?: string;
    /** Memory allocated for the history server. Kubernetes memory units are used. Available when the history server
     *  is running.
     */
    memory?: string;
    /** History server start time. */
    start_time?: string;
    /** History server state. */
    state: string;
  }

  /**
   * Spark instance scale configuration.
   */
  export interface SparkScaleConfig {
    /** Enable/disable autoscaling. */
    auto_scale_enabled?: boolean;
    /** Current node count. */
    current_number_of_nodes?: number;
    /** Maximum node count. */
    maximum_number_of_nodes?: number;
    /** Minimum node count. */
    minimum_number_of_nodes?: number;
    /** Spark instance node type. */
    node_type: SparkScaleConfig.Constants.NodeType | string;
    /** Node count. */
    number_of_nodes?: number;
  }
  export namespace SparkScaleConfig {
    export namespace Constants {
      /** Spark instance node type. */
      export enum NodeType {
        SMALL = 'small',
        MEDIUM = 'medium',
        LARGE = 'large',
      }
    }
  }

  /**
   * Spark application volume.
   */
  export interface SparkVolumeDetails {
    /** Path in the spark cluster for the mounted volume. */
    mount_path?: string;
    /** volume name. */
    name?: string;
    /** Read only flag. */
    read_only?: boolean;
    /** Path in the volume to be mounted. */
    source_sub_path?: string;
  }

  /**
   * Spark vscode configuration.
   */
  export interface SparkVscodeConfig {
    /** WxD crn. */
    crn?: string;
    /** WxD environment type. */
    environment_type?: string;
    /** WxD hostname. */
    host?: string;
    /** WxD user name. */
    user_name?: string;
  }

  /**
   * storage catalog.
   */
  export interface StorageCatalog {
    /** catalog base path. */
    base_path?: string;
    /** catalog name. */
    catalog_name?: string;
    /** catalog tags. */
    catalog_tags: string[];
    /** catalog type. */
    catalog_type?: string;
  }

  /**
   * storage catalog.
   */
  export interface StorageCatalogPrototype {
    /** catalog base path. */
    base_path?: string;
    /** catalog name. */
    catalog_name?: string;
    /** catalog tags. */
    catalog_tags: string[];
    /** catalog type. */
    catalog_type?: string;
  }

  /**
   * storage details.
   */
  export interface StorageDetails {
    /** Access key ID, encrypted during storage registration. */
    access_key?: string;
    /** secret details. */
    access_key_vault?: StorageDetailsAccesskeyVault;
    /** actual storage name. */
    account_name?: string;
    /** Application Id for storage registration. */
    application_id?: string;
    /** auth mode. */
    auth_mode?: string;
    /** actual container name. */
    container_name?: string;
    /** Directory Id for storage registration. */
    directory_id?: string;
    /** Cos endpoint. */
    endpoint?: string;
    /** Key file, encrypted during storage registration. */
    key_file?: string;
    /** actual storage name. */
    name?: string;
    /** storage provider. */
    provider?: string;
    /** Region where the storage is located. */
    region?: string;
    /** arn role. */
    role_arn?: string;
    /** sas token, encrypted during storage registration. */
    sas_token?: string;
    /** Secret access key, encrypted during storage registration. */
    secret_key?: string;
    /** secret details. */
    secret_key_vault?: StorageDetailsAccesskeyVault;
    /** vault enabled or not. */
    vault_enabled?: boolean;
  }

  /**
   * secret details.
   */
  export interface StorageDetailsAccesskeyVault {
    /** secret key. */
    key?: string;
    /** secret name. */
    secret_name?: string;
    /** secret urn. */
    secret_urn?: string;
  }

  /**
   * muliple storage object properties.
   */
  export interface StorageObjectProperties {
    /** muliple storage object properties. */
    object_properties: StorageRegistrationObjectSizeCollection[];
  }

  /**
   * Storage.
   */
  export interface StorageRegistration {
    /** Actions. */
    actions: string[];
    /** associated catalogs. */
    associated_catalogs: StorageCatalog[];
    /** storage details. */
    connection?: StorageDetails;
    /** Creation date. */
    created_at: string;
    /** Username of the user who created the storage. */
    created_by: string;
    /** storage description. */
    description: string;
    /** Storage display name. */
    display_name: string;
    /** storage ID auto generated during storage registration. */
    id?: string;
    /** managed by. */
    managed_by: StorageRegistration.Constants.ManagedBy | string;
    /** Region where the storage is located. */
    region?: string;
    /** Mark storage as active or inactive. */
    state: StorageRegistration.Constants.State | string;
    /** parameter to show whether the bucket is of acl or qhmm use. */
    storage_use?: string;
    /** Boolean value to specify whether updating HMAC credentials for internal system storage. */
    system_storage_update_credentials?: boolean;
    /** tags. */
    tags: string[];
    /** storage catalog. */
    associated_catalog?: StorageCatalogPrototype;
    /** storage type. */
    type: StorageRegistration.Constants.Type | string;
    /** Boolean value to specify whether vault enabled or not. */
    vault_enabled?: boolean;
  }
  export namespace StorageRegistration {
    export namespace Constants {
      /** managed by. */
      export enum ManagedBy {
        IBM = 'ibm',
        CUSTOMER = 'customer',
      }
      /** Mark storage as active or inactive. */
      export enum State {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
      }
      /** storage type. */
      export enum Type {
        AMAZON_S3 = 'amazon_s3',
        AWS_S3 = 'aws_s3',
        MINIO = 'minio',
        IBM_COS = 'ibm_cos',
        IBM_CEPH = 'ibm_ceph',
        ADLS_GEN1 = 'adls_gen1',
        ADLS_GEN2 = 'adls_gen2',
        GOOGLE_CS = 'google_cs',
        IBM_STORAGE_SCALE = 'ibm_storage_scale',
        OZONE = 'ozone',
        S3 = 's3',
      }
    }
  }

  /**
   * List storage registrations.
   */
  export interface StorageRegistrationCollection {
    /** Storages. */
    storage_registrations: StorageRegistration[];
  }

  /**
   * List storage objects.
   */
  export interface StorageRegistrationObjectCollection {
    /** storage object. */
    objects: string[];
  }

  /**
   * Storage object size.
   */
  export interface StorageRegistrationObjectSizeCollection {
    /** content type. */
    content_type?: string;
    /** file type. */
    file_type?: string;
    /** storage last modified. */
    last_modified?: string;
    /** Additional metadata associated with the object. */
    metadata?: JsonObject;
    /** storage last modified. */
    path?: string;
    /** size of the storage objects. */
    size?: string;
  }

  /**
   * subject can be user or group who can access on the provided resource.
   */
  export interface Subject {
    /** Subject type can be user or group. */
    type: Subject.Constants.Type | string;
    /** value can be user name or group id. */
    value: string;
  }
  export namespace Subject {
    export namespace Constants {
      /** Subject type can be user or group. */
      export enum Type {
        USER = 'user',
        GROUP = 'group',
      }
    }
  }

  /**
   * The object includes subjects (users and user groups) along with the permissions that need to be updated.
   */
  export interface SubjectBulkUpdate {
    /** the permissions the given user or group has, on the provided resource. */
    permissions?: string[];
    /** subject can be user or group who can access on the provided resource. */
    subject?: Subject;
  }

  /**
   * subject can be user or group who can access on the provided resource.
   */
  export interface SubjectBulkUpdateData {
    /** Subject type can be user or group. */
    type: SubjectBulkUpdateData.Constants.Type | string;
    /** value can be user name or group id. */
    value: string;
  }
  export namespace SubjectBulkUpdateData {
    export namespace Constants {
      /** Subject type can be user or group. */
      export enum Type {
        USER = 'user',
        GROUP = 'group',
      }
    }
  }

  /**
   * The object includes subjects (users and user groups) whose permissions need to be revoked.
   */
  export interface SubjectRevoke {
    /** the permissions to be revoked for the given user or group on the provided resource. */
    permissions?: string[];
    /** subject can be user or group who can access on the provided resource. */
    subject?: Subject;
  }

  /**
   * Response of success.
   */
  export interface SuccessResponse {
    /** Message. */
    message?: string;
    /** Message code. */
    message_code?: string;
  }

  /**
   * success response prototype.
   */
  export interface SuccessResponsePrototype {
    /** Response of success. */
    response?: SuccessResponse;
  }

  /**
   * Table details.
   */
  export interface Table {
    /** List of columns. */
    columns: Column[];
    /** Table name. */
    name?: string;
  }

  /**
   * tables list.
   */
  export interface TableCollection {
    /** List of the tables present in the schema. */
    tables: string[];
  }

  /**
   * Snapshot of a table's state after a commit.
   */
  export interface TableSnapshot {
    /** Number of data files added in this snapshot. */
    added_data_files?: string;
    /** Total size (in bytes) of the added files. */
    added_files_size?: string;
    /** Number of records added in this snapshot. */
    added_records?: string;
    /** Number of partitions that were changed in the snapshot. */
    changed_partition_count?: string;
    /** Timestamp when the snapshot was committed in ISO 8601 format. */
    committed_at?: string;
    /** The current snapshot. */
    is_current_snapshot?: boolean;
    /** Type of operation that triggered the snapshot. */
    operation: TableSnapshot.Constants.Operation | string;
    /** Unique identifier of the snapshot, consisting of alphanumeric characters and hyphens. */
    snapshot_id?: string;
    /** Total number of data files after the snapshot. */
    total_data_files?: string;
    /** Total number of delete files after the snapshot. */
    total_delete_files?: string;
    /** Number of equality-based deletes in the snapshot. */
    total_equality_deletes?: string;
    /** Number of position-based deletes in the snapshot. */
    total_position_deletes?: string;
    /** Total number of records after applying the snapshot. */
    total_records?: string;
  }
  export namespace TableSnapshot {
    export namespace Constants {
      /** Type of operation that triggered the snapshot. */
      export enum Operation {
        APPEND = 'append',
        OVERWRITE = 'overwrite',
        DELETE = 'delete',
        REPLACE = 'replace',
        MERGE = 'merge',
        COMPACT = 'compact',
        ALTER = 'alter',
      }
    }
  }

  /**
   * Collection of tablesnapshots.
   */
  export interface TableSnapshotCollection {
    /** List of snapshots. */
    snapshots: TableSnapshot[];
  }

  /**
   * Details of ingestion target table.
   */
  export interface TargetDetails {
    /** Catalog of target table. */
    catalog: string;
    /** Schema of target table. */
    schema: string;
    /** Target table where files will be ingested. */
    table: string;
    /** Append to existing data or overwrite it. */
    write_mode: string;
    /** Create table with 'merge-on-read' property. */
    merge_on_read?: boolean;
    /** Controls schema validation mode. Use 'strict' to enforce exact schema match, or 'sloppy' to allow relaxed
     *  matching.
     */
    schema_mode?: string;
    /** Cast source column types to match target table types during append operations. When enabled, matching
     *  columns are cast to target types to prevent type mismatch errors. Works independently of schema_mode.
     */
    schema_infer?: boolean;
    /** Metastore catalog URI. */
    catalog_uri?: string;
    /** Storage connection details. */
    bucket_details?: BucketDetails;
    /** Warehouse location. */
    location?: string;
    /** Determine if target schema was created in this ingestion job. */
    is_new_schema?: boolean;
    /** Determine if target table was created in this ingestion job. */
    is_new_table?: boolean;
  }

  /**
   * Defines column-level data masking transformation properties. This schema specifies the type of masking to apply to
   * sensitive data columns, optional masking conditions, and the list of users or groups (grantees) who are authorized
   * to view the masked data. Column masking helps protect sensitive information while maintaining data utility for
   * authorized users.
   */
  export interface TransformColumnProperties {
    /** List of users and/or user groups who are granted permission to access the data with the specified masking
     *  transformation applied. Each grantee will see the column data masked according to the mask_type specified.
     */
    mask_condition?: string;
    /** The masking algorithm to apply to the column data. Specifies how sensitive data should be obfuscated or
     *  transformed. Common types include showing only the last N characters, replacing with fixed characters, hashing,
     *  or nullifying the data.
     */
    mask_type?: TransformColumnProperties.Constants.MaskType | string;
    /** Defines column-level masking configuration for specific users or groups (grantees). Supports predefined
     *  masking types and allows specifying a custom masking expression when the mask type is set to CUSTOM.
     */
    mask_value?: string;
  }
  export namespace TransformColumnProperties {
    export namespace Constants {
      /** The masking algorithm to apply to the column data. Specifies how sensitive data should be obfuscated or transformed. Common types include showing only the last N characters, replacing with fixed characters, hashing, or nullifying the data. */
      export enum MaskType {
        REDACT = 'redact',
        MASK_SHOW_LAST_4 = 'mask_show_last_4',
        MASK_SHOW_FIRST_4 = 'mask_show_first_4',
        HASH = 'hash',
        NULL = 'null',
        NONE = 'none',
        MASK_DATE_SHOW_YEAR = 'mask_date_show_year',
        CUSTOM = 'custom',
      }
    }
  }

  /**
   * Defines column-level data masking transformation properties. This schema specifies the type of masking to apply to
   * sensitive data columns, optional masking conditions, and the list of users or groups (grantees) who are authorized
   * to view the masked data. Column masking helps protect sensitive information while maintaining data utility for
   * authorized users.
   */
  export interface TransformColumnResponseProperties {
    /** List of users and/or user groups who are granted permission to access the data with the specified masking
     *  transformation applied. Each grantee will see the column data masked according to the mask_type specified.
     */
    mask_condition?: string;
    /** The masking algorithm to apply to the column data. Specifies how sensitive data should be obfuscated or
     *  transformed. Common types include showing only the last N characters, replacing with fixed characters, hashing,
     *  or nullifying the data.
     */
    mask_type: TransformColumnResponseProperties.Constants.MaskType | string;
    /** Defines column-level masking configuration for specific users or groups (grantees). Supports predefined
     *  masking types and allows specifying a custom masking expression when the mask type is set to CUSTOM.
     */
    mask_value?: string;
  }
  export namespace TransformColumnResponseProperties {
    export namespace Constants {
      /** The masking algorithm to apply to the column data. Specifies how sensitive data should be obfuscated or transformed. Common types include showing only the last N characters, replacing with fixed characters, hashing, or nullifying the data. */
      export enum MaskType {
        REDACT = 'redact',
        MASK_SHOW_LAST_4 = 'mask_show_last_4',
        MASK_SHOW_FIRST_4 = 'mask_show_first_4',
        HASH = 'hash',
        NULL = 'null',
        NONE = 'none',
        MASK_DATE_SHOW_YEAR = 'mask_date_show_year',
        CUSTOM = 'custom',
      }
    }
  }

  /**
   * Validate Integration prototype.
   */
  export interface ValidateIntegration {
    /** A brief description of the `message_code`. */
    message?: string;
    /** Message code stating if a success or failure. */
    message_code?: string;
    /** Details realted to the available resources for `ranger`. */
    ranger_details?: RangerDetails;
  }

  /**
   * Presto engine configurations.
   */
  export interface WorkerNodeDescriptionBody {
    /** Presto engine worker node type. */
    node_type: string;
    /** Quantity of presto engine nodes. */
    quantity: number;
  }

  /*************************
   * pager classes
   ************************/

  /**
   * SparkEngineApplicationsPager can be used to simplify the use of listSparkEngineApplications().
   */
  export class SparkEngineApplicationsPager {
    protected _hasNext: boolean;

    protected pageContext: any;

    protected client: WatsonxDataV3;

    protected params: WatsonxDataV3.ListSparkEngineApplicationsParams;

    /**
     * Construct a SparkEngineApplicationsPager object.
     *
     * @param {WatsonxDataV3}  client - The service client instance used to invoke listSparkEngineApplications()
     * @param {Object} params - The parameters to be passed to listSparkEngineApplications()
     * @constructor
     * @returns {SparkEngineApplicationsPager}
     */
    constructor(client: WatsonxDataV3, params: WatsonxDataV3.ListSparkEngineApplicationsParams) {
      if (params && params.start) {
        throw new Error(`the params.start field should not be set`);
      }

      this._hasNext = true;
      this.pageContext = { next: undefined };
      this.client = client;
      this.params = JSON.parse(JSON.stringify(params || {}));
    }

    /**
     * Returns true if there are potentially more results to be retrieved by invoking getNext().
     * @returns {boolean}
     */
    public hasNext(): boolean {
      return this._hasNext;
    }

    /**
     * Returns the next page of results by invoking listSparkEngineApplications().
     * @returns {Promise<WatsonxDataV3.SparkEngineApplicationSummary[]>}
     */
    public async getNext(): Promise<WatsonxDataV3.SparkEngineApplicationSummary[]> {
      if (!this.hasNext()) {
        throw new Error('No more results available');
      }

      if (this.pageContext.next) {
        this.params.start = this.pageContext.next;
      }
      const response = await this.client.listSparkEngineApplications(this.params);
      const { result } = response;

      let next;
      if (result && result.next) {
        if (result.next.href) {
          next = getQueryParam(result.next.href, 'start');
        }
      }
      this.pageContext.next = next;
      if (!this.pageContext.next) {
        this._hasNext = false;
      }
      return result.applications;
    }

    /**
     * Returns all results by invoking listSparkEngineApplications() repeatedly until all pages of results have been retrieved.
     * @returns {Promise<WatsonxDataV3.SparkEngineApplicationSummary[]>}
     */
    public async getAll(): Promise<WatsonxDataV3.SparkEngineApplicationSummary[]> {
      const results: SparkEngineApplicationSummary[] = [];
      while (this.hasNext()) {
        const nextPage = await this.getNext();
        results.push(...nextPage);
      }
      return results;
    }
  }

  /**
   * IngestionJobsPager can be used to simplify the use of listIngestionJobs().
   */
  export class IngestionJobsPager {
    protected _hasNext: boolean;

    protected pageContext: any;

    protected client: WatsonxDataV3;

    protected params: WatsonxDataV3.ListIngestionJobsParams;

    /**
     * Construct a IngestionJobsPager object.
     *
     * @param {WatsonxDataV3}  client - The service client instance used to invoke listIngestionJobs()
     * @param {Object} params - The parameters to be passed to listIngestionJobs()
     * @constructor
     * @returns {IngestionJobsPager}
     */
    constructor(client: WatsonxDataV3, params: WatsonxDataV3.ListIngestionJobsParams) {
      if (params && params.start) {
        throw new Error(`the params.start field should not be set`);
      }

      this._hasNext = true;
      this.pageContext = { next: undefined };
      this.client = client;
      this.params = JSON.parse(JSON.stringify(params || {}));
    }

    /**
     * Returns true if there are potentially more results to be retrieved by invoking getNext().
     * @returns {boolean}
     */
    public hasNext(): boolean {
      return this._hasNext;
    }

    /**
     * Returns the next page of results by invoking listIngestionJobs().
     * @returns {Promise<WatsonxDataV3.IngestionJob[]>}
     */
    public async getNext(): Promise<WatsonxDataV3.IngestionJob[]> {
      if (!this.hasNext()) {
        throw new Error('No more results available');
      }

      if (this.pageContext.next) {
        this.params.start = this.pageContext.next;
      }
      const response = await this.client.listIngestionJobs(this.params);
      const { result } = response;

      let next;
      if (result && result.next) {
        if (result.next.href) {
          next = getQueryParam(result.next.href, 'start');
        }
      }
      this.pageContext.next = next;
      if (!this.pageContext.next) {
        this._hasNext = false;
      }
      return result.jobs;
    }

    /**
     * Returns all results by invoking listIngestionJobs() repeatedly until all pages of results have been retrieved.
     * @returns {Promise<WatsonxDataV3.IngestionJob[]>}
     */
    public async getAll(): Promise<WatsonxDataV3.IngestionJob[]> {
      const results: IngestionJob[] = [];
      while (this.hasNext()) {
        const nextPage = await this.getNext();
        results.push(...nextPage);
      }
      return results;
    }
  }
}

export = WatsonxDataV3;
