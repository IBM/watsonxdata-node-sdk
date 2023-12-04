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

/**
 * IBM OpenAPI SDK Code Generator Version: 3.82.1-2082d402-20231115-195014
 */

import * as extend from 'extend';
import { IncomingHttpHeaders, OutgoingHttpHeaders } from 'http';
import {
  Authenticator,
  BaseService,
  UserOptions,
  getAuthenticatorFromEnvironment,
  validateParams,
} from 'ibm-cloud-sdk-core';
import { getSdkHeaders } from '../lib/common';

/**
 * This is the Public API for IBM watsonx.data
 *
 * API Version: 2.0.0
 */

class WatsonxDataV2 extends BaseService {
  static DEFAULT_SERVICE_URL: string = 'https://ibmcloud/lakehouse/api/v2';

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
   * @param {string} [options.serviceUrl] - The URL for the service
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
   * @param {string} [options.serviceUrl] - The base url to use when contacting the service. The base url may differ between IBM Cloud regions.
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ListBucketRegistrationsOKBody>>}
   */
  public listBucketRegistrations(
    params?: WatsonxDataV2.ListBucketRegistrationsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ListBucketRegistrationsOKBody>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'headers'];
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
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {BucketDetails} params.bucketDetails - bucket details.
   * @param {string} params.bucketType - bucket type.
   * @param {string} params.catalogName - catalog name.
   * @param {string} params.description - bucket description.
   * @param {string} params.managedBy - managed by.
   * @param {string} params.tableType - Table type.
   * @param {string} [params.bucketDisplayName] - bucket display name.
   * @param {string[]} [params.bucketTags] - tags.
   * @param {string[]} [params.catalogTags] - catalog tags.
   * @param {string} [params.region] - region where the bucket is located.
   * @param {string} [params.state] - mark bucket active or inactive.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateBucketRegistrationCreatedBody>>}
   */
  public createBucketRegistration(
    params: WatsonxDataV2.CreateBucketRegistrationParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateBucketRegistrationCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = [
      'bucketDetails',
      'bucketType',
      'catalogName',
      'description',
      'managedBy',
      'tableType',
    ];
    const _validParams = [
      'bucketDetails',
      'bucketType',
      'catalogName',
      'description',
      'managedBy',
      'tableType',
      'bucketDisplayName',
      'bucketTags',
      'catalogTags',
      'region',
      'state',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'bucket_details': _params.bucketDetails,
      'bucket_type': _params.bucketType,
      'catalog_name': _params.catalogName,
      'description': _params.description,
      'managed_by': _params.managedBy,
      'table_type': _params.tableType,
      'bucket_display_name': _params.bucketDisplayName,
      'bucket_tags': _params.bucketTags,
      'catalog_tags': _params.catalogTags,
      'region': _params.region,
      'state': _params.state,
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
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.GetBucketRegistrationOKBody>>}
   */
  public getBucketRegistration(
    params: WatsonxDataV2.GetBucketRegistrationParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.GetBucketRegistrationOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['bucketId'];
    const _validParams = ['bucketId', 'authInstanceId', 'headers'];
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
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Unregister Bucket.
   *
   * Unregister a bucket.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bucketId - bucket id.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteBucketRegistration(
    params: WatsonxDataV2.DeleteBucketRegistrationParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['bucketId'];
    const _validParams = ['bucketId', 'authInstanceId', 'headers'];
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
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {JsonPatchOperation[]} params.body - Request body.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.UpdateBucketRegistrationOKBody>>}
   */
  public updateBucketRegistration(
    params: WatsonxDataV2.UpdateBucketRegistrationParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.UpdateBucketRegistrationOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['bucketId', 'body'];
    const _validParams = ['bucketId', 'body', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const { body } = _params;
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
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json-patch+json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateActivateBucketCreatedBody>>}
   */
  public createActivateBucket(
    params: WatsonxDataV2.CreateActivateBucketParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateActivateBucketCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['bucketId'];
    const _validParams = ['bucketId', 'authInstanceId', 'headers'];
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
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteDeactivateBucket(
    params: WatsonxDataV2.DeleteDeactivateBucketParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['bucketId'];
    const _validParams = ['bucketId', 'authInstanceId', 'headers'];
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
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ListBucketObjectsOKBody>>}
   */
  public listBucketObjects(
    params: WatsonxDataV2.ListBucketObjectsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ListBucketObjectsOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['bucketId'];
    const _validParams = ['bucketId', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'bucket_id': _params.bucketId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'listBucketObjects');

    const parameters = {
      options: {
        url: '/bucket_registrations/{bucket_id}/objects',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Check bucket credentials to be valid.
   *
   * Check whether provided bucket credentials are valid or not.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accessKey - access key to access the bucket.
   * @param {string} params.bucketName - name of the bucket to be checked.
   * @param {string} params.bucketType - type of bucket that is selected.
   * @param {string} params.endpoint - endpoint to reach the bucket.
   * @param {string} params.region - bucket region.
   * @param {string} params.secretKey - secret key to access the bucket.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.TestBucketConnectionOKBody>>}
   */
  public testBucketConnection(
    params: WatsonxDataV2.TestBucketConnectionParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.TestBucketConnectionOKBody>> {
    const _params = { ...params };
    const _requiredParams = [
      'accessKey',
      'bucketName',
      'bucketType',
      'endpoint',
      'region',
      'secretKey',
    ];
    const _validParams = [
      'accessKey',
      'bucketName',
      'bucketType',
      'endpoint',
      'region',
      'secretKey',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'access_key': _params.accessKey,
      'bucket_name': _params.bucketName,
      'bucket_type': _params.bucketType,
      'endpoint': _params.endpoint,
      'region': _params.region,
      'secret_key': _params.secretKey,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'testBucketConnection'
    );

    const parameters = {
      options: {
        url: '/test_bucket_connection',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * databases
   ************************/

  /**
   * Add/Create database with driver.
   *
   * Add or create a new database with driver.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.databaseDisplayName - Database display name.
   * @param {string} params.databaseType - Connector type.
   * @param {string} params.catalogName - Catalog name.
   * @param {string} params.hostname - Host name.
   * @param {string} params.port - Port.
   * @param {NodeJS.ReadableStream | Buffer} [params.driver] - Driver file to upload.
   * @param {string} [params.driverContentType] - The content type of driver.
   * @param {string} [params.driverFileName] - Name of the driver file.
   * @param {string} [params.certificate] - contents of a pem/crt file.
   * @param {string} [params.certificateExtension] - extension of the certificate file.
   * @param {string} [params.ssl] - SSL Mode.
   * @param {string} [params.username] - Username.
   * @param {string} [params.password] - Psssword.
   * @param {string} [params.databaseName] - Database name.
   * @param {string} [params.description] - Database description.
   * @param {string} [params.createdOn] - Created on.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateDriverDatabaseCatalogCreatedBody>>}
   */
  public createDriverDatabaseCatalog(
    params: WatsonxDataV2.CreateDriverDatabaseCatalogParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateDriverDatabaseCatalogCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = [
      'databaseDisplayName',
      'databaseType',
      'catalogName',
      'hostname',
      'port',
    ];
    const _validParams = [
      'databaseDisplayName',
      'databaseType',
      'catalogName',
      'hostname',
      'port',
      'driver',
      'driverContentType',
      'driverFileName',
      'certificate',
      'certificateExtension',
      'ssl',
      'username',
      'password',
      'databaseName',
      'description',
      'createdOn',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const formData = {
      'database_display_name': _params.databaseDisplayName,
      'database_type': _params.databaseType,
      'catalog_name': _params.catalogName,
      'hostname': _params.hostname,
      'port': _params.port,
      'driver': {
        data: _params.driver,
        contentType: _params.driverContentType,
      },
      'driver_file_name': _params.driverFileName,
      'certificate': _params.certificate,
      'certificate_extension': _params.certificateExtension,
      'ssl': _params.ssl,
      'username': _params.username,
      'password': _params.password,
      'database_name': _params.databaseName,
      'description': _params.description,
      'created_on': _params.createdOn,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'createDriverDatabaseCatalog'
    );

    const parameters = {
      options: {
        url: '/database_driver_registrations',
        method: 'POST',
        formData,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get databases.
   *
   * Get list of databases.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ListDatabaseRegistrationsOKBody>>}
   */
  public listDatabaseRegistrations(
    params?: WatsonxDataV2.ListDatabaseRegistrationsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ListDatabaseRegistrationsOKBody>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'headers'];
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
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} params.catalogName - Catalog name.
   * @param {string} params.databaseDisplayName - Database display name.
   * @param {string} params.databaseType - Connector type.
   * @param {number} [params.createdOn] - Created on.
   * @param {RegisterDatabaseCatalogBodyDatabaseDetails} [params.databaseDetails] - database details.
   * @param {RegisterDatabaseCatalogBodyDatabasePropertiesItems[]} [params.databaseProperties] - This will hold all the
   * properties for a custom database.
   * @param {string} [params.description] - Database description.
   * @param {string[]} [params.tags] - tags.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateDatabaseRegistrationCreatedBody>>}
   */
  public createDatabaseRegistration(
    params: WatsonxDataV2.CreateDatabaseRegistrationParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateDatabaseRegistrationCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['catalogName', 'databaseDisplayName', 'databaseType'];
    const _validParams = [
      'catalogName',
      'databaseDisplayName',
      'databaseType',
      'createdOn',
      'databaseDetails',
      'databaseProperties',
      'description',
      'tags',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'catalog_name': _params.catalogName,
      'database_display_name': _params.databaseDisplayName,
      'database_type': _params.databaseType,
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
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get database.
   *
   * Get list of databases.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.databaseId - database id.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.GetDatabaseOKBody>>}
   */
  public getDatabase(
    params: WatsonxDataV2.GetDatabaseParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.GetDatabaseOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['databaseId'];
    const _validParams = ['databaseId', 'authInstanceId', 'headers'];
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
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteDatabaseCatalog(
    params: WatsonxDataV2.DeleteDatabaseCatalogParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['databaseId'];
    const _validParams = ['databaseId', 'authInstanceId', 'headers'];
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
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {JsonPatchOperation[]} params.body - Request body.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.UpdateDatabaseOKBody>>}
   */
  public updateDatabase(
    params: WatsonxDataV2.UpdateDatabaseParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.UpdateDatabaseOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['databaseId', 'body'];
    const _validParams = ['databaseId', 'body', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const { body } = _params;
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
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json-patch+json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Validate database connection.
   *
   * API to validate the database connection.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {ValidateDatabaseBodyDatabaseDetails} params.databaseDetails - database details.
   * @param {string} params.databaseType - Type of db connection.
   * @param {string} [params.certificate] - contents of a pem/crt file.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ValidateDatabaseConnectionOKBody>>}
   */
  public validateDatabaseConnection(
    params: WatsonxDataV2.ValidateDatabaseConnectionParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ValidateDatabaseConnectionOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['databaseDetails', 'databaseType'];
    const _validParams = [
      'databaseDetails',
      'databaseType',
      'certificate',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'database_details': _params.databaseDetails,
      'database_type': _params.databaseType,
      'certificate': _params.certificate,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV2.DEFAULT_SERVICE_NAME,
      'v2',
      'validateDatabaseConnection'
    );

    const parameters = {
      options: {
        url: '/test_database_connection',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * engines
   ************************/

  /**
   * Get list of db2 engines.
   *
   * Get list of all db2 engines.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ListDb2EnginesOKBody>>}
   */
  public listDb2Engines(
    params?: WatsonxDataV2.ListDb2EnginesParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ListDb2EnginesOKBody>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'headers'];
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
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} params.type - Engine type.
   * @param {string} [params.description] - Engine description.
   * @param {CreateDb2EngineDetails} [params.engineDetails] - External engine details.
   * @param {string} [params.engineDisplayName] - Engine display name.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateDb2EngineCreatedBody>>}
   */
  public createDb2Engine(
    params: WatsonxDataV2.CreateDb2EngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateDb2EngineCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['origin', 'type'];
    const _validParams = [
      'origin',
      'type',
      'description',
      'engineDetails',
      'engineDisplayName',
      'tags',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'origin': _params.origin,
      'type': _params.type,
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
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteDb2Engine(
    params: WatsonxDataV2.DeleteDb2EngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'authInstanceId', 'headers'];
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
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {JsonPatchOperation[]} params.body - Update Engine Body.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.UpdateDb2EngineOKBody>>}
   */
  public updateDb2Engine(
    params: WatsonxDataV2.UpdateDb2EngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.UpdateDb2EngineOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'body'];
    const _validParams = ['engineId', 'body', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const { body } = _params;
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
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json-patch+json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get all engines.
   *
   * Get all engine details.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ListEnginesOKBody>>}
   */
  public listEngines(
    params?: WatsonxDataV2.ListEnginesParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ListEnginesOKBody>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'listEngines');

    const parameters = {
      options: {
        url: '/engines',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get deployments.
   *
   * Get list of all deployments.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.GetDeploymentsOKBody>>}
   */
  public getDeployments(
    params?: WatsonxDataV2.GetDeploymentsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.GetDeploymentsOKBody>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'getDeployments');

    const parameters = {
      options: {
        url: '/instance',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get list of netezza engines.
   *
   * Get list of all netezza engines.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ListNetezzaEnginesOKBody>>}
   */
  public listNetezzaEngines(
    params?: WatsonxDataV2.ListNetezzaEnginesParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ListNetezzaEnginesOKBody>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'headers'];
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
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} params.type - Engine type.
   * @param {string} [params.description] - Engine description.
   * @param {CreateNetezzaEngineDetails} [params.engineDetails] - External engine details.
   * @param {string} [params.engineDisplayName] - Engine display name.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateNetezzaEngineCreatedBody>>}
   */
  public createNetezzaEngine(
    params: WatsonxDataV2.CreateNetezzaEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateNetezzaEngineCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['origin', 'type'];
    const _validParams = [
      'origin',
      'type',
      'description',
      'engineDetails',
      'engineDisplayName',
      'tags',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'origin': _params.origin,
      'type': _params.type,
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
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteNetezzaEngine(
    params: WatsonxDataV2.DeleteNetezzaEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'authInstanceId', 'headers'];
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
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {JsonPatchOperation[]} params.body - Update Engine Body.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.UpdateNetezzaEngineOKBody>>}
   */
  public updateNetezzaEngine(
    params: WatsonxDataV2.UpdateNetezzaEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.UpdateNetezzaEngineOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'body'];
    const _validParams = ['engineId', 'body', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const { body } = _params;
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
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json-patch+json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List other engines.
   *
   * list all other engine details.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ListOtherEnginesOKBody>>}
   */
  public listOtherEngines(
    params?: WatsonxDataV2.ListOtherEnginesParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ListOtherEnginesOKBody>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'headers'];
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
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create other engine.
   *
   * Create a new engine.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.description] - engine description.
   * @param {OtherEngineDetails} [params.engineDetails] - External engine details.
   * @param {string} [params.engineDisplayName] - engine display name.
   * @param {string[]} [params.tags] - other engine tags.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateOtherEngineCreatedBody>>}
   */
  public createOtherEngine(
    params?: WatsonxDataV2.CreateOtherEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateOtherEngineCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = [
      'description',
      'engineDetails',
      'engineDisplayName',
      'tags',
      'authInstanceId',
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
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteOtherEngine(
    params: WatsonxDataV2.DeleteOtherEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'authInstanceId', 'headers'];
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
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get list of presto engines.
   *
   * Get list of all presto engines.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ListPrestoEnginesOKBody>>}
   */
  public listPrestoEngines(
    params?: WatsonxDataV2.ListPrestoEnginesParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ListPrestoEnginesOKBody>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'headers'];
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
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} params.type - Engine type presto, others like netezza.
   * @param {string[]} [params.associatedCatalogs] - Associated catalogs.
   * @param {string} [params.description] - Engine description.
   * @param {EngineDetailsBody} [params.engineDetails] - Node details.
   * @param {string} [params.engineDisplayName] - Engine display name.
   * @param {boolean} [params.firstTimeUse] - Optional parameter for UI - set as true when first time use.
   * @param {string} [params.region] - Region (cloud).
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.version] - Version like 0.278 for presto or else.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateEngineCreatedBody>>}
   */
  public createEngine(
    params: WatsonxDataV2.CreateEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateEngineCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['origin', 'type'];
    const _validParams = [
      'origin',
      'type',
      'associatedCatalogs',
      'description',
      'engineDetails',
      'engineDisplayName',
      'firstTimeUse',
      'region',
      'tags',
      'version',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'origin': _params.origin,
      'type': _params.type,
      'associated_catalogs': _params.associatedCatalogs,
      'description': _params.description,
      'engine_details': _params.engineDetails,
      'engine_display_name': _params.engineDisplayName,
      'first_time_use': _params.firstTimeUse,
      'region': _params.region,
      'tags': _params.tags,
      'version': _params.version,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'createEngine');

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
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.GetPrestoEngineOKBody>>}
   */
  public getPrestoEngine(
    params: WatsonxDataV2.GetPrestoEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.GetPrestoEngineOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'authInstanceId', 'headers'];
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
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteEngine(
    params: WatsonxDataV2.DeleteEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'authInstanceId', 'headers'];
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
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {JsonPatchOperation[]} params.body - Update Engine Body.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.UpdateEngineOKBody>>}
   */
  public updateEngine(
    params: WatsonxDataV2.UpdateEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.UpdateEngineOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'body'];
    const _validParams = ['engineId', 'body', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const { body } = _params;
    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'updateEngine');

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
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json-patch+json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ListPrestoEngineCatalogsOKBody>>}
   */
  public listPrestoEngineCatalogs(
    params: WatsonxDataV2.ListPrestoEngineCatalogsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ListPrestoEngineCatalogsOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'authInstanceId', 'headers'];
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
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} params.catalogNames - comma separated catalog names.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ReplacePrestoEngineCatalogsCreatedBody>>}
   */
  public replacePrestoEngineCatalogs(
    params: WatsonxDataV2.ReplacePrestoEngineCatalogsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ReplacePrestoEngineCatalogsCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogNames'];
    const _validParams = ['engineId', 'catalogNames', 'authInstanceId', 'headers'];
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
      'replacePrestoEngineCatalogs'
    );

    const parameters = {
      options: {
        url: '/presto_engines/{engine_id}/catalogs',
        method: 'PUT',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deletePrestoEngineCatalogs(
    params: WatsonxDataV2.DeletePrestoEngineCatalogsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogNames'];
    const _validParams = ['engineId', 'catalogNames', 'authInstanceId', 'headers'];
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
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.GetPrestoEngineCatalogOKBody>>}
   */
  public getPrestoEngineCatalog(
    params: WatsonxDataV2.GetPrestoEngineCatalogParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.GetPrestoEngineCatalogOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogId'];
    const _validParams = ['engineId', 'catalogId', 'authInstanceId', 'headers'];
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
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateEnginePauseCreatedBody>>}
   */
  public createEnginePause(
    params: WatsonxDataV2.CreateEnginePauseParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateEnginePauseCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'createEnginePause');

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
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.RunExplainStatementOKBody>>}
   */
  public runExplainStatement(
    params: WatsonxDataV2.RunExplainStatementParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.RunExplainStatementOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'statement'];
    const _validParams = ['engineId', 'statement', 'format', 'type', 'authInstanceId', 'headers'];
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
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.RunExplainAnalyzeStatementOKBody>>}
   */
  public runExplainAnalyzeStatement(
    params: WatsonxDataV2.RunExplainAnalyzeStatementParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.RunExplainAnalyzeStatementOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'statement'];
    const _validParams = ['engineId', 'statement', 'verbose', 'authInstanceId', 'headers'];
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
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateEngineRestartCreatedBody>>}
   */
  public createEngineRestart(
    params: WatsonxDataV2.CreateEngineRestartParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateEngineRestartCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'authInstanceId', 'headers'];
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
      'createEngineRestart'
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
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateEngineResumeCreatedBody>>}
   */
  public createEngineResume(
    params: WatsonxDataV2.CreateEngineResumeParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateEngineResumeCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'authInstanceId', 'headers'];
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
      'createEngineResume'
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
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateEngineScaleCreatedBody>>}
   */
  public createEngineScale(
    params: WatsonxDataV2.CreateEngineScaleParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateEngineScaleCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'coordinator', 'worker', 'authInstanceId', 'headers'];
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

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'createEngineScale');

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
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List all spark engines.
   *
   * List all spark engines.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ListSparkEnginesOKBody>>}
   */
  public listSparkEngines(
    params?: WatsonxDataV2.ListSparkEnginesParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ListSparkEnginesOKBody>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'headers'];
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
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} params.type - Engine type spark, others like netezza.
   * @param {string} [params.description] - Engine description.
   * @param {SparkEngineDetailsPrototype} [params.engineDetails] - Node details.
   * @param {string} [params.engineDisplayName] - Engine display name.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateSparkEngineCreatedBody>>}
   */
  public createSparkEngine(
    params: WatsonxDataV2.CreateSparkEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateSparkEngineCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['origin', 'type'];
    const _validParams = [
      'origin',
      'type',
      'description',
      'engineDetails',
      'engineDisplayName',
      'tags',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'origin': _params.origin,
      'type': _params.type,
      'description': _params.description,
      'engine_details': _params.engineDetails,
      'engine_display_name': _params.engineDisplayName,
      'tags': _params.tags,
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
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteSparkEngine(
    params: WatsonxDataV2.DeleteSparkEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'authInstanceId', 'headers'];
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
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {JsonPatchOperation[]} params.body - Update Engine Body.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.UpdateSparkEngineOKBody>>}
   */
  public updateSparkEngine(
    params: WatsonxDataV2.UpdateSparkEngineParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.UpdateSparkEngineOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'body'];
    const _validParams = ['engineId', 'body', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const { body } = _params;
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
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json-patch+json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ListSparkEngineApplicationsOKBody>>}
   */
  public listSparkEngineApplications(
    params: WatsonxDataV2.ListSparkEngineApplicationsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ListSparkEngineApplicationsOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'authInstanceId', 'headers'];
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
      'listSparkEngineApplications'
    );

    const parameters = {
      options: {
        url: '/spark_engines/{engine_id}/applications',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateSparkEngineApplicationCreatedBody>>}
   */
  public createSparkEngineApplication(
    params: WatsonxDataV2.CreateSparkEngineApplicationParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.CreateSparkEngineApplicationCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'applicationDetails'];
    const _validParams = [
      'engineId',
      'applicationDetails',
      'jobEndpoint',
      'serviceInstanceId',
      'type',
      'authInstanceId',
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
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteSparkEngineApplications(
    params: WatsonxDataV2.DeleteSparkEngineApplicationsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'applicationId'];
    const _validParams = ['engineId', 'applicationId', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'application_id': _params.applicationId,
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
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.GetSparkEngineApplicationStatusOKBody>>}
   */
  public getSparkEngineApplicationStatus(
    params: WatsonxDataV2.GetSparkEngineApplicationStatusParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.GetSparkEngineApplicationStatusOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'applicationId'];
    const _validParams = ['engineId', 'applicationId', 'authInstanceId', 'headers'];
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
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * lhconsole
   ************************/

  /**
   * Readiness API.
   *
   * Verify lhconsole server is up and running.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.SuccessResponse>>}
   */
  public testLhConsole(
    params?: WatsonxDataV2.TestLhConsoleParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'testLhConsole');

    const parameters = {
      options: {
        url: '/ready',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ListCatalogsOKBody>>}
   */
  public listCatalogs(
    params?: WatsonxDataV2.ListCatalogsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ListCatalogsOKBody>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'headers'];
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
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.GetCatalogOKBody>>}
   */
  public getCatalog(
    params: WatsonxDataV2.GetCatalogParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.GetCatalogOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['catalogId'];
    const _validParams = ['catalogId', 'authInstanceId', 'headers'];
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
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ListSchemasOKBody>>}
   */
  public listSchemas(
    params: WatsonxDataV2.ListSchemasParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ListSchemasOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogId'];
    const _validParams = ['engineId', 'catalogId', 'authInstanceId', 'headers'];
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
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
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
      'authInstanceId',
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
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>>}
   */
  public deleteSchema(
    params: WatsonxDataV2.DeleteSchemaParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogId', 'schemaId'];
    const _validParams = ['engineId', 'catalogId', 'schemaId', 'authInstanceId', 'headers'];
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
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get tables.
   *
   * List all tables in a schema in a catalog for a given engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogId - catalog id.
   * @param {string} params.schemaId - URL encoded schema name.
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ListTablesOKBody>>}
   */
  public listTables(
    params: WatsonxDataV2.ListTablesParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ListTablesOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['catalogId', 'schemaId', 'engineId'];
    const _validParams = ['catalogId', 'schemaId', 'engineId', 'authInstanceId', 'headers'];
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
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get columns.
   *
   * List columns in given catalog/schema and table.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogId - catalog id.
   * @param {string} params.schemaId - URL encoded schema name.
   * @param {string} params.tableId - URL encoded table name.
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.GetTableOKBody>>}
   */
  public getTable(
    params: WatsonxDataV2.GetTableParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.GetTableOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['catalogId', 'schemaId', 'tableId', 'engineId'];
    const _validParams = [
      'catalogId',
      'schemaId',
      'tableId',
      'engineId',
      'authInstanceId',
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
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete table.
   *
   * Delete one or multiple tables for a given schema and catalog.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogId - catalog id.
   * @param {string} params.schemaId - URL encoded schema name.
   * @param {string} params.tableId - URL encoded table name.
   * @param {string} params.engineId - engine id.
   * @param {string} [params.authInstanceId] - Instance ID.
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
      'authInstanceId',
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
          {
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Alter table.
   *
   * Update the given table - rename table, add/drop/rename columns.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogId - catalog id.
   * @param {string} params.schemaId - URL encoded schema name.
   * @param {string} params.tableId - URL encoded table name.
   * @param {string} params.engineId - engine id.
   * @param {JsonPatchOperation[]} params.body - Request body.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.UpdateTableOKBody>>}
   */
  public updateTable(
    params: WatsonxDataV2.UpdateTableParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.UpdateTableOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['catalogId', 'schemaId', 'tableId', 'engineId', 'body'];
    const _validParams = [
      'catalogId',
      'schemaId',
      'tableId',
      'engineId',
      'body',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const { body } = _params;
    const query = {
      'engine_id': _params.engineId,
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
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json-patch+json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ListTableSnapshotsOKBody>>}
   */
  public listTableSnapshots(
    params: WatsonxDataV2.ListTableSnapshotsParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ListTableSnapshotsOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogId', 'schemaId', 'tableId'];
    const _validParams = [
      'engineId',
      'catalogId',
      'schemaId',
      'tableId',
      'authInstanceId',
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
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Rollback snapshot.
   *
   * Rollback to a table snapshot.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - Engine name.
   * @param {string} params.catalogId - Catalog ID.
   * @param {string} params.schemaId - Schema ID.
   * @param {string} params.tableId - Table ID.
   * @param {string} params.snapshotId - Snapshot ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.ReplaceSnapshotCreatedBody>>}
   */
  public replaceSnapshot(
    params: WatsonxDataV2.ReplaceSnapshotParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.ReplaceSnapshotCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogId', 'schemaId', 'tableId', 'snapshotId'];
    const _validParams = [
      'engineId',
      'catalogId',
      'schemaId',
      'tableId',
      'snapshotId',
      'authInstanceId',
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
      'snapshot_id': _params.snapshotId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV2.DEFAULT_SERVICE_NAME, 'v2', 'replaceSnapshot');

    const parameters = {
      options: {
        url: '/catalogs/{catalog_id}/schemas/{schema_id}/tables/{table_id}/snapshots/{snapshot_id}',
        method: 'PUT',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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
   * @param {JsonPatchOperation[]} params.body - Request body.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV2.Response<WatsonxDataV2.UpdateSyncCatalogOKBody>>}
   */
  public updateSyncCatalog(
    params: WatsonxDataV2.UpdateSyncCatalogParams
  ): Promise<WatsonxDataV2.Response<WatsonxDataV2.UpdateSyncCatalogOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['catalogId', 'body'];
    const _validParams = ['catalogId', 'body', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const { body } = _params;
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
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json-patch+json',
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
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

  /** Parameters for the `listBucketRegistrations` operation. */
  export interface ListBucketRegistrationsParams {
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createBucketRegistration` operation. */
  export interface CreateBucketRegistrationParams {
    /** bucket details. */
    bucketDetails: BucketDetails;
    /** bucket type. */
    bucketType: CreateBucketRegistrationConstants.BucketType | string;
    /** catalog name. */
    catalogName: string;
    /** bucket description. */
    description: string;
    /** managed by. */
    managedBy: CreateBucketRegistrationConstants.ManagedBy | string;
    /** Table type. */
    tableType: string;
    /** bucket display name. */
    bucketDisplayName?: string;
    /** tags. */
    bucketTags?: string[];
    /** catalog tags. */
    catalogTags?: string[];
    /** region where the bucket is located. */
    region?: string;
    /** mark bucket active or inactive. */
    state?: CreateBucketRegistrationConstants.State | string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `createBucketRegistration` operation. */
  export namespace CreateBucketRegistrationConstants {
    /** bucket type. */
    export enum BucketType {
      AWS_S3 = 'aws_s3',
      MINIO = 'minio',
      IBM_COS = 'ibm_cos',
      IBM_CEPH = 'ibm_ceph',
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

  /** Parameters for the `getBucketRegistration` operation. */
  export interface GetBucketRegistrationParams {
    /** bucket id. */
    bucketId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteBucketRegistration` operation. */
  export interface DeleteBucketRegistrationParams {
    /** bucket id. */
    bucketId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateBucketRegistration` operation. */
  export interface UpdateBucketRegistrationParams {
    /** bucket id. */
    bucketId: string;
    /** Request body. */
    body: JsonPatchOperation[];
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createActivateBucket` operation. */
  export interface CreateActivateBucketParams {
    /** bucket id. */
    bucketId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteDeactivateBucket` operation. */
  export interface DeleteDeactivateBucketParams {
    /** bucket id. */
    bucketId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listBucketObjects` operation. */
  export interface ListBucketObjectsParams {
    /** bucket id. */
    bucketId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `testBucketConnection` operation. */
  export interface TestBucketConnectionParams {
    /** access key to access the bucket. */
    accessKey: string;
    /** name of the bucket to be checked. */
    bucketName: string;
    /** type of bucket that is selected. */
    bucketType: TestBucketConnectionConstants.BucketType | string;
    /** endpoint to reach the bucket. */
    endpoint: string;
    /** bucket region. */
    region: string;
    /** secret key to access the bucket. */
    secretKey: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `testBucketConnection` operation. */
  export namespace TestBucketConnectionConstants {
    /** type of bucket that is selected. */
    export enum BucketType {
      AMAZON_S3 = 'amazon_s3',
      AWS_S3 = 'aws_s3',
      MINIO = 'minio',
      IBM_COS = 'ibm_cos',
      IBM_CEPH = 'ibm_ceph',
    }
  }

  /** Parameters for the `createDriverDatabaseCatalog` operation. */
  export interface CreateDriverDatabaseCatalogParams {
    /** Database display name. */
    databaseDisplayName: string;
    /** Connector type. */
    databaseType: string;
    /** Catalog name. */
    catalogName: string;
    /** Host name. */
    hostname: string;
    /** Port. */
    port: string;
    /** Driver file to upload. */
    driver?: NodeJS.ReadableStream | Buffer;
    /** The content type of driver. */
    driverContentType?: string;
    /** Name of the driver file. */
    driverFileName?: string;
    /** contents of a pem/crt file. */
    certificate?: string;
    /** extension of the certificate file. */
    certificateExtension?: string;
    /** SSL Mode. */
    ssl?: string;
    /** Username. */
    username?: string;
    /** Psssword. */
    password?: string;
    /** Database name. */
    databaseName?: string;
    /** Database description. */
    description?: string;
    /** Created on. */
    createdOn?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listDatabaseRegistrations` operation. */
  export interface ListDatabaseRegistrationsParams {
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createDatabaseRegistration` operation. */
  export interface CreateDatabaseRegistrationParams {
    /** Catalog name. */
    catalogName: string;
    /** Database display name. */
    databaseDisplayName: string;
    /** Connector type. */
    databaseType: string;
    /** Created on. */
    createdOn?: number;
    /** database details. */
    databaseDetails?: RegisterDatabaseCatalogBodyDatabaseDetails;
    /** This will hold all the properties for a custom database. */
    databaseProperties?: RegisterDatabaseCatalogBodyDatabasePropertiesItems[];
    /** Database description. */
    description?: string;
    /** tags. */
    tags?: string[];
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getDatabase` operation. */
  export interface GetDatabaseParams {
    /** database id. */
    databaseId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteDatabaseCatalog` operation. */
  export interface DeleteDatabaseCatalogParams {
    /** database id. */
    databaseId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateDatabase` operation. */
  export interface UpdateDatabaseParams {
    /** database id. */
    databaseId: string;
    /** Request body. */
    body: JsonPatchOperation[];
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `validateDatabaseConnection` operation. */
  export interface ValidateDatabaseConnectionParams {
    /** database details. */
    databaseDetails: ValidateDatabaseBodyDatabaseDetails;
    /** Type of db connection. */
    databaseType: ValidateDatabaseConnectionConstants.DatabaseType | string;
    /** contents of a pem/crt file. */
    certificate?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `validateDatabaseConnection` operation. */
  export namespace ValidateDatabaseConnectionConstants {
    /** Type of db connection. */
    export enum DatabaseType {
      MYSQL = 'mysql',
      POSTGRESQL = 'postgresql',
      NETEZZA = 'netezza',
      DB2 = 'db2',
      MONGODB = 'mongodb',
      KAFKA = 'kafka',
      SQLSERVER = 'sqlserver',
      MYCUSTOMDB = 'mycustomdb',
    }
  }

  /** Parameters for the `listDb2Engines` operation. */
  export interface ListDb2EnginesParams {
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createDb2Engine` operation. */
  export interface CreateDb2EngineParams {
    /** Origin - created or registered. */
    origin: CreateDb2EngineConstants.Origin | string;
    /** Engine type. */
    type: string;
    /** Engine description. */
    description?: string;
    /** External engine details. */
    engineDetails?: CreateDb2EngineDetails;
    /** Engine display name. */
    engineDisplayName?: string;
    /** Tags. */
    tags?: string[];
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
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
  export interface DeleteDb2EngineParams {
    /** engine id. */
    engineId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateDb2Engine` operation. */
  export interface UpdateDb2EngineParams {
    /** engine id. */
    engineId: string;
    /** Update Engine Body. */
    body: JsonPatchOperation[];
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listEngines` operation. */
  export interface ListEnginesParams {
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getDeployments` operation. */
  export interface GetDeploymentsParams {
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listNetezzaEngines` operation. */
  export interface ListNetezzaEnginesParams {
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createNetezzaEngine` operation. */
  export interface CreateNetezzaEngineParams {
    /** Origin - created or registered. */
    origin: CreateNetezzaEngineConstants.Origin | string;
    /** Engine type. */
    type: string;
    /** Engine description. */
    description?: string;
    /** External engine details. */
    engineDetails?: CreateNetezzaEngineDetails;
    /** Engine display name. */
    engineDisplayName?: string;
    /** Tags. */
    tags?: string[];
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
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
  export interface DeleteNetezzaEngineParams {
    /** engine id. */
    engineId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateNetezzaEngine` operation. */
  export interface UpdateNetezzaEngineParams {
    /** engine id. */
    engineId: string;
    /** Update Engine Body. */
    body: JsonPatchOperation[];
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listOtherEngines` operation. */
  export interface ListOtherEnginesParams {
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createOtherEngine` operation. */
  export interface CreateOtherEngineParams {
    /** engine description. */
    description?: string;
    /** External engine details. */
    engineDetails?: OtherEngineDetails;
    /** engine display name. */
    engineDisplayName?: string;
    /** other engine tags. */
    tags?: string[];
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteOtherEngine` operation. */
  export interface DeleteOtherEngineParams {
    /** engine id. */
    engineId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listPrestoEngines` operation. */
  export interface ListPrestoEnginesParams {
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createEngine` operation. */
  export interface CreateEngineParams {
    /** Origin - created or registered. */
    origin: CreateEngineConstants.Origin | string;
    /** Engine type presto, others like netezza. */
    type: string;
    /** Associated catalogs. */
    associatedCatalogs?: string[];
    /** Engine description. */
    description?: string;
    /** Node details. */
    engineDetails?: EngineDetailsBody;
    /** Engine display name. */
    engineDisplayName?: string;
    /** Optional parameter for UI - set as true when first time use. */
    firstTimeUse?: boolean;
    /** Region (cloud). */
    region?: string;
    /** Tags. */
    tags?: string[];
    /** Version like 0.278 for presto or else. */
    version?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `createEngine` operation. */
  export namespace CreateEngineConstants {
    /** Origin - created or registered. */
    export enum Origin {
      NATIVE = 'native',
      EXTERNAL = 'external',
      DISCOVER = 'discover',
    }
  }

  /** Parameters for the `getPrestoEngine` operation. */
  export interface GetPrestoEngineParams {
    /** engine id. */
    engineId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteEngine` operation. */
  export interface DeleteEngineParams {
    /** engine id. */
    engineId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateEngine` operation. */
  export interface UpdateEngineParams {
    /** engine id. */
    engineId: string;
    /** Update Engine Body. */
    body: JsonPatchOperation[];
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listPrestoEngineCatalogs` operation. */
  export interface ListPrestoEngineCatalogsParams {
    /** engine id. */
    engineId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `replacePrestoEngineCatalogs` operation. */
  export interface ReplacePrestoEngineCatalogsParams {
    /** engine id. */
    engineId: string;
    /** comma separated catalog names. */
    catalogNames: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deletePrestoEngineCatalogs` operation. */
  export interface DeletePrestoEngineCatalogsParams {
    /** engine id. */
    engineId: string;
    /** Catalog id(s) to be stopped, comma separated. */
    catalogNames: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getPrestoEngineCatalog` operation. */
  export interface GetPrestoEngineCatalogParams {
    /** engine id. */
    engineId: string;
    /** catalog id. */
    catalogId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createEnginePause` operation. */
  export interface CreateEnginePauseParams {
    /** engine id. */
    engineId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `runExplainStatement` operation. */
  export interface RunExplainStatementParams {
    /** Engine id. */
    engineId: string;
    /** Presto query to determine explain plan. */
    statement: string;
    /** Format. */
    format?: RunExplainStatementConstants.Format | string;
    /** Type. */
    type?: RunExplainStatementConstants.Type | string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
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
  export interface RunExplainAnalyzeStatementParams {
    /** Engine id. */
    engineId: string;
    /** Presto query to show explain analyze. */
    statement: string;
    /** Verbose. */
    verbose?: boolean;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createEngineRestart` operation. */
  export interface CreateEngineRestartParams {
    /** engine id. */
    engineId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createEngineResume` operation. */
  export interface CreateEngineResumeParams {
    /** engine id. */
    engineId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createEngineScale` operation. */
  export interface CreateEngineScaleParams {
    /** engine id. */
    engineId: string;
    /** NodeDescription. */
    coordinator?: NodeDescription;
    /** NodeDescription. */
    worker?: NodeDescription;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listSparkEngines` operation. */
  export interface ListSparkEnginesParams {
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createSparkEngine` operation. */
  export interface CreateSparkEngineParams {
    /** Origin - created or registered. */
    origin: CreateSparkEngineConstants.Origin | string;
    /** Engine type spark, others like netezza. */
    type: string;
    /** Engine description. */
    description?: string;
    /** Node details. */
    engineDetails?: SparkEngineDetailsPrototype;
    /** Engine display name. */
    engineDisplayName?: string;
    /** Tags. */
    tags?: string[];
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `createSparkEngine` operation. */
  export namespace CreateSparkEngineConstants {
    /** Origin - created or registered. */
    export enum Origin {
      NATIVE = 'native',
      EXTERNAL = 'external',
      DISCOVER = 'discover',
    }
  }

  /** Parameters for the `deleteSparkEngine` operation. */
  export interface DeleteSparkEngineParams {
    /** engine id. */
    engineId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateSparkEngine` operation. */
  export interface UpdateSparkEngineParams {
    /** engine id. */
    engineId: string;
    /** Update Engine Body. */
    body: JsonPatchOperation[];
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listSparkEngineApplications` operation. */
  export interface ListSparkEngineApplicationsParams {
    /** engine id. */
    engineId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createSparkEngineApplication` operation. */
  export interface CreateSparkEngineApplicationParams {
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
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
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
  export interface DeleteSparkEngineApplicationsParams {
    /** engine id. */
    engineId: string;
    /** Application id(s) to be stopped, comma separated. */
    applicationId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getSparkEngineApplicationStatus` operation. */
  export interface GetSparkEngineApplicationStatusParams {
    /** engine id. */
    engineId: string;
    /** Application id. */
    applicationId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `testLhConsole` operation. */
  export interface TestLhConsoleParams {
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listCatalogs` operation. */
  export interface ListCatalogsParams {
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getCatalog` operation. */
  export interface GetCatalogParams {
    /** catalog ID. */
    catalogId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listSchemas` operation. */
  export interface ListSchemasParams {
    /** Engine name. */
    engineId: string;
    /** Catalog name. */
    catalogId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createSchema` operation. */
  export interface CreateSchemaParams {
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
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteSchema` operation. */
  export interface DeleteSchemaParams {
    /** Engine name. */
    engineId: string;
    /** Catalog name. */
    catalogId: string;
    /** URL encoded Schema name. */
    schemaId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listTables` operation. */
  export interface ListTablesParams {
    /** catalog id. */
    catalogId: string;
    /** URL encoded schema name. */
    schemaId: string;
    /** engine id. */
    engineId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getTable` operation. */
  export interface GetTableParams {
    /** catalog id. */
    catalogId: string;
    /** URL encoded schema name. */
    schemaId: string;
    /** URL encoded table name. */
    tableId: string;
    /** engine id. */
    engineId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteTable` operation. */
  export interface DeleteTableParams {
    /** catalog id. */
    catalogId: string;
    /** URL encoded schema name. */
    schemaId: string;
    /** URL encoded table name. */
    tableId: string;
    /** engine id. */
    engineId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateTable` operation. */
  export interface UpdateTableParams {
    /** catalog id. */
    catalogId: string;
    /** URL encoded schema name. */
    schemaId: string;
    /** URL encoded table name. */
    tableId: string;
    /** engine id. */
    engineId: string;
    /** Request body. */
    body: JsonPatchOperation[];
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listTableSnapshots` operation. */
  export interface ListTableSnapshotsParams {
    /** Engine name. */
    engineId: string;
    /** Catalog ID. */
    catalogId: string;
    /** Schema ID. */
    schemaId: string;
    /** Table ID. */
    tableId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `replaceSnapshot` operation. */
  export interface ReplaceSnapshotParams {
    /** Engine name. */
    engineId: string;
    /** Catalog ID. */
    catalogId: string;
    /** Schema ID. */
    schemaId: string;
    /** Table ID. */
    tableId: string;
    /** Snapshot ID. */
    snapshotId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateSyncCatalog` operation. */
  export interface UpdateSyncCatalogParams {
    /** catalog ID. */
    catalogId: string;
    /** Request body. */
    body: JsonPatchOperation[];
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /*************************
   * model interfaces
   ************************/

  /** bucket details. */
  export interface BucketDetails {
    /** Access key ID, encrypted during bucket registration. */
    access_key?: string;
    /** actual bucket name. */
    bucket_name: string;
    /** Cos endpoint. */
    endpoint?: string;
    /** Secret access key, encrypted during bucket registration. */
    secret_key?: string;
  }

  /** Bucket. */
  export interface BucketRegistration {
    /** access key. */
    access_key?: string;
    /** Actions. */
    actions?: string[];
    /** Associated catalogs. */
    associated_catalogs: string[];
    /** bucket display name. */
    bucket_display_name?: string;
    /** bucket ID auto generated during bucket registration. */
    bucket_id?: string;
    /** actual bucket name. */
    bucket_name: string;
    /** Bucket type. */
    bucket_type: BucketRegistration.Constants.BucketType | string;
    /** Username who created the bucket. */
    created_by: string;
    /** Creation date. */
    created_on: string;
    /** bucket description. */
    description: string;
    /** bucket endpoint. */
    endpoint: string;
    /** managed by. */
    managed_by: BucketRegistration.Constants.ManagedBy | string;
    /** Region where the bucket is located. */
    region?: string;
    /** secret key. */
    secret_key?: string;
    /** mark bucket active or inactive. */
    state: BucketRegistration.Constants.State | string;
    /** Tags. */
    tags: string[];
  }
  export namespace BucketRegistration {
    export namespace Constants {
      /** Bucket type. */
      export enum BucketType {
        AMAZON_S3 = 'amazon_s3',
        AWS_S3 = 'aws_s3',
        MINIO = 'minio',
        IBM_COS = 'ibm_cos',
        IBM_CEPH = 'ibm_ceph',
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

  /** object defining the response of checking if the credentials of a bucket are valid. */
  export interface BucketStatusResponse {
    /** bucket credentials are valid or not. */
    state: boolean;
    /** message response as per the credentials validated. */
    state_message: string;
  }

  /** EngineCatalog. */
  export interface Catalog {
    /** Name for the catalog. */
    catalog_name?: string;
    /** Creation date. */
    creation_date?: string;
  }

  /** Define the catalog details. */
  export interface CatalogDetail {
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
    managed_by?: CatalogDetail.Constants.ManagedBy | string;
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
  export namespace CatalogDetail {
    export namespace Constants {
      /** Managed by. */
      export enum ManagedBy {
        IBM = 'ibm',
        CUSTOMER = 'customer',
      }
    }
  }

  /** Column. */
  export interface Column {
    /** Column name. */
    column_name?: string;
    /** Comment. */
    comment?: string;
    /** Extra. */
    extra?: string;
    /** Data type. */
    type?: string;
  }

  /** Activate bucket. */
  export interface CreateActivateBucketCreatedBody {
    /** Response of success. */
    response?: SuccessResponse;
  }

  /** CreateBucketRegistrations OK. */
  export interface CreateBucketRegistrationCreatedBody {
    /** Bucket. */
    bucket_registration: BucketRegistration;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** database register response. */
  export interface CreateDatabaseRegistrationCreatedBody {
    /** database registration object. */
    database_registration: DatabaseRegistration;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** create engine successful. */
  export interface CreateDb2EngineCreatedBody {
    /** Db2 engine details. */
    engine: Db2Engine;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** External engine details. */
  export interface CreateDb2EngineDetails {
    /** External engine connection string. */
    connection_string?: string;
  }

  /** response obj. */
  export interface CreateDriverDatabaseCatalogCreatedBody {
    /** response database. */
    database: CreateDriverDatabaseCatalogCreatedBodyDatabase;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** response database. */
  export interface CreateDriverDatabaseCatalogCreatedBodyDatabase {
    /** Database display name. */
    database_display_name?: string;
    /** Database ID. */
    database_id?: string;
  }

  /** create presto engine successful. */
  export interface CreateEngineCreatedBody {
    /** EngineDetail. */
    engine: PrestoEngine;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** Pause. */
  export interface CreateEnginePauseCreatedBody {
    /** Response of success. */
    response?: SuccessResponse;
  }

  /** restart engine. */
  export interface CreateEngineRestartCreatedBody {
    /** Response of success. */
    response?: SuccessResponse;
  }

  /** resume. */
  export interface CreateEngineResumeCreatedBody {
    /** Response of success. */
    response?: SuccessResponse;
  }

  /** scale engine. */
  export interface CreateEngineScaleCreatedBody {
    /** Response of success. */
    response?: SuccessResponse;
  }

  /** create engine successful. */
  export interface CreateNetezzaEngineCreatedBody {
    /** Netezza engine details. */
    engine: NetezzaEngine;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** External engine details. */
  export interface CreateNetezzaEngineDetails {
    /** External engine connection string. */
    connection_string?: string;
  }

  /** create engine successful. */
  export interface CreateOtherEngineCreatedBody {
    /** external engine details. */
    engine: OtherEngine;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** success response. */
  export interface CreateSchemaCreatedBody {
    /** Response of success. */
    response?: SuccessResponse;
  }

  /** create engine successful. */
  export interface CreateSparkEngineApplicationCreatedBody {
    /** Response of success. */
    response: SuccessResponse;
    /** EngineSubmitApplicationBody. */
    spark_engine_application: SparkEngineApplication;
  }

  /** Create spark engine successful. */
  export interface CreateSparkEngineCreatedBody {
    /** EngineDetail. */
    engine: SparkEngine;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** database registration object. */
  export interface DatabaseRegistration {
    /** actions. */
    actions?: string[];
    /** associated catalogs. */
    associated_catalogs?: string[];
    /** Created by. */
    created_by?: string;
    /** Created on. */
    created_on?: string;
    /** database details. */
    database_details: DatabaseRegistrationDatabaseDetails;
    /** Database display name. */
    database_display_name: string;
    /** Database ID. */
    database_id?: string;
    /** String containing the property key values saved for custom database. */
    database_properties?: string[];
    /** Connector type. */
    database_type: string;
    /** Database description. */
    description?: string;
    /** tags. */
    tags?: string[];
  }

  /** database details. */
  export interface DatabaseRegistrationDatabaseDetails {
    /** Database name. */
    database_name?: string;
    /** Host name. */
    hostname: string;
    /** Password. */
    password?: string;
    /** Port. */
    port: number;
    /** SASL Mode. */
    sasl?: boolean;
    /** SSL Mode. */
    ssl?: boolean;
    /** Only for Kafka - Add kafka tables. */
    tables?: string;
    /** Username. */
    username?: string;
  }

  /** Db2 engine details. */
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

  /** External engine details. */
  export interface Db2EngineDetails {
    /** External engine connection string. */
    connection_string?: string;
    /** Metastore host. */
    metastore_host?: string;
  }

  /** Deployment. */
  export interface Deployment {
    /** Cloud type. */
    cloud_type?: string;
    /** Enable private endpoints. */
    enable_private_endpoints?: boolean;
    /** Enable public endpoints. */
    enable_public_endpoints?: boolean;
    /** Parameter for UI to validate if console is used for the first time. */
    first_time_use: boolean;
    /** Formation id. */
    formation_id?: string;
    /** Id. */
    id?: string;
    /** Plan id. */
    plan_id?: string;
    /** Platform options. */
    platform_options?: DeploymentPlatformOptions;
    /** Region. */
    region?: string;
    /** Resource group crn for the formation. */
    resource_group_crn?: string;
    /** Type. */
    type?: string;
    /** Version. */
    version?: string;
  }

  /** Platform options. */
  export interface DeploymentPlatformOptions {
    /** Backup encryption key crn. */
    backup_encryption_key_crn?: string;
    /** Disk encryption key crn. */
    disk_encryption_key_crn?: string;
    /** Key protect key id. */
    key_protect_key_id?: string;
  }

  /** DeploymentsResponse. */
  export interface DeploymentsResponse {
    /** Deployment. */
    deployment?: Deployment;
  }

  /** Endpoints. */
  export interface Endpoints {
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

  /** All engine details. */
  export interface Engine {
    /** list of db2 engines. */
    db2_engines?: Db2Engine[];
    /** list of milvus engines. */
    milvus_services?: MilvusService[];
    /** list of netezza engines. */
    netezza_engines?: NetezzaEngine[];
    /** list of prestissimo engines. */
    prestissimo_engines?: PrestissimoEngine[];
    /** list of presto engines. */
    presto_engines?: PrestoEngine[];
    /** list of spark engines. */
    spark_engines?: SparkEngine[];
  }

  /** External engine details. */
  export interface EngineDetails {
    /** External engine connection string. */
    connection_string?: string;
    /** Endpoints. */
    endpoints?: Endpoints;
    /** Metastore host. */
    metastore_host?: string;
  }

  /** Node details. */
  export interface EngineDetailsBody {
    /** api key to work with the saas IAE instance. */
    api_key?: string;
    /** External engine connection string. */
    connection_string?: string;
    /** Node details. */
    coordinator?: NodeDescriptionBody;
    /** Instance to access the instance. */
    instance_id?: string;
    /** How is the spark instance managed. */
    managed_by?: string;
    /** Size config. */
    size_config?: EngineDetailsBody.Constants.SizeConfig | string;
    /** Node details. */
    worker?: NodeDescriptionBody;
  }
  export namespace EngineDetailsBody {
    export namespace Constants {
      /** Size config. */
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

  /** GetBucketRegistration OK. */
  export interface GetBucketRegistrationOKBody {
    /** Bucket. */
    bucket_registration: BucketRegistration;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** GetCatalog OK. */
  export interface GetCatalogOKBody {
    /** Define the catalog details. */
    catalog: CatalogDetail;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** get databases success response body. */
  export interface GetDatabaseOKBody {
    /** database registration object. */
    database: DatabaseRegistration;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** Response body structure for get deployments. */
  export interface GetDeploymentsOKBody {
    /** DeploymentsResponse. */
    deploymentresponse: DeploymentsResponse;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** getEngineCatalogs OK. */
  export interface GetPrestoEngineCatalogOKBody {
    /** Define the catalog details. */
    catalog: CatalogDetail;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** get engine. */
  export interface GetPrestoEngineOKBody {
    /** EngineDetail. */
    engine: PrestoEngine;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** getSparkApplication. */
  export interface GetSparkEngineApplicationStatusOKBody {
    /** Engine Application Status. */
    application: SparkEngineApplicationStatus;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** GetColumns OK. */
  export interface GetTableOKBody {
    /** Columns. */
    columns: Column[];
    /** Response of success. */
    response: SuccessResponse;
  }

  /** This model represents an individual patch operation to be performed on a JSON document, as defined by RFC 6902. */
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

  /** GetBucketObjects OK. */
  export interface ListBucketObjectsOKBody {
    /** bucket objects. */
    objects: string[];
    /** Response of success. */
    response: SuccessResponse;
  }

  /** GetBucketRegistrations OK. */
  export interface ListBucketRegistrationsOKBody {
    /** Buckets. */
    bucket_registrations: BucketRegistration[];
    /** Response of success. */
    response: SuccessResponse;
  }

  /** GetCatalogs OK. */
  export interface ListCatalogsOKBody {
    /** Catalogs. */
    catalogs: CatalogDetail[];
    /** Response of success. */
    response: SuccessResponse;
  }

  /** list db api response. */
  export interface ListDatabaseRegistrationsOKBody {
    /** Database body. */
    database_registrations: DatabaseRegistration[];
    /** Response of success. */
    response: SuccessResponse;
  }

  /** list db2 engines. */
  export interface ListDb2EnginesOKBody {
    /** list db2 engines. */
    db2_engines: Db2Engine[];
    /** Response of success. */
    response: SuccessResponse;
  }

  /** getEngines. */
  export interface ListEnginesOKBody {
    /** All engine details. */
    engines: Engine;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** list netezza engines. */
  export interface ListNetezzaEnginesOKBody {
    /** list netezza engines. */
    netezza_engines: NetezzaEngine[];
    /** Response of success. */
    response: SuccessResponse;
  }

  /** list other engines. */
  export interface ListOtherEnginesOKBody {
    /** list other engines. */
    other_engines: OtherEngine[];
    /** Response of success. */
    response: SuccessResponse;
  }

  /** get engine catalogs. */
  export interface ListPrestoEngineCatalogsOKBody {
    /** Engine Catalogs. */
    catalogs: Catalog[];
    /** Response of success. */
    response: SuccessResponse;
  }

  /** list Engines. */
  export interface ListPrestoEnginesOKBody {
    /** list presto engines. */
    presto_engines: PrestoEngine[];
    /** Response of success. */
    response: SuccessResponse;
  }

  /** GetSchemas OK. */
  export interface ListSchemasOKBody {
    /** Response of success. */
    response: SuccessResponse;
    /** Schemas. */
    schemas: string[];
  }

  /** Engine Application Detail. */
  export interface ListSparkEngineApplication {
    /** Application ID. */
    application_id?: string;
    /** Auto Termination Time. */
    auto_termination_time?: string;
    /** Creation Time. */
    creation_time?: string;
    /** End Time. */
    end_time?: string;
    /** Failed Time. */
    failed_time?: string;
    /** Finish Time. */
    finish_time?: string;
    /** Application ID. */
    id?: string;
    /** application run time. */
    runtime?: ListSparkEngineApplicationRuntime;
    /** Spark application ID. */
    spark_application_id?: string;
    /** Spark application name. */
    spark_application_name?: string;
    /** Start Time. */
    start_time?: string;
    /** Application State. */
    state?: string;
    /** Application submission time. */
    submission_time?: string;
    /** Submission Time. */
    template_id?: string;
  }

  /** application run time. */
  export interface ListSparkEngineApplicationRuntime {
    /** Spark Version. */
    spark_version?: string;
  }

  /** list Applications. */
  export interface ListSparkEngineApplicationsOKBody {
    /** list spark engines. */
    applications: ListSparkEngineApplication[];
    /** Response of success. */
    response: SuccessResponse;
  }

  /** List spark engines. */
  export interface ListSparkEnginesOKBody {
    /** Response of success. */
    response: SuccessResponse;
    /** List spark engines. */
    spark_engines: SparkEngine[];
  }

  /** TableSnapshot OK. */
  export interface ListTableSnapshotsOKBody {
    /** Response of success. */
    response: SuccessResponse;
    /** Snapshots. */
    snapshots: TableSnapshot[];
  }

  /** GetTables OK. */
  export interface ListTablesOKBody {
    /** Response of success. */
    response: SuccessResponse;
    /** List of the tables present in the schema. */
    tables: string[];
  }

  /** milvus service details. */
  export interface MilvusService {
    /** Actions. */
    actions?: string[];
    /** Created user name. */
    created_by?: string;
    /** Created time in epoch format. */
    created_on?: number;
    /** Service description. */
    description?: string;
    /** milvus port. */
    grpc_port?: number;
    /** milvus display name. */
    host_name?: string;
    /** milvus port. */
    https_port?: number;
    /** Origin - place holder. */
    origin?: string;
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

  /** Netezza engine details. */
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

  /** External engine details. */
  export interface NetezzaEngineDetails {
    /** External engine connection string. */
    connection_string?: string;
    /** Metastore host. */
    metastore_host?: string;
  }

  /** NodeDescription. */
  export interface NodeDescription {
    /** Node type. */
    node_type?: string;
    /** Quantity. */
    quantity?: number;
  }

  /** Node details. */
  export interface NodeDescriptionBody {
    /** Node Type, r5, m, i.. */
    node_type?: string;
    /** Number of nodes. */
    quantity?: number;
  }

  /** external engine details. */
  export interface OtherEngine {
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
    /** origin. */
    origin?: string;
    /** engine status. */
    status?: string;
    /** engine status code. */
    status_code?: number;
    /** Tags. */
    tags?: string[];
    /** Type like presto, netezza, external,.. */
    type?: string;
  }

  /** External engine details. */
  export interface OtherEngineDetails {
    /** external engine connection string. */
    connection_string?: string;
    /** Actual engine type. */
    engine_type?: string;
    /** metastore host. */
    metastore_host?: string;
  }

  /** Endpoints. */
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

  /** EngineDetail. */
  export interface PrestissimoEngine {
    /** Actions. */
    actions?: string[];
    /** Associated catalog. */
    associated_catalogs?: string[];
    /** watsonx.data build version. */
    build_version?: string;
    /** Node details. */
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
    /** Applicable only for OCP based clusters.  This is typically  servicename+route. */
    external_host_name: string;
    /** Group ID. */
    group_id?: string;
    /** Engine host name. In case of OCP based clusters, this is internal hostname. */
    host_name?: string;
    /** Origin - place holder. */
    origin?: string;
    /** Engine port. */
    port?: number;
    /** Region - place holder. */
    region?: string;
    /** Size config. */
    size_config?: string;
    /** Recipe status. */
    status?: PrestissimoEngine.Constants.Status | string;
    /** Engine status code. */
    status_code: number;
    /** Tags. */
    tags?: string[];
    /** Type like prestissimo, netezza,.. */
    type?: string;
    /** Version of the engine. */
    version?: string;
    /** Node details. */
    worker?: PrestissimoNodeDescriptionBody;
  }
  export namespace PrestissimoEngine {
    export namespace Constants {
      /** Recipe status. */
      export enum Status {
        RUNNING = 'running',
        PENDING = 'pending',
        STOPPED = 'stopped',
      }
    }
  }

  /** External engine details. */
  export interface PrestissimoEngineDetails {
    /** External engine connection string. */
    connection_string?: string;
    /** Endpoints. */
    endpoints?: PrestissimoEndpoints;
    /** Metastore host. */
    metastore_host?: string;
  }

  /** Node details. */
  export interface PrestissimoNodeDescriptionBody {
    /** Node Type, r5, m, i.. */
    node_type?: string;
    /** Number of nodes. */
    quantity?: number;
  }

  /** EngineDetail. */
  export interface PrestoEngine {
    /** Actions. */
    actions?: string[];
    /** Associated catalog. */
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
    /** External engine details. */
    engine_details?: EngineDetails;
    /** Engine display name. */
    engine_display_name?: string;
    /** Engine programmatic name. */
    engine_id?: string;
    /** Applicable only for OCP based clusters.  This is typically  servicename+route. */
    external_host_name: string;
    /** Group ID. */
    group_id?: string;
    /** Engine host name. In case of OCP based clusters, this is internal hostname. */
    host_name?: string;
    /** Origin - place holder. */
    origin?: string;
    /** Engine port. */
    port?: number;
    /** Region - place holder. */
    region?: string;
    /** Size config. */
    size_config?: string;
    /** Engine status. */
    status?: PrestoEngine.Constants.Status | string;
    /** Engine status code. */
    status_code: number;
    /** Tags. */
    tags?: string[];
    /** Type like presto, netezza,.. */
    type?: string;
    /** Version of the engine. */
    version?: string;
    /** NodeDescription. */
    worker?: NodeDescription;
  }
  export namespace PrestoEngine {
    export namespace Constants {
      /** Engine status. */
      export enum Status {
        RUNNING = 'running',
        PENDING = 'pending',
        STOPPED = 'stopped',
      }
    }
  }

  /** database details. */
  export interface RegisterDatabaseCatalogBodyDatabaseDetails {
    /** contents of a pem/crt file. */
    certificate?: string;
    /** extension of the certificate file. */
    certificate_extension?: string;
    /** Database name. */
    database_name?: string;
    /** Host name. */
    hostname: string;
    /** String of hostname:port. */
    hosts?: string;
    /** Psssword. */
    password?: string;
    /** Port. */
    port: number;
    /** SASL Mode. */
    sasl?: boolean;
    /** SSL Mode. */
    ssl?: boolean;
    /** Only for Kafka - Add kafka tables. */
    tables?: string;
    /** Username. */
    username?: string;
  }

  /** Key value object. */
  export interface RegisterDatabaseCatalogBodyDatabasePropertiesItems {
    /** Wether the value is to be encrypted before storing. */
    encrypt: boolean;
    /** Key of the database property. */
    key: string;
    /** Value of the database property. */
    value: string;
  }

  /** get engine catalogs. */
  export interface ReplacePrestoEngineCatalogsCreatedBody {
    /** Engine Catalogs. */
    catalogs: Catalog[];
    /** Response of success. */
    response: SuccessResponse;
  }

  /** success response. */
  export interface ReplaceSnapshotCreatedBody {
    /** Response of success. */
    response?: SuccessResponse;
  }

  /** explainAnalyzeStatement OK. */
  export interface RunExplainAnalyzeStatementOKBody {
    /** Response of success. */
    response: SuccessResponse;
    /** explainAnalyzeStatement result. */
    result: string;
  }

  /** ExplainStatement OK. */
  export interface RunExplainStatementOKBody {
    /** Response of success. */
    response: SuccessResponse;
    /** Result. */
    result: string;
  }

  /** Application details. */
  export interface SparkApplicationDetails {
    /** Application. */
    application: string;
    /** List of arguments. */
    arguments: string[];
    /** Application. */
    conf: JsonObject;
    /** Application. */
    env: JsonObject;
    /** Display name of the spark application. */
    name?: string;
  }

  /** EngineDetail. */
  export interface SparkEngine {
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
    engine_details?: SparkEngineDetails;
    /** Engine display name. */
    engine_display_name?: string;
    /** Engine programmatic name. */
    engine_id?: string;
    /** Origin - place holder. */
    origin?: string;
    /** Engine status. */
    status?: string;
    /** Tags. */
    tags?: string[];
    /** Type like spark, netezza,.. */
    type?: string;
  }

  /** EngineSubmitApplicationBody. */
  export interface SparkEngineApplication {
    /** Application ID. */
    application_id?: string;
    /** Application ID. */
    id?: string;
    /** state. */
    state?: string;
  }

  /** Engine Application Status. */
  export interface SparkEngineApplicationStatus {
    /** Application Details. */
    application_details?: SparkEngineApplicationStatusApplicationDetails;
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
    /** Return code. */
    return_code?: string;
    /** Spark application ID. */
    spark_application_id?: string;
    /** Spark application name. */
    spark_application_name?: string;
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
  }

  /** Application Details. */
  export interface SparkEngineApplicationStatusApplicationDetails {
    /** Engine display name. */
    application?: string;
    /** List of arguments. */
    arguments?: string[];
    /** Application. */
    conf?: SparkEngineApplicationStatusApplicationDetailsConf;
    /** Environment variables. */
    env?: JsonObject;
    /** Application name. */
    name?: string;
  }

  /** Application. */
  export interface SparkEngineApplicationStatusApplicationDetailsConf {
    /** Spark application name. */
    spark_app_name?: string;
    /** Hive Metastore authentication mode. */
    spark_hive_metastore_client_auth_mode?: string;
    /** Hive Metastore plain password. */
    spark_hive_metastore_client_plain_password?: string;
    /** Hive Metastore plain username. */
    spark_hive_metastore_client_plain_username?: string;
    /** Truststore password. */
    spark_hive_metastore_truststore_password?: string;
    /** Truststore path. */
    spark_hive_metastore_truststore_path?: string;
    /** Truststore type. */
    spark_hive_metastore_truststore_type?: string;
    /** Enable or disable SSL for Hive Metastore. */
    spark_hive_metastore_use_ssl?: string;
    /** SQL catalog implementation. */
    spark_sql_catalog_implementation?: string;
    /** Lakehouse catalog name. */
    spark_sql_catalog_lakehouse?: string;
    /** Lakehouse catalog type. */
    spark_sql_catalog_lakehouse_type?: string;
    /** Lakehouse catalog URI. */
    spark_sql_catalog_lakehouse_uri?: string;
    /** SQL extensions. */
    spark_sql_extensions?: string;
    /** Enable or disable Iceberg vectorization. */
    spark_sql_iceberg_vectorization_enabled?: string;
  }

  /** State details. */
  export interface SparkEngineApplicationStatusStateDetailsItems {
    /** State details code. */
    code?: string;
    /** State details message. */
    message?: string;
    /** State details type. */
    type?: string;
  }

  /** External engine details. */
  export interface SparkEngineDetails {
    /** External engine connection string. */
    connection_string?: string;
    /** Application Endpoints. */
    endpoints?: SparkEngineDetailsEndpoints;
  }

  /** Application Endpoints. */
  export interface SparkEngineDetailsEndpoints {
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

  /** Node details. */
  export interface SparkEngineDetailsPrototype {
    /** api key to work with the saas IAE instance. */
    api_key?: string;
    /** External engine connection string. */
    connection_string?: string;
    /** Instance to access the instance. */
    instance_id?: string;
    /** How is the spark instance managed. */
    managed_by?: string;
  }

  /** Response of success. */
  export interface SuccessResponse {
    /** Message. */
    message?: string;
    /** Message code. */
    message_code?: string;
  }

  /** TableSnapshot. */
  export interface TableSnapshot {
    /** Committed at. */
    committed_at?: string;
    /** Operation. */
    operation?: string;
    /** Snapshot id. */
    snapshot_id?: string;
    /** Summary. */
    summary?: JsonObject;
  }

  /** ValidateBucketRegistrationCredentials OK. */
  export interface TestBucketConnectionOKBody {
    /** object defining the response of checking if the credentials of a bucket are valid. */
    bucket_status: BucketStatusResponse;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** UpdateBucketRegistration OK. */
  export interface UpdateBucketRegistrationOKBody {
    /** Bucket. */
    bucket_registration: BucketRegistration;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** get databases success response body. */
  export interface UpdateDatabaseOKBody {
    /** database registration object. */
    database: DatabaseRegistration;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** update engine response. */
  export interface UpdateDb2EngineOKBody {
    /** Db2 engine details. */
    db2_engine: Db2Engine;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** update engine response. */
  export interface UpdateEngineOKBody {
    /** EngineDetail. */
    engine: PrestoEngine;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** update engine response. */
  export interface UpdateNetezzaEngineOKBody {
    /** Netezza engine details. */
    netezza_engine: NetezzaEngine;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** update engine response. */
  export interface UpdateSparkEngineOKBody {
    /** EngineDetail. */
    engine: SparkEngine;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** success response. */
  export interface UpdateSyncCatalogOKBody {
    /** Response of success. */
    response?: SuccessResponse;
  }

  /** success response. */
  export interface UpdateTableOKBody {
    /** Response of success. */
    response?: SuccessResponse;
  }

  /** database details. */
  export interface ValidateDatabaseBodyDatabaseDetails {
    /** db name. */
    database_name?: string;
    /** Host name. */
    hostname: string;
    /** Psssword. */
    password?: string;
    /** Port. */
    port: number;
    /** SASL Mode. */
    sasl?: boolean;
    /** SSL Mode. */
    ssl?: boolean;
    /** Only for Kafka - Add kafka tables. */
    tables?: string;
    /** Username. */
    username?: string;
  }

  /** success response. */
  export interface ValidateDatabaseConnectionOKBody {
    /** validate db response. */
    connection_response: ValidateDatabaseConnectionOKBodyConnectionResponse;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** validate db response. */
  export interface ValidateDatabaseConnectionOKBodyConnectionResponse {
    /** whether the connection details are valid or not. */
    state?: boolean;
    /** Connection message received by connector libraries for failed connection. */
    state_message?: string;
  }
}

export = WatsonxDataV2;
