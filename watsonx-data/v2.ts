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
 * API Version: 2.0.0
 */

class WatsonxDataV2 extends BaseService {
  static DEFAULT_SERVICE_URL: string = 'https://region.lakehouse.cloud.ibm.com/lakehouse/api/v2';

  static DEFAULT_SERVICE_NAME: string = 'watsonx_data';

  /*************************
   * Factory method
   ************************/

  /**
   * Constructs an instance of WatsonxDataV2 with passed in options and external configuration.
   *
   * @param {UserOptions} [options] - The parameters to send to the service.
   * @param {string} [options.serviceName] - The name of the service to configure
   * @param {Authenticator} [options.authenticator] - The Authenticator object used to authenticate requests to the service
   * @param {string} [options.serviceUrl] - The base URL for the service
   * @returns {WatsonxDataV2}
   */

  public static newInstance(options: UserOptions): WatsonxDataV2 {
    options = options || {};

    if (!options.serviceName) {
      options.serviceName = this.DEFAULT_SERVICE_NAME;
    }
    if (!options.authenticator) {
      options.authenticator = getAuthenticatorFromEnvironment(options.serviceName);
    }
    const service = new WatsonxDataV2(options);
    service.configureService(options.serviceName);
    if (options.serviceUrl) {
      service.setServiceUrl(options.serviceUrl);
    }
    return service;
  }

  /**
   * Construct a WatsonxDataV2 object.
   *
   * @param {Object} options - Options for the service.
   * @param {string} [options.serviceUrl] - The base URL for the service
   * @param {OutgoingHttpHeaders} [options.headers] - Default headers that shall be included with every request to the service.
   * @param {Authenticator} options.authenticator - The Authenticator object used to authenticate requests to the service
   * @constructor
   * @returns {WatsonxDataV2}
   */
  constructor(options: UserOptions) {
    options = options || {};

    super(options);
    if (options.serviceUrl) {
      this.setServiceUrl(options.serviceUrl);
    } else {
      this.setServiceUrl(WatsonxDataV2.DEFAULT_SERVICE_URL);
    }
  }

  /*************************
   * buckets
   ************************/

  /**
   * Get bucket registrations.
   *
   * Get list of registered buckets.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.BucketRegistrationCollection>>}
   */
  public listBucketRegistrations(
    params?: WatsonxDataV2.ListBucketRegistrationsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.BucketRegistrationCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'listBucketRegistrations'
    );

    const parameters = {
      options: {
        url: '/bucket_registrations',
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
   * Register bucket.
   *
   * Register a new bucket.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bucketType - bucket type.
   * @param {string} params.description - bucket description.
   * @param {string} params.managedBy - managed by.
   * @param {BucketCatalog} [params.associatedCatalog] - bucket catalog.
   * @param {BucketDetails} [params.bucketDetails] - bucket details.
   * @param {string} [params.bucketDisplayName] - bucket display name.
   * @param {string} [params.region] - region where the bucket is located.
   * @param {StorageDetails} [params.storageDetails] - storage details.
   * @param {string[]} [params.tags] - tags.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.BucketRegistration>>}
   */
  public createBucketRegistration(
    params: WatsonxDataV2.CreateBucketRegistrationParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.BucketRegistration>> {
    const _params = { ...params };
    const _requiredParams = ['bucketType', 'description', 'managedBy'];
    const _validParams = [
      'bucketType',
      'description',
      'managedBy',
      'associatedCatalog',
      'bucketDetails',
      'bucketDisplayName',
      'region',
      'storageDetails',
      'tags',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'bucket_type': _params.bucketType,
      'description': _params.description,
      'managed_by': _params.managedBy,
      'associated_catalog': _params.associatedCatalog,
      'bucket_details': _params.bucketDetails,
      'bucket_display_name': _params.bucketDisplayName,
      'region': _params.region,
      'storage_details': _params.storageDetails,
      'tags': _params.tags,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createBucketRegistration'
    );

    const parameters = {
      options: {
        url: '/bucket_registrations',
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
   * Get bucket.
   *
   * Get a registered bucket.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bucketId - bucket id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.BucketRegistration>>}
   */
  public getBucketRegistration(
    params: WatsonxDataV2.GetBucketRegistrationParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.BucketRegistration>> {
    const _params = { ...params };
    const _requiredParams = ['bucketId'];
    const _validParams = ['bucketId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'bucket_id': _params.bucketId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'getBucketRegistration'
    );

    const parameters = {
      options: {
        url: '/bucket_registrations/{bucket_id}',
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
   * Deregister Bucket.
   *
   * Deregister a bucket.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bucketId - bucket id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteBucketRegistration(
    params: WatsonxDataV2.DeleteBucketRegistrationParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['bucketId'];
    const _validParams = ['bucketId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'bucket_id': _params.bucketId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'deleteBucketRegistration'
    );

    const parameters = {
      options: {
        url: '/bucket_registrations/{bucket_id}',
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
   * Update bucket.
   *
   * Update bucket details & credentials.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bucketId - bucket id.
   * @param {BucketDetails} [params.bucketDetails] - bucket details.
   * @param {string} [params.bucketDisplayName] - bucket display name.
   * @param {string} [params.description] - modified description.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.BucketRegistration>>}
   */
  public updateBucketRegistration(
    params: WatsonxDataV2.UpdateBucketRegistrationParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.BucketRegistration>> {
    const _params = { ...params };
    const _requiredParams = ['bucketId'];
    const _validParams = [
      'bucketId',
      'bucketDetails',
      'bucketDisplayName',
      'description',
      'tags',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'bucket_details': _params.bucketDetails,
      'bucket_display_name': _params.bucketDisplayName,
      'description': _params.description,
      'tags': _params.tags,
    };

    const path = {
      'bucket_id': _params.bucketId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'updateBucketRegistration'
    );

    const parameters = {
      options: {
        url: '/bucket_registrations/{bucket_id}',
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
   * Activate Bucket.
   *
   * Activate a registered bucket.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bucketId - bucket id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateActivateBucketCreatedBody>>}
   */
  public createActivateBucket(
    params: WatsonxDataV2.CreateActivateBucketParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateActivateBucketCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['bucketId'];
    const _validParams = ['bucketId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'bucket_id': _params.bucketId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createActivateBucket'
    );

    const parameters = {
      options: {
        url: '/bucket_registrations/{bucket_id}/activate',
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
   * Add bucket catalog.
   *
   * Add bucket catalog.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bucketId - bucket id.
   * @param {string} [params.basePath] - catalog base path.
   * @param {string} [params.catalogName] - catalog name.
   * @param {string[]} [params.catalogTags] - catalog tags.
   * @param {string} [params.catalogType] - catalog type.
   * @param {string} [params.authInstanceId] - watsonx.data instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SuccessResponse>>}
   */
  public addBucketCatalog(
    params: WatsonxDataV2.AddBucketCatalogParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['bucketId'];
    const _validParams = [
      'bucketId',
      'basePath',
      'catalogName',
      'catalogTags',
      'catalogType',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'base_path': _params.basePath,
      'catalog_name': _params.catalogName,
      'catalog_tags': _params.catalogTags,
      'catalog_type': _params.catalogType,
    };

    const path = {
      'bucket_id': _params.bucketId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'addBucketCatalog');

    const parameters = {
      options: {
        url: '/bucket_registrations/{bucket_id}/catalogs',
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
   * Deactivate Bucket.
   *
   * Deactivate a bucket.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bucketId - bucket id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteDeactivateBucket(
    params: WatsonxDataV2.DeleteDeactivateBucketParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['bucketId'];
    const _validParams = ['bucketId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'bucket_id': _params.bucketId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'deleteDeactivateBucket'
    );

    const parameters = {
      options: {
        url: '/bucket_registrations/{bucket_id}/deactivate',
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
   * List bucket objects.
   *
   * Fetch all objects from a given bucket.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bucketId - bucket id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {string} [params.path] - path.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.BucketRegistrationObjectCollection>>}
   */
  public listBucketObjects(
    params: WatsonxDataV2.ListBucketObjectsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.BucketRegistrationObjectCollection>> {
    const _params = { ...params };
    const _requiredParams = ['bucketId'];
    const _validParams = ['bucketId', 'authInstanceId', 'path', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'path': _params.path,
    };

    const path = {
      'bucket_id': _params.bucketId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'listBucketObjects');

    const parameters = {
      options: {
        url: '/bucket_registrations/{bucket_id}/objects',
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
   * Get bucket object properties.
   *
   * Get bucket object properties.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bucketId - bucket id.
   * @param {Path[]} [params.paths] - bucket object size.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.BucketObjectProperties>>}
   */
  public getBucketObjectProperties(
    params: WatsonxDataV2.GetBucketObjectPropertiesParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.BucketObjectProperties>> {
    const _params = { ...params };
    const _requiredParams = ['bucketId'];
    const _validParams = ['bucketId', 'paths', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'paths': _params.paths,
    };

    const path = {
      'bucket_id': _params.bucketId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'getBucketObjectProperties'
    );

    const parameters = {
      options: {
        url: '/bucket_registrations/{bucket_id}/object_properties',
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
   * Add/Create HDFS storage.
   *
   * Add or create a new HDFS database.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bucketDisplayName - Bucket display name.
   * @param {string} params.bucketType - Bucket type.
   * @param {string} params.hmsThriftUri - HMS Thrift URI.
   * @param {number} params.hmsThriftPort - HMS Thrift Port.
   * @param {string} params.coreSite - contents of core-site.xml file.
   * @param {string} params.hdfsSite - contents of hdfs-site.xml file.
   * @param {string} params.kerberos - Kerberos Flag.
   * @param {string} params.catalogName - Catalog name.
   * @param {string} params.catalogType - Catalog type.
   * @param {string} [params.krb5Config] - Kerberos config file.
   * @param {NodeJS.ReadableStream | Buffer} [params.hiveKeytab] - Hive keytab file.
   * @param {string} [params.hiveKeytabContentType] - The content type of hiveKeytab.
   * @param {NodeJS.ReadableStream | Buffer} [params.hdfsKeytab] - HDFS keytab file.
   * @param {string} [params.hdfsKeytabContentType] - The content type of hdfsKeytab.
   * @param {string} [params.hiveServerPrincipal] - Hive server principal.
   * @param {string} [params.hiveClientPrincipal] - Hive client principal.
   * @param {string} [params.hdfsPrincipal] - HDFS principal.
   * @param {string} [params.description] - Database description.
   * @param {string} [params.createdOn] - Created on.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.HdfsStorageRegistration>>}
   */
  public createHdfsStorage(
    params: WatsonxDataV2.CreateHdfsStorageParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.HdfsStorageRegistration>> {
    const _params = { ...params };
    const _requiredParams = [
      'bucketDisplayName',
      'bucketType',
      'hmsThriftUri',
      'hmsThriftPort',
      'coreSite',
      'hdfsSite',
      'kerberos',
      'catalogName',
      'catalogType',
    ];
    const _validParams = [
      'bucketDisplayName',
      'bucketType',
      'hmsThriftUri',
      'hmsThriftPort',
      'coreSite',
      'hdfsSite',
      'kerberos',
      'catalogName',
      'catalogType',
      'krb5Config',
      'hiveKeytab',
      'hiveKeytabContentType',
      'hdfsKeytab',
      'hdfsKeytabContentType',
      'hiveServerPrincipal',
      'hiveClientPrincipal',
      'hdfsPrincipal',
      'description',
      'createdOn',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const formData = {
      'bucket_display_name': _params.bucketDisplayName,
      'bucket_type': _params.bucketType,
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
      'created_on': _params.createdOn,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'createHdfsStorage');

    const parameters = {
      options: {
        url: '/storage_hdfs_registrations',
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
  /*************************
   * databases
   ************************/

  /**
   * Get databases.
   *
   * Get list of databases.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.DatabaseRegistrationCollection>>}
   */
  public listDatabaseRegistrations(
    params?: WatsonxDataV2.ListDatabaseRegistrationsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.DatabaseRegistrationCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'listDatabaseRegistrations'
    );

    const parameters = {
      options: {
        url: '/database_registrations',
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
   * @param {string} params.databaseDisplayName - Database display name.
   * @param {string} params.databaseType - Connector type.
   * @param {DatabaseCatalog} [params.associatedCatalog] - database catalog.
   * @param {string} [params.createdOn] - Created on.
   * @param {DatabaseDetails} [params.databaseDetails] - database details.
   * @param {DatabaseRegistrationPrototypeDatabasePropertiesItems[]} [params.databaseProperties] - This will hold all
   * the properties for a custom database.
   * @param {string} [params.description] - Database description.
   * @param {string[]} [params.tags] - tags.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.DatabaseRegistration>>}
   */
  public createDatabaseRegistration(
    params: WatsonxDataV2.CreateDatabaseRegistrationParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.DatabaseRegistration>> {
    const _params = { ...params };
    const _requiredParams = ['databaseDisplayName', 'databaseType'];
    const _validParams = [
      'databaseDisplayName',
      'databaseType',
      'associatedCatalog',
      'createdOn',
      'databaseDetails',
      'databaseProperties',
      'description',
      'tags',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'database_display_name': _params.databaseDisplayName,
      'database_type': _params.databaseType,
      'associated_catalog': _params.associatedCatalog,
      'created_on': _params.createdOn,
      'database_details': _params.databaseDetails,
      'database_properties': _params.databaseProperties,
      'description': _params.description,
      'tags': _params.tags,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createDatabaseRegistration'
    );

    const parameters = {
      options: {
        url: '/database_registrations',
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
   * Get database.
   *
   * Get a registered databases.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.databaseId - database id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.DatabaseRegistration>>}
   */
  public getDatabase(
    params: WatsonxDataV2.GetDatabaseParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.DatabaseRegistration>> {
    const _params = { ...params };
    const _requiredParams = ['databaseId'];
    const _validParams = ['databaseId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'database_id': _params.databaseId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'getDatabase');

    const parameters = {
      options: {
        url: '/database_registrations/{database_id}',
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
   * @param {string} params.databaseId - database id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteDatabaseCatalog(
    params: WatsonxDataV2.DeleteDatabaseCatalogParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['databaseId'];
    const _validParams = ['databaseId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'database_id': _params.databaseId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'deleteDatabaseCatalog'
    );

    const parameters = {
      options: {
        url: '/database_registrations/{database_id}',
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
   * @param {string} params.databaseId - database id.
   * @param {DatabaseRegistrationPatchDatabaseDetails} [params.databaseDetails] - New database details.
   * @param {string} [params.databaseDisplayName] - New database display name.
   * @param {string} [params.description] - New database description.
   * @param {string[]} [params.tags] - New tags.
   * @param {DatabaseRegistrationPatchTopicsItems[]} [params.topics] - List of topics.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.DatabaseRegistration>>}
   */
  public updateDatabase(
    params: WatsonxDataV2.UpdateDatabaseParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.DatabaseRegistration>> {
    const _params = { ...params };
    const _requiredParams = ['databaseId'];
    const _validParams = [
      'databaseId',
      'databaseDetails',
      'databaseDisplayName',
      'description',
      'tags',
      'topics',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'database_details': _params.databaseDetails,
      'database_display_name': _params.databaseDisplayName,
      'description': _params.description,
      'tags': _params.tags,
      'topics': _params.topics,
    };

    const path = {
      'database_id': _params.databaseId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'updateDatabase');

    const parameters = {
      options: {
        url: '/database_registrations/{database_id}',
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
   * drivers
   ************************/

  /**
   * Get drivers.
   *
   * Get all driver details.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.DriverRegistrationCollection>>}
   */
  public listDriverRegistration(
    params?: WatsonxDataV2.ListDriverRegistrationParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.DriverRegistrationCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'listDriverRegistration'
    );

    const parameters = {
      options: {
        url: '/driver_registrations',
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
   * Register driver.
   *
   * Register a new driver.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {NodeJS.ReadableStream | Buffer} params.driver - Driver file to upload.
   * @param {string} params.driverName - Driver name.
   * @param {string} params.connectionType - Driver connection type.
   * @param {string} [params.driverContentType] - The content type of driver.
   * @param {string} [params.version] - Driver status.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.DriverRegistration>>}
   */
  public createDriverRegistration(
    params: WatsonxDataV2.CreateDriverRegistrationParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.DriverRegistration>> {
    const _params = { ...params };
    const _requiredParams = ['driver', 'driverName', 'connectionType'];
    const _validParams = [
      'driver',
      'driverName',
      'connectionType',
      'driverContentType',
      'version',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const formData = {
      'driver': {
        data: _params.driver,
        contentType: _params.driverContentType,
      },
      'driver_name': _params.driverName,
      'connection_type': _params.connectionType,
      'version': _params.version,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createDriverRegistration'
    );

    const parameters = {
      options: {
        url: '/driver_registrations',
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
   * Delete driver.
   *
   * Delete a driver.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.driverId - Driver ID.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteDriverRegistration(
    params: WatsonxDataV2.DeleteDriverRegistrationParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['driverId'];
    const _validParams = ['driverId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'driver_id': _params.driverId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'deleteDriverRegistration'
    );

    const parameters = {
      options: {
        url: '/driver_registrations/{driver_id}',
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
   * Disassociate engines from driver.
   *
   * Disassociate one or more engines from a driver.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.driverId - driver id.
   * @param {string} params.engineIds - Engine id(s) to be disassociated from the driver, comma separated.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteDriverEngines(
    params: WatsonxDataV2.DeleteDriverEnginesParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['driverId', 'engineIds'];
    const _validParams = ['driverId', 'engineIds', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'engine_ids': _params.engineIds,
    };

    const path = {
      'driver_id': _params.driverId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'deleteDriverEngines'
    );

    const parameters = {
      options: {
        url: '/driver_registrations/{driver_id}/engines',
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
   * Associate engines to driver.
   *
   * Associate one or more engines to a driver.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.driverId - driver id.
   * @param {string[]} [params.engines] - List of engine IDs.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.DriverRegistrationEngine>>}
   */
  public updateDriverEngines(
    params: WatsonxDataV2.UpdateDriverEnginesParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.DriverRegistrationEngine>> {
    const _params = { ...params };
    const _requiredParams = ['driverId'];
    const _validParams = ['driverId', 'engines', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'engines': _params.engines,
    };

    const path = {
      'driver_id': _params.driverId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'updateDriverEngines'
    );

    const parameters = {
      options: {
        url: '/driver_registrations/{driver_id}/engines',
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
   * List other engines.
   *
   * list all other engine details.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.OtherEngineCollection>>}
   */
  public listOtherEngines(
    params?: WatsonxDataV2.ListOtherEnginesParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.OtherEngineCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'listOtherEngines');

    const parameters = {
      options: {
        url: '/other_engines',
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
   * @param {OtherEngineDetailsBody} params.engineDetails - External engine details.
   * @param {string} params.engineDisplayName - engine display name.
   * @param {string} [params.description] - engine description.
   * @param {string} [params.origin] - Origin - created or registered.
   * @param {string[]} [params.tags] - other engine tags.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.OtherEngine>>}
   */
  public createOtherEngine(
    params: WatsonxDataV2.CreateOtherEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.OtherEngine>> {
    const _params = { ...params };
    const _requiredParams = ['engineDetails', 'engineDisplayName'];
    const _validParams = [
      'engineDetails',
      'engineDisplayName',
      'description',
      'origin',
      'tags',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'engine_details': _params.engineDetails,
      'engine_display_name': _params.engineDisplayName,
      'description': _params.description,
      'origin': _params.origin,
      'tags': _params.tags,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'createOtherEngine');

    const parameters = {
      options: {
        url: '/other_engines',
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
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteOtherEngine(
    params: WatsonxDataV2.DeleteOtherEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
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

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteOtherEngine');

    const parameters = {
      options: {
        url: '/other_engines/{engine_id}',
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
   * integrations
   ************************/

  /**
   * Get all existing Integrations.
   *
   * Get all existing Integrations.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {string} [params.secret] - API Authentication service token.
   * @param {string} [params.serviceType] - service_type.
   * @param {string[]} [params.state] - state.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.IntegrationCollection>>}
   */
  public listAllIntegrations(
    params?: WatsonxDataV2.ListAllIntegrationsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.IntegrationCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'secret', 'serviceType', 'state', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'service_type': _params.serviceType,
      'state': _params.state,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'listAllIntegrations'
    );

    const parameters = {
      options: {
        url: '/integrations',
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
   * To register an integration.
   *
   * To register an integration.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.accessToken] - token for databand.
   * @param {string} [params.apikey] - Integration APIKEY.
   * @param {boolean} [params.crossAccountIntegration] - cross account integration enabler/disabler.
   * @param {boolean} [params.enableDataPolicyWithinWxd] - data policy enabler with wxd for ranger.
   * @param {string} [params.ikcUserAccountId] - token for ikc.
   * @param {string} [params.password] - Integration password.
   * @param {string} [params.resource] - resouce for ranger.
   * @param {string} [params.serviceType] - Integration type.
   * @param {string[]} [params.storageCatalogs] - Comma separated list of bucket catalogs which have ikc enabled.
   * @param {string} [params.url] - Integration Connection URL.
   * @param {string} [params.username] - Integration username.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.Integration>>}
   */
  public createIntegration(
    params?: WatsonxDataV2.CreateIntegrationParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.Integration>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = [
      'accessToken',
      'apikey',
      'crossAccountIntegration',
      'enableDataPolicyWithinWxd',
      'ikcUserAccountId',
      'password',
      'resource',
      'serviceType',
      'storageCatalogs',
      'url',
      'username',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'access_token': _params.accessToken,
      'apikey': _params.apikey,
      'cross_account_integration': _params.crossAccountIntegration,
      'enable_data_policy_within_wxd': _params.enableDataPolicyWithinWxd,
      'ikc_user_account_id': _params.ikcUserAccountId,
      'password': _params.password,
      'resource': _params.resource,
      'service_type': _params.serviceType,
      'storage_catalogs': _params.storageCatalogs,
      'url': _params.url,
      'username': _params.username,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'createIntegration');

    const parameters = {
      options: {
        url: '/integrations',
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
   * Get an Integration.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.integrationId - integration_id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {string} [params.secret] - API Authentication service token.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.Integration>>}
   */
  public getIntegrations(
    params: WatsonxDataV2.GetIntegrationsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.Integration>> {
    const _params = { ...params };
    const _requiredParams = ['integrationId'];
    const _validParams = ['integrationId', 'authInstanceId', 'secret', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'integration_id': _params.integrationId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'getIntegrations');

    const parameters = {
      options: {
        url: '/integrations/{integration_id}',
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
   * Remove an Integration.
   *
   * Remove an Integration.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.integrationId - integration_id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteIntegration(
    params: WatsonxDataV2.DeleteIntegrationParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['integrationId'];
    const _validParams = ['integrationId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'integration_id': _params.integrationId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteIntegration');

    const parameters = {
      options: {
        url: '/integrations/{integration_id}',
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
   * Update an existing Integration.
   *
   * Update an existing Integration.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.integrationId - integration_id.
   * @param {string} [params.accessToken] - token for databand.
   * @param {string} [params.apikey] - Integration APIKEY.
   * @param {boolean} [params.crossAccountIntegration] - cross account integration enabler/disabler.
   * @param {boolean} [params.enableDataPolicyWithinWxd] - data policy enabler with wxd for ranger.
   * @param {string} [params.ikcUserAccountId] - token for databand.
   * @param {string} [params.password] - Integration password.
   * @param {string} [params.resource] - resouce for ranger.
   * @param {string} [params.state] - current state.
   * @param {string[]} [params.storageCatalogs] - Comma separated list of bucket catalogs which have ikc enabled.
   * @param {string} [params.url] - Integration Connection URL.
   * @param {string} [params.username] - Integration username.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.Integration>>}
   */
  public updateIntegration(
    params: WatsonxDataV2.UpdateIntegrationParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.Integration>> {
    const _params = { ...params };
    const _requiredParams = ['integrationId'];
    const _validParams = [
      'integrationId',
      'accessToken',
      'apikey',
      'crossAccountIntegration',
      'enableDataPolicyWithinWxd',
      'ikcUserAccountId',
      'password',
      'resource',
      'state',
      'storageCatalogs',
      'url',
      'username',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'access_token': _params.accessToken,
      'apikey': _params.apikey,
      'cross_account_integration': _params.crossAccountIntegration,
      'enable_data_policy_within_wxd': _params.enableDataPolicyWithinWxd,
      'ikc_user_account_id': _params.ikcUserAccountId,
      'password': _params.password,
      'resource': _params.resource,
      'state': _params.state,
      'storage_catalogs': _params.storageCatalogs,
      'url': _params.url,
      'username': _params.username,
    };

    const path = {
      'integration_id': _params.integrationId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'updateIntegration');

    const parameters = {
      options: {
        url: '/integrations/{integration_id}',
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
   * db2Engines
   ************************/

  /**
   * Get list of db2 engines.
   *
   * Get list of all db2 engines.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.Db2EngineCollection>>}
   */
  public listDb2Engines(
    params?: WatsonxDataV2.ListDb2EnginesParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.Db2EngineCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'listDb2Engines');

    const parameters = {
      options: {
        url: '/db2_engines',
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
   * @param {string} params.origin - Origin - created or registered.
   * @param {string} [params.description] - Engine description.
   * @param {Db2EngineDetailsBody} [params.engineDetails] - External engine details.
   * @param {string} [params.engineDisplayName] - Engine display name.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.Db2Engine>>}
   */
  public createDb2Engine(
    params: WatsonxDataV2.CreateDb2EngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.Db2Engine>> {
    const _params = { ...params };
    const _requiredParams = ['origin'];
    const _validParams = [
      'origin',
      'description',
      'engineDetails',
      'engineDisplayName',
      'tags',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'origin': _params.origin,
      'description': _params.description,
      'engine_details': _params.engineDetails,
      'engine_display_name': _params.engineDisplayName,
      'tags': _params.tags,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'createDb2Engine');

    const parameters = {
      options: {
        url: '/db2_engines',
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
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteDb2Engine(
    params: WatsonxDataV2.DeleteDb2EngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
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

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteDb2Engine');

    const parameters = {
      options: {
        url: '/db2_engines/{engine_id}',
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
   * @param {string} params.engineId - engine id.
   * @param {string} [params.description] - Modified description.
   * @param {string} [params.engineDisplayName] - Engine display name.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.Db2Engine>>}
   */
  public updateDb2Engine(
    params: WatsonxDataV2.UpdateDb2EngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.Db2Engine>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = [
      'engineId',
      'description',
      'engineDisplayName',
      'tags',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'description': _params.description,
      'engine_display_name': _params.engineDisplayName,
      'tags': _params.tags,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'updateDb2Engine');

    const parameters = {
      options: {
        url: '/db2_engines/{engine_id}',
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
   * netezzaEngines
   ************************/

  /**
   * Get list of netezza engines.
   *
   * Get list of all netezza engines.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.NetezzaEngineCollection>>}
   */
  public listNetezzaEngines(
    params?: WatsonxDataV2.ListNetezzaEnginesParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.NetezzaEngineCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'listNetezzaEngines'
    );

    const parameters = {
      options: {
        url: '/netezza_engines',
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
   * @param {string} params.origin - Origin - created or registered.
   * @param {string} [params.description] - Engine description.
   * @param {NetezzaEngineDetailsBody} [params.engineDetails] - External engine details.
   * @param {string} [params.engineDisplayName] - Engine display name.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.NetezzaEngine>>}
   */
  public createNetezzaEngine(
    params: WatsonxDataV2.CreateNetezzaEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.NetezzaEngine>> {
    const _params = { ...params };
    const _requiredParams = ['origin'];
    const _validParams = [
      'origin',
      'description',
      'engineDetails',
      'engineDisplayName',
      'tags',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'origin': _params.origin,
      'description': _params.description,
      'engine_details': _params.engineDetails,
      'engine_display_name': _params.engineDisplayName,
      'tags': _params.tags,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createNetezzaEngine'
    );

    const parameters = {
      options: {
        url: '/netezza_engines',
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
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteNetezzaEngine(
    params: WatsonxDataV2.DeleteNetezzaEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
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

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'deleteNetezzaEngine'
    );

    const parameters = {
      options: {
        url: '/netezza_engines/{engine_id}',
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
   * @param {string} params.engineId - engine id.
   * @param {string} [params.description] - Modified description.
   * @param {string} [params.engineDisplayName] - Engine display name.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.NetezzaEngine>>}
   */
  public updateNetezzaEngine(
    params: WatsonxDataV2.UpdateNetezzaEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.NetezzaEngine>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = [
      'engineId',
      'description',
      'engineDisplayName',
      'tags',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'description': _params.description,
      'engine_display_name': _params.engineDisplayName,
      'tags': _params.tags,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'updateNetezzaEngine'
    );

    const parameters = {
      options: {
        url: '/netezza_engines/{engine_id}',
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
   * queries
   ************************/

  /**
   * Execute a query.
   *
   * Execute a query.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - Engine name.
   * @param {string} params.sqlString - query to be executed.
   * @param {string} [params.catalogName] - Name of the catalog.
   * @param {string} [params.schemaName] - Schema name.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ExecuteQueryCreatedBody>>}
   */
  public createExecuteQuery(
    params: WatsonxDataV2.CreateExecuteQueryParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ExecuteQueryCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'sqlString'];
    const _validParams = [
      'engineId',
      'sqlString',
      'catalogName',
      'schemaName',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'sql_string': _params.sqlString,
      'catalog_name': _params.catalogName,
      'schema_name': _params.schemaName,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createExecuteQuery'
    );

    const parameters = {
      options: {
        url: '/queries/execute/{engine_id}',
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
   * instance
   ************************/

  /**
   * Get all instance details.
   *
   * Get all engine details.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.WatsonxInstanceDetailsCollection>>}
   */
  public listInstanceDetails(
    params?: WatsonxDataV2.ListInstanceDetailsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.WatsonxInstanceDetailsCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'listInstanceDetails'
    );

    const parameters = {
      options: {
        url: '/instance_details',
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
   * Get engines and services detail.
   *
   * Get engines and services detail.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.target - Target type (e.g., 'cpd', 'generic').
   * @param {boolean} [params.internalHost] - Internal host.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EnginesServicesDetails>>}
   */
  public listInstanceServiceDetails(
    params: WatsonxDataV2.ListInstanceServiceDetailsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EnginesServicesDetails>> {
    const _params = { ...params };
    const _requiredParams = ['target'];
    const _validParams = ['target', 'internalHost', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'target': _params.target,
      'internal_host': _params.internalHost,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'listInstanceServiceDetails'
    );

    const parameters = {
      options: {
        url: '/instance_details/engines_services',
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
   * Get services details.
   *
   * Get services details for a given engine or service type.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.target - Target type (e.g., 'cpd', 'generic').
   * @param {string} params.engineOrServiceType - Type of engine or service (e.g., 'milvus', 'presto').
   * @param {boolean} [params.internalHost] - Internal host.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ServicesDetails>>}
   */
  public getServicesDetails(
    params: WatsonxDataV2.GetServicesDetailsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ServicesDetails>> {
    const _params = { ...params };
    const _requiredParams = ['target', 'engineOrServiceType'];
    const _validParams = [
      'target',
      'engineOrServiceType',
      'internalHost',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'target': _params.target,
      'internal_host': _params.internalHost,
    };

    const path = {
      'engine_or_service_type': _params.engineOrServiceType,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'getServicesDetails'
    );

    const parameters = {
      options: {
        url: '/instance_details/engines_services/{engine_or_service_type}',
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
   * Get Milvus service detail.
   *
   * Get Milvus service detail.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.target - Target type (e.g., 'cpd', 'generic').
   * @param {string} params.engineOrServiceType - Type of engine or service (e.g., 'milvus', 'presto').
   * @param {string} params.id - Service ID.
   * @param {string} [params.database] - Database name in milvus.
   * @param {boolean} [params.internalHost] - Internal host.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ConnectionPropertiesDetails>>}
   */
  public getServiceDetail(
    params: WatsonxDataV2.GetServiceDetailParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ConnectionPropertiesDetails>> {
    const _params = { ...params };
    const _requiredParams = ['target', 'engineOrServiceType', 'id'];
    const _validParams = [
      'target',
      'engineOrServiceType',
      'id',
      'database',
      'internalHost',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'target': _params.target,
      'database': _params.database,
      'internal_host': _params.internalHost,
    };

    const path = {
      'engine_or_service_type': _params.engineOrServiceType,
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'getServiceDetail');

    const parameters = {
      options: {
        url: '/instance_details/engines_services/{engine_or_service_type}/id/{id}',
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
   * prestissimoEngines
   ************************/

  /**
   * Get list of prestissimo engines.
   *
   * Get list of all prestissimo engines.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.PrestissimoEngineCollection>>}
   */
  public listPrestissimoEngines(
    params?: WatsonxDataV2.ListPrestissimoEnginesParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.PrestissimoEngineCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'listPrestissimoEngines'
    );

    const parameters = {
      options: {
        url: '/prestissimo_engines',
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
   * @param {string} params.origin - Origin - created or registered.
   * @param {string[]} [params.associatedCatalogs] - Associated catalogs.
   * @param {string} [params.description] - Engine description.
   * @param {PrestissimoEngineDetails} [params.engineDetails] - External engine details.
   * @param {string} [params.engineDisplayName] - Engine display name.
   * @param {string} [params.region] - Region (cloud).
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.version] - Version like 0.278 for prestissimo or else.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.PrestissimoEngine>>}
   */
  public createPrestissimoEngine(
    params: WatsonxDataV2.CreatePrestissimoEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.PrestissimoEngine>> {
    const _params = { ...params };
    const _requiredParams = ['origin'];
    const _validParams = [
      'origin',
      'associatedCatalogs',
      'description',
      'engineDetails',
      'engineDisplayName',
      'region',
      'tags',
      'version',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'origin': _params.origin,
      'associated_catalogs': _params.associatedCatalogs,
      'description': _params.description,
      'engine_details': _params.engineDetails,
      'engine_display_name': _params.engineDisplayName,
      'region': _params.region,
      'tags': _params.tags,
      'version': _params.version,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createPrestissimoEngine'
    );

    const parameters = {
      options: {
        url: '/prestissimo_engines',
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
   * Get prestissimo engine.
   *
   * Get details of one prestissimo engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.PrestissimoEngine>>}
   */
  public getPrestissimoEngine(
    params: WatsonxDataV2.GetPrestissimoEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.PrestissimoEngine>> {
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

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'getPrestissimoEngine'
    );

    const parameters = {
      options: {
        url: '/prestissimo_engines/{engine_id}',
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
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deletePrestissimoEngine(
    params: WatsonxDataV2.DeletePrestissimoEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
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

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'deletePrestissimoEngine'
    );

    const parameters = {
      options: {
        url: '/prestissimo_engines/{engine_id}',
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
   * @param {string} params.engineId - engine id.
   * @param {string} [params.description] - Modified description.
   * @param {string} [params.engineDisplayName] - Engine display name.
   * @param {PrestissimoEngineEngineProperties} [params.engineProperties] - Engine properties.
   * @param {string} [params.engineRestart] - Triggers engine restart if value is force.
   * @param {RemoveEngineProperties} [params.removeEngineProperties] - RemoveEngine properties.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.PrestissimoEngine>>}
   */
  public updatePrestissimoEngine(
    params: WatsonxDataV2.UpdatePrestissimoEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.PrestissimoEngine>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = [
      'engineId',
      'description',
      'engineDisplayName',
      'engineProperties',
      'engineRestart',
      'removeEngineProperties',
      'tags',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'description': _params.description,
      'engine_display_name': _params.engineDisplayName,
      'engine_properties': _params.engineProperties,
      'engine_restart': _params.engineRestart,
      'remove_engine_properties': _params.removeEngineProperties,
      'tags': _params.tags,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'updatePrestissimoEngine'
    );

    const parameters = {
      options: {
        url: '/prestissimo_engines/{engine_id}',
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
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.CatalogCollection>>}
   */
  public listPrestissimoEngineCatalogs(
    params: WatsonxDataV2.ListPrestissimoEngineCatalogsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.CatalogCollection>> {
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

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'listPrestissimoEngineCatalogs'
    );

    const parameters = {
      options: {
        url: '/prestissimo_engines/{engine_id}/catalogs',
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
   * @param {string} params.engineId - engine id.
   * @param {string} [params.catalogName] - catalog names.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.Catalog>>}
   */
  public createPrestissimoEngineCatalogs(
    params: WatsonxDataV2.CreatePrestissimoEngineCatalogsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.Catalog>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'catalogName', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'catalog_name': _params.catalogName,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createPrestissimoEngineCatalogs'
    );

    const parameters = {
      options: {
        url: '/prestissimo_engines/{engine_id}/catalogs',
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
   * @param {string} params.engineId - engine id.
   * @param {string} params.catalogNames - Catalog id(s) to be stopped, comma separated.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deletePrestissimoEngineCatalogs(
    params: WatsonxDataV2.DeletePrestissimoEngineCatalogsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
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

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'deletePrestissimoEngineCatalogs'
    );

    const parameters = {
      options: {
        url: '/prestissimo_engines/{engine_id}/catalogs',
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
   * Get prestissimo engine catalog.
   *
   * Get catalog attached to a prestissimo engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} params.catalogId - catalog id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.Catalog>>}
   */
  public getPrestissimoEngineCatalog(
    params: WatsonxDataV2.GetPrestissimoEngineCatalogParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.Catalog>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogId'];
    const _validParams = ['engineId', 'catalogId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'engine_id': _params.engineId,
      'catalog_id': _params.catalogId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'getPrestissimoEngineCatalog'
    );

    const parameters = {
      options: {
        url: '/prestissimo_engines/{engine_id}/catalogs/{catalog_id}',
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
   * Pause prestissimo engine.
   *
   * Pause a running prestissimo engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SuccessResponse>>}
   */
  public pausePrestissimoEngine(
    params: WatsonxDataV2.PausePrestissimoEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SuccessResponse>> {
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

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'pausePrestissimoEngine'
    );

    const parameters = {
      options: {
        url: '/prestissimo_engines/{engine_id}/pause',
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
   * @param {string} params.engineId - Engine id.
   * @param {string} params.statement - Presto query to determine explain plan.
   * @param {string} [params.format] - Format.
   * @param {string} [params.type] - Type.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ResultPrestissimoExplainStatement>>}
   */
  public runPrestissimoExplainStatement(
    params: WatsonxDataV2.RunPrestissimoExplainStatementParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ResultPrestissimoExplainStatement>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'statement'];
    const _validParams = [
      'engineId',
      'statement',
      'format',
      'type',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'statement': _params.statement,
      'format': _params.format,
      'type': _params.type,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'runPrestissimoExplainStatement'
    );

    const parameters = {
      options: {
        url: '/prestissimo_engines/{engine_id}/query_explain',
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
   * @param {string} params.engineId - Engine id.
   * @param {string} params.statement - Presto query to show explain analyze.
   * @param {boolean} [params.verbose] - Verbose.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ResultRunPrestissimoExplainAnalyzeStatement>>}
   */
  public runPrestissimoExplainAnalyzeStatement(
    params: WatsonxDataV2.RunPrestissimoExplainAnalyzeStatementParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ResultRunPrestissimoExplainAnalyzeStatement>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'statement'];
    const _validParams = [
      'engineId',
      'statement',
      'verbose',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'statement': _params.statement,
      'verbose': _params.verbose,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'runPrestissimoExplainAnalyzeStatement'
    );

    const parameters = {
      options: {
        url: '/prestissimo_engines/{engine_id}/query_explain_analyze',
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
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SuccessResponse>>}
   */
  public restartPrestissimoEngine(
    params: WatsonxDataV2.RestartPrestissimoEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SuccessResponse>> {
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

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'restartPrestissimoEngine'
    );

    const parameters = {
      options: {
        url: '/prestissimo_engines/{engine_id}/restart',
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
   * Resume a paused prestissimo engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SuccessResponse>>}
   */
  public resumePrestissimoEngine(
    params: WatsonxDataV2.ResumePrestissimoEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SuccessResponse>> {
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

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'resumePrestissimoEngine'
    );

    const parameters = {
      options: {
        url: '/prestissimo_engines/{engine_id}/resume',
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
   * Scale an existing prestissimo engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {PrestissimoNodeDescriptionBody} [params.coordinator] - coordinator/worker property settings.
   * @param {PrestissimoNodeDescriptionBody} [params.worker] - coordinator/worker property settings.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SuccessResponse>>}
   */
  public scalePrestissimoEngine(
    params: WatsonxDataV2.ScalePrestissimoEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = [
      'engineId',
      'coordinator',
      'worker',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'coordinator': _params.coordinator,
      'worker': _params.worker,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'scalePrestissimoEngine'
    );

    const parameters = {
      options: {
        url: '/prestissimo_engines/{engine_id}/scale',
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
   * prestoEngines
   ************************/

  /**
   * Get list of presto engines.
   *
   * Get list of all presto engines.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.PrestoEngineCollection>>}
   */
  public listPrestoEngines(
    params?: WatsonxDataV2.ListPrestoEnginesParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.PrestoEngineCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'listPrestoEngines');

    const parameters = {
      options: {
        url: '/presto_engines',
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
   * @param {string} params.origin - Origin - created or registered.
   * @param {string[]} [params.associatedCatalogs] - Associated catalogs.
   * @param {string} [params.description] - Engine description.
   * @param {EngineDetailsBody} [params.engineDetails] - Node details.
   * @param {string} [params.engineDisplayName] - Engine display name.
   * @param {string} [params.region] - Region (cloud).
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.version] - Version like 0.278 for presto or else.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.PrestoEngine>>}
   */
  public createPrestoEngine(
    params: WatsonxDataV2.CreatePrestoEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.PrestoEngine>> {
    const _params = { ...params };
    const _requiredParams = ['origin'];
    const _validParams = [
      'origin',
      'associatedCatalogs',
      'description',
      'engineDetails',
      'engineDisplayName',
      'region',
      'tags',
      'version',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'origin': _params.origin,
      'associated_catalogs': _params.associatedCatalogs,
      'description': _params.description,
      'engine_details': _params.engineDetails,
      'engine_display_name': _params.engineDisplayName,
      'region': _params.region,
      'tags': _params.tags,
      'version': _params.version,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createPrestoEngine'
    );

    const parameters = {
      options: {
        url: '/presto_engines',
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
   * Get presto engine.
   *
   * Get details of one presto engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.PrestoEngine>>}
   */
  public getPrestoEngine(
    params: WatsonxDataV2.GetPrestoEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.PrestoEngine>> {
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

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'getPrestoEngine');

    const parameters = {
      options: {
        url: '/presto_engines/{engine_id}',
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
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteEngine(
    params: WatsonxDataV2.DeleteEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
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

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteEngine');

    const parameters = {
      options: {
        url: '/presto_engines/{engine_id}',
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
   * @param {string} params.engineId - engine id.
   * @param {string} [params.description] - Modified description.
   * @param {string} [params.engineDisplayName] - Engine display name.
   * @param {PrestoEngineEngineProperties} [params.engineProperties] - Engine properties.
   * @param {string} [params.engineRestart] - Triggers engine restart if value is force.
   * @param {PrestoEnginePatchRemoveEngineProperties} [params.removeEngineProperties] - RemoveEngine properties.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.PrestoEngine>>}
   */
  public updatePrestoEngine(
    params: WatsonxDataV2.UpdatePrestoEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.PrestoEngine>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = [
      'engineId',
      'description',
      'engineDisplayName',
      'engineProperties',
      'engineRestart',
      'removeEngineProperties',
      'tags',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'description': _params.description,
      'engine_display_name': _params.engineDisplayName,
      'engine_properties': _params.engineProperties,
      'engine_restart': _params.engineRestart,
      'remove_engine_properties': _params.removeEngineProperties,
      'tags': _params.tags,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'updatePrestoEngine'
    );

    const parameters = {
      options: {
        url: '/presto_engines/{engine_id}',
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
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.CatalogCollection>>}
   */
  public listPrestoEngineCatalogs(
    params: WatsonxDataV2.ListPrestoEngineCatalogsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.CatalogCollection>> {
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

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'listPrestoEngineCatalogs'
    );

    const parameters = {
      options: {
        url: '/presto_engines/{engine_id}/catalogs',
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
   * @param {string} [params.catalogName] - catalog names.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.Catalog>>}
   */
  public createPrestoEngineCatalogs(
    params: WatsonxDataV2.CreatePrestoEngineCatalogsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.Catalog>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'catalogName', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'catalog_name': _params.catalogName,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createPrestoEngineCatalogs'
    );

    const parameters = {
      options: {
        url: '/presto_engines/{engine_id}/catalogs',
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
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deletePrestoEngineCatalogs(
    params: WatsonxDataV2.DeletePrestoEngineCatalogsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
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

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'deletePrestoEngineCatalogs'
    );

    const parameters = {
      options: {
        url: '/presto_engines/{engine_id}/catalogs',
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
   * @param {string} params.catalogId - catalog id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.Catalog>>}
   */
  public getPrestoEngineCatalog(
    params: WatsonxDataV2.GetPrestoEngineCatalogParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.Catalog>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogId'];
    const _validParams = ['engineId', 'catalogId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'engine_id': _params.engineId,
      'catalog_id': _params.catalogId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'getPrestoEngineCatalog'
    );

    const parameters = {
      options: {
        url: '/presto_engines/{engine_id}/catalogs/{catalog_id}',
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
   * Pause presto engine.
   *
   * Pause a running presto engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateEnginePauseCreatedBody>>}
   */
  public pausePrestoEngine(
    params: WatsonxDataV2.PausePrestoEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateEnginePauseCreatedBody>> {
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

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'pausePrestoEngine');

    const parameters = {
      options: {
        url: '/presto_engines/{engine_id}/pause',
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
   * @param {string} params.engineId - Engine id.
   * @param {string} params.statement - Presto query to determine explain plan.
   * @param {string} [params.format] - Format.
   * @param {string} [params.type] - Type.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.RunExplainStatementOKBody>>}
   */
  public runExplainStatement(
    params: WatsonxDataV2.RunExplainStatementParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.RunExplainStatementOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'statement'];
    const _validParams = [
      'engineId',
      'statement',
      'format',
      'type',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'statement': _params.statement,
      'format': _params.format,
      'type': _params.type,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'runExplainStatement'
    );

    const parameters = {
      options: {
        url: '/presto_engines/{engine_id}/query_explain',
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
   * @param {string} params.engineId - Engine id.
   * @param {string} params.statement - Presto query to show explain analyze.
   * @param {boolean} [params.verbose] - Verbose.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.RunExplainAnalyzeStatementOKBody>>}
   */
  public runExplainAnalyzeStatement(
    params: WatsonxDataV2.RunExplainAnalyzeStatementParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.RunExplainAnalyzeStatementOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'statement'];
    const _validParams = [
      'engineId',
      'statement',
      'verbose',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'statement': _params.statement,
      'verbose': _params.verbose,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'runExplainAnalyzeStatement'
    );

    const parameters = {
      options: {
        url: '/presto_engines/{engine_id}/query_explain_analyze',
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
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateEngineRestartCreatedBody>>}
   */
  public restartPrestoEngine(
    params: WatsonxDataV2.RestartPrestoEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateEngineRestartCreatedBody>> {
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

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'restartPrestoEngine'
    );

    const parameters = {
      options: {
        url: '/presto_engines/{engine_id}/restart',
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
   * Resume presto engine.
   *
   * Resume a paused presto engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateEngineResumeCreatedBody>>}
   */
  public resumePrestoEngine(
    params: WatsonxDataV2.ResumePrestoEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateEngineResumeCreatedBody>> {
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

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'resumePrestoEngine'
    );

    const parameters = {
      options: {
        url: '/presto_engines/{engine_id}/resume',
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
   * @param {string} params.engineId - engine id.
   * @param {NodeDescription} [params.coordinator] - NodeDescription.
   * @param {NodeDescription} [params.worker] - NodeDescription.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateEngineScaleCreatedBody>>}
   */
  public scalePrestoEngine(
    params: WatsonxDataV2.ScalePrestoEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateEngineScaleCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = [
      'engineId',
      'coordinator',
      'worker',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'coordinator': _params.coordinator,
      'worker': _params.worker,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'scalePrestoEngine');

    const parameters = {
      options: {
        url: '/presto_engines/{engine_id}/scale',
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
   * semanticAutomationLayer
   ************************/

  /**
   * Get SAL Integrations.
   *
   * Get SAL Integration.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegration>>}
   */
  public getSalIntegration(
    params?: WatsonxDataV2.GetSalIntegrationParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegration>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'getSalIntegration');

    const parameters = {
      options: {
        url: '/sal_integrations',
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
   * Create sal integration with wxd.
   *
   * Add or create a new sal integration.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.apikey - IAM apikey.
   * @param {string} params.engineId - engine ID.
   * @param {string} [params.storageResourceCrn] - COS storage resource crn.
   * @param {string} [params.storageType] - COS storage type.
   * @param {boolean} [params.trialPlan] - COS storage type.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegration>>}
   */
  public createSalIntegration(
    params: WatsonxDataV2.CreateSalIntegrationParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegration>> {
    const _params = { ...params };
    const _requiredParams = ['apikey', 'engineId'];
    const _validParams = [
      'apikey',
      'engineId',
      'storageResourceCrn',
      'storageType',
      'trialPlan',
      'authInstanceId',
      'signal',
      'headers',
    ];
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

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createSalIntegration'
    );

    const parameters = {
      options: {
        url: '/sal_integrations',
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
   * Delete sal-wxd integration.
   *
   * Delete a sal-wxd integration.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteSalIntegration(
    params?: WatsonxDataV2.DeleteSalIntegrationParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'deleteSalIntegration'
    );

    const parameters = {
      options: {
        url: '/sal_integrations',
        method: 'DELETE',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, this.baseOptions.headers, {}, _params.headers),
        axiosOptions: {
          signal: _params.signal,
        },
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update sal-wxd integration.
   *
   * Update sal-wxd integration details.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.op] - op.
   * @param {string} [params.path] - path.
   * @param {string} [params.value] - path.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegration>>}
   */
  public updateSalIntegration(
    params?: WatsonxDataV2.UpdateSalIntegrationParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegration>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['op', 'path', 'value', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'op': _params.op,
      'path': _params.path,
      'value': _params.value,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'updateSalIntegration'
    );

    const parameters = {
      options: {
        url: '/sal_integrations',
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
   * Trigger enrichment jobs on schemas and tables.
   *
   * Trigger enrichment jobs on schemas and tables.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {EnrichmentObj} [params.enrichmentPrototype] - Encrichment api object.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public createSalIntegrationEnrichment(
    params?: WatsonxDataV2.CreateSalIntegrationEnrichmentParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['enrichmentPrototype', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'enrichment_prototype': _params.enrichmentPrototype,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createSalIntegrationEnrichment'
    );

    const parameters = {
      options: {
        url: '/sal_integrations/enrichment',
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
   * Get semantic enrichment assets associated with the schema.
   *
   * Get semantic enrichment job runs associated with the schema.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.projectId] - enrichment project id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegrationEnrichmentAssets>>}
   */
  public getSalIntegrationEnrichmentAssets(
    params?: WatsonxDataV2.GetSalIntegrationEnrichmentAssetsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegrationEnrichmentAssets>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['projectId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'project_id': _params.projectId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'getSalIntegrationEnrichmentAssets'
    );

    const parameters = {
      options: {
        url: '/sal_integrations/enrichment_assets',
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
   * Get semantic enrichment data asset associated with the table.
   *
   * Get semantic enrichment data asset associated with the table.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.projectId] - enrichment project id.
   * @param {string} [params.assetId] - enrichment data asset id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegrationEnrichmentDataAsset>>}
   */
  public getSalIntegrationEnrichmentDataAsset(
    params?: WatsonxDataV2.GetSalIntegrationEnrichmentDataAssetParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegrationEnrichmentDataAsset>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['projectId', 'assetId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'project_id': _params.projectId,
      'asset_id': _params.assetId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'getSalIntegrationEnrichmentDataAsset'
    );

    const parameters = {
      options: {
        url: '/sal_integrations/enrichment_data_asset',
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
   * Get semantic enrichment job run logs associated with the job run.
   *
   * Get semantic enrichment job run logs associated with the job run.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.jobId] - enrichment job id.
   * @param {string} [params.jobRunId] - enrichment job run id.
   * @param {string} [params.projectId] - enrichment project id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegrationEnrichmentJobRunLogs>>}
   */
  public getSalIntegrationEnrichmentJobRunLogs(
    params?: WatsonxDataV2.GetSalIntegrationEnrichmentJobRunLogsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegrationEnrichmentJobRunLogs>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['jobId', 'jobRunId', 'projectId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'job_id': _params.jobId,
      'job_run_id': _params.jobRunId,
      'project_id': _params.projectId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'getSalIntegrationEnrichmentJobRunLogs'
    );

    const parameters = {
      options: {
        url: '/sal_integrations/enrichment_job_run_logs',
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
   * Get semantic enrichment job runs associated with the schema.
   *
   * Get semantic enrichment job runs associated with the schema.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.jobId] - enrichment job id.
   * @param {string} [params.projectId] - enrichment project id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegrationEnrichmentJobRun>>}
   */
  public getSalIntegrationEnrichmentJobRuns(
    params?: WatsonxDataV2.GetSalIntegrationEnrichmentJobRunsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegrationEnrichmentJobRun>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['jobId', 'projectId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'job_id': _params.jobId,
      'project_id': _params.projectId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'getSalIntegrationEnrichmentJobRuns'
    );

    const parameters = {
      options: {
        url: '/sal_integrations/enrichment_job_runs',
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
   * Get semantic enrichment jobs associated with the schema.
   *
   * Get semantic enrichment jobs associated with the schema.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.wkcProjectId] - ikc project id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegrationEnrichmentJobs>>}
   */
  public getSalIntegrationEnrichmentJobs(
    params?: WatsonxDataV2.GetSalIntegrationEnrichmentJobsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegrationEnrichmentJobs>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['wkcProjectId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'wkc_project_id': _params.wkcProjectId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'getSalIntegrationEnrichmentJobs'
    );

    const parameters = {
      options: {
        url: '/sal_integrations/enrichment_jobs',
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
   * Get list of uploaded glossary terms.
   *
   * Get list of uploaded glossary terms.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegrationGlossaryTerms>>}
   */
  public getSalIntegrationGlossaryTerms(
    params?: WatsonxDataV2.GetSalIntegrationGlossaryTermsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegrationGlossaryTerms>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'getSalIntegrationGlossaryTerms'
    );

    const parameters = {
      options: {
        url: '/sal_integrations/glossary_terms',
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
   * Get wkc catalog and project mapped to the schema.
   *
   * Get wkc catalog and project mapped to the schema.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogName - catalog name.
   * @param {string} params.schemaName - schema name.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegrationMappings>>}
   */
  public getSalIntegrationMappings(
    params: WatsonxDataV2.GetSalIntegrationMappingsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegrationMappings>> {
    const _params = { ...params };
    const _requiredParams = ['catalogName', 'schemaName'];
    const _validParams = ['catalogName', 'schemaName', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'catalog_name': _params.catalogName,
      'schema_name': _params.schemaName,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'getSalIntegrationMappings'
    );

    const parameters = {
      options: {
        url: '/sal_integrations/mappings',
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
   * Get metadata enrichment global settings.
   *
   * Get metadata enrichment global settings.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegrationEnrichmentSettings>>}
   */
  public getSalIntegrationEnrichmentGlobalSettings(
    params?: WatsonxDataV2.GetSalIntegrationEnrichmentGlobalSettingsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegrationEnrichmentSettings>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'getSalIntegrationEnrichmentGlobalSettings'
    );

    const parameters = {
      options: {
        url: '/sal_integrations/metadata_enrichment_global_settings',
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
   * Add metadata enrichment global settings.
   *
   * Add metadata enrichment global settings.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {SalIntegrationEnrichmentSettingsSemanticExpansion} [params.semanticExpansion] - semantic expansion.
   * @param {SalIntegrationEnrichmentSettingsTermAssignment} [params.termAssignment] - semantic expansion.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegrationEnrichmentSettings>>}
   */
  public createSalIntegrationEnrichmentGlobalSettings(
    params?: WatsonxDataV2.CreateSalIntegrationEnrichmentGlobalSettingsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegrationEnrichmentSettings>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = [
      'semanticExpansion',
      'termAssignment',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'semantic_expansion': _params.semanticExpansion,
      'term_assignment': _params.termAssignment,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createSalIntegrationEnrichmentGlobalSettings'
    );

    const parameters = {
      options: {
        url: '/sal_integrations/metadata_enrichment_global_settings',
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
   * get metadata enrichment settings for a project.
   *
   * get metadata enrichment settings for a project.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.projectId] - wkc project id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegrationEnrichmentSettings>>}
   */
  public getSalIntegrationEnrichmentSettings(
    params?: WatsonxDataV2.GetSalIntegrationEnrichmentSettingsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegrationEnrichmentSettings>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['projectId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'project_id': _params.projectId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'getSalIntegrationEnrichmentSettings'
    );

    const parameters = {
      options: {
        url: '/sal_integrations/metadata_enrichment_settings',
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
   * Add metadata enrichment settings for a project.
   *
   * Add metadata enrichment settings for a project.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {SalIntegrationEnrichmentSettingsSemanticExpansion} [params.semanticExpansion] - semantic expansion.
   * @param {SalIntegrationEnrichmentSettingsTermAssignment} [params.termAssignment] - semantic expansion.
   * @param {string} [params.projectId] - wkc project id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public createSalIntegrationEnrichmentSettings(
    params?: WatsonxDataV2.CreateSalIntegrationEnrichmentSettingsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = [
      'semanticExpansion',
      'termAssignment',
      'projectId',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'semantic_expansion': _params.semanticExpansion,
      'term_assignment': _params.termAssignment,
    };

    const query = {
      'project_id': _params.projectId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createSalIntegrationEnrichmentSettings'
    );

    const parameters = {
      options: {
        url: '/sal_integrations/metadata_enrichment_settings',
        method: 'POST',
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
   * Upload semantic enrichment business terms glossary.
   *
   * Upload semantic enrichment business terms glossary.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.replaceOption - glossary upload replace option.
   * @param {NodeJS.ReadableStream | Buffer} [params.glossaryCsv] - Glossary CSV file.
   * @param {string} [params.glossaryCsvContentType] - The content type of glossaryCsv.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegrationUploadGlossary>>}
   */
  public createSalIntegrationUploadGlossary(
    params: WatsonxDataV2.CreateSalIntegrationUploadGlossaryParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegrationUploadGlossary>> {
    const _params = { ...params };
    const _requiredParams = ['replaceOption'];
    const _validParams = [
      'replaceOption',
      'glossaryCsv',
      'glossaryCsvContentType',
      'authInstanceId',
      'signal',
      'headers',
    ];
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

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createSalIntegrationUploadGlossary'
    );

    const parameters = {
      options: {
        url: '/sal_integrations/upload_glossary',
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
   * Get status of upload glossary job.
   *
   * Get status of upload glossary job.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.processId] - upload process id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegrationUploadGlossaryStatus>>}
   */
  public getSalIntegrationUploadGlossaryStatus(
    params?: WatsonxDataV2.GetSalIntegrationUploadGlossaryStatusParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SalIntegrationUploadGlossaryStatus>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['processId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'process_id': _params.processId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'getSalIntegrationUploadGlossaryStatus'
    );

    const parameters = {
      options: {
        url: '/sal_integrations/upload_glossary_status',
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
  /*************************
   * sparkEngines
   ************************/

  /**
   * List all spark engines.
   *
   * List all spark engines.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SparkEngineCollection>>}
   */
  public listSparkEngines(
    params?: WatsonxDataV2.ListSparkEnginesParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SparkEngineCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'listSparkEngines');

    const parameters = {
      options: {
        url: '/spark_engines',
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
   * @param {string} params.origin - Origin - created or registered.
   * @param {string[]} [params.associatedCatalogs] - Associated catalogs.
   * @param {string} [params.description] - Engine description.
   * @param {SparkEngineDetailsPrototype} [params.engineDetails] - Node details.
   * @param {string} [params.engineDisplayName] - Engine display name.
   * @param {string} [params.status] - Engine status.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.type] - spark type.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SparkEngine>>}
   */
  public createSparkEngine(
    params: WatsonxDataV2.CreateSparkEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SparkEngine>> {
    const _params = { ...params };
    const _requiredParams = ['origin'];
    const _validParams = [
      'origin',
      'associatedCatalogs',
      'description',
      'engineDetails',
      'engineDisplayName',
      'status',
      'tags',
      'type',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'origin': _params.origin,
      'associated_catalogs': _params.associatedCatalogs,
      'description': _params.description,
      'engine_details': _params.engineDetails,
      'engine_display_name': _params.engineDisplayName,
      'status': _params.status,
      'tags': _params.tags,
      'type': _params.type,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'createSparkEngine');

    const parameters = {
      options: {
        url: '/spark_engines',
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
   * Get spark engine.
   *
   * Get spark engine by ID.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SparkEngine>>}
   */
  public getSparkEngine(
    params: WatsonxDataV2.GetSparkEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SparkEngine>> {
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

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'getSparkEngine');

    const parameters = {
      options: {
        url: '/spark_engines/{engine_id}',
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
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteSparkEngine(
    params: WatsonxDataV2.DeleteSparkEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
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

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteSparkEngine');

    const parameters = {
      options: {
        url: '/spark_engines/{engine_id}',
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
   * @param {string} params.engineId - engine id.
   * @param {string} [params.description] - Modified description.
   * @param {UpdateSparkEngineBodyEngineDetails} [params.engineDetails] - Engine details.
   * @param {string} [params.engineDisplayName] - Engine display name.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SparkEngine>>}
   */
  public updateSparkEngine(
    params: WatsonxDataV2.UpdateSparkEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SparkEngine>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = [
      'engineId',
      'description',
      'engineDetails',
      'engineDisplayName',
      'tags',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'description': _params.description,
      'engine_details': _params.engineDetails,
      'engine_display_name': _params.engineDisplayName,
      'tags': _params.tags,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'updateSparkEngine');

    const parameters = {
      options: {
        url: '/spark_engines/{engine_id}',
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
   * List all applications in a spark engine.
   *
   * List all applications in a spark engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {string[]} [params.state] - state.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SparkEngineApplicationStatusCollection>>}
   */
  public listSparkEngineApplications(
    params: WatsonxDataV2.ListSparkEngineApplicationsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SparkEngineApplicationStatusCollection>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'authInstanceId', 'state', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'state': _params.state,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'listSparkEngineApplications'
    );

    const parameters = {
      options: {
        url: '/spark_engines/{engine_id}/applications',
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
   * Submit engine applications.
   *
   * Submit engine applications.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {SparkApplicationDetails} params.applicationDetails - Application details.
   * @param {string} [params.jobEndpoint] - Job endpoint.
   * @param {string} [params.serviceInstanceId] - Service Instance ID for POST.
   * @param {string} [params.type] - Engine Type.
   * @param {SparkVolumeDetails[]} [params.volumes] - Spark application volumes to mount.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {string[]} [params.state] - state.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SparkEngineApplicationStatus>>}
   */
  public createSparkEngineApplication(
    params: WatsonxDataV2.CreateSparkEngineApplicationParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SparkEngineApplicationStatus>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'applicationDetails'];
    const _validParams = [
      'engineId',
      'applicationDetails',
      'jobEndpoint',
      'serviceInstanceId',
      'type',
      'volumes',
      'authInstanceId',
      'state',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'application_details': _params.applicationDetails,
      'job_endpoint': _params.jobEndpoint,
      'service_instance_id': _params.serviceInstanceId,
      'type': _params.type,
      'volumes': _params.volumes,
    };

    const query = {
      'state': _params.state,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createSparkEngineApplication'
    );

    const parameters = {
      options: {
        url: '/spark_engines/{engine_id}/applications',
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
   * Stop Spark Applications.
   *
   * Stop a running spark application.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} params.applicationId - Application id(s) to be stopped, comma separated.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {string[]} [params.state] - state.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteSparkEngineApplications(
    params: WatsonxDataV2.DeleteSparkEngineApplicationsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'applicationId'];
    const _validParams = [
      'engineId',
      'applicationId',
      'authInstanceId',
      'state',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'application_id': _params.applicationId,
      'state': _params.state,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'deleteSparkEngineApplications'
    );

    const parameters = {
      options: {
        url: '/spark_engines/{engine_id}/applications',
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
   * Get spark application.
   *
   * Get status of spark application.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} params.applicationId - Application id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SparkEngineApplicationStatus>>}
   */
  public getSparkEngineApplicationStatus(
    params: WatsonxDataV2.GetSparkEngineApplicationStatusParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SparkEngineApplicationStatus>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'applicationId'];
    const _validParams = ['engineId', 'applicationId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'engine_id': _params.engineId,
      'application_id': _params.applicationId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'getSparkEngineApplicationStatus'
    );

    const parameters = {
      options: {
        url: '/spark_engines/{engine_id}/applications/{application_id}',
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
   * Get spark engine catalogs.
   *
   * Get list of all catalogs attached to a spark engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.CatalogCollection>>}
   */
  public listSparkEngineCatalogs(
    params: WatsonxDataV2.ListSparkEngineCatalogsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.CatalogCollection>> {
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

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'listSparkEngineCatalogs'
    );

    const parameters = {
      options: {
        url: '/spark_engines/{engine_id}/catalogs',
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
   * @param {string} params.engineId - engine id.
   * @param {string} [params.catalogName] - catalog names.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.Catalog>>}
   */
  public createSparkEngineCatalogs(
    params: WatsonxDataV2.CreateSparkEngineCatalogsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.Catalog>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'catalogName', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'catalog_name': _params.catalogName,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createSparkEngineCatalogs'
    );

    const parameters = {
      options: {
        url: '/spark_engines/{engine_id}/catalogs',
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
   * @param {string} params.engineId - engine id.
   * @param {string} params.catalogNames - Catalog id(s) to be stopped, comma separated.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteSparkEngineCatalogs(
    params: WatsonxDataV2.DeleteSparkEngineCatalogsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
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

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'deleteSparkEngineCatalogs'
    );

    const parameters = {
      options: {
        url: '/spark_engines/{engine_id}/catalogs',
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
   * Get spark engine catalog.
   *
   * Get catalog attached to spark engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} params.catalogId - catalog id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.Catalog>>}
   */
  public getSparkEngineCatalog(
    params: WatsonxDataV2.GetSparkEngineCatalogParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.Catalog>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogId'];
    const _validParams = ['engineId', 'catalogId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'engine_id': _params.engineId,
      'catalog_id': _params.catalogId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'getSparkEngineCatalog'
    );

    const parameters = {
      options: {
        url: '/spark_engines/{engine_id}/catalogs/{catalog_id}',
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
   * Get spark history server.
   *
   * Get spark history server.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SparkHistoryServer>>}
   */
  public getSparkEngineHistoryServer(
    params: WatsonxDataV2.GetSparkEngineHistoryServerParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SparkHistoryServer>> {
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

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'getSparkEngineHistoryServer'
    );

    const parameters = {
      options: {
        url: '/spark_engines/{engine_id}/history_server',
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
   * @param {string} params.engineId - engine id.
   * @param {string} [params.cores] - CPU count.
   * @param {string} [params.memory] - Memory in GiB.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SparkHistoryServer>>}
   */
  public startSparkEngineHistoryServer(
    params: WatsonxDataV2.StartSparkEngineHistoryServerParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SparkHistoryServer>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'cores', 'memory', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'cores': _params.cores,
      'memory': _params.memory,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'startSparkEngineHistoryServer'
    );

    const parameters = {
      options: {
        url: '/spark_engines/{engine_id}/history_server',
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
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteSparkEngineHistoryServer(
    params: WatsonxDataV2.DeleteSparkEngineHistoryServerParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
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

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'deleteSparkEngineHistoryServer'
    );

    const parameters = {
      options: {
        url: '/spark_engines/{engine_id}/history_server',
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
   * Pause engine.
   *
   * Pause engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {boolean} [params.force] - force spark engine pause.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SuccessResponse>>}
   */
  public pauseSparkEngine(
    params: WatsonxDataV2.PauseSparkEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'force', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'force': _params.force,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'pauseSparkEngine');

    const parameters = {
      options: {
        url: '/spark_engines/{engine_id}/pause',
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
   * Resume engine.
   *
   * Resume engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SuccessResponse>>}
   */
  public resumeSparkEngine(
    params: WatsonxDataV2.ResumeSparkEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SuccessResponse>> {
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

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'resumeSparkEngine');

    const parameters = {
      options: {
        url: '/spark_engines/{engine_id}/resume',
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
   * Scale Spark engine.
   *
   * Scale Saprk engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - engine id.
   * @param {number} [params.numberOfNodes] - Node count.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SuccessResponse>>}
   */
  public scaleSparkEngine(
    params: WatsonxDataV2.ScaleSparkEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'numberOfNodes', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'number_of_nodes': _params.numberOfNodes,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'scaleSparkEngine');

    const parameters = {
      options: {
        url: '/spark_engines/{engine_id}/scale',
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
   * List spark version.
   *
   * List spark version.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ListSparkVersionsOKBody>>}
   */
  public listSparkVersions(
    params?: WatsonxDataV2.ListSparkVersionsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ListSparkVersionsOKBody>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'listSparkVersions');

    const parameters = {
      options: {
        url: '/spark_versions',
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
  /*************************
   * catalogs
   ************************/

  /**
   * List all registered catalogs.
   *
   * List all registered catalogs.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.CatalogCollection>>}
   */
  public listCatalogs(
    params?: WatsonxDataV2.ListCatalogsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.CatalogCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'listCatalogs');

    const parameters = {
      options: {
        url: '/catalogs',
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
   * Get catalog properties by catalog_id.
   *
   * Get catalog properties of a catalog identified by catalog_id.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogId - catalog ID.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.Catalog>>}
   */
  public getCatalog(
    params: WatsonxDataV2.GetCatalogParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.Catalog>> {
    const _params = { ...params };
    const _requiredParams = ['catalogId'];
    const _validParams = ['catalogId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'catalog_id': _params.catalogId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'getCatalog');

    const parameters = {
      options: {
        url: '/catalogs/{catalog_id}',
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
   * List all schemas.
   *
   * List all schemas in catalog.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - Engine name.
   * @param {string} params.catalogId - Catalog name.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ListSchemasOKBody>>}
   */
  public listSchemas(
    params: WatsonxDataV2.ListSchemasParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ListSchemasOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogId'];
    const _validParams = ['engineId', 'catalogId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'engine_id': _params.engineId,
    };

    const path = {
      'catalog_id': _params.catalogId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'listSchemas');

    const parameters = {
      options: {
        url: '/catalogs/{catalog_id}/schemas',
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
   * @param {string} params.engineId - Engine name.
   * @param {string} params.catalogId - Catalog name.
   * @param {string} params.customPath - Path associated with bucket.
   * @param {string} params.schemaName - Schema name.
   * @param {string} [params.bucketName] - Bucket associated to metastore where schema will be added.
   * @param {string} [params.hostname] - Host name.
   * @param {number} [params.port] - Port.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateSchemaCreatedBody>>}
   */
  public createSchema(
    params: WatsonxDataV2.CreateSchemaParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateSchemaCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogId', 'customPath', 'schemaName'];
    const _validParams = [
      'engineId',
      'catalogId',
      'customPath',
      'schemaName',
      'bucketName',
      'hostname',
      'port',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'custom_path': _params.customPath,
      'schema_name': _params.schemaName,
      'bucket_name': _params.bucketName,
      'hostname': _params.hostname,
      'port': _params.port,
    };

    const query = {
      'engine_id': _params.engineId,
    };

    const path = {
      'catalog_id': _params.catalogId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'createSchema');

    const parameters = {
      options: {
        url: '/catalogs/{catalog_id}/schemas',
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
   * Delete schema.
   *
   * Delete a schema.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - Engine name.
   * @param {string} params.catalogId - Catalog name.
   * @param {string} params.schemaId - URL encoded Schema name.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteSchema(
    params: WatsonxDataV2.DeleteSchemaParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogId', 'schemaId'];
    const _validParams = [
      'engineId',
      'catalogId',
      'schemaId',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'engine_id': _params.engineId,
    };

    const path = {
      'catalog_id': _params.catalogId,
      'schema_id': _params.schemaId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteSchema');

    const parameters = {
      options: {
        url: '/catalogs/{catalog_id}/schemas/{schema_id}',
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
   * @param {string} params.catalogId - catalog id.
   * @param {string} params.schemaId - URL encoded schema name.
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.TableCollection>>}
   */
  public listTables(
    params: WatsonxDataV2.ListTablesParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.TableCollection>> {
    const _params = { ...params };
    const _requiredParams = ['catalogId', 'schemaId', 'engineId'];
    const _validParams = [
      'catalogId',
      'schemaId',
      'engineId',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'engine_id': _params.engineId,
    };

    const path = {
      'catalog_id': _params.catalogId,
      'schema_id': _params.schemaId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'listTables');

    const parameters = {
      options: {
        url: '/catalogs/{catalog_id}/schemas/{schema_id}/tables',
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
   * @param {string} params.catalogId - catalog id.
   * @param {string} params.schemaId - URL encoded schema name.
   * @param {string} params.tableId - URL encoded table name.
   * @param {string} params.engineId - engine id.
   * @param {string} [params.type] - URL encoded table type.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.Table>>}
   */
  public getTable(
    params: WatsonxDataV2.GetTableParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.Table>> {
    const _params = { ...params };
    const _requiredParams = ['catalogId', 'schemaId', 'tableId', 'engineId'];
    const _validParams = [
      'catalogId',
      'schemaId',
      'tableId',
      'engineId',
      'type',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'engine_id': _params.engineId,
      'type': _params.type,
    };

    const path = {
      'catalog_id': _params.catalogId,
      'schema_id': _params.schemaId,
      'table_id': _params.tableId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'getTable');

    const parameters = {
      options: {
        url: '/catalogs/{catalog_id}/schemas/{schema_id}/tables/{table_id}',
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
   * @param {string} params.catalogId - catalog id.
   * @param {string} params.schemaId - URL encoded schema name.
   * @param {string} params.tableId - URL encoded table name.
   * @param {string} params.engineId - engine id.
   * @param {string} [params.type] - URL encoded table type.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteTable(
    params: WatsonxDataV2.DeleteTableParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['catalogId', 'schemaId', 'tableId', 'engineId'];
    const _validParams = [
      'catalogId',
      'schemaId',
      'tableId',
      'engineId',
      'type',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'engine_id': _params.engineId,
      'type': _params.type,
    };

    const path = {
      'catalog_id': _params.catalogId,
      'schema_id': _params.schemaId,
      'table_id': _params.tableId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteTable');

    const parameters = {
      options: {
        url: '/catalogs/{catalog_id}/schemas/{schema_id}/tables/{table_id}',
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
   * @param {string} params.catalogId - catalog id.
   * @param {string} params.schemaId - URL encoded schema name.
   * @param {string} params.tableId - URL encoded table name.
   * @param {string} params.engineId - engine id.
   * @param {string} [params.tableName] - New table name.
   * @param {string} [params.type] - URL encoded table type.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.Table>>}
   */
  public updateTable(
    params: WatsonxDataV2.UpdateTableParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.Table>> {
    const _params = { ...params };
    const _requiredParams = ['catalogId', 'schemaId', 'tableId', 'engineId'];
    const _validParams = [
      'catalogId',
      'schemaId',
      'tableId',
      'engineId',
      'tableName',
      'type',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'table_name': _params.tableName,
    };

    const query = {
      'engine_id': _params.engineId,
      'type': _params.type,
    };

    const path = {
      'catalog_id': _params.catalogId,
      'schema_id': _params.schemaId,
      'table_id': _params.tableId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'updateTable');

    const parameters = {
      options: {
        url: '/catalogs/{catalog_id}/schemas/{schema_id}/tables/{table_id}',
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
   * @param {string} params.catalogId - catalog id.
   * @param {string} params.schemaId - URL encoded schema name.
   * @param {string} params.tableId - URL encoded schema name.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ColumnCollection>>}
   */
  public listColumns(
    params: WatsonxDataV2.ListColumnsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ColumnCollection>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogId', 'schemaId', 'tableId'];
    const _validParams = [
      'engineId',
      'catalogId',
      'schemaId',
      'tableId',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'engine_id': _params.engineId,
    };

    const path = {
      'catalog_id': _params.catalogId,
      'schema_id': _params.schemaId,
      'table_id': _params.tableId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'listColumns');

    const parameters = {
      options: {
        url: '/catalogs/{catalog_id}/schemas/{schema_id}/tables/{table_id}/columns',
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
   * @param {string} params.catalogId - catalog id.
   * @param {string} params.schemaId - URL encoded schema name.
   * @param {string} params.tableId - URL encoded schema name.
   * @param {Column[]} [params.columns] - List of the tables present in the schema.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ColumnCollection>>}
   */
  public createColumns(
    params: WatsonxDataV2.CreateColumnsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ColumnCollection>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogId', 'schemaId', 'tableId'];
    const _validParams = [
      'engineId',
      'catalogId',
      'schemaId',
      'tableId',
      'columns',
      'authInstanceId',
      'signal',
      'headers',
    ];
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
      'catalog_id': _params.catalogId,
      'schema_id': _params.schemaId,
      'table_id': _params.tableId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'createColumns');

    const parameters = {
      options: {
        url: '/catalogs/{catalog_id}/schemas/{schema_id}/tables/{table_id}/columns',
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
   * @param {string} params.catalogId - catalog id.
   * @param {string} params.schemaId - URL encoded schema name.
   * @param {string} params.tableId - URL encoded schema name.
   * @param {string} params.columnId - URL encoded schema name.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteColumn(
    params: WatsonxDataV2.DeleteColumnParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogId', 'schemaId', 'tableId', 'columnId'];
    const _validParams = [
      'engineId',
      'catalogId',
      'schemaId',
      'tableId',
      'columnId',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'engine_id': _params.engineId,
    };

    const path = {
      'catalog_id': _params.catalogId,
      'schema_id': _params.schemaId,
      'table_id': _params.tableId,
      'column_id': _params.columnId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteColumn');

    const parameters = {
      options: {
        url: '/catalogs/{catalog_id}/schemas/{schema_id}/tables/{table_id}/columns/{column_id}',
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
   * @param {string} params.catalogId - catalog id.
   * @param {string} params.schemaId - URL encoded schema name.
   * @param {string} params.tableId - URL encoded schema name.
   * @param {string} params.columnId - URL encoded schema name.
   * @param {string} [params.columnName] - Column name.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.Column>>}
   */
  public updateColumn(
    params: WatsonxDataV2.UpdateColumnParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.Column>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogId', 'schemaId', 'tableId', 'columnId'];
    const _validParams = [
      'engineId',
      'catalogId',
      'schemaId',
      'tableId',
      'columnId',
      'columnName',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'column_name': _params.columnName,
    };

    const query = {
      'engine_id': _params.engineId,
    };

    const path = {
      'catalog_id': _params.catalogId,
      'schema_id': _params.schemaId,
      'table_id': _params.tableId,
      'column_id': _params.columnId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'updateColumn');

    const parameters = {
      options: {
        url: '/catalogs/{catalog_id}/schemas/{schema_id}/tables/{table_id}/columns/{column_id}',
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
   * Get table snapshots.
   *
   * List all table snapshots.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - Engine name.
   * @param {string} params.catalogId - Catalog ID.
   * @param {string} params.schemaId - Schema ID.
   * @param {string} params.tableId - Table ID.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.TableSnapshotCollection>>}
   */
  public listTableSnapshots(
    params: WatsonxDataV2.ListTableSnapshotsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.TableSnapshotCollection>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogId', 'schemaId', 'tableId'];
    const _validParams = [
      'engineId',
      'catalogId',
      'schemaId',
      'tableId',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'engine_id': _params.engineId,
    };

    const path = {
      'catalog_id': _params.catalogId,
      'schema_id': _params.schemaId,
      'table_id': _params.tableId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'listTableSnapshots'
    );

    const parameters = {
      options: {
        url: '/catalogs/{catalog_id}/schemas/{schema_id}/tables/{table_id}/snapshots',
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
   * Rollback table to snapshot.
   *
   * Rollback table to a snapshot.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - Engine name.
   * @param {string} params.catalogId - Catalog ID.
   * @param {string} params.schemaId - Schema ID.
   * @param {string} params.tableId - Table ID.
   * @param {string} [params.snapshotId] - Snapshot Id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ReplaceSnapshotCreatedBody>>}
   */
  public rollbackTable(
    params: WatsonxDataV2.RollbackTableParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ReplaceSnapshotCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogId', 'schemaId', 'tableId'];
    const _validParams = [
      'engineId',
      'catalogId',
      'schemaId',
      'tableId',
      'snapshotId',
      'authInstanceId',
      'signal',
      'headers',
    ];
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
      'catalog_id': _params.catalogId,
      'schema_id': _params.schemaId,
      'table_id': _params.tableId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'rollbackTable');

    const parameters = {
      options: {
        url: '/catalogs/{catalog_id}/schemas/{schema_id}/tables/{table_id}/rollback',
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
   * @param {string} params.catalogId - catalog ID.
   * @param {boolean} [params.autoAddNewTables] - Auto add new table.
   * @param {boolean} [params.syncIcebergMd] - Sync iceberg metadata.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.UpdateSyncCatalogOKBody>>}
   */
  public updateSyncCatalog(
    params: WatsonxDataV2.UpdateSyncCatalogParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.UpdateSyncCatalogOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['catalogId'];
    const _validParams = [
      'catalogId',
      'autoAddNewTables',
      'syncIcebergMd',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'auto_add_new_tables': _params.autoAddNewTables,
      'sync_iceberg_md': _params.syncIcebergMd,
    };

    const path = {
      'catalog_id': _params.catalogId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'updateSyncCatalog');

    const parameters = {
      options: {
        url: '/catalogs/{catalog_id}/sync',
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
   * services
   ************************/

  /**
   * Get list of milvus services.
   *
   * Get list milvus services.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.MilvusServiceCollection>>}
   */
  public listMilvusServices(
    params?: WatsonxDataV2.ListMilvusServicesParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.MilvusServiceCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'listMilvusServices'
    );

    const parameters = {
      options: {
        url: '/milvus_services',
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
   * @param {string} params.bucketName - bucket name.
   * @param {string} params.origin - Origin - place holder.
   * @param {string} params.rootPath - root path.
   * @param {string} params.serviceDisplayName - Service display name.
   * @param {string} [params.bucketType] - bucket type.
   * @param {string} [params.description] - Service description.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.tshirtSize] - tshirt size.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.MilvusService>>}
   */
  public createMilvusService(
    params: WatsonxDataV2.CreateMilvusServiceParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.MilvusService>> {
    const _params = { ...params };
    const _requiredParams = ['bucketName', 'origin', 'rootPath', 'serviceDisplayName'];
    const _validParams = [
      'bucketName',
      'origin',
      'rootPath',
      'serviceDisplayName',
      'bucketType',
      'description',
      'tags',
      'tshirtSize',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'bucket_name': _params.bucketName,
      'origin': _params.origin,
      'root_path': _params.rootPath,
      'service_display_name': _params.serviceDisplayName,
      'bucket_type': _params.bucketType,
      'description': _params.description,
      'tags': _params.tags,
      'tshirt_size': _params.tshirtSize,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createMilvusService'
    );

    const parameters = {
      options: {
        url: '/milvus_services',
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
   * @param {string} params.serviceId - service id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.MilvusService>>}
   */
  public getMilvusService(
    params: WatsonxDataV2.GetMilvusServiceParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.MilvusService>> {
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

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'getMilvusService');

    const parameters = {
      options: {
        url: '/milvus_services/{service_id}',
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
   * @param {string} params.serviceId - service id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteMilvusService(
    params: WatsonxDataV2.DeleteMilvusServiceParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
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

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'deleteMilvusService'
    );

    const parameters = {
      options: {
        url: '/milvus_services/{service_id}',
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
   * @param {string} params.serviceId - service id.
   * @param {string} [params.description] - Modified description.
   * @param {string} [params.serviceDisplayName] - Service display name.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.MilvusService>>}
   */
  public updateMilvusService(
    params: WatsonxDataV2.UpdateMilvusServiceParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.MilvusService>> {
    const _params = { ...params };
    const _requiredParams = ['serviceId'];
    const _validParams = [
      'serviceId',
      'description',
      'serviceDisplayName',
      'tags',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'description': _params.description,
      'service_display_name': _params.serviceDisplayName,
      'tags': _params.tags,
    };

    const path = {
      'service_id': _params.serviceId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'updateMilvusService'
    );

    const parameters = {
      options: {
        url: '/milvus_services/{service_id}',
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
   * Update milvus service bucket.
   *
   * Update details of milvus service bucket. Note that the improper use of the API could result in potential data loss.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.serviceId - service id.
   * @param {string} [params.bucketName] - bucket name.
   * @param {string} [params.managedBy] - How is the Milvus instance managed.
   * @param {string} [params.rootPath] - root path.
   * @param {string} [params.tshirtSize] - tshirt size.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.MilvusService>>}
   */
  public updateMilvusServiceBucket(
    params: WatsonxDataV2.UpdateMilvusServiceBucketParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.MilvusService>> {
    const _params = { ...params };
    const _requiredParams = ['serviceId'];
    const _validParams = [
      'serviceId',
      'bucketName',
      'managedBy',
      'rootPath',
      'tshirtSize',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'bucket_name': _params.bucketName,
      'managed_by': _params.managedBy,
      'root_path': _params.rootPath,
      'tshirt_size': _params.tshirtSize,
    };

    const path = {
      'service_id': _params.serviceId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'updateMilvusServiceBucket'
    );

    const parameters = {
      options: {
        url: '/milvus_services/{service_id}/bucket',
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
   * Get milvus service databases.
   *
   * Get milvus service databases.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.serviceId - service id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.MilvusServiceDatabases>>}
   */
  public listMilvusServiceDatabases(
    params: WatsonxDataV2.ListMilvusServiceDatabasesParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.MilvusServiceDatabases>> {
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

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'listMilvusServiceDatabases'
    );

    const parameters = {
      options: {
        url: '/milvus_services/{service_id}/databases',
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
   * @param {string} params.databaseId - database id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.MilvusDatabaseCollections>>}
   */
  public listMilvusDatabaseCollections(
    params: WatsonxDataV2.ListMilvusDatabaseCollectionsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.MilvusDatabaseCollections>> {
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

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'listMilvusDatabaseCollections'
    );

    const parameters = {
      options: {
        url: '/milvus_services/{service_id}/databases/{database_id}/collections',
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
   * Pause milvus service.
   *
   * Pause a running milvus service.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.serviceId - service id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SuccessResponse>>}
   */
  public createMilvusServicePause(
    params: WatsonxDataV2.CreateMilvusServicePauseParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SuccessResponse>> {
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

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createMilvusServicePause'
    );

    const parameters = {
      options: {
        url: '/milvus_services/{service_id}/pause',
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
   * @param {string} params.serviceId - service id.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SuccessResponse>>}
   */
  public createMilvusServiceResume(
    params: WatsonxDataV2.CreateMilvusServiceResumeParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SuccessResponse>> {
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

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createMilvusServiceResume'
    );

    const parameters = {
      options: {
        url: '/milvus_services/{service_id}/resume',
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
   * @param {string} params.serviceId - service id.
   * @param {string} [params.tshirtSize] - tshirt size.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SuccessResponse>>}
   */
  public createMilvusServiceScale(
    params: WatsonxDataV2.CreateMilvusServiceScaleParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['serviceId'];
    const _validParams = ['serviceId', 'tshirtSize', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'tshirt_size': _params.tshirtSize,
    };

    const path = {
      'service_id': _params.serviceId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createMilvusServiceScale'
    );

    const parameters = {
      options: {
        url: '/milvus_services/{service_id}/scale',
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
   * ingestion
   ************************/

  /**
   * Get ingestion jobs.
   *
   * Get list of ingestion jobs.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.authInstanceId - CRN.
   * @param {string} [params.start] - Page number of requested ingestion jobs.
   * @param {number} [params.jobsPerPage] - Number of requested ingestion jobs.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.IngestionJobCollection>>}
   */
  public listIngestionJobs(
    params: WatsonxDataV2.ListIngestionJobsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.IngestionJobCollection>> {
    const _params = { ...params };
    const _requiredParams = ['authInstanceId'];
    const _validParams = ['authInstanceId', 'start', 'jobsPerPage', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'start': _params.start,
      'jobs_per_page': _params.jobsPerPage,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'listIngestionJobs');

    const parameters = {
      options: {
        url: '/ingestion_jobs',
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
   * Create an ingestion job.
   *
   * Create an ingestion job.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.authInstanceId - CRN.
   * @param {string} params.jobId - Job ID of the job.
   * @param {string} params.sourceDataFiles - Comma separated source file or directory path.
   * @param {string} params.targetTable - Target table name in format catalog.schema.table.
   * @param {string} params.username - User submitting ingestion job.
   * @param {boolean} [params.createIfNotExist] - Create new target table (if True); Insert into pre-existing target
   * table (if False).
   * @param {IngestionJobPrototypeCsvProperty} [params.csvProperty] - Ingestion CSV properties.
   * @param {string} [params.engineId] - ID of the spark engine to be used for ingestion.
   * @param {IngestionJobPrototypeExecuteConfig} [params.executeConfig] - Ingestion engine configuration.
   * @param {string} [params.partitionBy] - Partition by expression of the target table.
   * @param {string} [params.schema] - Schema definition of the source table.
   * @param {string} [params.sourceFileType] - Source file types (parquet or csv or json).
   * @param {boolean} [params.validateCsvHeader] - Validate CSV header if the target table exist.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.IngestionJob>>}
   */
  public createIngestionJobs(
    params: WatsonxDataV2.CreateIngestionJobsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.IngestionJob>> {
    const _params = { ...params };
    const _requiredParams = [
      'authInstanceId',
      'jobId',
      'sourceDataFiles',
      'targetTable',
      'username',
    ];
    const _validParams = [
      'authInstanceId',
      'jobId',
      'sourceDataFiles',
      'targetTable',
      'username',
      'createIfNotExist',
      'csvProperty',
      'engineId',
      'executeConfig',
      'partitionBy',
      'schema',
      'sourceFileType',
      'validateCsvHeader',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'job_id': _params.jobId,
      'source_data_files': _params.sourceDataFiles,
      'target_table': _params.targetTable,
      'username': _params.username,
      'create_if_not_exist': _params.createIfNotExist,
      'csv_property': _params.csvProperty,
      'engine_id': _params.engineId,
      'execute_config': _params.executeConfig,
      'partition_by': _params.partitionBy,
      'schema': _params.schema,
      'source_file_type': _params.sourceFileType,
      'validate_csv_header': _params.validateCsvHeader,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createIngestionJobs'
    );

    const parameters = {
      options: {
        url: '/ingestion_jobs',
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
   * Create an ingestion job for user local files.
   *
   * Create an ingestion job for user local files.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.authInstanceId - CRN.
   * @param {NodeJS.ReadableStream | Buffer} params.sourceDataFile - The user local file submitted for ingestion.
   * @param {string} params.targetTable - Target table name in format catalog.schema.table.
   * @param {string} params.jobId - Job ID of the job.
   * @param {string} params.username - User submitting ingestion job.
   * @param {string} [params.sourceDataFileContentType] - The content type of sourceDataFile.
   * @param {string} [params.sourceFileType] - File format of source file.
   * @param {string} [params.csvProperty] - Ingestion CSV properties (base64 encoding of a stringifed json).
   * @param {boolean} [params.createIfNotExist] - Create new target table (if true); Insert into pre-existing target
   * table (if false).
   * @param {boolean} [params.validateCsvHeader] - Validate CSV header if the target table exist.
   * @param {string} [params.executeConfig] - Ingestion engine configuration (base64 encoding of a stringifed json).
   * @param {string} [params.engineId] - ID of the spark engine to be used for ingestion.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.IngestionJob>>}
   */
  public createIngestionJobsLocalFiles(
    params: WatsonxDataV2.CreateIngestionJobsLocalFilesParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.IngestionJob>> {
    const _params = { ...params };
    const _requiredParams = [
      'authInstanceId',
      'sourceDataFile',
      'targetTable',
      'jobId',
      'username',
    ];
    const _validParams = [
      'authInstanceId',
      'sourceDataFile',
      'targetTable',
      'jobId',
      'username',
      'sourceDataFileContentType',
      'sourceFileType',
      'csvProperty',
      'createIfNotExist',
      'validateCsvHeader',
      'executeConfig',
      'engineId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const formData = {
      'source_data_file': {
        data: _params.sourceDataFile,
        contentType: _params.sourceDataFileContentType,
      },
      'target_table': _params.targetTable,
      'job_id': _params.jobId,
      'username': _params.username,
      'source_file_type': _params.sourceFileType,
      'csv_property': _params.csvProperty,
      'create_if_not_exist': _params.createIfNotExist,
      'validate_csv_header': _params.validateCsvHeader,
      'execute_config': _params.executeConfig,
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createIngestionJobsLocalFiles'
    );

    const parameters = {
      options: {
        url: '/ingestion_jobs_local_files',
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
   * Get ingestion job.
   *
   * Get a submitted ingestion job.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.jobId - ingestion job id.
   * @param {string} params.authInstanceId - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.IngestionJob>>}
   */
  public getIngestionJob(
    params: WatsonxDataV2.GetIngestionJobParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.IngestionJob>> {
    const _params = { ...params };
    const _requiredParams = ['jobId', 'authInstanceId'];
    const _validParams = ['jobId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'job_id': _params.jobId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'getIngestionJob');

    const parameters = {
      options: {
        url: '/ingestion_jobs/{job_id}',
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
   * Delete an ingestion job.
   *
   * Delete an ingestion job.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.jobId - ingestion job id.
   * @param {string} params.authInstanceId - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteIngestionJobs(
    params: WatsonxDataV2.DeleteIngestionJobsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['jobId', 'authInstanceId'];
    const _validParams = ['jobId', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'job_id': _params.jobId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'deleteIngestionJobs'
    );

    const parameters = {
      options: {
        url: '/ingestion_jobs/{job_id}',
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
   * Generate a preview of source file(s).
   *
   * Generate a preview of source file(s).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.authInstanceId - CRN.
   * @param {string} params.sourceDataFiles - Comma separated source file or directory path.
   * @param {PreviewIngestionFilePrototypeCsvProperty} [params.csvProperty] - CSV properties of source file(s).
   * @param {string} [params.sourceFileType] - File format of source file(s).
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.PreviewIngestionFile>>}
   */
  public createPreviewIngestionFile(
    params: WatsonxDataV2.CreatePreviewIngestionFileParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.PreviewIngestionFile>> {
    const _params = { ...params };
    const _requiredParams = ['authInstanceId', 'sourceDataFiles'];
    const _validParams = [
      'authInstanceId',
      'sourceDataFiles',
      'csvProperty',
      'sourceFileType',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'source_data_files': _params.sourceDataFiles,
      'csv_property': _params.csvProperty,
      'source_file_type': _params.sourceFileType,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createPreviewIngestionFile'
    );

    const parameters = {
      options: {
        url: '/preview_ingestion_file',
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
  /*************************
   * endpoints
   ************************/

  /**
   * Get CPG and DAS endpoints.
   *
   * Get Common policy gateway (CPG) and  Data Access Service(DAS) endpoints.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EndpointCollection>>}
   */
  public getEndpoints(
    params?: WatsonxDataV2.GetEndpointsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EndpointCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'getEndpoints');

    const parameters = {
      options: {
        url: '/endpoints',
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
  /*************************
   * metadata
   ************************/

  /**
   * Register table.
   *
   * Register table.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogId - catalog id.
   * @param {string} params.schemaId - URL encoded schema name.
   * @param {string} params.metadataLocation - Metadata location.
   * @param {string} params.tableName - Table name.
   * @param {string} [params.authInstanceId] - watsonx.data CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.RegisterTableCreatedBody>>}
   */
  public registerTable(
    params: WatsonxDataV2.RegisterTableParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.RegisterTableCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['catalogId', 'schemaId', 'metadataLocation', 'tableName'];
    const _validParams = [
      'catalogId',
      'schemaId',
      'metadataLocation',
      'tableName',
      'authInstanceId',
      'signal',
      'headers',
    ];
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

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'registerTable');

    const parameters = {
      options: {
        url: '/catalogs/{catalog_id}/schemas/{schema_id}/register',
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
   * Load table metadata.
   *
   * Load table metadata.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogId - catalog id.
   * @param {string} params.schemaId - URL encoded schema name.
   * @param {string} params.tableId - URL encoded table name.
   * @param {string} [params.authInstanceId] - watsonx.data CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.LoadTableResponse>>}
   */
  public loadTable(
    params: WatsonxDataV2.LoadTableParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.LoadTableResponse>> {
    const _params = { ...params };
    const _requiredParams = ['catalogId', 'schemaId', 'tableId'];
    const _validParams = [
      'catalogId',
      'schemaId',
      'tableId',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'catalog_id': _params.catalogId,
      'schema_id': _params.schemaId,
      'table_id': _params.tableId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'loadTable');

    const parameters = {
      options: {
        url: '/catalogs/{catalog_id}/schemas/{schema_id}/tables/{table_id}/metadata',
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
   * Get all columns.
   *
   * Get all columns.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.tableName] - Table name.
   * @param {string} [params.catalogName] - Catalog name.
   * @param {string} [params.schemaName] - Schema name.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ColumnsResponse>>}
   */
  public getAllColumns(
    params?: WatsonxDataV2.GetAllColumnsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ColumnsResponse>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = [
      'tableName',
      'catalogName',
      'schemaName',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'table_name': _params.tableName,
      'catalog_name': _params.catalogName,
      'schema_name': _params.schemaName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'getAllColumns');

    const parameters = {
      options: {
        url: '/columns',
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
   * Get all schemas for a given catalog.
   *
   * List Schemas for a catalog with the given catalog_name.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.catalogName] - Catalog name.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SchemaResponseCollection>>}
   */
  public listAllSchemas(
    params?: WatsonxDataV2.ListAllSchemasParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SchemaResponseCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['catalogName', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'catalog_name': _params.catalogName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'listAllSchemas');

    const parameters = {
      options: {
        url: '/schemas',
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
   * Get schema details.
   *
   * Get schema details.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.schemaName - Schema name.
   * @param {string} [params.catalogName] - Catalog name.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SchemaResponse>>}
   */
  public getSchemaDetails(
    params: WatsonxDataV2.GetSchemaDetailsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SchemaResponse>> {
    const _params = { ...params };
    const _requiredParams = ['schemaName'];
    const _validParams = ['schemaName', 'catalogName', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'catalog_name': _params.catalogName,
    };

    const path = {
      'schema_name': _params.schemaName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'getSchemaDetails');

    const parameters = {
      options: {
        url: '/schemas/{schema_name}',
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
   * Get all tables.
   *
   * Get all tables.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.catalogName] - Catalog name.
   * @param {string} [params.schemaName] - Schema name.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.TableResponseCollection>>}
   */
  public listAllTables(
    params?: WatsonxDataV2.ListAllTablesParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.TableResponseCollection>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['catalogName', 'schemaName', 'authInstanceId', 'signal', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'catalog_name': _params.catalogName,
      'schema_name': _params.schemaName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'listAllTables');

    const parameters = {
      options: {
        url: '/tables',
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
   * Get table details.
   *
   * Get table details.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.tableName - Table name.
   * @param {string} [params.catalogName] - Catalog name.
   * @param {string} [params.schemaName] - Schema name.
   * @param {string} [params.authInstanceId] - CRN.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.TableResponse>>}
   */
  public getTableDetails(
    params: WatsonxDataV2.GetTableDetailsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.TableResponse>> {
    const _params = { ...params };
    const _requiredParams = ['tableName'];
    const _validParams = [
      'tableName',
      'catalogName',
      'schemaName',
      'authInstanceId',
      'signal',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'catalog_name': _params.catalogName,
      'schema_name': _params.schemaName,
    };

    const path = {
      'table_name': _params.tableName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'getTableDetails');

    const parameters = {
      options: {
        url: '/tables/{table_name}',
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
}

/*************************
 * interfaces
 ************************/

namespace WatsonxDataV2 {
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

  /** Parameters for the `listBucketRegistrations` operation. */
  export interface ListBucketRegistrationsParams extends DefaultParams {
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createBucketRegistration` operation. */
  export interface CreateBucketRegistrationParams extends DefaultParams {
    /** bucket type. */
    bucketType: CreateBucketRegistrationConstants.BucketType | string;
    /** bucket description. */
    description: string;
    /** managed by. */
    managedBy: CreateBucketRegistrationConstants.ManagedBy | string;
    /** bucket catalog. */
    associatedCatalog?: BucketCatalog;
    /** bucket details. */
    bucketDetails?: BucketDetails;
    /** bucket display name. */
    bucketDisplayName?: string;
    /** region where the bucket is located. */
    region?: string;
    /** storage details. */
    storageDetails?: StorageDetails;
    /** tags. */
    tags?: string[];
    /** CRN. */
    authInstanceId?: string;
  }

  /** Constants for the `createBucketRegistration` operation. */
  export namespace CreateBucketRegistrationConstants {
    /** bucket type. */
    export enum BucketType {
      AWS_S3 = 'aws_s3',
      MINIO = 'minio',
      IBM_COS = 'ibm_cos',
      IBM_CEPH = 'ibm_ceph',
      ADLS_GEN1 = 'adls_gen1',
      ADLS_GEN2 = 'adls_gen2',
      GOOGLE_CS = 'google_cs',
    }
    /** managed by. */
    export enum ManagedBy {
      IBM = 'ibm',
      CUSTOMER = 'customer',
    }
  }

  /** Parameters for the `getBucketRegistration` operation. */
  export interface GetBucketRegistrationParams extends DefaultParams {
    /** bucket id. */
    bucketId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteBucketRegistration` operation. */
  export interface DeleteBucketRegistrationParams extends DefaultParams {
    /** bucket id. */
    bucketId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `updateBucketRegistration` operation. */
  export interface UpdateBucketRegistrationParams extends DefaultParams {
    /** bucket id. */
    bucketId: string;
    /** bucket details. */
    bucketDetails?: BucketDetails;
    /** bucket display name. */
    bucketDisplayName?: string;
    /** modified description. */
    description?: string;
    /** Tags. */
    tags?: string[];
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createActivateBucket` operation. */
  export interface CreateActivateBucketParams extends DefaultParams {
    /** bucket id. */
    bucketId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `addBucketCatalog` operation. */
  export interface AddBucketCatalogParams extends DefaultParams {
    /** bucket id. */
    bucketId: string;
    /** catalog base path. */
    basePath?: string;
    /** catalog name. */
    catalogName?: string;
    /** catalog tags. */
    catalogTags?: string[];
    /** catalog type. */
    catalogType?: string;
    /** watsonx.data instance ID. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteDeactivateBucket` operation. */
  export interface DeleteDeactivateBucketParams extends DefaultParams {
    /** bucket id. */
    bucketId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listBucketObjects` operation. */
  export interface ListBucketObjectsParams extends DefaultParams {
    /** bucket id. */
    bucketId: string;
    /** CRN. */
    authInstanceId?: string;
    /** path. */
    path?: string;
  }

  /** Parameters for the `getBucketObjectProperties` operation. */
  export interface GetBucketObjectPropertiesParams extends DefaultParams {
    /** bucket id. */
    bucketId: string;
    /** bucket object size. */
    paths?: Path[];
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createHdfsStorage` operation. */
  export interface CreateHdfsStorageParams extends DefaultParams {
    /** Bucket display name. */
    bucketDisplayName: string;
    /** Bucket type. */
    bucketType: string;
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
    /** Kerberos config file. */
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
    createdOn?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listDatabaseRegistrations` operation. */
  export interface ListDatabaseRegistrationsParams extends DefaultParams {
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createDatabaseRegistration` operation. */
  export interface CreateDatabaseRegistrationParams extends DefaultParams {
    /** Database display name. */
    databaseDisplayName: string;
    /** Connector type. */
    databaseType: string;
    /** database catalog. */
    associatedCatalog?: DatabaseCatalog;
    /** Created on. */
    createdOn?: string;
    /** database details. */
    databaseDetails?: DatabaseDetails;
    /** This will hold all the properties for a custom database. */
    databaseProperties?: DatabaseRegistrationPrototypeDatabasePropertiesItems[];
    /** Database description. */
    description?: string;
    /** tags. */
    tags?: string[];
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `getDatabase` operation. */
  export interface GetDatabaseParams extends DefaultParams {
    /** database id. */
    databaseId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteDatabaseCatalog` operation. */
  export interface DeleteDatabaseCatalogParams extends DefaultParams {
    /** database id. */
    databaseId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `updateDatabase` operation. */
  export interface UpdateDatabaseParams extends DefaultParams {
    /** database id. */
    databaseId: string;
    /** New database details. */
    databaseDetails?: DatabaseRegistrationPatchDatabaseDetails;
    /** New database display name. */
    databaseDisplayName?: string;
    /** New database description. */
    description?: string;
    /** New tags. */
    tags?: string[];
    /** List of topics. */
    topics?: DatabaseRegistrationPatchTopicsItems[];
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listDriverRegistration` operation. */
  export interface ListDriverRegistrationParams extends DefaultParams {
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createDriverRegistration` operation. */
  export interface CreateDriverRegistrationParams extends DefaultParams {
    /** Driver file to upload. */
    driver: NodeJS.ReadableStream | Buffer;
    /** Driver name. */
    driverName: string;
    /** Driver connection type. */
    connectionType: string;
    /** The content type of driver. */
    driverContentType?: string;
    /** Driver status. */
    version?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteDriverRegistration` operation. */
  export interface DeleteDriverRegistrationParams extends DefaultParams {
    /** Driver ID. */
    driverId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteDriverEngines` operation. */
  export interface DeleteDriverEnginesParams extends DefaultParams {
    /** driver id. */
    driverId: string;
    /** Engine id(s) to be disassociated from the driver, comma separated. */
    engineIds: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `updateDriverEngines` operation. */
  export interface UpdateDriverEnginesParams extends DefaultParams {
    /** driver id. */
    driverId: string;
    /** List of engine IDs. */
    engines?: string[];
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listOtherEngines` operation. */
  export interface ListOtherEnginesParams extends DefaultParams {
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createOtherEngine` operation. */
  export interface CreateOtherEngineParams extends DefaultParams {
    /** External engine details. */
    engineDetails: OtherEngineDetailsBody;
    /** engine display name. */
    engineDisplayName: string;
    /** engine description. */
    description?: string;
    /** Origin - created or registered. */
    origin?: CreateOtherEngineConstants.Origin | string;
    /** other engine tags. */
    tags?: string[];
    /** CRN. */
    authInstanceId?: string;
  }

  /** Constants for the `createOtherEngine` operation. */
  export namespace CreateOtherEngineConstants {
    /** Origin - created or registered. */
    export enum Origin {
      NATIVE = 'native',
      EXTERNAL = 'external',
      DISCOVER = 'discover',
    }
  }

  /** Parameters for the `deleteOtherEngine` operation. */
  export interface DeleteOtherEngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listAllIntegrations` operation. */
  export interface ListAllIntegrationsParams extends DefaultParams {
    /** CRN. */
    authInstanceId?: string;
    /** API Authentication service token. */
    secret?: string;
    /** service_type. */
    serviceType?: string;
    /** state. */
    state?: string[];
  }

  /** Parameters for the `createIntegration` operation. */
  export interface CreateIntegrationParams extends DefaultParams {
    /** token for databand. */
    accessToken?: string;
    /** Integration APIKEY. */
    apikey?: string;
    /** cross account integration enabler/disabler. */
    crossAccountIntegration?: boolean;
    /** data policy enabler with wxd for ranger. */
    enableDataPolicyWithinWxd?: boolean;
    /** token for ikc. */
    ikcUserAccountId?: string;
    /** Integration password. */
    password?: string;
    /** resouce for ranger. */
    resource?: string;
    /** Integration type. */
    serviceType?: string;
    /** Comma separated list of bucket catalogs which have ikc enabled. */
    storageCatalogs?: string[];
    /** Integration Connection URL. */
    url?: string;
    /** Integration username. */
    username?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `getIntegrations` operation. */
  export interface GetIntegrationsParams extends DefaultParams {
    /** integration_id. */
    integrationId: string;
    /** CRN. */
    authInstanceId?: string;
    /** API Authentication service token. */
    secret?: string;
  }

  /** Parameters for the `deleteIntegration` operation. */
  export interface DeleteIntegrationParams extends DefaultParams {
    /** integration_id. */
    integrationId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `updateIntegration` operation. */
  export interface UpdateIntegrationParams extends DefaultParams {
    /** integration_id. */
    integrationId: string;
    /** token for databand. */
    accessToken?: string;
    /** Integration APIKEY. */
    apikey?: string;
    /** cross account integration enabler/disabler. */
    crossAccountIntegration?: boolean;
    /** data policy enabler with wxd for ranger. */
    enableDataPolicyWithinWxd?: boolean;
    /** token for databand. */
    ikcUserAccountId?: string;
    /** Integration password. */
    password?: string;
    /** resouce for ranger. */
    resource?: string;
    /** current state. */
    state?: string;
    /** Comma separated list of bucket catalogs which have ikc enabled. */
    storageCatalogs?: string[];
    /** Integration Connection URL. */
    url?: string;
    /** Integration username. */
    username?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listDb2Engines` operation. */
  export interface ListDb2EnginesParams extends DefaultParams {
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createDb2Engine` operation. */
  export interface CreateDb2EngineParams extends DefaultParams {
    /** Origin - created or registered. */
    origin: CreateDb2EngineConstants.Origin | string;
    /** Engine description. */
    description?: string;
    /** External engine details. */
    engineDetails?: Db2EngineDetailsBody;
    /** Engine display name. */
    engineDisplayName?: string;
    /** Tags. */
    tags?: string[];
    /** CRN. */
    authInstanceId?: string;
  }

  /** Constants for the `createDb2Engine` operation. */
  export namespace CreateDb2EngineConstants {
    /** Origin - created or registered. */
    export enum Origin {
      NATIVE = 'native',
      EXTERNAL = 'external',
      DISCOVER = 'discover',
    }
  }

  /** Parameters for the `deleteDb2Engine` operation. */
  export interface DeleteDb2EngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `updateDb2Engine` operation. */
  export interface UpdateDb2EngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** Modified description. */
    description?: string;
    /** Engine display name. */
    engineDisplayName?: string;
    /** Tags. */
    tags?: string[];
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listNetezzaEngines` operation. */
  export interface ListNetezzaEnginesParams extends DefaultParams {
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createNetezzaEngine` operation. */
  export interface CreateNetezzaEngineParams extends DefaultParams {
    /** Origin - created or registered. */
    origin: CreateNetezzaEngineConstants.Origin | string;
    /** Engine description. */
    description?: string;
    /** External engine details. */
    engineDetails?: NetezzaEngineDetailsBody;
    /** Engine display name. */
    engineDisplayName?: string;
    /** Tags. */
    tags?: string[];
    /** CRN. */
    authInstanceId?: string;
  }

  /** Constants for the `createNetezzaEngine` operation. */
  export namespace CreateNetezzaEngineConstants {
    /** Origin - created or registered. */
    export enum Origin {
      NATIVE = 'native',
      EXTERNAL = 'external',
      DISCOVER = 'discover',
    }
  }

  /** Parameters for the `deleteNetezzaEngine` operation. */
  export interface DeleteNetezzaEngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `updateNetezzaEngine` operation. */
  export interface UpdateNetezzaEngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** Modified description. */
    description?: string;
    /** Engine display name. */
    engineDisplayName?: string;
    /** Tags. */
    tags?: string[];
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createExecuteQuery` operation. */
  export interface CreateExecuteQueryParams extends DefaultParams {
    /** Engine name. */
    engineId: string;
    /** query to be executed. */
    sqlString: string;
    /** Name of the catalog. */
    catalogName?: string;
    /** Schema name. */
    schemaName?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listInstanceDetails` operation. */
  export interface ListInstanceDetailsParams extends DefaultParams {
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listInstanceServiceDetails` operation. */
  export interface ListInstanceServiceDetailsParams extends DefaultParams {
    /** Target type (e.g., 'cpd', 'generic'). */
    target: string;
    /** Internal host. */
    internalHost?: boolean;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `getServicesDetails` operation. */
  export interface GetServicesDetailsParams extends DefaultParams {
    /** Target type (e.g., 'cpd', 'generic'). */
    target: string;
    /** Type of engine or service (e.g., 'milvus', 'presto'). */
    engineOrServiceType: string;
    /** Internal host. */
    internalHost?: boolean;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `getServiceDetail` operation. */
  export interface GetServiceDetailParams extends DefaultParams {
    /** Target type (e.g., 'cpd', 'generic'). */
    target: string;
    /** Type of engine or service (e.g., 'milvus', 'presto'). */
    engineOrServiceType: string;
    /** Service ID. */
    id: string;
    /** Database name in milvus. */
    database?: string;
    /** Internal host. */
    internalHost?: boolean;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listPrestissimoEngines` operation. */
  export interface ListPrestissimoEnginesParams extends DefaultParams {
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createPrestissimoEngine` operation. */
  export interface CreatePrestissimoEngineParams extends DefaultParams {
    /** Origin - created or registered. */
    origin: CreatePrestissimoEngineConstants.Origin | string;
    /** Associated catalogs. */
    associatedCatalogs?: string[];
    /** Engine description. */
    description?: string;
    /** External engine details. */
    engineDetails?: PrestissimoEngineDetails;
    /** Engine display name. */
    engineDisplayName?: string;
    /** Region (cloud). */
    region?: string;
    /** Tags. */
    tags?: string[];
    /** Version like 0.278 for prestissimo or else. */
    version?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Constants for the `createPrestissimoEngine` operation. */
  export namespace CreatePrestissimoEngineConstants {
    /** Origin - created or registered. */
    export enum Origin {
      NATIVE = 'native',
      EXTERNAL = 'external',
      DISCOVER = 'discover',
    }
  }

  /** Parameters for the `getPrestissimoEngine` operation. */
  export interface GetPrestissimoEngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `deletePrestissimoEngine` operation. */
  export interface DeletePrestissimoEngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `updatePrestissimoEngine` operation. */
  export interface UpdatePrestissimoEngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** Modified description. */
    description?: string;
    /** Engine display name. */
    engineDisplayName?: string;
    /** Engine properties. */
    engineProperties?: PrestissimoEngineEngineProperties;
    /** Triggers engine restart if value is force. */
    engineRestart?: UpdatePrestissimoEngineConstants.EngineRestart | string;
    /** RemoveEngine properties. */
    removeEngineProperties?: RemoveEngineProperties;
    /** Tags. */
    tags?: string[];
    /** CRN. */
    authInstanceId?: string;
  }

  /** Constants for the `updatePrestissimoEngine` operation. */
  export namespace UpdatePrestissimoEngineConstants {
    /** Triggers engine restart if value is force. */
    export enum EngineRestart {
      FORCE = 'force',
      FALSE = 'false',
    }
  }

  /** Parameters for the `listPrestissimoEngineCatalogs` operation. */
  export interface ListPrestissimoEngineCatalogsParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createPrestissimoEngineCatalogs` operation. */
  export interface CreatePrestissimoEngineCatalogsParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** catalog names. */
    catalogName?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `deletePrestissimoEngineCatalogs` operation. */
  export interface DeletePrestissimoEngineCatalogsParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** Catalog id(s) to be stopped, comma separated. */
    catalogNames: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `getPrestissimoEngineCatalog` operation. */
  export interface GetPrestissimoEngineCatalogParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** catalog id. */
    catalogId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `pausePrestissimoEngine` operation. */
  export interface PausePrestissimoEngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `runPrestissimoExplainStatement` operation. */
  export interface RunPrestissimoExplainStatementParams extends DefaultParams {
    /** Engine id. */
    engineId: string;
    /** Presto query to determine explain plan. */
    statement: string;
    /** Format. */
    format?: RunPrestissimoExplainStatementConstants.Format | string;
    /** Type. */
    type?: RunPrestissimoExplainStatementConstants.Type | string;
    /** CRN. */
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
    engineId: string;
    /** Presto query to show explain analyze. */
    statement: string;
    /** Verbose. */
    verbose?: boolean;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `restartPrestissimoEngine` operation. */
  export interface RestartPrestissimoEngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `resumePrestissimoEngine` operation. */
  export interface ResumePrestissimoEngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `scalePrestissimoEngine` operation. */
  export interface ScalePrestissimoEngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** coordinator/worker property settings. */
    coordinator?: PrestissimoNodeDescriptionBody;
    /** coordinator/worker property settings. */
    worker?: PrestissimoNodeDescriptionBody;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listPrestoEngines` operation. */
  export interface ListPrestoEnginesParams extends DefaultParams {
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createPrestoEngine` operation. */
  export interface CreatePrestoEngineParams extends DefaultParams {
    /** Origin - created or registered. */
    origin: CreatePrestoEngineConstants.Origin | string;
    /** Associated catalogs. */
    associatedCatalogs?: string[];
    /** Engine description. */
    description?: string;
    /** Node details. */
    engineDetails?: EngineDetailsBody;
    /** Engine display name. */
    engineDisplayName?: string;
    /** Region (cloud). */
    region?: string;
    /** Tags. */
    tags?: string[];
    /** Version like 0.278 for presto or else. */
    version?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Constants for the `createPrestoEngine` operation. */
  export namespace CreatePrestoEngineConstants {
    /** Origin - created or registered. */
    export enum Origin {
      NATIVE = 'native',
      EXTERNAL = 'external',
      DISCOVER = 'discover',
    }
  }

  /** Parameters for the `getPrestoEngine` operation. */
  export interface GetPrestoEngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteEngine` operation. */
  export interface DeleteEngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `updatePrestoEngine` operation. */
  export interface UpdatePrestoEngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** Modified description. */
    description?: string;
    /** Engine display name. */
    engineDisplayName?: string;
    /** Engine properties. */
    engineProperties?: PrestoEngineEngineProperties;
    /** Triggers engine restart if value is force. */
    engineRestart?: UpdatePrestoEngineConstants.EngineRestart | string;
    /** RemoveEngine properties. */
    removeEngineProperties?: PrestoEnginePatchRemoveEngineProperties;
    /** Tags. */
    tags?: string[];
    /** CRN. */
    authInstanceId?: string;
  }

  /** Constants for the `updatePrestoEngine` operation. */
  export namespace UpdatePrestoEngineConstants {
    /** Triggers engine restart if value is force. */
    export enum EngineRestart {
      FORCE = 'force',
      FALSE = 'false',
    }
  }

  /** Parameters for the `listPrestoEngineCatalogs` operation. */
  export interface ListPrestoEngineCatalogsParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createPrestoEngineCatalogs` operation. */
  export interface CreatePrestoEngineCatalogsParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** catalog names. */
    catalogName?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `deletePrestoEngineCatalogs` operation. */
  export interface DeletePrestoEngineCatalogsParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** Catalog id(s) to be stopped, comma separated. */
    catalogNames: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `getPrestoEngineCatalog` operation. */
  export interface GetPrestoEngineCatalogParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** catalog id. */
    catalogId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `pausePrestoEngine` operation. */
  export interface PausePrestoEngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `runExplainStatement` operation. */
  export interface RunExplainStatementParams extends DefaultParams {
    /** Engine id. */
    engineId: string;
    /** Presto query to determine explain plan. */
    statement: string;
    /** Format. */
    format?: RunExplainStatementConstants.Format | string;
    /** Type. */
    type?: RunExplainStatementConstants.Type | string;
    /** CRN. */
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
    engineId: string;
    /** Presto query to show explain analyze. */
    statement: string;
    /** Verbose. */
    verbose?: boolean;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `restartPrestoEngine` operation. */
  export interface RestartPrestoEngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `resumePrestoEngine` operation. */
  export interface ResumePrestoEngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `scalePrestoEngine` operation. */
  export interface ScalePrestoEngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** NodeDescription. */
    coordinator?: NodeDescription;
    /** NodeDescription. */
    worker?: NodeDescription;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `getSalIntegration` operation. */
  export interface GetSalIntegrationParams extends DefaultParams {
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createSalIntegration` operation. */
  export interface CreateSalIntegrationParams extends DefaultParams {
    /** IAM apikey. */
    apikey: string;
    /** engine ID. */
    engineId: string;
    /** COS storage resource crn. */
    storageResourceCrn?: string;
    /** COS storage type. */
    storageType?: string;
    /** COS storage type. */
    trialPlan?: boolean;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteSalIntegration` operation. */
  export interface DeleteSalIntegrationParams extends DefaultParams {}

  /** Parameters for the `updateSalIntegration` operation. */
  export interface UpdateSalIntegrationParams extends DefaultParams {
    /** op. */
    op?: string;
    /** path. */
    path?: string;
    /** path. */
    value?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createSalIntegrationEnrichment` operation. */
  export interface CreateSalIntegrationEnrichmentParams extends DefaultParams {
    /** Encrichment api object. */
    enrichmentPrototype?: EnrichmentObj;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `getSalIntegrationEnrichmentAssets` operation. */
  export interface GetSalIntegrationEnrichmentAssetsParams extends DefaultParams {
    /** enrichment project id. */
    projectId?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `getSalIntegrationEnrichmentDataAsset` operation. */
  export interface GetSalIntegrationEnrichmentDataAssetParams extends DefaultParams {
    /** enrichment project id. */
    projectId?: string;
    /** enrichment data asset id. */
    assetId?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `getSalIntegrationEnrichmentJobRunLogs` operation. */
  export interface GetSalIntegrationEnrichmentJobRunLogsParams extends DefaultParams {
    /** enrichment job id. */
    jobId?: string;
    /** enrichment job run id. */
    jobRunId?: string;
    /** enrichment project id. */
    projectId?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `getSalIntegrationEnrichmentJobRuns` operation. */
  export interface GetSalIntegrationEnrichmentJobRunsParams extends DefaultParams {
    /** enrichment job id. */
    jobId?: string;
    /** enrichment project id. */
    projectId?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `getSalIntegrationEnrichmentJobs` operation. */
  export interface GetSalIntegrationEnrichmentJobsParams extends DefaultParams {
    /** ikc project id. */
    wkcProjectId?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `getSalIntegrationGlossaryTerms` operation. */
  export interface GetSalIntegrationGlossaryTermsParams extends DefaultParams {
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `getSalIntegrationMappings` operation. */
  export interface GetSalIntegrationMappingsParams extends DefaultParams {
    /** catalog name. */
    catalogName: string;
    /** schema name. */
    schemaName: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `getSalIntegrationEnrichmentGlobalSettings` operation. */
  export interface GetSalIntegrationEnrichmentGlobalSettingsParams extends DefaultParams {
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createSalIntegrationEnrichmentGlobalSettings` operation. */
  export interface CreateSalIntegrationEnrichmentGlobalSettingsParams extends DefaultParams {
    /** semantic expansion. */
    semanticExpansion?: SalIntegrationEnrichmentSettingsSemanticExpansion;
    /** semantic expansion. */
    termAssignment?: SalIntegrationEnrichmentSettingsTermAssignment;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `getSalIntegrationEnrichmentSettings` operation. */
  export interface GetSalIntegrationEnrichmentSettingsParams extends DefaultParams {
    /** wkc project id. */
    projectId?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createSalIntegrationEnrichmentSettings` operation. */
  export interface CreateSalIntegrationEnrichmentSettingsParams extends DefaultParams {
    /** semantic expansion. */
    semanticExpansion?: SalIntegrationEnrichmentSettingsSemanticExpansion;
    /** semantic expansion. */
    termAssignment?: SalIntegrationEnrichmentSettingsTermAssignment;
    /** wkc project id. */
    projectId?: string;
    /** CRN. */
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
    /** CRN. */
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
    processId?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listSparkEngines` operation. */
  export interface ListSparkEnginesParams extends DefaultParams {
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createSparkEngine` operation. */
  export interface CreateSparkEngineParams extends DefaultParams {
    /** Origin - created or registered. */
    origin: CreateSparkEngineConstants.Origin | string;
    /** Associated catalogs. */
    associatedCatalogs?: string[];
    /** Engine description. */
    description?: string;
    /** Node details. */
    engineDetails?: SparkEngineDetailsPrototype;
    /** Engine display name. */
    engineDisplayName?: string;
    /** Engine status. */
    status?: string;
    /** Tags. */
    tags?: string[];
    /** spark type. */
    type?: CreateSparkEngineConstants.Type | string;
    /** CRN. */
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
    /** spark type. */
    export enum Type {
      SPARK = 'spark',
      GLUTEN = 'gluten',
    }
  }

  /** Parameters for the `getSparkEngine` operation. */
  export interface GetSparkEngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteSparkEngine` operation. */
  export interface DeleteSparkEngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `updateSparkEngine` operation. */
  export interface UpdateSparkEngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** Modified description. */
    description?: string;
    /** Engine details. */
    engineDetails?: UpdateSparkEngineBodyEngineDetails;
    /** Engine display name. */
    engineDisplayName?: string;
    /** Tags. */
    tags?: string[];
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listSparkEngineApplications` operation. */
  export interface ListSparkEngineApplicationsParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** CRN. */
    authInstanceId?: string;
    /** state. */
    state?: string[];
  }

  /** Parameters for the `createSparkEngineApplication` operation. */
  export interface CreateSparkEngineApplicationParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** Application details. */
    applicationDetails: SparkApplicationDetails;
    /** Job endpoint. */
    jobEndpoint?: string;
    /** Service Instance ID for POST. */
    serviceInstanceId?: string;
    /** Engine Type. */
    type?: CreateSparkEngineApplicationConstants.Type | string;
    /** Spark application volumes to mount. */
    volumes?: SparkVolumeDetails[];
    /** CRN. */
    authInstanceId?: string;
    /** state. */
    state?: string[];
  }

  /** Constants for the `createSparkEngineApplication` operation. */
  export namespace CreateSparkEngineApplicationConstants {
    /** Engine Type. */
    export enum Type {
      IAE = 'iae',
      EMR = 'emr',
    }
  }

  /** Parameters for the `deleteSparkEngineApplications` operation. */
  export interface DeleteSparkEngineApplicationsParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** Application id(s) to be stopped, comma separated. */
    applicationId: string;
    /** CRN. */
    authInstanceId?: string;
    /** state. */
    state?: string[];
  }

  /** Parameters for the `getSparkEngineApplicationStatus` operation. */
  export interface GetSparkEngineApplicationStatusParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** Application id. */
    applicationId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listSparkEngineCatalogs` operation. */
  export interface ListSparkEngineCatalogsParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createSparkEngineCatalogs` operation. */
  export interface CreateSparkEngineCatalogsParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** catalog names. */
    catalogName?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteSparkEngineCatalogs` operation. */
  export interface DeleteSparkEngineCatalogsParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** Catalog id(s) to be stopped, comma separated. */
    catalogNames: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `getSparkEngineCatalog` operation. */
  export interface GetSparkEngineCatalogParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** catalog id. */
    catalogId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `getSparkEngineHistoryServer` operation. */
  export interface GetSparkEngineHistoryServerParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `startSparkEngineHistoryServer` operation. */
  export interface StartSparkEngineHistoryServerParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** CPU count. */
    cores?: string;
    /** Memory in GiB. */
    memory?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteSparkEngineHistoryServer` operation. */
  export interface DeleteSparkEngineHistoryServerParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `pauseSparkEngine` operation. */
  export interface PauseSparkEngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** force spark engine pause. */
    force?: boolean;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `resumeSparkEngine` operation. */
  export interface ResumeSparkEngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `scaleSparkEngine` operation. */
  export interface ScaleSparkEngineParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** Node count. */
    numberOfNodes?: number;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listSparkVersions` operation. */
  export interface ListSparkVersionsParams extends DefaultParams {
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listCatalogs` operation. */
  export interface ListCatalogsParams extends DefaultParams {
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `getCatalog` operation. */
  export interface GetCatalogParams extends DefaultParams {
    /** catalog ID. */
    catalogId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listSchemas` operation. */
  export interface ListSchemasParams extends DefaultParams {
    /** Engine name. */
    engineId: string;
    /** Catalog name. */
    catalogId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createSchema` operation. */
  export interface CreateSchemaParams extends DefaultParams {
    /** Engine name. */
    engineId: string;
    /** Catalog name. */
    catalogId: string;
    /** Path associated with bucket. */
    customPath: string;
    /** Schema name. */
    schemaName: string;
    /** Bucket associated to metastore where schema will be added. */
    bucketName?: string;
    /** Host name. */
    hostname?: string;
    /** Port. */
    port?: number;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteSchema` operation. */
  export interface DeleteSchemaParams extends DefaultParams {
    /** Engine name. */
    engineId: string;
    /** Catalog name. */
    catalogId: string;
    /** URL encoded Schema name. */
    schemaId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listTables` operation. */
  export interface ListTablesParams extends DefaultParams {
    /** catalog id. */
    catalogId: string;
    /** URL encoded schema name. */
    schemaId: string;
    /** engine id. */
    engineId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `getTable` operation. */
  export interface GetTableParams extends DefaultParams {
    /** catalog id. */
    catalogId: string;
    /** URL encoded schema name. */
    schemaId: string;
    /** URL encoded table name. */
    tableId: string;
    /** engine id. */
    engineId: string;
    /** URL encoded table type. */
    type?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteTable` operation. */
  export interface DeleteTableParams extends DefaultParams {
    /** catalog id. */
    catalogId: string;
    /** URL encoded schema name. */
    schemaId: string;
    /** URL encoded table name. */
    tableId: string;
    /** engine id. */
    engineId: string;
    /** URL encoded table type. */
    type?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `updateTable` operation. */
  export interface UpdateTableParams extends DefaultParams {
    /** catalog id. */
    catalogId: string;
    /** URL encoded schema name. */
    schemaId: string;
    /** URL encoded table name. */
    tableId: string;
    /** engine id. */
    engineId: string;
    /** New table name. */
    tableName?: string;
    /** URL encoded table type. */
    type?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listColumns` operation. */
  export interface ListColumnsParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** catalog id. */
    catalogId: string;
    /** URL encoded schema name. */
    schemaId: string;
    /** URL encoded schema name. */
    tableId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createColumns` operation. */
  export interface CreateColumnsParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** catalog id. */
    catalogId: string;
    /** URL encoded schema name. */
    schemaId: string;
    /** URL encoded schema name. */
    tableId: string;
    /** List of the tables present in the schema. */
    columns?: Column[];
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteColumn` operation. */
  export interface DeleteColumnParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** catalog id. */
    catalogId: string;
    /** URL encoded schema name. */
    schemaId: string;
    /** URL encoded schema name. */
    tableId: string;
    /** URL encoded schema name. */
    columnId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `updateColumn` operation. */
  export interface UpdateColumnParams extends DefaultParams {
    /** engine id. */
    engineId: string;
    /** catalog id. */
    catalogId: string;
    /** URL encoded schema name. */
    schemaId: string;
    /** URL encoded schema name. */
    tableId: string;
    /** URL encoded schema name. */
    columnId: string;
    /** Column name. */
    columnName?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listTableSnapshots` operation. */
  export interface ListTableSnapshotsParams extends DefaultParams {
    /** Engine name. */
    engineId: string;
    /** Catalog ID. */
    catalogId: string;
    /** Schema ID. */
    schemaId: string;
    /** Table ID. */
    tableId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `rollbackTable` operation. */
  export interface RollbackTableParams extends DefaultParams {
    /** Engine name. */
    engineId: string;
    /** Catalog ID. */
    catalogId: string;
    /** Schema ID. */
    schemaId: string;
    /** Table ID. */
    tableId: string;
    /** Snapshot Id. */
    snapshotId?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `updateSyncCatalog` operation. */
  export interface UpdateSyncCatalogParams extends DefaultParams {
    /** catalog ID. */
    catalogId: string;
    /** Auto add new table. */
    autoAddNewTables?: boolean;
    /** Sync iceberg metadata. */
    syncIcebergMd?: boolean;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listMilvusServices` operation. */
  export interface ListMilvusServicesParams extends DefaultParams {
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createMilvusService` operation. */
  export interface CreateMilvusServiceParams extends DefaultParams {
    /** bucket name. */
    bucketName: string;
    /** Origin - place holder. */
    origin: string;
    /** root path. */
    rootPath: string;
    /** Service display name. */
    serviceDisplayName: string;
    /** bucket type. */
    bucketType?: string;
    /** Service description. */
    description?: string;
    /** Tags. */
    tags?: string[];
    /** tshirt size. */
    tshirtSize?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `getMilvusService` operation. */
  export interface GetMilvusServiceParams extends DefaultParams {
    /** service id. */
    serviceId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `deleteMilvusService` operation. */
  export interface DeleteMilvusServiceParams extends DefaultParams {
    /** service id. */
    serviceId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `updateMilvusService` operation. */
  export interface UpdateMilvusServiceParams extends DefaultParams {
    /** service id. */
    serviceId: string;
    /** Modified description. */
    description?: string;
    /** Service display name. */
    serviceDisplayName?: string;
    /** Tags. */
    tags?: string[];
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `updateMilvusServiceBucket` operation. */
  export interface UpdateMilvusServiceBucketParams extends DefaultParams {
    /** service id. */
    serviceId: string;
    /** bucket name. */
    bucketName?: string;
    /** How is the Milvus instance managed. */
    managedBy?: string;
    /** root path. */
    rootPath?: string;
    /** tshirt size. */
    tshirtSize?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listMilvusServiceDatabases` operation. */
  export interface ListMilvusServiceDatabasesParams extends DefaultParams {
    /** service id. */
    serviceId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listMilvusDatabaseCollections` operation. */
  export interface ListMilvusDatabaseCollectionsParams extends DefaultParams {
    /** service id. */
    serviceId: string;
    /** database id. */
    databaseId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createMilvusServicePause` operation. */
  export interface CreateMilvusServicePauseParams extends DefaultParams {
    /** service id. */
    serviceId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createMilvusServiceResume` operation. */
  export interface CreateMilvusServiceResumeParams extends DefaultParams {
    /** service id. */
    serviceId: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `createMilvusServiceScale` operation. */
  export interface CreateMilvusServiceScaleParams extends DefaultParams {
    /** service id. */
    serviceId: string;
    /** tshirt size. */
    tshirtSize?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listIngestionJobs` operation. */
  export interface ListIngestionJobsParams extends DefaultParams {
    /** CRN. */
    authInstanceId: string;
    /** Page number of requested ingestion jobs. */
    start?: string;
    /** Number of requested ingestion jobs. */
    jobsPerPage?: number;
  }

  /** Parameters for the `createIngestionJobs` operation. */
  export interface CreateIngestionJobsParams extends DefaultParams {
    /** CRN. */
    authInstanceId: string;
    /** Job ID of the job. */
    jobId: string;
    /** Comma separated source file or directory path. */
    sourceDataFiles: string;
    /** Target table name in format catalog.schema.table. */
    targetTable: string;
    /** User submitting ingestion job. */
    username: string;
    /** Create new target table (if True); Insert into pre-existing target table (if False). */
    createIfNotExist?: boolean;
    /** Ingestion CSV properties. */
    csvProperty?: IngestionJobPrototypeCsvProperty;
    /** ID of the spark engine to be used for ingestion. */
    engineId?: string;
    /** Ingestion engine configuration. */
    executeConfig?: IngestionJobPrototypeExecuteConfig;
    /** Partition by expression of the target table. */
    partitionBy?: string;
    /** Schema definition of the source table. */
    schema?: string;
    /** Source file types (parquet or csv or json). */
    sourceFileType?: CreateIngestionJobsConstants.SourceFileType | string;
    /** Validate CSV header if the target table exist. */
    validateCsvHeader?: boolean;
  }

  /** Constants for the `createIngestionJobs` operation. */
  export namespace CreateIngestionJobsConstants {
    /** Source file types (parquet or csv or json). */
    export enum SourceFileType {
      CSV = 'csv',
      PARQUET = 'parquet',
      JSON = 'json',
    }
  }

  /** Parameters for the `createIngestionJobsLocalFiles` operation. */
  export interface CreateIngestionJobsLocalFilesParams extends DefaultParams {
    /** CRN. */
    authInstanceId: string;
    /** The user local file submitted for ingestion. */
    sourceDataFile: NodeJS.ReadableStream | Buffer;
    /** Target table name in format catalog.schema.table. */
    targetTable: string;
    /** Job ID of the job. */
    jobId: string;
    /** User submitting ingestion job. */
    username: string;
    /** The content type of sourceDataFile. */
    sourceDataFileContentType?: string;
    /** File format of source file. */
    sourceFileType?: CreateIngestionJobsLocalFilesConstants.SourceFileType | string;
    /** Ingestion CSV properties (base64 encoding of a stringifed json). */
    csvProperty?: string;
    /** Create new target table (if true); Insert into pre-existing target table (if false). */
    createIfNotExist?: boolean;
    /** Validate CSV header if the target table exist. */
    validateCsvHeader?: boolean;
    /** Ingestion engine configuration (base64 encoding of a stringifed json). */
    executeConfig?: string;
    /** ID of the spark engine to be used for ingestion. */
    engineId?: string;
  }

  /** Constants for the `createIngestionJobsLocalFiles` operation. */
  export namespace CreateIngestionJobsLocalFilesConstants {
    /** File format of source file. */
    export enum SourceFileType {
      CSV = 'csv',
      PARQUET = 'parquet',
      JSON = 'json',
    }
  }

  /** Parameters for the `getIngestionJob` operation. */
  export interface GetIngestionJobParams extends DefaultParams {
    /** ingestion job id. */
    jobId: string;
    /** CRN. */
    authInstanceId: string;
  }

  /** Parameters for the `deleteIngestionJobs` operation. */
  export interface DeleteIngestionJobsParams extends DefaultParams {
    /** ingestion job id. */
    jobId: string;
    /** CRN. */
    authInstanceId: string;
  }

  /** Parameters for the `createPreviewIngestionFile` operation. */
  export interface CreatePreviewIngestionFileParams extends DefaultParams {
    /** CRN. */
    authInstanceId: string;
    /** Comma separated source file or directory path. */
    sourceDataFiles: string;
    /** CSV properties of source file(s). */
    csvProperty?: PreviewIngestionFilePrototypeCsvProperty;
    /** File format of source file(s). */
    sourceFileType?: CreatePreviewIngestionFileConstants.SourceFileType | string;
  }

  /** Constants for the `createPreviewIngestionFile` operation. */
  export namespace CreatePreviewIngestionFileConstants {
    /** File format of source file(s). */
    export enum SourceFileType {
      CSV = 'csv',
      PARQUET = 'parquet',
      JSON = 'json',
    }
  }

  /** Parameters for the `getEndpoints` operation. */
  export interface GetEndpointsParams extends DefaultParams {
    /** CRN. */
    authInstanceId?: string;
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
    /** watsonx.data CRN. */
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
    /** watsonx.data CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `getAllColumns` operation. */
  export interface GetAllColumnsParams extends DefaultParams {
    /** Table name. */
    tableName?: string;
    /** Catalog name. */
    catalogName?: string;
    /** Schema name. */
    schemaName?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listAllSchemas` operation. */
  export interface ListAllSchemasParams extends DefaultParams {
    /** Catalog name. */
    catalogName?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `getSchemaDetails` operation. */
  export interface GetSchemaDetailsParams extends DefaultParams {
    /** Schema name. */
    schemaName: string;
    /** Catalog name. */
    catalogName?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `listAllTables` operation. */
  export interface ListAllTablesParams extends DefaultParams {
    /** Catalog name. */
    catalogName?: string;
    /** Schema name. */
    schemaName?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /** Parameters for the `getTableDetails` operation. */
  export interface GetTableDetailsParams extends DefaultParams {
    /** Table name. */
    tableName: string;
    /** Catalog name. */
    catalogName?: string;
    /** Schema name. */
    schemaName?: string;
    /** CRN. */
    authInstanceId?: string;
  }

  /*************************
   * model interfaces
   ************************/

  /**
   * bucket catalog.
   */
  export interface BucketCatalog {
    /** catalog base path. */
    base_path?: string;
    /** catalog name. */
    catalog_name?: string;
    /** catalog tags. */
    catalog_tags?: string[];
    /** catalog type. */
    catalog_type?: string;
  }

  /**
   * bucket details.
   */
  export interface BucketDetails {
    /** Access key ID, encrypted during bucket registration. */
    access_key?: string;
    /** actual bucket name. */
    bucket_name: string;
    /** Cos endpoint. */
    endpoint?: string;
    /** Key file, encrypted during bucket registration. */
    key_file?: string;
    /** bucket provider. */
    provider?: string;
    /** Region where the bucket is located. */
    region?: string;
    /** Secret access key, encrypted during bucket registration. */
    secret_key?: string;
  }

  /**
   * muliple bucket object properties.
   */
  export interface BucketObjectProperties {
    /** muliple bucket object properties. */
    object_properties?: BucketRegistrationObjectSizeCollection[];
  }

  /**
   * Bucket.
   */
  export interface BucketRegistration {
    /** Actions. */
    actions?: string[];
    /** bucket catalog. */
    associated_catalog: BucketCatalog;
    /** bucket details. */
    bucket_details?: BucketDetails;
    /** bucket display name. */
    bucket_display_name?: string;
    /** bucket ID auto generated during bucket registration. */
    bucket_id?: string;
    /** bucket type. */
    bucket_type: BucketRegistration.Constants.BucketType | string;
    /** Username who created the bucket. */
    created_by: string;
    /** Creation date. */
    created_on: string;
    /** bucket description. */
    description: string;
    /** managed by. */
    managed_by: BucketRegistration.Constants.ManagedBy | string;
    /** Region where the bucket is located. */
    region?: string;
    /** mark bucket active or inactive. */
    state: BucketRegistration.Constants.State | string;
    /** storage details. */
    storage_details?: StorageDetails;
    /** tags. */
    tags?: string[];
  }
  export namespace BucketRegistration {
    export namespace Constants {
      /** bucket type. */
      export enum BucketType {
        AMAZON_S3 = 'amazon_s3',
        AWS_S3 = 'aws_s3',
        MINIO = 'minio',
        IBM_COS = 'ibm_cos',
        IBM_CEPH = 'ibm_ceph',
        ADLS_GEN1 = 'adls_gen1',
        ADLS_GEN2 = 'adls_gen2',
        GOOGLE_CS = 'google_cs',
      }
      /** managed by. */
      export enum ManagedBy {
        IBM = 'ibm',
        CUSTOMER = 'customer',
      }
      /** mark bucket active or inactive. */
      export enum State {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
      }
    }
  }

  /**
   * List bucket registrations.
   */
  export interface BucketRegistrationCollection {
    /** Buckets. */
    bucket_registrations?: BucketRegistration[];
  }

  /**
   * List bucket objects.
   */
  export interface BucketRegistrationObjectCollection {
    /** bucket object. */
    objects?: string[];
  }

  /**
   * Bucket object size.
   */
  export interface BucketRegistrationObjectSizeCollection {
    /** content type. */
    content_type?: string;
    /** file type. */
    file_type?: string;
    /** bucket last modified. */
    last_modified?: string;
    /** Additional metadata associated with the object. */
    metadata?: JsonObject;
    /** bucket last modified. */
    path?: string;
    /** size of the bucket objects. */
    size?: string;
  }

  /**
   * Define the catalog details.
   */
  export interface Catalog {
    /** list of allowed actions. */
    actions?: string[];
    /** Associated buckets items. */
    associated_buckets?: string[];
    /** Associated databases items. */
    associated_databases?: string[];
    /** Associated engines items. */
    associated_engines?: string[];
    /** Name for the catalog. */
    catalog_name?: string;
    /** Table type. */
    catalog_type?: string;
    /** Created by. */
    created_by?: string;
    /** Created on. */
    created_on?: string;
    /** Description. */
    description?: string;
    /** IBM thrift uri hostname. */
    hostname?: string;
    /** Last sync time. */
    last_sync_at?: string;
    /** Managed by. */
    managed_by?: Catalog.Constants.ManagedBy | string;
    /** Catalog name. */
    metastore?: string;
    /** IBM thrift uri port. */
    port?: string;
    /** Catalog status. */
    status?: string;
    /** Sync description. */
    sync_description?: string;
    /** Tables not sync because data is corrupted. */
    sync_exception?: string[];
    /** Sync status. */
    sync_status?: string;
    /** Tags. */
    tags?: string[];
    /** Customer thrift uri. */
    thrift_uri?: string;
  }
  export namespace Catalog {
    export namespace Constants {
      /** Managed by. */
      export enum ManagedBy {
        IBM = 'ibm',
        CUSTOMER = 'customer',
      }
    }
  }

  /**
   * GetCatalogs OK.
   */
  export interface CatalogCollection {
    /** Catalogs. */
    catalogs?: Catalog[];
  }

  /**
   * Column.
   */
  export interface Column {
    /** Column name. */
    column_name?: string;
    /** Comment. */
    comment?: string;
    /** Extra. */
    extra?: string;
    /** length. */
    length?: string;
    /** scale. */
    scale?: string;
    /** precision. */
    precision?: string;
    /** Data type. */
    type?: string;
  }

  /**
   * list of columns in a table.
   */
  export interface ColumnCollection {
    /** List of the columns present in the table. */
    columns?: Column[];
  }

  /**
   * Column details.
   */
  export interface ColumnsResponse {
    /** A list of all tables with columns. */
    columns?: TableColumDetail[];
    /** Response message string. */
    message?: string;
    /** Message code string. */
    message_code?: string;
  }

  /**
   * Get Milvus Service Detail for target type = cpd.
   */
  export interface ConnectionPropertiesDetails {
    /** The name of the connection, typically engine_id or service_id. */
    connection_name?: string;
    /** Watsonx Instance Details. */
    details?: Details;
    /** Service connection properties. */
    properties?: ConnectionPropertiesDetailsProperties;
    /** Type of the service. */
    type?: string;
  }

  /**
   * Service connection properties.
   */
  export interface ConnectionPropertiesDetailsProperties {
    /** List of connection details. */
    connection?: ConnectionPropertiesDetailsPropertiesConnectionItems[];
  }

  /**
   * ConnectionPropertiesDetailsPropertiesConnectionItems.
   */
  export interface ConnectionPropertiesDetailsPropertiesConnectionItems {
    /** Property name. */
    name?: string;
    /** Property value (can be string, integer, or boolean). */
    value?: string;
  }

  /**
   * Activate bucket.
   */
  export interface CreateActivateBucketCreatedBody {
    /** Response of success. */
    response?: SuccessResponse;
  }

  /**
   * Pause.
   */
  export interface CreateEnginePauseCreatedBody {
    /** Response of success. */
    response?: SuccessResponse;
  }

  /**
   * restart engine.
   */
  export interface CreateEngineRestartCreatedBody {
    /** Response of success. */
    response?: SuccessResponse;
  }

  /**
   * resume.
   */
  export interface CreateEngineResumeCreatedBody {
    /** Response of success. */
    response?: SuccessResponse;
  }

  /**
   * scale engine.
   */
  export interface CreateEngineScaleCreatedBody {
    /** Response of success. */
    response?: SuccessResponse;
  }

  /**
   * success response.
   */
  export interface CreateSchemaCreatedBody {
    /** Response of success. */
    response?: SuccessResponse;
  }

  /**
   * database catalog.
   */
  export interface DatabaseCatalog {
    /** catalog name. */
    catalog_name?: string;
    /** catalog tags. */
    catalog_tags?: string[];
    /** catalog type. */
    catalog_type?: string;
  }

  /**
   * database details.
   */
  export interface DatabaseDetails {
    /** Authentication method. */
    authentication_type?: string;
    /** Broker authentication password. */
    broker_authentication_password?: string;
    /** Broker authentication type. */
    broker_authentication_type?: string;
    /** Broker authentication user. */
    broker_authentication_user?: string;
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
    /** CPD Hostname. */
    cpd_hostname?: string;
    /** Base 64 encoded json file. */
    credentials_key?: string;
    /** Database name. */
    database_name?: string;
    /** Host name. */
    hostname?: string;
    /** Hostname in certificate. */
    hostname_in_certificate?: string;
    /** String of hostname:port. */
    hosts?: string;
    /** informix server value. */
    informix_server?: string;
    /** Psssword. */
    password?: string;
    /** Port. */
    port?: number;
    /** Project ID. */
    project_id?: string;
    /** SASL Mode. */
    sasl?: boolean;
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
    /** Only for Kafka - Add kafka tables. */
    tables?: string;
    /** Username. */
    username?: string;
    /** Verify certificate. */
    validate_server_certificate?: boolean;
    /** Verify host name. */
    verify_host_name?: boolean;
  }

  /**
   * database registration object.
   */
  export interface DatabaseRegistration {
    /** actions. */
    actions?: string[];
    /** database catalog. */
    associated_catalog?: DatabaseCatalog;
    /** Catalog name. */
    catalog_name?: string;
    /** Created by. */
    created_by?: string;
    /** Created on. */
    created_on?: string;
    /** database details. */
    database_details: DatabaseDetails;
    /** Database display name. */
    database_display_name: string;
    /** Database ID. */
    database_id?: string;
    /** This will hold all the properties for a custom database. */
    database_properties?: DatabaseRegistrationDatabasePropertiesItems[];
    /** Connector type. */
    database_type: string;
    /** Database description. */
    description?: string;
    /** tags. */
    tags?: string[];
    /** List of topics. */
    topics?: DatabaseRegistrationTopicsItems[];
  }

  /**
   * list database registrations.
   */
  export interface DatabaseRegistrationCollection {
    /** Database body. */
    database_registrations?: DatabaseRegistration[];
  }

  /**
   * Key value object.
   */
  export interface DatabaseRegistrationDatabasePropertiesItems {
    /** Wether the value is to be encrypted before storing. */
    encrypt: boolean;
    /** Key of the database property. */
    key: string;
    /** Value of the database property. */
    value: string;
  }

  /**
   * New database details.
   */
  export interface DatabaseRegistrationPatchDatabaseDetails {
    /** New password. */
    password?: string;
    /** New username. */
    username?: string;
  }

  /**
   * Topic.
   */
  export interface DatabaseRegistrationPatchTopicsItems {
    /** Created on. */
    created_on?: string;
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
    /** Wether the value is to be encrypted before storing. */
    encrypt: boolean;
    /** Key of the database property. */
    key: string;
    /** Value of the database property. */
    value: string;
  }

  /**
   * Topic.
   */
  export interface DatabaseRegistrationTopicsItems {
    /** Created on. */
    created_on?: string;
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
    actions?: string[];
    /** watsonx.data build version. */
    build_version?: string;
    /** Created user name. */
    created_by?: string;
    /** Created time in epoch format. */
    created_on?: number;
    /** Engine description. */
    description?: string;
    /** External engine details. */
    engine_details?: Db2EngineDetails;
    /** Engine display name. */
    engine_display_name?: string;
    /** Engine programmatic name. */
    engine_id?: string;
    /** Engine host name. In case of OCP based clusters, this is internal hostname. */
    host_name?: string;
    /** Origin - place holder. */
    origin?: string;
    /** Engine port. */
    port?: number;
    /** Engine status. */
    status?: string;
    /** Tags. */
    tags?: string[];
    /** Engine type. */
    type?: string;
  }

  /**
   * list db2 engines.
   */
  export interface Db2EngineCollection {
    /** list db2 engines. */
    db2_engines?: Db2Engine[];
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
    connection_string?: string;
  }

  /**
   * Watsonx Instance Details.
   */
  export interface Details {
    /** ca certificate. */
    ca_certificate?: string;
    /** Dynamic dict. */
    default_configs?: JsonObject;
    /** Details for the external component. */
    external?: ExternalDetails;
    /** Details for the internal component. */
    grpc_api_endpoint?: InternalDetails;
    /** Instance Host name. */
    hostname?: string;
    /** ID. */
    id?: string;
    /** instance CRN. */
    instance_crn?: string;
    /** instance id. */
    instance_id?: string;
    /** Details for the internal component. */
    internal?: InternalDetails;
    /** JDBC Class. */
    jdbc_class?: string;
    /** JDBC Thrift Urls. */
    jdbc_urls?: JdbcThriftUrls;
    /** engines services name. */
    name?: string;
    /** Port. */
    port?: number;
    /** Details for the internal component. */
    rest_api_endpoint?: InternalDetails;
    /** Spark Engine endpoint. */
    spark_engine_endpoint?: string;
    /** ssl certificate. */
    ssl_certificate?: string;
    /** JDBC Thrift Urls. */
    thrift_urls?: JdbcThriftUrls;
    /** engine version. */
    version?: string;
    /** Watsonx data application endpoint. */
    watsonx_data_application_endpoint?: string;
  }

  /**
   * DisplayNameInfoResponse.
   */
  export interface DisplayNameInfoResponse {
    /** Display name. */
    display_name: string;
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
   * Driver registration.
   */
  export interface DriverRegistration {
    /** Associated engines. */
    associated_engines?: string[];
    /** Driver connection type. */
    connection_type?: string;
    /** Driver ID auto generated during driver registration. */
    driver_id?: string;
    /** Driver name. */
    driver_name?: string;
    /** Created on. */
    modified_at?: string;
    /** Created by. */
    modified_by?: string;
    /** Driver status. */
    status?: string;
    /** Driver version. */
    version?: string;
  }

  /**
   * list driver registrations.
   */
  export interface DriverRegistrationCollection {
    /** Driver collection body. */
    driver_registrations?: DriverRegistration[];
  }

  /**
   * Engines associated to the driver.
   */
  export interface DriverRegistrationEngine {
    /** List of engine IDs. */
    engines?: string[];
  }

  /**
   * The service endpoint.
   */
  export interface Endpoint {
    /** The external host of the service. */
    external_host?: string;
    /** The service type. */
    service_type?: string;
  }

  /**
   * List endpoints.
   */
  export interface EndpointCollection {
    /** List of the endpoints CPG and DAS. */
    endpoints?: Endpoint[];
  }

  /**
   * Node details.
   */
  export interface EngineDetailsBody {
    /** api key to work with the saas IAE instance. */
    api_key?: string;
    /** External engine connection string. */
    connection_string?: string;
    /** coordinator/worker property settings. */
    coordinator?: NodeDescriptionBody;
    /** Instance to access the instance. */
    instance_id?: string;
    /** How is the spark instance managed. */
    managed_by?: string;
    /** For presto and prestissimo engines, CPD supported sizes are: custom, starter, small, medium, large, xlarge,
     *  and xxlarge. IBM cloud supported sizes are: custom, starter, small, medium, large, cache_optimized,
     *  compute_optimized and lite.
     */
    size_config?: EngineDetailsBody.Constants.SizeConfig | string;
    /** coordinator/worker property settings. */
    worker?: NodeDescriptionBody;
  }
  export namespace EngineDetailsBody {
    export namespace Constants {
      /** For presto and prestissimo engines, CPD supported sizes are: custom, starter, small, medium, large, xlarge, and xxlarge. IBM cloud supported sizes are: custom, starter, small, medium, large, cache_optimized, compute_optimized and lite. */
      export enum SizeConfig {
        STARTER = 'starter',
        CACHE_OPTIMIZED = 'cache_optimized',
        COMPUTE_OPTIMIZED = 'compute_optimized',
        SMALL = 'small',
        MEDIUM = 'medium',
        LARGE = 'large',
        CUSTOM = 'custom',
      }
    }
  }

  /**
   * Catalog settings.
   */
  export interface EnginePropertiesCatalog {
    /** Coordinator/ worker properties. */
    coordinator?: JsonObject;
    /** Coordinator/ worker properties. */
    worker?: JsonObject;
  }

  /**
   * Log Configuration settings.
   */
  export interface EnginePropertiesLogConfiguration {
    /** Coordinator/ worker properties. */
    coordinator?: JsonObject;
    /** Coordinator/ worker properties. */
    worker?: JsonObject;
  }

  /**
   * Configuration settings.
   */
  export interface EnginePropertiesOaiGen1Configuration {
    /** Coordinator/ worker properties. */
    coordinator?: JsonObject;
    /** Coordinator/ worker properties. */
    worker?: JsonObject;
  }

  /**
   * JVM settings.
   */
  export interface EnginePropertiesOaiGen1Jvm {
    /** Coordinator/ worker properties. */
    coordinator?: JsonObject;
    /** Coordinator/ worker properties. */
    worker?: JsonObject;
  }

  /**
   * Configuration settings for the engine properties.
   */
  export interface EnginePropertiesOaiGenConfiguration {
    /** coordinator/worker property settings. */
    coordinator?: PrestissimoNodeDescriptionBody;
    /** coordinator/worker property settings. */
    worker?: PrestissimoNodeDescriptionBody;
  }

  /**
   * engine service detail collection.
   */
  export interface EngineServiceDetailsCollection {
    /** Engine service details. */
    details?: Details[];
    /** Engine service type. */
    type?: string;
  }

  /**
   * Engine service details.
   */
  export interface EnginesServicesDetails {
    engines_services?: ConnectionPropertiesDetails[];
  }

  /**
   * Encrichment asset.
   */
  export interface EnrichmentAsset {
    /** schema name. */
    asset_attributes?: string[];
    /** data asset id. */
    asset_id?: string;
    /** asset name. */
    asset_name?: string;
    /** resource name. */
    resource_key?: string;
    /** schema. */
    schema_name?: string;
  }

  /**
   * Encrichment api object.
   */
  export interface EnrichmentObj {
    /** catalog name. */
    catalog: string;
    /** operation type. */
    operation: string;
    /** schema name. */
    schema: string;
    /** schema name. */
    tables?: string[];
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
   * success response.
   */
  export interface ExecuteQueryCreatedBody {
    /** ResultExecuteQuery OK. */
    response?: ResultExecuteQuery;
  }

  /**
   * Details for the external component.
   */
  export interface ExternalDetails {
    /** Port. */
    port?: number;
    /** External Host name. */
    hostname?: string;
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
    actions?: string[];
    /** bucket catalog. */
    associated_catalog: BucketCatalog;
    /** HDFS storage display name. */
    bucket_display_name?: string;
    /** HDFS Storage ID auto generated during registration. */
    bucket_id?: string;
    /** HDFS type. */
    bucket_type: HdfsStorageRegistration.Constants.BucketType | string;
    /** Username who created the HDFS storage. */
    created_by: string;
    /** Creation date. */
    created_on: string;
    /** HDFS description. */
    description: string;
    /** managed by. */
    managed_by: HdfsStorageRegistration.Constants.ManagedBy | string;
    /** mark hdfs active or inactive. */
    state: HdfsStorageRegistration.Constants.State | string;
    /** tags. */
    tags?: string[];
  }
  export namespace HdfsStorageRegistration {
    export namespace Constants {
      /** HDFS type. */
      export enum BucketType {
        HDFS = 'hdfs',
      }
      /** managed by. */
      export enum ManagedBy {
        CUSTOMER = 'customer',
      }
      /** mark hdfs active or inactive. */
      export enum State {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
      }
    }
  }

  /**
   * Ingestion job.
   */
  export interface IngestionJob {
    /** Create new target table (if True); Insert into pre-existing target table (if False). */
    create_if_not_exist?: boolean;
    /** Ingestion CSV properties. */
    csv_property?: IngestionJobCsvProperty;
    /** Error messages of failed ingestion job. */
    details?: string;
    /** Unix timestamp of ingestion job completing. */
    end_timestamp?: string;
    /** ID of the spark engine to be used for ingestion. */
    engine_id?: string;
    /** Name of the spark engine to be used for ingestion. */
    engine_name?: string;
    /** Ingestion engine configuration. */
    execute_config?: IngestionJobExecuteConfig;
    /** Instance ID of the lakehouse where ingestion job is executed. */
    instance_id?: string;
    /** Job ID of the ingestion job. */
    job_id?: string;
    /** partition by expression of the target table. */
    partition_by?: string;
    /** Schema definition of the source table. */
    schema?: string;
    /** Source data location of the ingestion job. */
    source_data_files?: string;
    /** Source file types (parquet or csv). */
    source_file_type?: IngestionJob.Constants.SourceFileType | string;
    /** Unix timestamp of ingestion job starting. */
    start_timestamp?: string;
    /** Current state of ingestion job. */
    status?: string;
    /** Target table name in format catalog.schema.table. */
    target_table?: string;
    /** Ingestion job user. */
    username?: string;
    /** Validate CSV header if the target table exist. */
    validate_csv_header?: boolean;
  }
  export namespace IngestionJob {
    export namespace Constants {
      /** Source file types (parquet or csv). */
      export enum SourceFileType {
        CSV = 'csv',
        PARQUET = 'parquet',
      }
    }
  }

  /**
   * List ingestion jobs.
   */
  export interface IngestionJobCollection {
    /** Ingestion jobs. */
    ingestion_jobs?: IngestionJob[];
    /** A page in a pagination collection. */
    first?: IngestionJobCollectionPage;
    /** A page in a pagination collection. */
    next?: IngestionJobCollectionPage;
  }

  /**
   * A page in a pagination collection.
   */
  export interface IngestionJobCollectionPage {
    /** Link to the a page in the collection. */
    href?: string;
  }

  /**
   * Ingestion CSV properties.
   */
  export interface IngestionJobCsvProperty {
    /** Encoding used in CSV file. */
    encoding?: string;
    /** Escape character of CSV file. */
    escape_character?: string;
    /** Field delimiter of CSV file. */
    field_delimiter?: string;
    /** Identify if header exists in CSV file. */
    header?: boolean;
    /** Line delimiter of CSV file. */
    line_delimiter?: string;
  }

  /**
   * Ingestion engine configuration.
   */
  export interface IngestionJobExecuteConfig {
    /** Driver core(s) configuration for Spark engine. */
    driver_cores?: number;
    /** Driver memory configuration (in GB) for Spark engine. */
    driver_memory?: string;
    /** Executor core(s) configuration for Spark engine. */
    executor_cores?: number;
    /** Executor memory configuration (in GB) for Spark engine. */
    executor_memory?: string;
    /** Number of executors to assign for Spark engine. */
    num_executors?: number;
  }

  /**
   * Ingestion CSV properties.
   */
  export interface IngestionJobPrototypeCsvProperty {
    /** Encoding used in CSV file. */
    encoding?: string;
    /** Escape character of CSV file. */
    escape_character?: string;
    /** Field delimiter of CSV file. */
    field_delimiter?: string;
    /** Identify if header exists in CSV file. */
    header?: boolean;
    /** Line delimiter of CSV file. */
    line_delimiter?: string;
  }

  /**
   * Ingestion engine configuration.
   */
  export interface IngestionJobPrototypeExecuteConfig {
    /** Driver core(s) configuration for Spark engine. */
    driver_cores?: number;
    /** Driver memory configuration (in GB) for Spark engine. */
    driver_memory?: string;
    /** Executor core(s) configuration for Spark engine. */
    executor_cores?: number;
    /** Executor memory configuration (in GB) for Spark engine. */
    executor_memory?: string;
    /** Number of executors to assign for Spark engine. */
    num_executors?: number;
  }

  /**
   * Integration.
   */
  export interface Integration {
    /** Integration APIKEY. */
    apikey?: string;
    /** token for databand. */
    access_token?: string;
    /** Properties. */
    config_properties?: string;
    /** auth_url for corresponding manta in saas. */
    auth_url?: string;
    /** resouce for ranger. */
    integration_id?: string;
    /** cross account integration enabler/disabler. */
    cross_account_integration?: boolean;
    /** data policy enabler with wxd for ranger. */
    enable_data_policy_within_wxd?: boolean;
    /** Properties. */
    governance_properties?: string;
    /** ikc_user_account_id for ikc. */
    ikc_user_account_id?: string;
    /** manta_url modifeid from url for manta in saas. */
    manta_url?: string;
    /** modified time in epoch format. */
    modified_at?: number;
    /** modified user name. */
    modified_by?: string;
    /** Integration password. */
    password?: string;
    /** resouce for ranger. */
    resource?: string;
    /** Integration type. */
    service_type?: string;
    /** current state. */
    state?: string;
    /** Comma separated list of storage catalogs for which ikc needs to be enabled. */
    storage_catalogs?: string[];
    /** Integration Connection URL. */
    url?: string;
    /** Integration Zen API key. */
    zen_apikey?: string;
    /** Username. */
    username?: string;
  }

  /**
   * list all existing integrations.
   */
  export interface IntegrationCollection {
    /** Database body. */
    integrations?: Integration[];
  }

  /**
   * Details for the internal component.
   */
  export interface InternalDetails {
    /** Port. */
    port?: number;
    /** Internal Host name. */
    hostname?: string;
  }

  /**
   * JDBC Thrift Urls.
   */
  export interface JdbcThriftUrls {
    external?: string;
    internal?: string;
  }

  /**
   * GetSchemas OK.
   */
  export interface ListSchemasOKBody {
    /** Response of success. */
    response: SuccessResponse;
    /** Schemas. */
    schemas: string[];
  }

  /**
   * List spark version.
   */
  export interface ListSparkVersionsOKBody {
    /** Response of success. */
    response: SuccessResponse;
    /** Spark versions list. */
    spark_versions: DisplayNameInfoResponse[];
  }

  /**
   * LoadTableResponse.
   */
  export interface LoadTableResponse {
    /** Metadata location. */
    metadata_location?: string;
    /** Path to the table. */
    table_path?: string;
  }

  /**
   * List milvus collections.
   */
  export interface MilvusDatabaseCollections {
    /** milvus collections. */
    collections?: Milvusdbcollection[];
  }

  /**
   * milvus service details.
   */
  export interface MilvusService {
    /** bucket access key. */
    access_key?: string;
    /** Actions. */
    actions?: string[];
    /** bucket name. */
    bucket_name?: string;
    /** bucket type. */
    bucket_type?: string;
    /** Username of the user who created the watsonx.data instance. */
    created_by?: string;
    /** Created time in epoch format. */
    created_on?: number;
    /** Service description. */
    description?: string;
    /** bucket endpoint. */
    endpoint?: string;
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
    /** Origin - place holder. */
    origin?: string;
    /** root path. */
    root_path?: string;
    /** bucket secret access key. */
    secret_key?: string;
    /** Service display name. */
    service_display_name?: string;
    /** Service programmatic name. */
    service_id?: string;
    /** milvus status. */
    status?: MilvusService.Constants.Status | string;
    /** milvus status code. */
    status_code: number;
    /** Tags. */
    tags?: string[];
    /** tshirt size. */
    tshirt_size?: string;
    /** service type. */
    type?: string;
  }
  export namespace MilvusService {
    export namespace Constants {
      /** milvus status. */
      export enum Status {
        RUNNING = 'running',
        PENDING = 'pending',
        STOPPED = 'stopped',
      }
    }
  }

  /**
   * List milvus services.
   */
  export interface MilvusServiceCollection {
    /** milvus service body. */
    milvus_services?: MilvusService[];
  }

  /**
   * List milvus databases.
   */
  export interface MilvusServiceDatabases {
    /** milvus database body. */
    databases?: string[];
  }

  /**
   * milvus service details.
   */
  export interface Milvusdbcollection {
    /** milvus collection id. */
    collection_id?: number;
    /** milvus status. */
    collection_name?: string;
    /** milvus physical channels. */
    physical_channels?: string[];
    /** milvus virtual channels. */
    virtual_channels?: string[];
  }

  /**
   * Netezza engine details.
   */
  export interface NetezzaEngine {
    /** Actions. */
    actions?: string[];
    /** watsonx.data build version. */
    build_version?: string;
    /** Created user name. */
    created_by?: string;
    /** Created time in epoch format. */
    created_on?: number;
    /** Engine description. */
    description?: string;
    /** External engine details. */
    engine_details?: NetezzaEngineDetails;
    /** Engine display name. */
    engine_display_name?: string;
    /** Engine programmatic name. */
    engine_id?: string;
    /** Engine host name. In case of OCP based clusters, this is internal hostname. */
    host_name?: string;
    /** Origin - place holder. */
    origin?: string;
    /** Engine port. */
    port?: number;
    /** Engine status. */
    status?: string;
    /** Tags. */
    tags?: string[];
    /** Engine type. */
    type?: string;
  }

  /**
   * list Netezza engines.
   */
  export interface NetezzaEngineCollection {
    /** list Netezza engines. */
    netezza_engines?: NetezzaEngine[];
  }

  /**
   * External engine details.
   */
  export interface NetezzaEngineDetails {
    /** External engine connection string. */
    connection_string?: string;
    /** Metastore host. */
    metastore_host?: string;
  }

  /**
   * External engine details.
   */
  export interface NetezzaEngineDetailsBody {
    /** External engine connection string. */
    connection_string?: string;
  }

  /**
   * NodeDescription.
   */
  export interface NodeDescription {
    /** Node type. */
    node_type?: string;
    /** Quantity. */
    quantity?: number;
  }

  /**
   * coordinator/worker property settings.
   */
  export interface NodeDescriptionBody {
    /** Node Type, r5, m, i.. */
    node_type?: string;
    /** Number of nodes. */
    quantity?: number;
  }

  /**
   * external engine details.
   */
  export interface OtherEngine {
    /** Actions. */
    actions?: string[];
    /** created user name. */
    created_by?: string;
    /** created time in epoch format. */
    created_on?: number;
    /** engine description. */
    description?: string;
    /** External engine details. */
    engine_details?: OtherEngineDetails;
    /** Engine display name. */
    engine_display_name?: string;
    /** engine programmatic name. */
    engine_id?: string;
    /** Engine host name. In case of OCP based clusters, this is internal hostname. */
    host_name?: string;
    /** origin. */
    origin?: string;
    /** Engine port. */
    port?: number;
    /** engine status. */
    status?: string;
    /** Tags. */
    tags?: string[];
    /** Type like presto, netezza, external,.. */
    type?: string;
  }

  /**
   * list other engines.
   */
  export interface OtherEngineCollection {
    /** list other engines. */
    other_engines?: OtherEngine[];
  }

  /**
   * External engine details.
   */
  export interface OtherEngineDetails {
    /** external engine connection string. */
    connection_string: string;
    /** Actual engine type. */
    engine_type: string;
    /** metastore host - not required while registering an engine. */
    metastore_host?: string;
  }

  /**
   * External engine details.
   */
  export interface OtherEngineDetailsBody {
    /** External engine connection string. */
    connection_string: string;
    /** Actual engine type. */
    engine_type: string;
  }

  /**
   * Bucket object size.
   */
  export interface Path {
    /** object path. */
    path?: string;
  }

  /**
   * Endpoints.
   */
  export interface PrestissimoEndpoints {
    /** Application API. */
    applications_api?: string;
    /** History server endpoint. */
    history_server_endpoint?: string;
    /** Spark kernel endpoint. */
    spark_access_endpoint?: string;
    /** Spark jobs V4 endpoint. */
    spark_jobs_v4_endpoint?: string;
    /** Spark kernel endpoint. */
    spark_kernel_endpoint?: string;
    /** View history server. */
    view_history_server?: string;
    /** Wxd application endpoint. */
    wxd_application_endpoint?: string;
  }

  /**
   * EngineDetail.
   */
  export interface PrestissimoEngine {
    /** Actions. */
    actions?: string[];
    /** Associated catalog. */
    associated_catalogs?: string[];
    /** watsonx.data build version. */
    build_version?: string;
    /** coordinator/worker property settings. */
    coordinator?: PrestissimoNodeDescriptionBody;
    /** Created user name. */
    created_by?: string;
    /** Created time in epoch format. */
    created_on?: number;
    /** Engine description. */
    description?: string;
    /** External engine details. */
    engine_details?: PrestissimoEngineDetails;
    /** Engine display name. */
    engine_display_name?: string;
    /** Engine programmatic name. */
    engine_id?: string;
    /** Engine properties. */
    engine_properties?: PrestissimoEngineEngineProperties;
    /** Triggers engine restart if value is force. */
    engine_restart?: PrestissimoEngine.Constants.EngineRestart | string;
    /** Applicable only for OCP based clusters.  This is typically  servicename+route. */
    external_host_name: string;
    /** Group ID. */
    group_id?: string;
    /** Engine host name. In case of OCP based clusters, this is internal hostname. */
    host_name?: string;
    /** Origin - place holder. */
    origin?: PrestissimoEngine.Constants.Origin | string;
    /** Engine port. */
    port?: number;
    /** Region - place holder. */
    region?: string;
    /** RemoveEngine properties. */
    remove_engine_properties?: RemoveEngineProperties;
    /** CPD supported sizes are: custom, starter, small, medium, large, xlarge, and xxlarge. IBM cloud supported
     *  sizes are: custom, starter, small, medium, large, cache_optimized, compute_optimized and lite.
     */
    size_config?: string;
    /** Engine status. */
    status?: PrestissimoEngine.Constants.Status | string;
    /** Engine status code. */
    status_code: number;
    /** Tags. */
    tags?: string[];
    /** Engine type. */
    type?: string;
    /** Version of the engine. */
    version?: string;
    /** coordinator/worker property settings. */
    worker?: PrestissimoNodeDescriptionBody;
  }
  export namespace PrestissimoEngine {
    export namespace Constants {
      /** Triggers engine restart if value is force. */
      export enum EngineRestart {
        FORCE = 'force',
        FALSE = 'false',
      }
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
    prestissimo_engines?: PrestissimoEngine[];
  }

  /**
   * External engine details.
   */
  export interface PrestissimoEngineDetails {
    /** api key to work with the saas IAE instance. */
    api_key?: string;
    /** External engine connection string. */
    connection_string?: string;
    /** coordinator/worker property settings. */
    coordinator?: PrestissimoNodeDescriptionBody;
    /** Endpoints. */
    endpoints?: PrestissimoEndpoints;
    /** Instance to access the instance. */
    instance_id?: string;
    /** How is the spark instance managed. */
    managed_by?: string;
    /** Metastore host. */
    metastore_host?: string;
    /** CPD supported sizes are: custom, starter, small, medium, large, xlarge, and xxlarge. IBM cloud supported
     *  sizes are: custom, starter, small, medium, large, cache_optimized, compute_optimized and lite.
     */
    size_config?: PrestissimoEngineDetails.Constants.SizeConfig | string;
    /** coordinator/worker property settings. */
    worker?: PrestissimoNodeDescriptionBody;
  }
  export namespace PrestissimoEngineDetails {
    export namespace Constants {
      /** CPD supported sizes are: custom, starter, small, medium, large, xlarge, and xxlarge. IBM cloud supported sizes are: custom, starter, small, medium, large, cache_optimized, compute_optimized and lite. */
      export enum SizeConfig {
        STARTER = 'starter',
        CACHE_OPTIMIZED = 'cache_optimized',
        COMPUTE_OPTIMIZED = 'compute_optimized',
        SMALL = 'small',
        MEDIUM = 'medium',
        LARGE = 'large',
        CUSTOM = 'custom',
      }
    }
  }

  /**
   * Engine properties.
   */
  export interface PrestissimoEngineEngineProperties {
    /** Catalog settings. */
    catalog?: PrestissimoPropertiesCatalog;
    /** Configuration settings for the engine properties. */
    configuration?: EnginePropertiesOaiGenConfiguration;
    /** velox settings. */
    velox?: PrestissimoEnginePropertiesVelox;
    /** JVM settings. */
    jvm?: PrestissimoEnginePropertiesOaiGen1Jvm;
  }

  /**
   * Catalog settings.
   */
  export interface PrestissimoEnginePropertiesCatalog {
    /** catalog name. */
    catalog_name?: string[];
  }

  /**
   * JVM settings.
   */
  export interface PrestissimoEnginePropertiesOaiGen1Jvm {
    /** Coordinator/ worker properties. */
    coordinator?: JsonObject;
  }

  /**
   * velox settings.
   */
  export interface PrestissimoEnginePropertiesVelox {
    /** velox property. */
    velox_property?: string[];
  }

  /**
   * coordinator/worker property settings.
   */
  export interface PrestissimoNodeDescriptionBody {
    /** Node Type, r5, m, i.. */
    node_type?: string;
    /** Number of nodes. */
    quantity?: number;
  }

  /**
   * Catalog settings.
   */
  export interface PrestissimoPropertiesCatalog {
    /** Catalog settings. */
    catalog_name?: EnginePropertiesCatalog;
  }

  /**
   * EngineDetail.
   */
  export interface PrestoEngine {
    /** Actions. */
    actions?: string[];
    /** Associated catalogs. */
    associated_catalogs?: string[];
    /** watsonx.data build version. */
    build_version?: string;
    /** NodeDescription. */
    coordinator?: NodeDescription;
    /** Created user name. */
    created_by?: string;
    /** Created time in epoch format. */
    created_on?: number;
    /** Engine description. */
    description?: string;
    /** Driver details. */
    drivers?: Driver[];
    /** Node details. */
    engine_details?: EngineDetailsBody;
    /** Engine display name. */
    engine_display_name?: string;
    /** Engine programmatic name. */
    engine_id?: string;
    /** Engine properties. */
    engine_properties?: PrestoEngineEngineProperties;
    /** Triggers engine restart if value is force. */
    engine_restart?: PrestoEngine.Constants.EngineRestart | string;
    /** Applicable only for OCP based clusters.  This is typically  servicename+route. */
    external_host_name: string;
    /** Group ID. */
    group_id?: string;
    /** Engine host name. In case of OCP based clusters, this is internal hostname. */
    host_name?: string;
    /** Origin - created or registered. */
    origin?: PrestoEngine.Constants.Origin | string;
    /** Engine port. */
    port?: number;
    /** Region (cloud). */
    region?: string;
    /** RemoveEngine properties. */
    remove_engine_properties?: PrestoEnginePatchRemoveEngineProperties;
    /** CPD supported sizes are: custom, starter, small, medium, large, xlarge, and xxlarge. IBM cloud supported
     *  sizes are: custom, starter, small, medium, large, cache_optimized, compute_optimized and lite.
     */
    size_config?: string;
    /** Engine status. */
    status?: PrestoEngine.Constants.Status | string;
    /** Engine status code. */
    status_code: number;
    /** Tags. */
    tags?: string[];
    /** Engine type presto. */
    type?: string;
    /** Version of the engine. */
    version?: string;
    /** NodeDescription. */
    worker?: NodeDescription;
  }
  export namespace PrestoEngine {
    export namespace Constants {
      /** Triggers engine restart if value is force. */
      export enum EngineRestart {
        FORCE = 'force',
        FALSE = 'false',
      }
      /** Origin - created or registered. */
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
   * List Presto engines.
   */
  export interface PrestoEngineCollection {
    /** Presto engine. */
    presto_engines?: PrestoEngine[];
  }

  /**
   * Engine properties.
   */
  export interface PrestoEngineEngineProperties {
    /** Catalog settings. */
    catalog?: PrestoEnginePropertiesCatalog;
    /** Configuration settings. */
    configuration?: EnginePropertiesOaiGen1Configuration;
    /** Event Listener settings. */
    event_listener?: PrestoEnginePropertiesEventListener;
    /** Global session is to accomodate all the custom properties that can be applicable for both coordinator and
     *  worker.
     */
    global?: PrestoEnginePropertiesGlobal;
    /** JVM settings. */
    jvm?: EnginePropertiesOaiGen1Jvm;
    /** JMX Exporter config settings. */
    jmx_exporter_config?: PrestoEnginePropertiesJMX;
    /** Log Configuration settings. */
    log_config?: EnginePropertiesLogConfiguration;
  }

  /**
   * RemoveEngine properties.
   */
  export interface PrestoEnginePatchRemoveEngineProperties {
    /** Catalog settings. */
    catalog?: PrestoEnginePropertiesCatalog;
    /** Configuration settings for removing engine properties. */
    configuration?: RemoveEnginePropertiesOaiGenConfiguration;
    /** JVM properties. */
    jvm?: RemoveEnginePropertiesOaiGenJvm;
    event_listener?: string[];
    global?: string[];
    jmx_exporter_config?: string[];
    /** JVM properties. */
    log_config?: RemoveEnginePropertiesLogConfig;
  }

  /**
   * Catalog settings.
   */
  export interface PrestoEnginePropertiesCatalog {
    /** Catalog settings. */
    catalog_name?: EnginePropertiesCatalog;
  }

  /**
   * Event Listener settings.
   */
  export interface PrestoEnginePropertiesEventListener {
    /** Event listener properties. */
    event_listener_property?: string;
  }

  /**
   * Global session is to accomodate all the custom properties that can be applicable for both coordinator and worker.
   */
  export interface PrestoEnginePropertiesGlobal {
    /** Global property settings. */
    global_property?: string;
  }

  /**
   * JMX Exporter config settings.
   */
  export interface PrestoEnginePropertiesJMX {
    /** JMX Exporter config settings. */
    global_property?: string;
  }

  /**
   * Schema of the data in the source file.
   */
  export interface PreviewIngestionFile {
    /** Array of column names of the table. */
    column_names: string[];
    /** Array of column types of the table. */
    column_types: string[];
    /** Name of the file being previewed. */
    file_name: string;
    /** First 10 rows of the table. */
    rows: PreviewIngestionFileRows;
  }

  /**
   * CSV properties of source file(s).
   */
  export interface PreviewIngestionFilePrototypeCsvProperty {
    /** Encoding used in CSV file. */
    encoding?: string;
    /** Escape character of CSV file. */
    escape_character?: string;
    /** Field delimiter of CSV file. */
    field_delimiter?: string;
    /** Identify if header exists in CSV file. */
    header?: boolean;
    /** Line delimiter of CSV file. */
    line_delimiter?: string;
  }

  /**
   * First 10 rows of the table.
   */
  export interface PreviewIngestionFileRows {
    /** Each rows slice. */
    row_eight?: string[];
    /** Each rows slice. */
    row_five?: string[];
    /** Each rows slice. */
    row_four?: string[];
    /** Each rows slice. */
    row_nine?: string[];
    /** Each rows slice. */
    row_one?: string[];
    /** Each rows slice. */
    row_seven?: string[];
    /** Each rows slice. */
    row_six?: string[];
    /** Each rows slice. */
    row_ten?: string[];
    /** Each rows slice. */
    row_three?: string[];
    /** Each rows slice. */
    row_two?: string[];
  }

  /**
   * success response.
   */
  export interface RegisterTableCreatedBody {
    /** Response of success. */
    response?: SuccessResponse;
  }

  /**
   * RemoveEngine properties.
   */
  export interface RemoveEngineProperties {
    /** Catalog settings. */
    catalog?: PrestissimoEnginePropertiesCatalog;
    /** remove engine properties configuration. */
    configuration?: RemoveEnginePropertiesConfiguration;
    /** JVM properties. */
    jvm?: RemoveEnginePropertiesPrestissimoOaiGenJvm;
    /** velox description. */
    velox?: string[];
  }

  /**
   * remove engine properties configuration.
   */
  export interface RemoveEnginePropertiesConfiguration {
    /** description for coordinator property. */
    coordinator?: string[];
    /** description for worker property. */
    worker?: string[];
  }

  /**
   * JVM properties.
   */
  export interface RemoveEnginePropertiesLogConfig {
    /** List of coordinator properties. */
    coordinator?: string[];
    /** List of worker properties. */
    worker?: string[];
  }

  /**
   * Configuration settings for removing engine properties.
   */
  export interface RemoveEnginePropertiesOaiGenConfiguration {
    /** List of coordinator properties. */
    coordinator?: string[];
    /** List of worker properties. */
    worker?: string[];
  }

  /**
   * JVM properties.
   */
  export interface RemoveEnginePropertiesOaiGenJvm {
    /** List of coordinator properties. */
    coordinator?: string[];
    /** List of worker properties. */
    worker?: string[];
  }

  /**
   * JVM properties.
   */
  export interface RemoveEnginePropertiesPrestissimoOaiGenJvm {
    /** List of coordinator properties. */
    coordinator?: string[];
  }

  /**
   * success response.
   */
  export interface ReplaceSnapshotCreatedBody {
    /** Response of success. */
    response?: SuccessResponse;
  }

  /**
   * ResultExecuteQuery OK.
   */
  export interface ResultExecuteQuery {
    /** Query result in JSON format. */
    result?: JsonObject[];
  }

  /**
   * ExplainStatement OK.
   */
  export interface ResultPrestissimoExplainStatement {
    /** Result. */
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
   * explainAnalyzeStatement OK.
   */
  export interface RunExplainAnalyzeStatementOKBody {
    /** Response of success. */
    response: SuccessResponse;
    /** explainAnalyzeStatement result. */
    result: string;
  }

  /**
   * ExplainStatement OK.
   */
  export interface RunExplainStatementOKBody {
    /** Response of success. */
    response: SuccessResponse;
    /** Result. */
    result: string;
  }

  /**
   * Sal Integration object.
   */
  export interface SalIntegration {
    /** category UUID. */
    category_id?: string;
    /** engine id. */
    engine_id?: string;
    /** errors. */
    errors?: ErrorObj[];
    /** governance scope UUID. */
    governance_scope_id?: string;
    /** governance scope type. */
    governance_scope_type?: string;
    /** instance_id. */
    instance_id?: string;
    /** status of the integration. */
    status?: string;
    /** COS resource CRN. */
    storage_resource_crn?: string;
    /** COS storage type. */
    storage_type?: string;
    /** sal integration creation timestamp. */
    timestamp?: string;
    /** whether the integration is trial plan. */
    trial_plan?: boolean;
    /** user name. */
    username?: string;
  }

  /**
   * sal integration enrichment assets.
   */
  export interface SalIntegrationEnrichmentAssets {
    /** Encrichment asset. */
    enrichment_asset?: EnrichmentAsset;
  }

  /**
   * semantic enrichment data asset.
   */
  export interface SalIntegrationEnrichmentDataAsset {
    /** name. */
    asset?: string;
  }

  /**
   * semantic enrichment job run.
   */
  export interface SalIntegrationEnrichmentJobRun {
    /** job run response. */
    response?: string;
  }

  /**
   * semantic enrichment job run logs.
   */
  export interface SalIntegrationEnrichmentJobRunLogs {
    /** results. */
    results?: string[];
    /** name. */
    total_count?: number;
  }

  /**
   * Sal Integration Mappings object.
   */
  export interface SalIntegrationEnrichmentJobs {
    /** catalog name. */
    jobs?: SalIntegrationEnrichmentJobsProperties;
  }

  /**
   * catalog name.
   */
  export interface SalIntegrationEnrichmentJobsProperties {
    /** Array of result items. */
    results?: SalIntegrationEnrichmentJobsResultItem[];
    /** Total number of rows. */
    total_rows?: number;
  }

  /**
   * A single result item containing entity and metadata.
   */
  export interface SalIntegrationEnrichmentJobsResultItem {
    /** Entity details including job information. */
    entity?: SalIntegrationEnrichmentJobsResultItemEntity;
    /** Metadata information about the job. */
    metadata?: SalIntegrationEnrichmentJobsResultItemMetadata;
  }

  /**
   * Entity details including job information.
   */
  export interface SalIntegrationEnrichmentJobsResultItemEntity {
    /** Details about the job. */
    job?: SalIntegrationEnrichmentJobsResultItemEntityJob;
  }

  /**
   * Details about the job.
   */
  export interface SalIntegrationEnrichmentJobsResultItemEntityJob {
    /** Reference ID for the asset. */
    asset_ref?: string;
    /** Type of the asset reference. */
    asset_ref_type?: string;
    /** Configuration settings for the job. */
    configuration?: SalIntegrationEnrichmentJobsResultItemEntityJobConfiguration;
    /** Flag indicating if notifications are enabled for the job. */
    enable_notifications?: boolean;
    /** List of future scheduled run times. */
    future_scheduled_runs?: string[];
    /** Initiator of the last run. */
    last_run_initiator?: string;
    /** Status of the last run. */
    last_run_status?: string;
    /** Timestamp of the last run status. */
    last_run_status_timestamp?: number;
    /** Time of the last run. */
    last_run_time?: string;
    /** Name of the project associated with the job. */
    project_name?: string;
    /** ID of the creator of the schedule. */
    schedule_creator_id?: string;
    /** ID of the schedule. */
    schedule_id?: string;
    /** Information about the schedule. */
    schedule_info?: ScheduleInfo;
    /** Credentials support information for the task. */
    task_credentials_support?: SalIntegrationEnrichmentJobsResultItemEntityTaskCredentialsSupport;
  }

  /**
   * Configuration settings for the job.
   */
  export interface SalIntegrationEnrichmentJobsResultItemEntityJobConfiguration {
    /** The environment type. */
    env_type?: string;
    /** Environment variables for the job. */
    env_variables?: string[];
  }

  /**
   * Credentials support information for the task.
   */
  export interface SalIntegrationEnrichmentJobsResultItemEntityTaskCredentialsSupport {
    /** The account ID associated with the task. */
    account_id?: string;
    /** Indicates if task credentials are enabled. */
    task_credentials_enabled?: boolean;
    /** The user ID associated with the task. */
    user_id?: string;
  }

  /**
   * Metadata information about the job.
   */
  export interface SalIntegrationEnrichmentJobsResultItemMetadata {
    /** The ID of the asset. */
    asset_id?: string;
    /** Name of the job. */
    name?: string;
    /** ID of the owner of the job. */
    owner_id?: string;
    /** Version of the job. */
    version?: number;
  }

  /**
   * Sal Integration Enrichment Settings objects.
   */
  export interface SalIntegrationEnrichmentSettings {
    /** semantic expansion. */
    semantic_expansion?: SalIntegrationEnrichmentSettingsSemanticExpansion;
    /** semantic expansion. */
    term_assignment?: SalIntegrationEnrichmentSettingsTermAssignment;
  }

  /**
   * semantic expansion.
   */
  export interface SalIntegrationEnrichmentSettingsSemanticExpansion {
    /** description generation. */
    description_generation?: boolean;
    /** description generation configuration. */
    description_generation_configuration?: SalIntegrationEnrichmentSettingsSemanticExpansionDescriptionGenerationConfiguration;
    /** name expansion. */
    name_expansion?: boolean;
    /** name expansion configuration. */
    name_expansion_configuration?: SalIntegrationEnrichmentSettingsSemanticExpansionNameExpansionConfiguration;
  }

  /**
   * description generation configuration.
   */
  export interface SalIntegrationEnrichmentSettingsSemanticExpansionDescriptionGenerationConfiguration {
    /** assignment threshold. */
    assignment_threshold?: number;
    /** suggestion threshold. */
    suggestion_threshold?: number;
  }

  /**
   * name expansion configuration.
   */
  export interface SalIntegrationEnrichmentSettingsSemanticExpansionNameExpansionConfiguration {
    /** assignment threshold. */
    assignment_threshold?: number;
    /** suggestion threshold. */
    suggestion_threshold?: number;
  }

  /**
   * semantic expansion.
   */
  export interface SalIntegrationEnrichmentSettingsTermAssignment {
    /** class based assignments. */
    class_based_assignments?: boolean;
    /** evaluate negative assignments. */
    evaluate_negative_assignments?: boolean;
    /** llm based assignments. */
    llm_based_assignments?: boolean;
    /** ml based assignments custom. */
    ml_based_assignments_custom?: boolean;
    /** ml based assignments default. */
    ml_based_assignments_default?: boolean;
    /** name matching. */
    name_matching?: boolean;
    /** term assignment threshold. */
    term_assignment_threshold?: number;
    /** term suggestion threshold. */
    term_suggestion_threshold?: number;
  }

  /**
   * Sal integration glossary terms.
   */
  export interface SalIntegrationGlossaryTerms {
    /** glossary object. */
    glossary_term?: GlossaryObject;
  }

  /**
   * Sal Integration Mappings object.
   */
  export interface SalIntegrationMappings {
    /** catalog name. */
    wkc_catalog_id?: string;
    /** operation type. */
    wkc_project_id?: string;
  }

  /**
   * Sal Integration Upload Glossary.
   */
  export interface SalIntegrationUploadGlossary {
    /** catalog name. */
    process_id?: string;
  }

  /**
   * Sal Integration Upload Glossary Status.
   */
  export interface SalIntegrationUploadGlossaryStatus {
    /** catalog status. */
    response?: string;
  }

  /**
   * Information about the schedule.
   */
  export interface ScheduleInfo {
    /** Frequency of schedule execution (e.g., daily, weekly, monthly). */
    frequency?: string;
  }

  /**
   * Summary of the schema response.
   */
  export interface SchemaResponse {
    /** The bucket linked to the catalog. */
    bucket?: string;
    /** The catalog that this schema is associated to. */
    catalog?: string;
    /** Response message string. */
    message?: string;
    /** Message code string. */
    message_code?: string;
    /** Owner of the bucket. */
    owner?: string;
    /** Summary of the schema response. */
    schema?: SchemaResponseSummary;
    /** Name of the schema. */
    schema_name?: string;
  }

  /**
   * Schema response for list all schemas.
   */
  export interface SchemaResponseCollection {
    /** Response message string. */
    message?: string;
    /** Message code string. */
    message_code?: string;
    /** A list of all schemas. */
    schemas?: SchemaResponseSummary[];
  }

  /**
   * Summary of the schema response.
   */
  export interface SchemaResponseSummary {
    /** The bucket linked to the catalog. */
    bucket?: string;
    /** The catalog that this schema is associated to. */
    catalog?: string;
    /** Owner of the bucket. */
    owner?: string;
    /** Name of the schema. */
    schema_name?: string;
  }

  /**
   * Details of engines or services for a specific target type.
   */
  export interface ServicesDetails {
    /** List of engines or services details. */
    engines_services: ConnectionPropertiesDetails[];
  }

  /**
   * Spark applications details configuration.
   */
  export interface SparkApplicationConfig {
    /** spark_sample_config_properpty. */
    spark_sample_config_properpty?: string;
  }

  /**
   * Application details.
   */
  export interface SparkApplicationDetails {
    /** Application. */
    application?: string;
    /** List of arguments. */
    arguments?: string[];
    /** Class. */
    class?: string;
    /** Spark applications details configuration. */
    conf?: SparkApplicationConfig;
    /** Spark applications details env samples. */
    env?: SparkApplicationEnv;
    /** Files. */
    files?: string;
    /** Jars. */
    jars?: string;
    /** Display name of the spark application. */
    name?: string;
    /** Packages. */
    packages?: string;
    /** Repositories. */
    repositories?: string;
    /** Spark Version. */
    spark_version?: string;
  }

  /**
   * Spark applications details env samples.
   */
  export interface SparkApplicationEnv {
    /** sample. */
    sample_env_key?: string;
  }

  /**
   * Spark Default Config details.
   */
  export interface SparkDefaultConfig {
    /** config1. */
    config1?: string;
    /** config2. */
    config2?: string;
  }

  /**
   * Application Endpoints.
   */
  export interface SparkEndpoints {
    /** Application API. */
    applications_api?: string;
    /** History server endpoint. */
    history_server_endpoint?: string;
    /** Spark kernel endpoint. */
    spark_access_endpoint?: string;
    /** Spark jobs V4 endpoint. */
    spark_jobs_v4_endpoint?: string;
    /** Spark kernel endpoint. */
    spark_kernel_endpoint?: string;
    /** View history server. */
    view_history_server?: string;
    /** Wxd application endpoint. */
    wxd_application_endpoint?: string;
    /** Wxd engine endpoint. */
    wxd_engine_endpoint?: string;
    /** Wxd history_server endpoint. */
    wxd_history_server_endpoint?: string;
    /** Wxd history_server endpoint. */
    wxd_history_server_ui_endpoint?: string;
  }

  /**
   * EngineDetail.
   */
  export interface SparkEngine {
    /** Actions. */
    actions?: string[];
    /** Associated catalogs. */
    associated_catalogs?: string[];
    /** watsonx.data build version. */
    build_version?: string;
    /** Created user name. */
    created_by?: string;
    /** Created time in epoch format. */
    created_on?: number;
    /** Engine description. */
    description?: string;
    /** External engine details. */
    engine_details?: SparkEngineDetails;
    /** Engine display name. */
    engine_display_name?: string;
    /** Engine programmatic name. */
    engine_id?: string;
    /** Origin - created or registered. */
    origin?: SparkEngine.Constants.Origin | string;
    /** Engine status. */
    status?: string;
    /** Tags. */
    tags?: string[];
    /** Type like spark, netezza,.. */
    type?: SparkEngine.Constants.Type | string;
  }
  export namespace SparkEngine {
    export namespace Constants {
      /** Origin - created or registered. */
      export enum Origin {
        EXTERNAL = 'external',
        DISCOVER = 'discover',
        NATIVE = 'native',
      }
      /** Type like spark, netezza,.. */
      export enum Type {
        SPARK = 'spark',
      }
    }
  }

  /**
   * Engine Application Status.
   */
  export interface SparkEngineApplicationStatus {
    /** Application details. */
    application_details?: SparkApplicationDetails;
    /** Application ID. */
    application_id?: string;
    /** Auto Termination Time. */
    auto_termination_time?: string;
    /** Creation time. */
    creation_time?: string;
    /** Deployment mode. */
    deploy_mode?: string;
    /** End Time. */
    end_time?: string;
    /** Failed time. */
    failed_time?: string;
    /** Finish time. */
    finish_time?: string;
    /** Application ID. */
    id?: string;
    /** Job endpoint. */
    job_endpoint?: string;
    /** Return code. */
    return_code?: string;
    /** application run time. */
    runtime?: SparkEngineApplicationStatusRuntime;
    /** Service Instance ID for POST. */
    service_instance_id?: string;
    /** Spark application ID. */
    spark_application_id?: string;
    /** Spark application name. */
    spark_application_name?: string;
    /** Spark Version. */
    spark_version?: string;
    /** Start time. */
    start_time?: string;
    /** Application state. */
    state?: string;
    /** Application state details. */
    state_details?: SparkEngineApplicationStatusStateDetailsItems[];
    /** Application submission time. */
    submission_time?: string;
    /** Template ID. */
    template_id?: string;
    /** Engine Type. */
    type?: SparkEngineApplicationStatus.Constants.Type | string;
    /** Spark application volumes to mount. */
    volumes?: SparkVolumeDetails[];
    /** Wxd history_server endpoint. */
    wxd_application_ui_endpoint?: string;
  }
  export namespace SparkEngineApplicationStatus {
    export namespace Constants {
      /** Engine Type. */
      export enum Type {
        IAE = 'iae',
        EMR = 'emr',
      }
    }
  }

  /**
   * Engine Application Detail.
   */
  export interface SparkEngineApplicationStatusCollection {
    /** Application body. */
    applications?: SparkEngineApplicationStatus[];
  }

  /**
   * application run time.
   */
  export interface SparkEngineApplicationStatusRuntime {
    /** Spark Version. */
    spark_version?: string;
  }

  /**
   * State details.
   */
  export interface SparkEngineApplicationStatusStateDetailsItems {
    /** State details code. */
    code?: string;
    /** State details message. */
    message?: string;
    /** State details type. */
    type?: string;
  }

  /**
   * List spark engines.
   */
  export interface SparkEngineCollection {
    /** List spark engines. */
    spark_engines?: SparkEngine[];
  }

  /**
   * External engine details.
   */
  export interface SparkEngineDetails {
    /** api key to work with the saas IAE instance. */
    api_key?: string;
    /** External engine connection string. */
    connection_string?: string;
    /** Spark Default Config details. */
    default_config?: SparkDefaultConfig;
    /** The default spark version for the native engine. */
    default_version?: string;
    /** Application Endpoints. */
    endpoints?: SparkEndpoints;
    /** Default bucket for spark. */
    engine_home_bucket_display_name?: string;
    /** Default bucket for spark. */
    engine_home_bucket_name?: string;
    /** Path for spark. */
    engine_home_path?: string;
    /** Default volume for spark. */
    engine_home_volume?: string;
    /** Default volume for spark. */
    engine_home_volume_id?: string;
    /** Name of the volume. */
    engine_home_volume_name?: string;
    /** Storage class of the volume. */
    engine_home_volume_storage_class?: string;
    /** Storage size of the volume. */
    engine_home_volume_storage_size?: string;
    /** Instance to access the instance. */
    instance_id?: string;
    /** spark engine sub type. */
    engine_sub_type?: string;
    /** How is the spark instance managed. */
    managed_by?: string;
    /** Spark instance scale configuration. */
    scale_config?: SparkScaleConfig;
  }

  /**
   * Node details.
   */
  export interface SparkEngineDetailsPrototype {
    /** api key to work with the saas IAE instance. */
    api_key?: string;
    /** External engine connection string. */
    connection_string?: string;
    /** Spark Default Config details. */
    default_config?: SparkDefaultConfig;
    /** The default spark version for the native engine. */
    default_version?: string;
    /** Default bucket name for spark. */
    engine_home_bucket_display_name?: string;
    /** Default bucket for spark. */
    engine_home_bucket_name?: string;
    /** Path for spark. */
    engine_home_path?: string;
    /** Default volume for spark. */
    engine_home_volume_id?: string;
    /** Name of the volume. */
    engine_home_volume_name?: string;
    /** Storage class of the volume. */
    engine_home_volume_storage_class?: string;
    /** Storage size of the volume. */
    engine_home_volume_storage_size?: string;
    /** spark engine sub type. */
    engine_sub_type?: string;
    /** Instance to access the instance. */
    instance_id?: string;
    /** How is the spark instance managed. */
    managed_by?: string;
    /** Spark instance scale configuration. */
    scale_config?: SparkScaleConfig;
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
   * Native spark history server.
   */
  export interface SparkHistoryServer {
    /** History server start time. */
    auto_termination_time?: string;
    /** History server cores. */
    cores?: string;
    /** History server memory. */
    memory?: string;
    /** History server start time. */
    start_time?: string;
    /** History server state. */
    state?: string;
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
    node_type?: string;
    /** Node count. */
    number_of_nodes?: number;
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
   * storage details.
   */
  export interface StorageDetails {
    /** Access key ID, encrypted during bucket registration. */
    access_key?: string;
    /** Application Id for bucket registration. */
    application_id?: string;
    /** Auth mode types. */
    auth_mode: string;
    /** actual container name. */
    container_name: string;
    /** Directory Id for bucket registration. */
    directory_id?: string;
    /** ADLS endpoint. */
    endpoint: string;
    /** sas token, encrypted during bucket registration. */
    sas_token?: string;
    /** Secret access key, encrypted during bucket registration. */
    secret_key?: string;
    /** actual storage name. */
    storage_account_name: string;
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
   * GetColumns OK.
   */
  export interface Table {
    /** Columns. */
    columns?: Column[];
    /** Table name. */
    table_name?: string;
  }

  /**
   * tables list.
   */
  export interface TableCollection {
    /** List of the tables present in the schema. */
    tables?: string[];
  }

  /**
   * TableColumDetail.
   */
  export interface TableColumDetail {
    /** Bucket linked to the catalog. */
    bucket?: string;
    /** Catalog that this table belongs to. */
    catalog?: string;
    /** List of all column information about the table. */
    columns?: TableColumDetailColumnsItems[];
    /** Name of the user who created the table. */
    owner?: string;
    /** Schema that this table belongs to. */
    schema?: string;
    /** Name of the table. */
    table?: string;
  }

  /**
   * TableColumDetailColumnsItems.
   */
  export interface TableColumDetailColumnsItems {
    /** Name of the column. */
    column?: string;
    /** column idx_integer. */
    index?: number;
    /** data type for the column. */
    type?: string;
  }

  /**
   * Table response.
   */
  export interface TableResponse {
    /** Response message string. */
    message?: string;
    /** Message code string. */
    message_code?: string;
    /** A list of all tables. */
    tables?: TableColumDetail[];
  }

  /**
   * Table response collection.
   */
  export interface TableResponseCollection {
    /** Response message string. */
    message?: string;
    /** Message code string. */
    message_code?: string;
    /** A list of all tables. */
    tables?: TableResponse[];
  }

  /**
   * TableSnapshot.
   */
  export interface TableSnapshot {
    /** Added data files. */
    added_data_files?: string;
    /** Added files size. */
    added_files_size?: string;
    /** Added records. */
    added_records?: string;
    /** Changed partition count. */
    changed_partition_count?: string;
    /** Committed at. */
    committed_at?: string;
    /** Operation. */
    operation?: string;
    /** Snapshot id. */
    snapshot_id?: string;
    /** Total data files. */
    total_data_files?: string;
    /** Total delete files. */
    total_delete_files?: string;
    /** Total equality deletes. */
    total_equality_deletes?: string;
    /** Total position deletes. */
    total_position_deletes?: string;
    /** Total records. */
    total_records?: string;
  }

  /**
   * TableSnapshot OK.
   */
  export interface TableSnapshotCollection {
    /** Snapshots. */
    snapshots?: TableSnapshot[];
  }

  /**
   * Engine details.
   */
  export interface UpdateSparkEngineBodyEngineDetails {
    /** Dynamic dict. */
    default_config?: JsonObject;
    /** The default spark version for the native engine. */
    default_version?: string;
    /** Default bucket for spark. */
    engine_home_bucket_name?: string;
    /** Resource limit enabled flag. */
    resource_limit_enabled?: boolean;
    /** Native spark engine resource quota. */
    resource_limits?: SparkEngineResourceLimit;
  }

  /**
   * success response.
   */
  export interface UpdateSyncCatalogOKBody {
    /** Response of success. */
    response?: SuccessResponse;
  }

  /**
   * List all Instance Details.
   */
  export interface WatsonxInstanceDetailsCollection {
    /** Engines and Services. */
    engines_services?: EngineServiceDetailsCollection[];
    /** Watsonx Instance Details. */
    watsonx_data_instance?: Details;
  }

  /*************************
   * pager classes
   ************************/

  /**
   * IngestionJobsPager can be used to simplify the use of listIngestionJobs().
   */
  export class IngestionJobsPager {
    protected _hasNext: boolean;

    protected pageContext: any;

    protected client: WatsonxDataV2;

    protected params: WatsonxDataV2.ListIngestionJobsParams;

    /**
     * Construct a IngestionJobsPager object.
     *
     * @param {WatsonxDataV2}  client - The service client instance used to invoke listIngestionJobs()
     * @param {Object} params - The parameters to be passed to listIngestionJobs()
     * @constructor
     * @returns {IngestionJobsPager}
     */
    constructor(client: WatsonxDataV2, params: WatsonxDataV2.ListIngestionJobsParams) {
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
     * @returns {Promise<WatsonxDataV2.IngestionJob[]>}
     */
    public async getNext(): Promise<WatsonxDataV2.IngestionJob[]> {
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
      return result.ingestion_jobs;
    }

    /**
     * Returns all results by invoking listIngestionJobs() repeatedly until all pages of results have been retrieved.
     * @returns {Promise<WatsonxDataV2.IngestionJob[]>}
     */
    public async getAll(): Promise<WatsonxDataV2.IngestionJob[]> {
      const results: IngestionJob[] = [];
      while (this.hasNext()) {
        const nextPage = await this.getNext();
        results.push(...nextPage);
      }
      return results;
    }
  }
}

export = WatsonxDataV2;
