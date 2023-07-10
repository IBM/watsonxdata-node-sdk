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
 * IBM OpenAPI SDK Code Generator Version: 3.72.2-2bede9d2-20230601-202845
 */

import * as extend from 'extend';
import { IncomingHttpHeaders, OutgoingHttpHeaders } from 'http';
import {
  Authenticator,
  BaseService,
  getAuthenticatorFromEnvironment,
  validateParams,
  UserOptions,
} from 'ibm-cloud-sdk-core';
import { getSdkHeaders } from '../lib/common';

/**
 * This is the Public API for IBM watsonx.data
 *
 * API Version: SaaS-GA-1.0.0
 */

class WatsonxDataV1 extends BaseService {
  static DEFAULT_SERVICE_URL: string = 'https://lakehouse/api/v1';

  static DEFAULT_SERVICE_NAME: string = 'watsonx_data';

  /*************************
   * Factory method
   ************************/

  /**
   * Constructs an instance of WatsonxDataV1 with passed in options and external configuration.
   *
   * @param {UserOptions} [options] - The parameters to send to the service.
   * @param {string} [options.serviceName] - The name of the service to configure
   * @param {Authenticator} [options.authenticator] - The Authenticator object used to authenticate requests to the service
   * @param {string} [options.serviceUrl] - The URL for the service
   * @returns {WatsonxDataV1}
   */

  public static newInstance(options: UserOptions): WatsonxDataV1 {
    options = options || {};

    if (!options.serviceName) {
      options.serviceName = this.DEFAULT_SERVICE_NAME;
    }
    if (!options.authenticator) {
      options.authenticator = getAuthenticatorFromEnvironment(options.serviceName);
    }
    const service = new WatsonxDataV1(options);
    service.configureService(options.serviceName);
    if (options.serviceUrl) {
      service.setServiceUrl(options.serviceUrl);
    }
    return service;
  }

  /**
   * Construct a WatsonxDataV1 object.
   *
   * @param {Object} options - Options for the service.
   * @param {string} [options.serviceUrl] - The base url to use when contacting the service. The base url may differ between IBM Cloud regions.
   * @param {OutgoingHttpHeaders} [options.headers] - Default headers that shall be included with every request to the service.
   * @param {Authenticator} options.authenticator - The Authenticator object used to authenticate requests to the service
   * @constructor
   * @returns {WatsonxDataV1}
   */
  constructor(options: UserOptions) {
    options = options || {};

    super(options);
    if (options.serviceUrl) {
      this.setServiceUrl(options.serviceUrl);
    } else {
      this.setServiceUrl(WatsonxDataV1.DEFAULT_SERVICE_URL);
    }
  }

  /*************************
   * accessManagement
   ************************/

  /**
   * Grant users and groups permission to the db connection.
   *
   * You require can_administer permission to perform this action.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.databaseId - The db connection id.
   * @param {BucketDbConnGroupsMetadata[]} [params.groups] - The group list.
   * @param {BucketDbConnUsersMetadata[]} [params.users] - The user list.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>>}
   */
  public createDbConnUsers(
    params: WatsonxDataV1.CreateDbConnUsersParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['databaseId'];
    const _validParams = [
      'databaseId',
      'groups',
      'users',
      'lhInstanceId',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'database_id': _params.databaseId,
      'groups': _params.groups,
      'users': _params.users,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'createDbConnUsers');

    const parameters = {
      options: {
        url: '/access/databases',
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
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get policies.
   *
   * Get list of all data policies.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {string} [params.catalogName] - catalog name to filter.
   * @param {string} [params.status] - policy status to filter.
   * @param {boolean} [params.includeMetadata] - response will include data policy meta data or not.
   * @param {boolean} [params.includeRules] - response will include data policy rules or not.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.PolicyListSchema>>}
   */
  public listDataPolicies(
    params?: WatsonxDataV1.ListDataPoliciesParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.PolicyListSchema>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = [
      'lhInstanceId',
      'authInstanceId',
      'catalogName',
      'status',
      'includeMetadata',
      'includeRules',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'catalog_name': _params.catalogName,
      'status': _params.status,
      'include_metadata': _params.includeMetadata,
      'include_rules': _params.includeRules,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'listDataPolicies');

    const parameters = {
      options: {
        url: '/access/data_policies',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create new data policy.
   *
   * Create new data policy.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogName - catalog name.
   * @param {string} params.dataArtifact - data artifact.
   * @param {string} params.policyName - the displayed name for data policy.
   * @param {Rule[]} params.rules - rules.
   * @param {string} [params.description] - a more detailed description of the policy.
   * @param {string} [params.status] - data policy status.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.CreateDataPolicyCreatedBody>>}
   */
  public createDataPolicy(
    params: WatsonxDataV1.CreateDataPolicyParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.CreateDataPolicyCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['catalogName', 'dataArtifact', 'policyName', 'rules'];
    const _validParams = [
      'catalogName',
      'dataArtifact',
      'policyName',
      'rules',
      'description',
      'status',
      'lhInstanceId',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'catalog_name': _params.catalogName,
      'data_artifact': _params.dataArtifact,
      'policy_name': _params.policyName,
      'rules': _params.rules,
      'description': _params.description,
      'status': _params.status,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'createDataPolicy');

    const parameters = {
      options: {
        url: '/access/data_policies',
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
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Revoke data policy access management policy.
   *
   * You require catalog can_administer permission to perform this action.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string[]} [params.dataPolicies] - data policy names array to be deleted.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>>}
   */
  public deleteDataPolicies(
    params?: WatsonxDataV1.DeleteDataPoliciesParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['dataPolicies', 'lhInstanceId', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'data_policies': _params.dataPolicies,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV1.DEFAULT_SERVICE_NAME,
      'v1',
      'deleteDataPolicies'
    );

    const parameters = {
      options: {
        url: '/access/data_policies',
        method: 'DELETE',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Content-Type': 'application/json',
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get permission in the engine.
   *
   * Get users and groups permission in the engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - Engine ID for GET.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.GetEngineUsersSchema>>}
   */
  public getEngineUsers(
    params: WatsonxDataV1.GetEngineUsersParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.GetEngineUsersSchema>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'lhInstanceId', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'getEngineUsers');

    const parameters = {
      options: {
        url: '/access/engines/{engine_id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Revoke permission to access engine.
   *
   * You require administrator role or can_administer permission to perform this action.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - Engine ID for DELETE.
   * @param {string[]} [params.groups] - The group ids array to be deleted.
   * @param {string[]} [params.users] - The user names array to be deleted.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>>}
   */
  public deleteEngineUsers(
    params: WatsonxDataV1.DeleteEngineUsersParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = [
      'engineId',
      'groups',
      'users',
      'lhInstanceId',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'groups': _params.groups,
      'users': _params.users,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteEngineUsers');

    const parameters = {
      options: {
        url: '/access/engines/{engine_id}',
        method: 'DELETE',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Content-Type': 'application/json',
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Updates user and groups permission in the engine.
   *
   * You require administrator role or can_administer permission to perform this action.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - Engine ID for PATCH.
   * @param {EngineGroupsMetadata[]} [params.groups] - The group list.
   * @param {EngineUsersMetadata[]} [params.users] - The user list.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>>}
   */
  public updateEngineUsers(
    params: WatsonxDataV1.UpdateEngineUsersParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = [
      'engineId',
      'groups',
      'users',
      'lhInstanceId',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'groups': _params.groups,
      'users': _params.users,
    };

    const path = {
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'updateEngineUsers');

    const parameters = {
      options: {
        url: '/access/engines/{engine_id}',
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
            'Content-Type': 'application/json',
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Revoke permission to access db connection.
   *
   * You require can_administer permission to perform this action.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.databaseId - Db connection id for DELETE.
   * @param {string[]} [params.groups] - The group ids array to be deleted.
   * @param {string[]} [params.users] - The user names array to be deleted.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>>}
   */
  public deleteDbConnUsers(
    params: WatsonxDataV1.DeleteDbConnUsersParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['databaseId'];
    const _validParams = [
      'databaseId',
      'groups',
      'users',
      'lhInstanceId',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'groups': _params.groups,
      'users': _params.users,
    };

    const path = {
      'database_id': _params.databaseId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteDbConnUsers');

    const parameters = {
      options: {
        url: '/access/databases/{database_id}',
        method: 'DELETE',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Content-Type': 'application/json',
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Updates user and groups permission in the db connection.
   *
   * You require can_administer permission to perform this action.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.databaseId - Db connection id for PATCH.
   * @param {BucketDbConnGroupsMetadata[]} [params.groups] - The group list.
   * @param {BucketDbConnUsersMetadata[]} [params.users] - The user list.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>>}
   */
  public updateDbConnUsers(
    params: WatsonxDataV1.UpdateDbConnUsersParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['databaseId'];
    const _validParams = [
      'databaseId',
      'groups',
      'users',
      'lhInstanceId',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'groups': _params.groups,
      'users': _params.users,
    };

    const path = {
      'database_id': _params.databaseId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'updateDbConnUsers');

    const parameters = {
      options: {
        url: '/access/databases/{database_id}',
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
            'Content-Type': 'application/json',
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get permission in the db connection.
   *
   * Get users and groups permission in the db connection.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.databaseId - Db connection id for GET.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.GetDbConnUsersSchema>>}
   */
  public getDbConnUsers(
    params: WatsonxDataV1.GetDbConnUsersParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.GetDbConnUsersSchema>> {
    const _params = { ...params };
    const _requiredParams = ['databaseId'];
    const _validParams = ['databaseId', 'lhInstanceId', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'database_id': _params.databaseId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'getDbConnUsers');

    const parameters = {
      options: {
        url: '/access/databases/{database_id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Grant users and groups permission to the catalog.
   *
   * You require can_administer permission to perform this action.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogName - The catalog name.
   * @param {CatalogGroupsMetadata[]} [params.groups] - The group list.
   * @param {CatalogUsersMetadata[]} [params.users] - The user list.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>>}
   */
  public createCatalogUsers(
    params: WatsonxDataV1.CreateCatalogUsersParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['catalogName'];
    const _validParams = [
      'catalogName',
      'groups',
      'users',
      'lhInstanceId',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'catalog_name': _params.catalogName,
      'groups': _params.groups,
      'users': _params.users,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV1.DEFAULT_SERVICE_NAME,
      'v1',
      'createCatalogUsers'
    );

    const parameters = {
      options: {
        url: '/access/catalogs',
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
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get users and groups permission in the catalog.
   *
   * Get users and groups permission in the catalog.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogName - catalog name for GET.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.GetCatalogUsersSchema>>}
   */
  public getCatalogUsers(
    params: WatsonxDataV1.GetCatalogUsersParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.GetCatalogUsersSchema>> {
    const _params = { ...params };
    const _requiredParams = ['catalogName'];
    const _validParams = ['catalogName', 'lhInstanceId', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'catalog_name': _params.catalogName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'getCatalogUsers');

    const parameters = {
      options: {
        url: '/access/catalogs/{catalog_name}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Revoke multiple users and groups permission to access catalog.
   *
   * You require can_administer permission to perform this action.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogName - Catalog name for DELETE.
   * @param {string[]} [params.groups] - The group ids array to be deleted.
   * @param {string[]} [params.users] - The user names array to be deleted.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>>}
   */
  public deleteCatalogUsers(
    params: WatsonxDataV1.DeleteCatalogUsersParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['catalogName'];
    const _validParams = [
      'catalogName',
      'groups',
      'users',
      'lhInstanceId',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'groups': _params.groups,
      'users': _params.users,
    };

    const path = {
      'catalog_name': _params.catalogName,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV1.DEFAULT_SERVICE_NAME,
      'v1',
      'deleteCatalogUsers'
    );

    const parameters = {
      options: {
        url: '/access/catalogs/{catalog_name}',
        method: 'DELETE',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Content-Type': 'application/json',
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Updates user and groups permission in the catalog.
   *
   * You require can_administer permission to perform this action.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogName - Catalog name for PATCH.
   * @param {CatalogGroupsMetadata[]} [params.groups] - The group list.
   * @param {CatalogUsersMetadata[]} [params.users] - The user list.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>>}
   */
  public updateCatalogUsers(
    params: WatsonxDataV1.UpdateCatalogUsersParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['catalogName'];
    const _validParams = [
      'catalogName',
      'groups',
      'users',
      'lhInstanceId',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'groups': _params.groups,
      'users': _params.users,
    };

    const path = {
      'catalog_name': _params.catalogName,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV1.DEFAULT_SERVICE_NAME,
      'v1',
      'updateCatalogUsers'
    );

    const parameters = {
      options: {
        url: '/access/catalogs/{catalog_name}',
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
            'Content-Type': 'application/json',
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Evaluate permission.
   *
   * Evaluate user has permission to access resource or not.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {ResourcesMetadata[]} [params.resources] - resource list.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.EvaluationResultSchema>>}
   */
  public evaluate(
    params?: WatsonxDataV1.EvaluateParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.EvaluationResultSchema>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['resources', 'lhInstanceId', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'resources': _params.resources,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'evaluate');

    const parameters = {
      options: {
        url: '/access/evaluation',
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
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get policies for specific catalog in catalog_name list.
   *
   * Get policies list.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {string[]} [params.catalogList] - policies for specific catalogs list.
   * @param {string[]} [params.engineList] - policies for specific engines list.
   * @param {string[]} [params.dataPoliciesList] - policies for specific Data Polices list.
   * @param {boolean} [params.includeDataPolicies] - include policies for specific catalogs or not.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.PolicySchemaList>>}
   */
  public getPoliciesList(
    params?: WatsonxDataV1.GetPoliciesListParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.PolicySchemaList>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = [
      'lhInstanceId',
      'authInstanceId',
      'catalogList',
      'engineList',
      'dataPoliciesList',
      'includeDataPolicies',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'catalog_list': _params.catalogList,
      'engine_list': _params.engineList,
      'data_policies_list': _params.dataPoliciesList,
      'include_data_policies': _params.includeDataPolicies,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'getPoliciesList');

    const parameters = {
      options: {
        url: '/access/policies',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Grant users and groups permission to the metastore.
   *
   * You require administrator role or can_administer permission to perform this action.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.metastoreName - The metastore name.
   * @param {GroupsMetadata[]} [params.groups] - The group list.
   * @param {UsersMetadata[]} [params.users] - The user list.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>>}
   */
  public createMetastoreUsers(
    params: WatsonxDataV1.CreateMetastoreUsersParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['metastoreName'];
    const _validParams = [
      'metastoreName',
      'groups',
      'users',
      'lhInstanceId',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'metastore_name': _params.metastoreName,
      'groups': _params.groups,
      'users': _params.users,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV1.DEFAULT_SERVICE_NAME,
      'v1',
      'createMetastoreUsers'
    );

    const parameters = {
      options: {
        url: '/access/metastores',
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
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get permission in the metastore.
   *
   * Get users and groups permission in the metastore.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.metastoreName - Metastore name for GET.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.GetMetastoreUsersSchema>>}
   */
  public getMetastoreUsers(
    params: WatsonxDataV1.GetMetastoreUsersParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.GetMetastoreUsersSchema>> {
    const _params = { ...params };
    const _requiredParams = ['metastoreName'];
    const _validParams = ['metastoreName', 'lhInstanceId', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'metastore_name': _params.metastoreName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'getMetastoreUsers');

    const parameters = {
      options: {
        url: '/access/metastores/{metastore_name}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Revoke permission to access metastore.
   *
   * You require administrator role or can_administer permission to perform this action.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.metastoreName - Metastore name for DELETE.
   * @param {string[]} [params.groups] - The group ids array to be deleted.
   * @param {string[]} [params.users] - The user names array to be deleted.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>>}
   */
  public deleteMetastoreUsers(
    params: WatsonxDataV1.DeleteMetastoreUsersParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['metastoreName'];
    const _validParams = [
      'metastoreName',
      'groups',
      'users',
      'lhInstanceId',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'groups': _params.groups,
      'users': _params.users,
    };

    const path = {
      'metastore_name': _params.metastoreName,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV1.DEFAULT_SERVICE_NAME,
      'v1',
      'deleteMetastoreUsers'
    );

    const parameters = {
      options: {
        url: '/access/metastores/{metastore_name}',
        method: 'DELETE',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Content-Type': 'application/json',
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Updates user and groups permission in the metastore.
   *
   * You require administrator role or can_administer permission to perform this action.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.metastoreName - Metastore name for PATCH.
   * @param {GroupsMetadata[]} [params.groups] - The group list.
   * @param {UsersMetadata[]} [params.users] - The user list.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>>}
   */
  public updateMetastoreUsers(
    params: WatsonxDataV1.UpdateMetastoreUsersParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['metastoreName'];
    const _validParams = [
      'metastoreName',
      'groups',
      'users',
      'lhInstanceId',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'groups': _params.groups,
      'users': _params.users,
    };

    const path = {
      'metastore_name': _params.metastoreName,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV1.DEFAULT_SERVICE_NAME,
      'v1',
      'updateMetastoreUsers'
    );

    const parameters = {
      options: {
        url: '/access/metastores/{metastore_name}',
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
            'Content-Type': 'application/json',
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Grant users and groups permission to the bucket.
   *
   * You require can_administer permission to perform this action.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bucketId - The bucket id.
   * @param {BucketDbConnGroupsMetadata[]} [params.groups] - The group list.
   * @param {BucketDbConnUsersMetadata[]} [params.users] - The user list.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>>}
   */
  public createBucketUsers(
    params: WatsonxDataV1.CreateBucketUsersParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['bucketId'];
    const _validParams = [
      'bucketId',
      'groups',
      'users',
      'lhInstanceId',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'bucket_id': _params.bucketId,
      'groups': _params.groups,
      'users': _params.users,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'createBucketUsers');

    const parameters = {
      options: {
        url: '/access/buckets',
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
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get AMS default policies.
   *
   * Get AMS default policies.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.DefaultPolicySchema>>}
   */
  public getDefaultPolicies(
    params?: WatsonxDataV1.GetDefaultPoliciesParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.DefaultPolicySchema>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['lhInstanceId', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV1.DEFAULT_SERVICE_NAME,
      'v1',
      'getDefaultPolicies'
    );

    const parameters = {
      options: {
        url: '/access/default_policies',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get AMS policies version.
   *
   * Get AMS policies version.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.PolicyVersionResultSchema>>}
   */
  public getPolicyVersion(
    params?: WatsonxDataV1.GetPolicyVersionParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.PolicyVersionResultSchema>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['lhInstanceId', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'getPolicyVersion');

    const parameters = {
      options: {
        url: '/access/policy_versions',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get policy.
   *
   * Get policy detail.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.policyName - policy name to get.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.PolicySchema>>}
   */
  public getDataPolicy(
    params: WatsonxDataV1.GetDataPolicyParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.PolicySchema>> {
    const _params = { ...params };
    const _requiredParams = ['policyName'];
    const _validParams = ['policyName', 'lhInstanceId', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'policy_name': _params.policyName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'getDataPolicy');

    const parameters = {
      options: {
        url: '/access/data_policies/{policy_name}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Updates data policy.
   *
   * You require catalog can_administer permission to perform this action.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.policyName - Policy name for PATCH.
   * @param {string} params.catalogName - catalog name.
   * @param {string} params.dataArtifact - data artifact.
   * @param {Rule[]} params.rules - rules.
   * @param {string} [params.description] - a more detailed description of the policy.
   * @param {string} [params.status] - data policy status.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.ReplaceDataPolicyCreatedBody>>}
   */
  public replaceDataPolicy(
    params: WatsonxDataV1.ReplaceDataPolicyParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.ReplaceDataPolicyCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['policyName', 'catalogName', 'dataArtifact', 'rules'];
    const _validParams = [
      'policyName',
      'catalogName',
      'dataArtifact',
      'rules',
      'description',
      'status',
      'lhInstanceId',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'catalog_name': _params.catalogName,
      'data_artifact': _params.dataArtifact,
      'rules': _params.rules,
      'description': _params.description,
      'status': _params.status,
    };

    const path = {
      'policy_name': _params.policyName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'replaceDataPolicy');

    const parameters = {
      options: {
        url: '/access/data_policies/{policy_name}',
        method: 'PUT',
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
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Revoke data policy access management policy.
   *
   * You require catalog can_administer permission to perform this action.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.policyName - Policy name for DELETE.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>>}
   */
  public deleteDataPolicy(
    params: WatsonxDataV1.DeleteDataPolicyParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['policyName'];
    const _validParams = ['policyName', 'lhInstanceId', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'policy_name': _params.policyName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteDataPolicy');

    const parameters = {
      options: {
        url: '/access/data_policies/{policy_name}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Grant permission to the engine.
   *
   * You require administrator role or can_administer permission to perform this action.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - The engine id.
   * @param {EngineGroupsMetadata[]} [params.groups] - The group list.
   * @param {EngineUsersMetadata[]} [params.users] - The user list.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>>}
   */
  public createEngineUsers(
    params: WatsonxDataV1.CreateEngineUsersParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = [
      'engineId',
      'groups',
      'users',
      'lhInstanceId',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'engine_id': _params.engineId,
      'groups': _params.groups,
      'users': _params.users,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'createEngineUsers');

    const parameters = {
      options: {
        url: '/access/engines',
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
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get permission in the bucket.
   *
   * Get users and groups permission in the bucket.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bucketId - Bucket name for GET.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.GetBucketUsersSchema>>}
   */
  public getBucketUsers(
    params: WatsonxDataV1.GetBucketUsersParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.GetBucketUsersSchema>> {
    const _params = { ...params };
    const _requiredParams = ['bucketId'];
    const _validParams = ['bucketId', 'lhInstanceId', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'bucket_id': _params.bucketId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'getBucketUsers');

    const parameters = {
      options: {
        url: '/access/buckets/{bucket_id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Revoke permission to access bucket.
   *
   * You require can_administer permission to perform this action.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bucketId - Bucket ID for DELETE.
   * @param {string[]} [params.groups] - The group ids array to be deleted.
   * @param {string[]} [params.users] - The user names array to be deleted.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>>}
   */
  public deleteBucketUsers(
    params: WatsonxDataV1.DeleteBucketUsersParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['bucketId'];
    const _validParams = [
      'bucketId',
      'groups',
      'users',
      'lhInstanceId',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'groups': _params.groups,
      'users': _params.users,
    };

    const path = {
      'bucket_id': _params.bucketId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteBucketUsers');

    const parameters = {
      options: {
        url: '/access/buckets/{bucket_id}',
        method: 'DELETE',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Content-Type': 'application/json',
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Updates user and groups permission in the bucket.
   *
   * You require can_administer permission to perform this action.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bucketId - Bucket ID for PATCH.
   * @param {BucketDbConnGroupsMetadata[]} [params.groups] - The group list.
   * @param {BucketDbConnUsersMetadata[]} [params.users] - The user list.
   * @param {string} [params.lhInstanceId] - Lake House Instance ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>>}
   */
  public updateBucketUsers(
    params: WatsonxDataV1.UpdateBucketUsersParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['bucketId'];
    const _validParams = [
      'bucketId',
      'groups',
      'users',
      'lhInstanceId',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'groups': _params.groups,
      'users': _params.users,
    };

    const path = {
      'bucket_id': _params.bucketId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'updateBucketUsers');

    const parameters = {
      options: {
        url: '/access/buckets/{bucket_id}',
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
            'Content-Type': 'application/json',
            'LhInstanceId': _params.lhInstanceId,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * buckets
   ************************/

  /**
   * Get buckets.
   *
   * Get list of all buckets registered to Lakehouse.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.GetBucketsOKBody>>}
   */
  public getBuckets(
    params?: WatsonxDataV1.GetBucketsParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.GetBucketsOKBody>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'getBuckets');

    const parameters = {
      options: {
        url: '/buckets',
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
   * Get bucket objects.
   *
   * Fetch all objects from a given bucket.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bucketId - Bucket ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.GetBucketObjectsOKBody>>}
   */
  public getBucketObjects(
    params: WatsonxDataV1.GetBucketObjectsParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.GetBucketObjectsOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['bucketId'];
    const _validParams = ['bucketId', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'bucket_id': _params.bucketId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'getBucketObjects');

    const parameters = {
      options: {
        url: '/buckets/bucket/objects',
        method: 'GET',
        qs: query,
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
   * Deactivate bucket.
   *
   * Deactivate an active bucket in Lakehouse.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bucketId - Bucket name.
   * @param {string} [params.accept] - The type of the response:  or *_/_*.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>>}
   */
  public deactivateBucket(
    params: WatsonxDataV1.DeactivateBucketParams
  ): Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>> {
    const _params = { ...params };
    const _requiredParams = ['bucketId'];
    const _validParams = ['bucketId', 'accept', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'bucket_id': _params.bucketId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'deactivateBucket');

    const parameters = {
      options: {
        url: '/buckets/bucket/deactivate',
        method: 'POST',
        body,
        responseType: 'stream',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Content-Type': 'application/json',
            'Accept': _params.accept,
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
   * Register a new bucket in Lakehouse.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {BucketDetails} params.bucketDetails - Bucket Details.
   * @param {string} params.description - Bucket description.
   * @param {string} params.tableType - Table type.
   * @param {string} params.bucketType - Bucket Type.
   * @param {string} params.catalogName - Catalog name for the new catalog to be created with bucket.
   * @param {string} params.managedBy - Managed by.
   * @param {string} [params.bucketDisplayName] - Bucket Display name.
   * @param {string[]} [params.bucketTags] - tags.
   * @param {string[]} [params.catalogTags] - Catalog tags.
   * @param {string} [params.thriftUri] - Thrift URI.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.RegisterBucketCreatedBody>>}
   */
  public registerBucket(
    params: WatsonxDataV1.RegisterBucketParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.RegisterBucketCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = [
      'bucketDetails',
      'description',
      'tableType',
      'bucketType',
      'catalogName',
      'managedBy',
    ];
    const _validParams = [
      'bucketDetails',
      'description',
      'tableType',
      'bucketType',
      'catalogName',
      'managedBy',
      'bucketDisplayName',
      'bucketTags',
      'catalogTags',
      'thriftUri',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'bucket_details': _params.bucketDetails,
      'description': _params.description,
      'table_type': _params.tableType,
      'bucket_type': _params.bucketType,
      'catalog_name': _params.catalogName,
      'managed_by': _params.managedBy,
      'bucket_display_name': _params.bucketDisplayName,
      'bucket_tags': _params.bucketTags,
      'catalog_tags': _params.catalogTags,
      'thrift_uri': _params.thriftUri,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'registerBucket');

    const parameters = {
      options: {
        url: '/buckets/bucket',
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
   * Unregister Bucket.
   *
   * Unregister a bucket from Lakehouse.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bucketId - Bucket name.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>>}
   */
  public unregisterBucket(
    params: WatsonxDataV1.UnregisterBucketParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['bucketId'];
    const _validParams = ['bucketId', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'bucket_id': _params.bucketId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'unregisterBucket');

    const parameters = {
      options: {
        url: '/buckets/bucket',
        method: 'DELETE',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
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
   * Update bucket.
   *
   * Update bucket details/credentials.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bucketId - Bucket ID auto generated during bucket registration.
   * @param {string} [params.accessKey] - Access key ID, encrypted during bucket registration.
   * @param {string} [params.bucketDisplayName] - Bucket display name.
   * @param {string} [params.description] - Modified description.
   * @param {string} [params.secretKey] - Secret access key, encrypted during bucket registration.
   * @param {string[]} [params.tags] - Tags.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>>}
   */
  public updateBucket(
    params: WatsonxDataV1.UpdateBucketParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['bucketId'];
    const _validParams = [
      'bucketId',
      'accessKey',
      'bucketDisplayName',
      'description',
      'secretKey',
      'tags',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'bucket_id': _params.bucketId,
      'access_key': _params.accessKey,
      'bucket_display_name': _params.bucketDisplayName,
      'description': _params.description,
      'secret_key': _params.secretKey,
      'tags': _params.tags,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'updateBucket');

    const parameters = {
      options: {
        url: '/buckets/bucket',
        method: 'PATCH',
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
   * Active bucket.
   *
   * Activate an invalid bucket in Lakehouse.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bucketId - Bucket name.
   * @param {string} [params.accept] - The type of the response:  or *_/_*.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>>}
   */
  public activateBucket(
    params: WatsonxDataV1.ActivateBucketParams
  ): Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>> {
    const _params = { ...params };
    const _requiredParams = ['bucketId'];
    const _validParams = ['bucketId', 'accept', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'bucket_id': _params.bucketId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'activateBucket');

    const parameters = {
      options: {
        url: '/buckets/bucket/activate',
        method: 'POST',
        body,
        responseType: 'stream',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Content-Type': 'application/json',
            'Accept': _params.accept,
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
   * Get databases.
   *
   * Get list of all databases in Lakehouse.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.accept] - The type of the response:  or *_/_*.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>>}
   */
  public getDatabases(
    params?: WatsonxDataV1.GetDatabasesParams
  ): Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['accept', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'getDatabases');

    const parameters = {
      options: {
        url: '/databases',
        method: 'GET',
        responseType: 'stream',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': _params.accept,
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
   * Add or create a new database in Lakehouse.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.databaseDisplayName - Database display name.
   * @param {string} params.databaseType - Connector type.
   * @param {string} params.catalogName - Catalog name of the new catalog to be created with database.
   * @param {RegisterDatabaseCatalogBodyDatabaseDetails} [params.databaseDetails] - database details.
   * @param {string} [params.description] - Database description.
   * @param {string[]} [params.tags] - tags.
   * @param {string} [params.createdBy] - Created by.
   * @param {number} [params.createdOn] - Created on.
   * @param {string} [params.accept] - The type of the response:  or *_/_*.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>>}
   */
  public createDatabaseCatalog(
    params: WatsonxDataV1.CreateDatabaseCatalogParams
  ): Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>> {
    const _params = { ...params };
    const _requiredParams = ['databaseDisplayName', 'databaseType', 'catalogName'];
    const _validParams = [
      'databaseDisplayName',
      'databaseType',
      'catalogName',
      'databaseDetails',
      'description',
      'tags',
      'createdBy',
      'createdOn',
      'accept',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'database_display_name': _params.databaseDisplayName,
      'database_type': _params.databaseType,
      'catalog_name': _params.catalogName,
      'database_details': _params.databaseDetails,
      'description': _params.description,
      'tags': _params.tags,
      'created_by': _params.createdBy,
      'created_on': _params.createdOn,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV1.DEFAULT_SERVICE_NAME,
      'v1',
      'createDatabaseCatalog'
    );

    const parameters = {
      options: {
        url: '/databases/database',
        method: 'POST',
        body,
        responseType: 'stream',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Content-Type': 'application/json',
            'Accept': _params.accept,
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
   * Delete a database from Lakehouse.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.databaseId - Database ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>>}
   */
  public deleteDatabaseCatalog(
    params: WatsonxDataV1.DeleteDatabaseCatalogParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['databaseId'];
    const _validParams = ['databaseId', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'database_id': _params.databaseId,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV1.DEFAULT_SERVICE_NAME,
      'v1',
      'deleteDatabaseCatalog'
    );

    const parameters = {
      options: {
        url: '/databases/database',
        method: 'DELETE',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
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
   * Update database.
   *
   * Update database details.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.databaseId - Database ID.
   * @param {UpdateDatabaseBodyDatabaseDetails} [params.databaseDetails] - database details.
   * @param {string} [params.databaseDisplayName] - Database display name.
   * @param {string} [params.description] - Database description.
   * @param {string[]} [params.tags] - tags.
   * @param {string} [params.accept] - The type of the response:  or *_/_*.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>>}
   */
  public updateDatabase(
    params: WatsonxDataV1.UpdateDatabaseParams
  ): Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>> {
    const _params = { ...params };
    const _requiredParams = ['databaseId'];
    const _validParams = [
      'databaseId',
      'databaseDetails',
      'databaseDisplayName',
      'description',
      'tags',
      'accept',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'database_id': _params.databaseId,
      'database_details': _params.databaseDetails,
      'database_display_name': _params.databaseDisplayName,
      'description': _params.description,
      'tags': _params.tags,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'updateDatabase');

    const parameters = {
      options: {
        url: '/databases/database',
        method: 'PATCH',
        body,
        responseType: 'stream',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Content-Type': 'application/json',
            'Accept': _params.accept,
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
   * Pause engine.
   *
   * Pause a running engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - Engine ID to be paused.
   * @param {string} [params.createdBy] - Created by - Logged in username.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.PauseEngineCreatedBody>>}
   */
  public pauseEngine(
    params: WatsonxDataV1.PauseEngineParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.PauseEngineCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'createdBy', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'engine_id': _params.engineId,
      'created_by': _params.createdBy,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'pauseEngine');

    const parameters = {
      options: {
        url: '/engines/engine/pause',
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
   * Get engines.
   *
   * Get all engine details.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.GetEnginesOKBody>>}
   */
  public getEngines(
    params?: WatsonxDataV1.GetEnginesParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.GetEnginesOKBody>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'getEngines');

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
   * Get instance details.
   *
   * Get instance details.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.accept] - The type of the response:  or *_/_*.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>>}
   */
  public getDeployments(
    params?: WatsonxDataV1.GetDeploymentsParams
  ): Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['accept', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'getDeployments');

    const parameters = {
      options: {
        url: '/instance',
        method: 'GET',
        responseType: 'stream',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': _params.accept,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update engine.
   *
   * Update engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - Engine ID.
   * @param {NodeDescription} [params.coordinator] - NodeDescription.
   * @param {string} [params.description] - Modified description.
   * @param {string} [params.engineDisplayName] - Engine display name.
   * @param {string[]} [params.tags] - Tags.
   * @param {NodeDescription} [params.worker] - NodeDescription.
   * @param {string} [params.accept] - The type of the response:  or *_/_*.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>>}
   */
  public updateEngine(
    params: WatsonxDataV1.UpdateEngineParams
  ): Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = [
      'engineId',
      'coordinator',
      'description',
      'engineDisplayName',
      'tags',
      'worker',
      'accept',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'engine_id': _params.engineId,
      'coordinator': _params.coordinator,
      'description': _params.description,
      'engine_display_name': _params.engineDisplayName,
      'tags': _params.tags,
      'worker': _params.worker,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'updateEngine');

    const parameters = {
      options: {
        url: '/engines/engine',
        method: 'PATCH',
        body,
        responseType: 'stream',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Content-Type': 'application/json',
            'Accept': _params.accept,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create engine.
   *
   * Create a new engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.version - Version like 0.278 for presto or else.
   * @param {EngineDetailsBody} params.engineDetails - Node details.
   * @param {string} params.origin - Origin - created or registered.
   * @param {string} params.type - Engine type presto, others like netezza.
   * @param {string} [params.description] - Engine description.
   * @param {string} [params.engineDisplayName] - Engine display name.
   * @param {boolean} [params.firstTimeUse] - Optional parameter for UI - set as true when first time use.
   * @param {string} [params.region] - Region (cloud).
   * @param {string[]} [params.associatedCatalogs] - Associated catalogs.
   * @param {string} [params.accept] - The type of the response:  or *_/_*.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>>}
   */
  public createEngine(
    params: WatsonxDataV1.CreateEngineParams
  ): Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>> {
    const _params = { ...params };
    const _requiredParams = ['version', 'engineDetails', 'origin', 'type'];
    const _validParams = [
      'version',
      'engineDetails',
      'origin',
      'type',
      'description',
      'engineDisplayName',
      'firstTimeUse',
      'region',
      'associatedCatalogs',
      'accept',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'version': _params.version,
      'engine_details': _params.engineDetails,
      'origin': _params.origin,
      'type': _params.type,
      'description': _params.description,
      'engine_display_name': _params.engineDisplayName,
      'first_time_use': _params.firstTimeUse,
      'region': _params.region,
      'associated_catalogs': _params.associatedCatalogs,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'createEngine');

    const parameters = {
      options: {
        url: '/engines/engine',
        method: 'POST',
        body,
        responseType: 'stream',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Content-Type': 'application/json',
            'Accept': _params.accept,
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
   * @param {string} params.engineId - Engine ID.
   * @param {string} [params.createdBy] - Created by.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>>}
   */
  public deleteEngine(
    params: WatsonxDataV1.DeleteEngineParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'createdBy', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'engine_id': _params.engineId,
      'created_by': _params.createdBy,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteEngine');

    const parameters = {
      options: {
        url: '/engines/engine',
        method: 'DELETE',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
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
   * Resume engine.
   *
   * Resume a paused engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - Engine ID to be resumed.
   * @param {string} [params.createdBy] - Created by - logged in username.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.ResumeEngineCreatedBody>>}
   */
  public resumeEngine(
    params: WatsonxDataV1.ResumeEngineParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.ResumeEngineCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId'];
    const _validParams = ['engineId', 'createdBy', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'engine_id': _params.engineId,
      'created_by': _params.createdBy,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'resumeEngine');

    const parameters = {
      options: {
        url: '/engines/engine/resume',
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
   * explain
   ************************/

  /**
   * Explain analyze.
   *
   * Return query metrics after query is complete.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogName - Catalog name.
   * @param {string} params.engineId - Engine name.
   * @param {string} params.schemaName - Schema name.
   * @param {string} params.statement - Statement.
   * @param {boolean} [params.verbose] - Verbose.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.ExplainAnalyzeStatementCreatedBody>>}
   */
  public explainAnalyzeStatement(
    params: WatsonxDataV1.ExplainAnalyzeStatementParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.ExplainAnalyzeStatementCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['catalogName', 'engineId', 'schemaName', 'statement'];
    const _validParams = [
      'catalogName',
      'engineId',
      'schemaName',
      'statement',
      'verbose',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'catalog_name': _params.catalogName,
      'engine_id': _params.engineId,
      'schema_name': _params.schemaName,
      'statement': _params.statement,
      'verbose': _params.verbose,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV1.DEFAULT_SERVICE_NAME,
      'v1',
      'explainAnalyzeStatement'
    );

    const parameters = {
      options: {
        url: '/explainanalyze',
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
   * Explain.
   *
   * Explain a query statement.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - Engine name.
   * @param {string} params.statement - Statement.
   * @param {string} [params.catalogName] - Catalog name.
   * @param {string} [params.format] - Format.
   * @param {string} [params.schemaName] - Schema name.
   * @param {string} [params.type] - Type.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.ExplainStatementCreatedBody>>}
   */
  public explainStatement(
    params: WatsonxDataV1.ExplainStatementParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.ExplainStatementCreatedBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'statement'];
    const _validParams = [
      'engineId',
      'statement',
      'catalogName',
      'format',
      'schemaName',
      'type',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'engine_id': _params.engineId,
      'statement': _params.statement,
      'catalog_name': _params.catalogName,
      'format': _params.format,
      'schema_name': _params.schemaName,
      'type': _params.type,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'explainStatement');

    const parameters = {
      options: {
        url: '/explain',
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
   * lhconsole
   ************************/

  /**
   * Readiness API.
   *
   * Verify lhconsole server is up and running.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>>}
   */
  public testLhConsole(
    params?: WatsonxDataV1.TestLhConsoleParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'testLhConsole');

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
   * metastores
   ************************/

  /**
   * Get Catalogs.
   *
   * Get list of all registered metastores.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.GetMetastoresOKBody>>}
   */
  public getMetastores(
    params?: WatsonxDataV1.GetMetastoresParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.GetMetastoresOKBody>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'getMetastores');

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
   * Get Metastore.
   *
   * Get list of all registered HMS metastores.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.accept] - The type of the response:  or *_/_*.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>>}
   */
  public getHms(
    params?: WatsonxDataV1.GetHmsParams
  ): Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['accept', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'getHms');

    const parameters = {
      options: {
        url: '/metastores',
        method: 'GET',
        responseType: 'stream',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': _params.accept,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Add catalog to engine.
   *
   * Associate a catalog to an engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogName - Catalog name.
   * @param {string} params.engineId - Engine name.
   * @param {string} [params.createdBy] - Created by.
   * @param {string} [params.accept] - The type of the response:  or *_/_*.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>>}
   */
  public addMetastoreToEngine(
    params: WatsonxDataV1.AddMetastoreToEngineParams
  ): Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>> {
    const _params = { ...params };
    const _requiredParams = ['catalogName', 'engineId'];
    const _validParams = [
      'catalogName',
      'engineId',
      'createdBy',
      'accept',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'catalog_name': _params.catalogName,
      'engine_id': _params.engineId,
      'created_by': _params.createdBy,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV1.DEFAULT_SERVICE_NAME,
      'v1',
      'addMetastoreToEngine'
    );

    const parameters = {
      options: {
        url: '/catalogs/add_catalog_to_engine',
        method: 'POST',
        body,
        responseType: 'stream',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Content-Type': 'application/json',
            'Accept': _params.accept,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Remove catalog from engine.
   *
   * Remove a catalog from an engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogName - Catalog name.
   * @param {string} params.engineId - Engine name.
   * @param {string} [params.createdBy] - Created by.
   * @param {string} [params.accept] - The type of the response:  or *_/_*.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>>}
   */
  public removeCatalogFromEngine(
    params: WatsonxDataV1.RemoveCatalogFromEngineParams
  ): Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>> {
    const _params = { ...params };
    const _requiredParams = ['catalogName', 'engineId'];
    const _validParams = [
      'catalogName',
      'engineId',
      'createdBy',
      'accept',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'catalog_name': _params.catalogName,
      'engine_id': _params.engineId,
      'created_by': _params.createdBy,
    };

    const sdkHeaders = getSdkHeaders(
      WatsonxDataV1.DEFAULT_SERVICE_NAME,
      'v1',
      'removeCatalogFromEngine'
    );

    const parameters = {
      options: {
        url: '/catalogs/remove_catalog_from_engine',
        method: 'POST',
        body,
        responseType: 'stream',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Content-Type': 'application/json',
            'Accept': _params.accept,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * queries
   ************************/

  /**
   * Save query.
   *
   * Save a new query.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.queryName - Query name.
   * @param {string} params.createdBy - Created by.
   * @param {string} params.description - Description.
   * @param {string} params.queryString - Query string.
   * @param {string} [params.createdOn] - Created on.
   * @param {string} [params.engineId] - Engine ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>>}
   */
  public saveQuery(
    params: WatsonxDataV1.SaveQueryParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['queryName', 'createdBy', 'description', 'queryString'];
    const _validParams = [
      'queryName',
      'createdBy',
      'description',
      'queryString',
      'createdOn',
      'engineId',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'created_by': _params.createdBy,
      'description': _params.description,
      'query_string': _params.queryString,
      'created_on': _params.createdOn,
      'engine_id': _params.engineId,
    };

    const path = {
      'query_name': _params.queryName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'saveQuery');

    const parameters = {
      options: {
        url: '/queries/{query_name}',
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
   * Delete query.
   *
   * Delete a saved query.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.queryName - Query name.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>>}
   */
  public deleteQuery(
    params: WatsonxDataV1.DeleteQueryParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['queryName'];
    const _validParams = ['queryName', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'query_name': _params.queryName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteQuery');

    const parameters = {
      options: {
        url: '/queries/{query_name}',
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
   * Update query.
   *
   * Update a saved query.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.queryName - Query name.
   * @param {string} params.queryString - Query string.
   * @param {string} params.description - Description.
   * @param {string} params.newQueryName - New query name.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>>}
   */
  public updateQuery(
    params: WatsonxDataV1.UpdateQueryParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['queryName', 'queryString', 'description', 'newQueryName'];
    const _validParams = [
      'queryName',
      'queryString',
      'description',
      'newQueryName',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'query_string': _params.queryString,
      'description': _params.description,
      'new_query_name': _params.newQueryName,
    };

    const path = {
      'query_name': _params.queryName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'updateQuery');

    const parameters = {
      options: {
        url: '/queries/{query_name}',
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
   * Get queries.
   *
   * List all saved queries.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.GetQueriesOKBody>>}
   */
  public getQueries(
    params?: WatsonxDataV1.GetQueriesParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.GetQueriesOKBody>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'getQueries');

    const parameters = {
      options: {
        url: '/queries',
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
  /*************************
   * schemas
   ************************/

  /**
   * Create schema.
   *
   * Create a new schema.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogName - Catalog name.
   * @param {string} params.engineId - Engine ID.
   * @param {string} params.schemaName - Schema name.
   * @param {string} [params.bucketName] - Bucket associated to metastore where schema will be added.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>>}
   */
  public createSchema(
    params: WatsonxDataV1.CreateSchemaParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['catalogName', 'engineId', 'schemaName'];
    const _validParams = [
      'catalogName',
      'engineId',
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
      'catalog_name': _params.catalogName,
      'engine_id': _params.engineId,
      'schema_name': _params.schemaName,
      'bucket_name': _params.bucketName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'createSchema');

    const parameters = {
      options: {
        url: '/schemas/schema',
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
   * Delete schema.
   *
   * Delete a schema.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogName - Catalog name.
   * @param {string} params.engineId - Engine ID.
   * @param {string} params.schemaName - Schema name.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>>}
   */
  public deleteSchema(
    params: WatsonxDataV1.DeleteSchemaParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['catalogName', 'engineId', 'schemaName'];
    const _validParams = ['catalogName', 'engineId', 'schemaName', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'catalog_name': _params.catalogName,
      'engine_id': _params.engineId,
      'schema_name': _params.schemaName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteSchema');

    const parameters = {
      options: {
        url: '/schemas/schema',
        method: 'DELETE',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
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
   * Get schemas.
   *
   * List schemas in catalog.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - Engine name.
   * @param {string} params.catalogName - Catalog name.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.GetSchemasOKBody>>}
   */
  public getSchemas(
    params: WatsonxDataV1.GetSchemasParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.GetSchemasOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogName'];
    const _validParams = ['engineId', 'catalogName', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'engine_id': _params.engineId,
      'catalog_name': _params.catalogName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'getSchemas');

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
   * statement
   ************************/

  /**
   * Run SQL statement.
   *
   * Using this API to run a SQL statement.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engine - Presto engine name.
   * @param {string} params.catalog - Catalog name.
   * @param {string} params.schema - Schema name.
   * @param {string} params.sqlQuery - SQL Query.
   * @param {string} [params.accept] - The type of the response:  or *_/_*.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>>}
   */
  public postQuery(
    params: WatsonxDataV1.PostQueryParams
  ): Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>> {
    const _params = { ...params };
    const _requiredParams = ['engine', 'catalog', 'schema', 'sqlQuery'];
    const _validParams = [
      'engine',
      'catalog',
      'schema',
      'sqlQuery',
      'accept',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const formData = {
      'catalog': _params.catalog,
      'schema': _params.schema,
      'sqlQuery': _params.sqlQuery,
    };

    const query = {
      'engine': _params.engine,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'postQuery');

    const parameters = {
      options: {
        url: '/v1/statement',
        method: 'POST',
        qs: query,
        formData,
        responseType: 'stream',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Content-Type': 'multipart/form-data',
            'Accept': _params.accept,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * tables
   ************************/

  /**
   * Delete table.
   *
   * Delete one or multiple tables for a given schema and catalog.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {DeleteTableBodyDeleteTablesItems[]} params.deleteTables - Delete table list.
   * @param {string} params.engineId - Engine ID.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>>}
   */
  public deleteTable(
    params: WatsonxDataV1.DeleteTableParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['deleteTables', 'engineId'];
    const _validParams = ['deleteTables', 'engineId', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'delete_tables': _params.deleteTables,
      'engine_id': _params.engineId,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteTable');

    const parameters = {
      options: {
        url: '/tables/table',
        method: 'DELETE',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
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
   * Update table.
   *
   * Update the given table - rename table, add/drop/rename columns.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - Engine name.
   * @param {string} params.catalogName - Catalog name.
   * @param {string} params.schemaName - Schema name.
   * @param {string} params.tableName - Table name.
   * @param {UpdateTableBodyAddColumnsItems[]} [params.addColumns] - Add columns.
   * @param {UpdateTableBodyDropColumnsItems[]} [params.dropColumns] - Drop columns.
   * @param {string} [params.newTableName] - New table name.
   * @param {UpdateTableBodyRenameColumnsItems[]} [params.renameColumns] - Rename columns.
   * @param {string} [params.accept] - The type of the response:  or *_/_*.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>>}
   */
  public updateTable(
    params: WatsonxDataV1.UpdateTableParams
  ): Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogName', 'schemaName', 'tableName'];
    const _validParams = [
      'engineId',
      'catalogName',
      'schemaName',
      'tableName',
      'addColumns',
      'dropColumns',
      'newTableName',
      'renameColumns',
      'accept',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'add_columns': _params.addColumns,
      'drop_columns': _params.dropColumns,
      'new_table_name': _params.newTableName,
      'rename_columns': _params.renameColumns,
    };

    const query = {
      'engine_id': _params.engineId,
      'catalog_name': _params.catalogName,
      'schema_name': _params.schemaName,
      'table_name': _params.tableName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'updateTable');

    const parameters = {
      options: {
        url: '/tables/table',
        method: 'PATCH',
        body,
        qs: query,
        responseType: 'stream',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Content-Type': 'application/json',
            'Accept': _params.accept,
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
   * @param {string} params.catalogName - Catalog name.
   * @param {string} params.schemaName - Schema name.
   * @param {string} params.tableName - Table name.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.GetTableSnapshotsOKBody>>}
   */
  public getTableSnapshots(
    params: WatsonxDataV1.GetTableSnapshotsParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.GetTableSnapshotsOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogName', 'schemaName', 'tableName'];
    const _validParams = [
      'engineId',
      'catalogName',
      'schemaName',
      'tableName',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'engine_id': _params.engineId,
      'catalog_name': _params.catalogName,
      'schema_name': _params.schemaName,
      'table_name': _params.tableName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'getTableSnapshots');

    const parameters = {
      options: {
        url: '/tables/table/snapshots',
        method: 'GET',
        qs: query,
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
   * @param {string} params.catalogName - Catalog name.
   * @param {string} params.schemaName - Schema name.
   * @param {string} params.snapshotId - Snapshot id.
   * @param {string} params.tableName - Table name.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>>}
   */
  public rollbackSnapshot(
    params: WatsonxDataV1.RollbackSnapshotParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.SuccessResponse>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogName', 'schemaName', 'snapshotId', 'tableName'];
    const _validParams = [
      'engineId',
      'catalogName',
      'schemaName',
      'snapshotId',
      'tableName',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'snapshot_id': _params.snapshotId,
      'table_name': _params.tableName,
    };

    const query = {
      'engine_id': _params.engineId,
      'catalog_name': _params.catalogName,
      'schema_name': _params.schemaName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'rollbackSnapshot');

    const parameters = {
      options: {
        url: '/tables/table/rollback',
        method: 'POST',
        body,
        qs: query,
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
   * Get tables.
   *
   * List all tables in a schema in a catalog for a given engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engineId - Engine name.
   * @param {string} params.catalogName - Catalog name.
   * @param {string} params.schemaName - Schema name.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<WatsonxDataV1.GetTablesOKBody>>}
   */
  public getTables(
    params: WatsonxDataV1.GetTablesParams
  ): Promise<WatsonxDataV1.Response<WatsonxDataV1.GetTablesOKBody>> {
    const _params = { ...params };
    const _requiredParams = ['engineId', 'catalogName', 'schemaName'];
    const _validParams = ['engineId', 'catalogName', 'schemaName', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'engine_id': _params.engineId,
      'catalog_name': _params.catalogName,
      'schema_name': _params.schemaName,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'getTables');

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
   * Parse CSV for table creation.
   *
   * When creating a tabble, parse the CSV file.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engine - Presto engine name.
   * @param {string} params.parseFile - parse file to data type.
   * @param {string} params.fileType - File type.
   * @param {string} [params.accept] - The type of the response:  or *_/_*.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>>}
   */
  public parseCsv(
    params: WatsonxDataV1.ParseCsvParams
  ): Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>> {
    const _params = { ...params };
    const _requiredParams = ['engine', 'parseFile', 'fileType'];
    const _validParams = ['engine', 'parseFile', 'fileType', 'accept', 'authInstanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const formData = {
      'parse_file': _params.parseFile,
      'file_type': _params.fileType,
    };

    const query = {
      'engine': _params.engine,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'parseCsv');

    const parameters = {
      options: {
        url: '/parse/csv',
        method: 'POST',
        qs: query,
        formData,
        responseType: 'stream',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Content-Type': 'multipart/form-data',
            'Accept': _params.accept,
            'AuthInstanceId': _params.authInstanceId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Upload CSV for table creation.
   *
   * When creating a table, upload a CSV file.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.engine - Presto engine name.
   * @param {string} params.catalog - Catalog name.
   * @param {string} params.schema - Schema name.
   * @param {string} params.tableName - table name.
   * @param {string} params.ingestionJobName - ingestion job name.
   * @param {string} params.scheduled - Scheduled.
   * @param {string} params.createdBy - Created by.
   * @param {string} params.targetTable - Target table.
   * @param {string} params._headers - Headers.
   * @param {string} params.csv - csv.
   * @param {string} [params.accept] - The type of the response:  or *_/_*.
   * @param {string} [params.authInstanceId] - Instance ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>>}
   */
  public uplaodCsv(
    params: WatsonxDataV1.UplaodCsvParams
  ): Promise<WatsonxDataV1.Response<NodeJS.ReadableStream>> {
    const _params = { ...params };
    const _requiredParams = [
      'engine',
      'catalog',
      'schema',
      'tableName',
      'ingestionJobName',
      'scheduled',
      'createdBy',
      'targetTable',
      '_headers',
      'csv',
    ];
    const _validParams = [
      'engine',
      'catalog',
      'schema',
      'tableName',
      'ingestionJobName',
      'scheduled',
      'createdBy',
      'targetTable',
      '_headers',
      'csv',
      'accept',
      'authInstanceId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const formData = {
      'catalog': _params.catalog,
      'schema': _params.schema,
      'tableName': _params.tableName,
      'ingestionJobName': _params.ingestionJobName,
      'scheduled': _params.scheduled,
      'created_by': _params.createdBy,
      'targetTable': _params.targetTable,
      'headers': _params._headers,
      'csv': _params.csv,
    };

    const query = {
      'engine': _params.engine,
    };

    const sdkHeaders = getSdkHeaders(WatsonxDataV1.DEFAULT_SERVICE_NAME, 'v1', 'uplaodCsv');

    const parameters = {
      options: {
        url: '/v2/upload/csv',
        method: 'POST',
        qs: query,
        formData,
        responseType: 'stream',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Content-Type': 'multipart/form-data',
            'Accept': _params.accept,
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

namespace WatsonxDataV1 {
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

  /** Parameters for the `createDbConnUsers` operation. */
  export interface CreateDbConnUsersParams {
    /** The db connection id. */
    databaseId: string;
    /** The group list. */
    groups?: BucketDbConnGroupsMetadata[];
    /** The user list. */
    users?: BucketDbConnUsersMetadata[];
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listDataPolicies` operation. */
  export interface ListDataPoliciesParams {
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    /** catalog name to filter. */
    catalogName?: string;
    /** policy status to filter. */
    status?: string;
    /** response will include data policy meta data or not. */
    includeMetadata?: boolean;
    /** response will include data policy rules or not. */
    includeRules?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createDataPolicy` operation. */
  export interface CreateDataPolicyParams {
    /** catalog name. */
    catalogName: string;
    /** data artifact. */
    dataArtifact: string;
    /** the displayed name for data policy. */
    policyName: string;
    /** rules. */
    rules: Rule[];
    /** a more detailed description of the policy. */
    description?: string;
    /** data policy status. */
    status?: CreateDataPolicyConstants.Status | string;
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `createDataPolicy` operation. */
  export namespace CreateDataPolicyConstants {
    /** data policy status. */
    export enum Status {
      ACTIVE = 'active',
      INACTIVE = 'inactive',
    }
  }

  /** Parameters for the `deleteDataPolicies` operation. */
  export interface DeleteDataPoliciesParams {
    /** data policy names array to be deleted. */
    dataPolicies?: string[];
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getEngineUsers` operation. */
  export interface GetEngineUsersParams {
    /** Engine ID for GET. */
    engineId: string;
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteEngineUsers` operation. */
  export interface DeleteEngineUsersParams {
    /** Engine ID for DELETE. */
    engineId: string;
    /** The group ids array to be deleted. */
    groups?: string[];
    /** The user names array to be deleted. */
    users?: string[];
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateEngineUsers` operation. */
  export interface UpdateEngineUsersParams {
    /** Engine ID for PATCH. */
    engineId: string;
    /** The group list. */
    groups?: EngineGroupsMetadata[];
    /** The user list. */
    users?: EngineUsersMetadata[];
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteDbConnUsers` operation. */
  export interface DeleteDbConnUsersParams {
    /** Db connection id for DELETE. */
    databaseId: string;
    /** The group ids array to be deleted. */
    groups?: string[];
    /** The user names array to be deleted. */
    users?: string[];
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateDbConnUsers` operation. */
  export interface UpdateDbConnUsersParams {
    /** Db connection id for PATCH. */
    databaseId: string;
    /** The group list. */
    groups?: BucketDbConnGroupsMetadata[];
    /** The user list. */
    users?: BucketDbConnUsersMetadata[];
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getDbConnUsers` operation. */
  export interface GetDbConnUsersParams {
    /** Db connection id for GET. */
    databaseId: string;
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createCatalogUsers` operation. */
  export interface CreateCatalogUsersParams {
    /** The catalog name. */
    catalogName: string;
    /** The group list. */
    groups?: CatalogGroupsMetadata[];
    /** The user list. */
    users?: CatalogUsersMetadata[];
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getCatalogUsers` operation. */
  export interface GetCatalogUsersParams {
    /** catalog name for GET. */
    catalogName: string;
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteCatalogUsers` operation. */
  export interface DeleteCatalogUsersParams {
    /** Catalog name for DELETE. */
    catalogName: string;
    /** The group ids array to be deleted. */
    groups?: string[];
    /** The user names array to be deleted. */
    users?: string[];
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateCatalogUsers` operation. */
  export interface UpdateCatalogUsersParams {
    /** Catalog name for PATCH. */
    catalogName: string;
    /** The group list. */
    groups?: CatalogGroupsMetadata[];
    /** The user list. */
    users?: CatalogUsersMetadata[];
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `evaluate` operation. */
  export interface EvaluateParams {
    /** resource list. */
    resources?: ResourcesMetadata[];
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getPoliciesList` operation. */
  export interface GetPoliciesListParams {
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    /** policies for specific catalogs list. */
    catalogList?: string[];
    /** policies for specific engines list. */
    engineList?: string[];
    /** policies for specific Data Polices list. */
    dataPoliciesList?: string[];
    /** include policies for specific catalogs or not. */
    includeDataPolicies?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createMetastoreUsers` operation. */
  export interface CreateMetastoreUsersParams {
    /** The metastore name. */
    metastoreName: string;
    /** The group list. */
    groups?: GroupsMetadata[];
    /** The user list. */
    users?: UsersMetadata[];
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getMetastoreUsers` operation. */
  export interface GetMetastoreUsersParams {
    /** Metastore name for GET. */
    metastoreName: string;
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteMetastoreUsers` operation. */
  export interface DeleteMetastoreUsersParams {
    /** Metastore name for DELETE. */
    metastoreName: string;
    /** The group ids array to be deleted. */
    groups?: string[];
    /** The user names array to be deleted. */
    users?: string[];
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateMetastoreUsers` operation. */
  export interface UpdateMetastoreUsersParams {
    /** Metastore name for PATCH. */
    metastoreName: string;
    /** The group list. */
    groups?: GroupsMetadata[];
    /** The user list. */
    users?: UsersMetadata[];
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createBucketUsers` operation. */
  export interface CreateBucketUsersParams {
    /** The bucket id. */
    bucketId: string;
    /** The group list. */
    groups?: BucketDbConnGroupsMetadata[];
    /** The user list. */
    users?: BucketDbConnUsersMetadata[];
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getDefaultPolicies` operation. */
  export interface GetDefaultPoliciesParams {
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getPolicyVersion` operation. */
  export interface GetPolicyVersionParams {
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getDataPolicy` operation. */
  export interface GetDataPolicyParams {
    /** policy name to get. */
    policyName: string;
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `replaceDataPolicy` operation. */
  export interface ReplaceDataPolicyParams {
    /** Policy name for PATCH. */
    policyName: string;
    /** catalog name. */
    catalogName: string;
    /** data artifact. */
    dataArtifact: string;
    /** rules. */
    rules: Rule[];
    /** a more detailed description of the policy. */
    description?: string;
    /** data policy status. */
    status?: ReplaceDataPolicyConstants.Status | string;
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `replaceDataPolicy` operation. */
  export namespace ReplaceDataPolicyConstants {
    /** data policy status. */
    export enum Status {
      ACTIVE = 'active',
      INACTIVE = 'inactive',
    }
  }

  /** Parameters for the `deleteDataPolicy` operation. */
  export interface DeleteDataPolicyParams {
    /** Policy name for DELETE. */
    policyName: string;
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createEngineUsers` operation. */
  export interface CreateEngineUsersParams {
    /** The engine id. */
    engineId: string;
    /** The group list. */
    groups?: EngineGroupsMetadata[];
    /** The user list. */
    users?: EngineUsersMetadata[];
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getBucketUsers` operation. */
  export interface GetBucketUsersParams {
    /** Bucket name for GET. */
    bucketId: string;
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteBucketUsers` operation. */
  export interface DeleteBucketUsersParams {
    /** Bucket ID for DELETE. */
    bucketId: string;
    /** The group ids array to be deleted. */
    groups?: string[];
    /** The user names array to be deleted. */
    users?: string[];
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateBucketUsers` operation. */
  export interface UpdateBucketUsersParams {
    /** Bucket ID for PATCH. */
    bucketId: string;
    /** The group list. */
    groups?: BucketDbConnGroupsMetadata[];
    /** The user list. */
    users?: BucketDbConnUsersMetadata[];
    /** Lake House Instance ID. */
    lhInstanceId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getBuckets` operation. */
  export interface GetBucketsParams {
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getBucketObjects` operation. */
  export interface GetBucketObjectsParams {
    /** Bucket ID. */
    bucketId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deactivateBucket` operation. */
  export interface DeactivateBucketParams {
    /** Bucket name. */
    bucketId: string;
    /** The type of the response:  or *_/_*. */
    accept?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `registerBucket` operation. */
  export interface RegisterBucketParams {
    /** Bucket Details. */
    bucketDetails: BucketDetails;
    /** Bucket description. */
    description: string;
    /** Table type. */
    tableType: RegisterBucketConstants.TableType | string;
    /** Bucket Type. */
    bucketType: RegisterBucketConstants.BucketType | string;
    /** Catalog name for the new catalog to be created with bucket. */
    catalogName: string;
    /** Managed by. */
    managedBy: RegisterBucketConstants.ManagedBy | string;
    /** Bucket Display name. */
    bucketDisplayName?: string;
    /** tags. */
    bucketTags?: string[];
    /** Catalog tags. */
    catalogTags?: string[];
    /** Thrift URI. */
    thriftUri?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `registerBucket` operation. */
  export namespace RegisterBucketConstants {
    /** Table type. */
    export enum TableType {
      ICEBERG = 'iceberg',
      HIVE_HADOOP2 = 'hive-hadoop2',
    }
    /** Bucket Type. */
    export enum BucketType {
      AWS_S3 = 'aws_s3',
      MINIO = 'minio',
      IBM_COS = 'ibm_cos',
    }
    /** Managed by. */
    export enum ManagedBy {
      IBM = 'ibm',
      CUSTOMER = 'customer',
    }
  }

  /** Parameters for the `unregisterBucket` operation. */
  export interface UnregisterBucketParams {
    /** Bucket name. */
    bucketId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateBucket` operation. */
  export interface UpdateBucketParams {
    /** Bucket ID auto generated during bucket registration. */
    bucketId: string;
    /** Access key ID, encrypted during bucket registration. */
    accessKey?: string;
    /** Bucket display name. */
    bucketDisplayName?: string;
    /** Modified description. */
    description?: string;
    /** Secret access key, encrypted during bucket registration. */
    secretKey?: string;
    /** Tags. */
    tags?: string[];
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `activateBucket` operation. */
  export interface ActivateBucketParams {
    /** Bucket name. */
    bucketId: string;
    /** The type of the response:  or *_/_*. */
    accept?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getDatabases` operation. */
  export interface GetDatabasesParams {
    /** The type of the response:  or *_/_*. */
    accept?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createDatabaseCatalog` operation. */
  export interface CreateDatabaseCatalogParams {
    /** Database display name. */
    databaseDisplayName: string;
    /** Connector type. */
    databaseType: CreateDatabaseCatalogConstants.DatabaseType | string;
    /** Catalog name of the new catalog to be created with database. */
    catalogName: string;
    /** database details. */
    databaseDetails?: RegisterDatabaseCatalogBodyDatabaseDetails;
    /** Database description. */
    description?: string;
    /** tags. */
    tags?: string[];
    /** Created by. */
    createdBy?: string;
    /** Created on. */
    createdOn?: number;
    /** The type of the response:  or *_/_*. */
    accept?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `createDatabaseCatalog` operation. */
  export namespace CreateDatabaseCatalogConstants {
    /** Connector type. */
    export enum DatabaseType {
      MYSQL = 'mysql',
      POSTGRESQL = 'postgresql',
      NETEZZA = 'netezza',
      DB2 = 'db2',
      MONGODB = 'mongodb',
      KAFKA = 'kafka',
      TPCDS = 'tpcds',
      TPCH = 'tpch',
      SYSTEM = 'system',
      JMX = 'jmx',
      MEMORY = 'memory',
    }
  }

  /** Parameters for the `deleteDatabaseCatalog` operation. */
  export interface DeleteDatabaseCatalogParams {
    /** Database ID. */
    databaseId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateDatabase` operation. */
  export interface UpdateDatabaseParams {
    /** Database ID. */
    databaseId: string;
    /** database details. */
    databaseDetails?: UpdateDatabaseBodyDatabaseDetails;
    /** Database display name. */
    databaseDisplayName?: string;
    /** Database description. */
    description?: string;
    /** tags. */
    tags?: string[];
    /** The type of the response:  or *_/_*. */
    accept?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `pauseEngine` operation. */
  export interface PauseEngineParams {
    /** Engine ID to be paused. */
    engineId: string;
    /** Created by - Logged in username. */
    createdBy?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getEngines` operation. */
  export interface GetEnginesParams {
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getDeployments` operation. */
  export interface GetDeploymentsParams {
    /** The type of the response:  or *_/_*. */
    accept?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateEngine` operation. */
  export interface UpdateEngineParams {
    /** Engine ID. */
    engineId: string;
    /** NodeDescription. */
    coordinator?: NodeDescription;
    /** Modified description. */
    description?: string;
    /** Engine display name. */
    engineDisplayName?: string;
    /** Tags. */
    tags?: string[];
    /** NodeDescription. */
    worker?: NodeDescription;
    /** The type of the response:  or *_/_*. */
    accept?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createEngine` operation. */
  export interface CreateEngineParams {
    /** Version like 0.278 for presto or else. */
    version: string;
    /** Node details. */
    engineDetails: EngineDetailsBody;
    /** Origin - created or registered. */
    origin: CreateEngineConstants.Origin | string;
    /** Engine type presto, others like netezza. */
    type: string;
    /** Engine description. */
    description?: string;
    /** Engine display name. */
    engineDisplayName?: string;
    /** Optional parameter for UI - set as true when first time use. */
    firstTimeUse?: boolean;
    /** Region (cloud). */
    region?: string;
    /** Associated catalogs. */
    associatedCatalogs?: string[];
    /** The type of the response:  or *_/_*. */
    accept?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `createEngine` operation. */
  export namespace CreateEngineConstants {
    /** Origin - created or registered. */
    export enum Origin {
      IBM = 'ibm',
      CUSTOMER = 'customer',
    }
  }

  /** Parameters for the `deleteEngine` operation. */
  export interface DeleteEngineParams {
    /** Engine ID. */
    engineId: string;
    /** Created by. */
    createdBy?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `resumeEngine` operation. */
  export interface ResumeEngineParams {
    /** Engine ID to be resumed. */
    engineId: string;
    /** Created by - logged in username. */
    createdBy?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `explainAnalyzeStatement` operation. */
  export interface ExplainAnalyzeStatementParams {
    /** Catalog name. */
    catalogName: string;
    /** Engine name. */
    engineId: string;
    /** Schema name. */
    schemaName: string;
    /** Statement. */
    statement: string;
    /** Verbose. */
    verbose?: boolean;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `explainStatement` operation. */
  export interface ExplainStatementParams {
    /** Engine name. */
    engineId: string;
    /** Statement. */
    statement: string;
    /** Catalog name. */
    catalogName?: string;
    /** Format. */
    format?: ExplainStatementConstants.Format | string;
    /** Schema name. */
    schemaName?: string;
    /** Type. */
    type?: ExplainStatementConstants.Type | string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `explainStatement` operation. */
  export namespace ExplainStatementConstants {
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

  /** Parameters for the `testLhConsole` operation. */
  export interface TestLhConsoleParams {
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getMetastores` operation. */
  export interface GetMetastoresParams {
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getHms` operation. */
  export interface GetHmsParams {
    /** The type of the response:  or *_/_*. */
    accept?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `addMetastoreToEngine` operation. */
  export interface AddMetastoreToEngineParams {
    /** Catalog name. */
    catalogName: string;
    /** Engine name. */
    engineId: string;
    /** Created by. */
    createdBy?: string;
    /** The type of the response:  or *_/_*. */
    accept?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `removeCatalogFromEngine` operation. */
  export interface RemoveCatalogFromEngineParams {
    /** Catalog name. */
    catalogName: string;
    /** Engine name. */
    engineId: string;
    /** Created by. */
    createdBy?: string;
    /** The type of the response:  or *_/_*. */
    accept?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `saveQuery` operation. */
  export interface SaveQueryParams {
    /** Query name. */
    queryName: string;
    /** Created by. */
    createdBy: string;
    /** Description. */
    description: string;
    /** Query string. */
    queryString: string;
    /** Created on. */
    createdOn?: string;
    /** Engine ID. */
    engineId?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteQuery` operation. */
  export interface DeleteQueryParams {
    /** Query name. */
    queryName: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateQuery` operation. */
  export interface UpdateQueryParams {
    /** Query name. */
    queryName: string;
    /** Query string. */
    queryString: string;
    /** Description. */
    description: string;
    /** New query name. */
    newQueryName: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getQueries` operation. */
  export interface GetQueriesParams {
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createSchema` operation. */
  export interface CreateSchemaParams {
    /** Catalog name. */
    catalogName: string;
    /** Engine ID. */
    engineId: string;
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
    /** Catalog name. */
    catalogName: string;
    /** Engine ID. */
    engineId: string;
    /** Schema name. */
    schemaName: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getSchemas` operation. */
  export interface GetSchemasParams {
    /** Engine name. */
    engineId: string;
    /** Catalog name. */
    catalogName: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `postQuery` operation. */
  export interface PostQueryParams {
    /** Presto engine name. */
    engine: string;
    /** Catalog name. */
    catalog: string;
    /** Schema name. */
    schema: string;
    /** SQL Query. */
    sqlQuery: string;
    /** The type of the response:  or *_/_*. */
    accept?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteTable` operation. */
  export interface DeleteTableParams {
    /** Delete table list. */
    deleteTables: DeleteTableBodyDeleteTablesItems[];
    /** Engine ID. */
    engineId: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateTable` operation. */
  export interface UpdateTableParams {
    /** Engine name. */
    engineId: string;
    /** Catalog name. */
    catalogName: string;
    /** Schema name. */
    schemaName: string;
    /** Table name. */
    tableName: string;
    /** Add columns. */
    addColumns?: UpdateTableBodyAddColumnsItems[];
    /** Drop columns. */
    dropColumns?: UpdateTableBodyDropColumnsItems[];
    /** New table name. */
    newTableName?: string;
    /** Rename columns. */
    renameColumns?: UpdateTableBodyRenameColumnsItems[];
    /** The type of the response:  or *_/_*. */
    accept?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getTableSnapshots` operation. */
  export interface GetTableSnapshotsParams {
    /** Engine name. */
    engineId: string;
    /** Catalog name. */
    catalogName: string;
    /** Schema name. */
    schemaName: string;
    /** Table name. */
    tableName: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `rollbackSnapshot` operation. */
  export interface RollbackSnapshotParams {
    /** Engine name. */
    engineId: string;
    /** Catalog name. */
    catalogName: string;
    /** Schema name. */
    schemaName: string;
    /** Snapshot id. */
    snapshotId: string;
    /** Table name. */
    tableName: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getTables` operation. */
  export interface GetTablesParams {
    /** Engine name. */
    engineId: string;
    /** Catalog name. */
    catalogName: string;
    /** Schema name. */
    schemaName: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `parseCsv` operation. */
  export interface ParseCsvParams {
    /** Presto engine name. */
    engine: string;
    /** parse file to data type. */
    parseFile: string;
    /** File type. */
    fileType: string;
    /** The type of the response:  or *_/_*. */
    accept?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `uplaodCsv` operation. */
  export interface UplaodCsvParams {
    /** Presto engine name. */
    engine: string;
    /** Catalog name. */
    catalog: string;
    /** Schema name. */
    schema: string;
    /** table name. */
    tableName: string;
    /** ingestion job name. */
    ingestionJobName: string;
    /** Scheduled. */
    scheduled: string;
    /** Created by. */
    createdBy: string;
    /** Target table. */
    targetTable: string;
    /** Headers. */
    _headers: string;
    /** csv. */
    csv: string;
    /** The type of the response:  or *_/_*. */
    accept?: string;
    /** Instance ID. */
    authInstanceId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /*************************
   * model interfaces
   ************************/

  /** Bucket. */
  export interface Bucket {
    /** Username who created the bucket. */
    created_by: string;
    /** Creation date. */
    created_on: string;
    /** Bucket Description. */
    description: string;
    /** Bucket endpoint. */
    endpoint: string;
    /** Managed by. */
    managed_by: string;
    /** Mark bucket active or inactive. */
    state: string;
    /** Tags. */
    tags: string[];
    /** Associated catalogs. */
    associated_catalogs: string[];
    /** Bucket Display Name. */
    bucket_display_name?: string;
    /** Bucket ID auto generated during bucket registration. */
    bucket_id?: string;
    /** Actual bucket name. */
    bucket_name: string;
    /** Bucket Type. */
    bucket_type: string;
    /** Actions. */
    actions?: string[];
  }

  /** BucketDbConnGroupsMetadata. */
  export interface BucketDbConnGroupsMetadata {
    /** The group id. */
    group_id: string;
    /** Eligible permission to the resource. */
    permission: string;
  }

  /** BucketDbConnUsersMetadata. */
  export interface BucketDbConnUsersMetadata {
    /** The user name. */
    user_name: string;
    /** Eligible permission to the resource. */
    permission: string;
  }

  /** Bucket Details. */
  export interface BucketDetails {
    /** Access key ID, encrypted during bucket registration. */
    access_key?: string;
    /** Actual bucket name. */
    bucket_name: string;
    /** Cos endpoint. */
    endpoint?: string;
    /** Secret access key, encrypted during bucket registration. */
    secret_key?: string;
  }

  /** BucketPolicies. */
  export interface BucketPolicies {
    /** Policy version. */
    policy_version?: string;
    /** The policy name. */
    policy_name?: string;
  }

  /** CatalogGroupsMetadata. */
  export interface CatalogGroupsMetadata {
    /** The group id. */
    group_id: string;
    /** Eligible permission to the resource. */
    permission: string;
  }

  /** CatalogPolicies. */
  export interface CatalogPolicies {
    /** The policy name. */
    policy_name?: string;
    /** Policy version. */
    policy_version?: string;
  }

  /** CatalogUsersMetadata. */
  export interface CatalogUsersMetadata {
    /** Eligible permission to the resource. */
    permission: string;
    /** The user name. */
    user_name: string;
  }

  /** Create data policy success. */
  export interface CreateDataPolicyCreatedBody {
    /** create data policy. */
    data_policy: CreateDataPolicySchema;
    metadata: DataPolicyMetadata;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** create data policy. */
  export interface CreateDataPolicySchema {
    /** catalog name. */
    catalog_name: string;
    /** data artifact. */
    data_artifact: string;
    /** a more detailed description of the policy. */
    description?: string;
    /** the displayed name for data policy. */
    policy_name: string;
    /** rules. */
    rules: Rule[];
    /** data policy status. */
    status?: string;
  }

  /** DataPolicies. */
  export interface DataPolicies {
    /** Associate catalog. */
    associate_catalog?: string;
    /** For resource policy, it's resource name like engin1. And for data policy it's policy name. */
    policy_name?: string;
    /** Policy version. */
    policy_version?: string;
  }

  /** DataPolicyMetadata. */
  export interface DataPolicyMetadata {
    /** an identifier for the creator of the policy. */
    creator?: string;
    /** a more detailed description of the rule. */
    description?: string;
    /** an identifier for the last modifier of the policy. */
    modifier?: string;
    /** an unique identifier for the policy. */
    pid?: string;
    /** policy name. */
    policy_name?: string;
    /** time when the policy was last updated. */
    updated_at?: string;
    /** data policy version. */
    version?: string;
    /** time when the policy was created. */
    created_at?: string;
  }

  /** DbConnPolicies. */
  export interface DbConnPolicies {
    /** The policy name. */
    policy_name?: string;
    /** Policy version. */
    policy_version?: string;
  }

  /** AMS default schema. */
  export interface DefaultPolicySchema {
    /** default grouping policies. */
    grouping_policies?: GroupingPolicyMetadata[];
    /** casbin model. */
    model?: string;
    /** default policies. */
    policies?: PolicyMetadata[];
  }

  /** Delete tables items. */
  export interface DeleteTableBodyDeleteTablesItems {
    /** Catalog name. */
    catalog_name?: string;
    /** Schema name. */
    schema_name?: string;
    /** Table name. */
    table_name?: string;
  }

  /** EngineDetail. */
  export interface EngineDetail {
    /** Group ID. */
    group_id?: string;
    /** Region - place holder. */
    region?: string;
    /** Size config. */
    size_config?: string;
    /** Created time in epoch format. */
    created_on?: number;
    /** Engine display name. */
    engine_display_name?: string;
    /** Origin - place holder. */
    origin?: string;
    /** Engine port. */
    port?: number;
    /** Type like presto, netezza,.. */
    type?: string;
    /** Version of the engine. */
    version?: string;
    /** NodeDescription. */
    worker?: NodeDescription;
    /** Actions. */
    actions?: string[];
    /** Associated catalogs. */
    associated_catalogs?: string[];
    /** Engine status. */
    status?: string;
    /** Tags. */
    tags?: string[];
    /** NodeDescription. */
    coordinator?: NodeDescription;
    /** Created user name. */
    created_by?: string;
    /** Engine host name. */
    host_name?: string;
    /** Engine status code. */
    status_code: number;
    /** Engine description. */
    description?: string;
    /** Engine programmatic name. */
    engine_id?: string;
  }

  /** Node details. */
  export interface EngineDetailsBody {
    /** Node details. */
    worker?: NodeDescriptionBody;
    /** Node details. */
    coordinator?: NodeDescriptionBody;
    /** Size config. */
    size_config?: string;
  }

  /** EngineGroupsMetadata. */
  export interface EngineGroupsMetadata {
    /** The group id. */
    group_id: string;
    /** Eligible permission to the resource. */
    permission: string;
  }

  /** EnginePolicies. */
  export interface EnginePolicies {
    /** The policy name. */
    policy_name?: string;
    /** Policy version. */
    policy_version?: string;
  }

  /** EngineUsersMetadata. */
  export interface EngineUsersMetadata {
    /** Eligible permission to the resource. */
    permission: string;
    /** The user name. */
    user_name: string;
  }

  /** Evaluation result schema. */
  export interface EvaluationResultSchema {
    /** resource list. */
    resources?: ResourceWithResult[];
  }

  /** explainAnalyzeStatement OK. */
  export interface ExplainAnalyzeStatementCreatedBody {
    /** Response of success. */
    response: SuccessResponse;
    /** explainAnalyzeStatement result. */
    result: string;
  }

  /** ExplainStatement OK. */
  export interface ExplainStatementCreatedBody {
    /** Response of success. */
    response: SuccessResponse;
    /** Result. */
    result: string;
  }

  /** GetBucketObjects OK. */
  export interface GetBucketObjectsOKBody {
    /** Bucket objects. */
    objects: string[];
    /** Response of success. */
    response: SuccessResponse;
  }

  /** Get bucket users schema. */
  export interface GetBucketUsersSchema {
    /** The bucket id. */
    bucket_id: string;
    /** The group list. */
    groups?: BucketDbConnGroupsMetadata[];
    /** Total number of users and groups. */
    total_count: number;
    /** The user list. */
    users?: BucketDbConnUsersMetadata[];
  }

  /** GetBuckets OK. */
  export interface GetBucketsOKBody {
    /** Buckets. */
    buckets: Bucket[];
    /** Response of success. */
    response: SuccessResponse;
  }

  /** Get catalog users schema. */
  export interface GetCatalogUsersSchema {
    /** Total number of users and groups. */
    total_count: number;
    /** The user list. */
    users?: CatalogUsersMetadata[];
    /** The catalog name. */
    catalog_name: string;
    /** The group list. */
    groups?: CatalogGroupsMetadata[];
  }

  /** Get Db connection users schema. */
  export interface GetDbConnUsersSchema {
    /** The group list. */
    groups?: BucketDbConnGroupsMetadata[];
    /** Total number of users and groups. */
    total_count: number;
    /** The user list. */
    users?: BucketDbConnUsersMetadata[];
    /** The db connection id. */
    database_id: string;
  }

  /** Get engine users schema. */
  export interface GetEngineUsersSchema {
    /** The engine id. */
    engine_id: string;
    /** The group list. */
    groups?: EngineGroupsMetadata[];
    /** Total number of users and groups. */
    total_count: number;
    /** The user list. */
    users?: EngineUsersMetadata[];
  }

  /** getEngines. */
  export interface GetEnginesOKBody {
    engines: EngineDetail[];
    /** Response of success. */
    response: SuccessResponse;
  }

  /** Get metastore users schema. */
  export interface GetMetastoreUsersSchema {
    /** The group list. */
    groups?: GroupsMetadata[];
    /** The metastore name. */
    metastore_name: string;
    /** Total number of users and groups. */
    total_count: number;
    /** The user list. */
    users?: UsersMetadata[];
  }

  /** GetMetastores OK. */
  export interface GetMetastoresOKBody {
    /** Metastores. */
    catalogs: Metastore[];
    /** Response of success. */
    response: SuccessResponse;
  }

  /** GetQueries OK. */
  export interface GetQueriesOKBody {
    /** Queries. */
    queries: Query[];
    /** Response of success. */
    response: SuccessResponse;
  }

  /** GetSchemas OK. */
  export interface GetSchemasOKBody {
    /** Response of success. */
    response: SuccessResponse;
    /** Schemas. */
    schemas: string[];
  }

  /** TableSnapshot OK. */
  export interface GetTableSnapshotsOKBody {
    /** Response of success. */
    response: SuccessResponse;
    /** Snapshots. */
    snapshots: TableSnapshot[];
  }

  /** GetTables OK. */
  export interface GetTablesOKBody {
    /** Response of success. */
    response: SuccessResponse;
    /** Tables. */
    tables: string[];
  }

  /** GroupingPolicyMetadata. */
  export interface GroupingPolicyMetadata {
    /** domain. */
    domain?: string;
    /** inheritor. */
    inheritor?: string;
    /** role. */
    role?: string;
  }

  /** Groups metadata. */
  export interface GroupsMetadata {
    /** The group id. */
    group_id: string;
    /** Eligible permission to the resource. */
    permission: string;
  }

  /** Metastore. */
  export interface Metastore {
    /** Name for the metastore. */
    catalog_name?: string;
    /** IBM thrift uri hostname. */
    hostname?: string;
    /** Managed by. */
    managed_by?: string;
    /** Metastore status. */
    status?: string;
    /** Tags. */
    tags?: string[];
    actions?: string[];
    /** Associated buckets items. */
    associated_buckets?: string[];
    /** Created by. */
    created_by?: string;
    /** Customer thrift uri. */
    thrift_uri?: string;
    /** Table type. */
    catalog_type?: string;
    /** Description. */
    description?: string;
    /** Associated databases items. */
    associated_databases?: string[];
    /** Associated engines items. */
    associated_engines?: string[];
    /** Created on. */
    created_on?: string;
    /** IBM thrift uri port. */
    port?: string;
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

  /** PauseEngineBody OK. */
  export interface PauseEngineCreatedBody {
    /** Response of success. */
    response?: SuccessResponse;
  }

  /** PolicyListSchema. */
  export interface PolicyListSchema {
    /** policy collection. */
    policies: PolicySchema[];
    /** Total number of policies. */
    total_count: number;
  }

  /** PolicyMetadata. */
  export interface PolicyMetadata {
    /** subject. */
    subject?: string;
    /** action array. */
    actions?: string[];
    /** domain. */
    domain?: string;
    /** object. */
    object?: string;
  }

  /** data policy. */
  export interface PolicySchema {
    /** Total number of rules. */
    rule_count?: number;
    /** rules. */
    rules?: Rule[];
    /** data policy status. */
    status?: string;
    /** catalog name. */
    catalog_name?: string;
    /** data artifact. */
    data_artifact?: string;
    metadata?: DataPolicyMetadata;
    /** the displayed name for the policy. */
    policy_name?: string;
  }

  /** AMS schema List. */
  export interface PolicySchemaList {
    /** catalog policies definition. */
    catalog_policies?: GetCatalogUsersSchema[];
    /** data policies definition. */
    data_policies?: PolicySchema[];
    /** engine policies definition. */
    engine_policies?: GetEngineUsersSchema[];
  }

  /** AMS policy version result. */
  export interface PolicyVersionResultSchema {
    /** The catalog policy version list. */
    catalog_policies?: CatalogPolicies[];
    /** The data policy version list. */
    data_policies?: DataPolicies[];
    /** The Db connection policy version list. */
    database_policies?: DbConnPolicies[];
    /** The engine policy version list. */
    engine_policies?: EnginePolicies[];
    /** The bucket policy version list. */
    bucket_policies?: BucketPolicies[];
  }

  /** Query. */
  export interface Query {
    /** Created by. */
    created_by: string;
    /** Created on. */
    created_on: string;
    /** Description. */
    description: string;
    /** Engine ID. */
    engine_id: string;
    /** Query name. */
    query_name: string;
    /** Query string. */
    query_string: string;
  }

  /** RegisterBucketCreatedBody. */
  export interface RegisterBucketCreatedBody {
    bucket: RegisterBucketCreatedBodyBucket;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** RegisterBucketCreatedBodyBucket. */
  export interface RegisterBucketCreatedBodyBucket {
    /** Bucket display name. */
    bucket_display_name?: string;
    /** Bucket ID. */
    bucket_id?: string;
  }

  /** database details. */
  export interface RegisterDatabaseCatalogBodyDatabaseDetails {
    /** Psssword. */
    password?: string;
    /** Port. */
    port?: string;
    /** SSL Mode. */
    ssl?: boolean;
    /** Only for Kafka - Add kafka tables. */
    tables?: string;
    /** Username. */
    username?: string;
    /** Database name. */
    database_name?: string;
    /** Host name. */
    hostname?: string;
  }

  /** Replace data policy success. */
  export interface ReplaceDataPolicyCreatedBody {
    /** Replace data policy. */
    data_policy: ReplaceDataPolicySchema;
    metadata: DataPolicyMetadata;
    /** Response of success. */
    response: SuccessResponse;
  }

  /** Replace data policy. */
  export interface ReplaceDataPolicySchema {
    /** catalog name. */
    catalog_name: string;
    /** data artifact. */
    data_artifact: string;
    /** a more detailed description of the policy. */
    description?: string;
    /** rules. */
    rules: Rule[];
    /** data policy status. */
    status?: string;
  }

  /** Resource with result. */
  export interface ResourceWithResult {
    /** action. */
    action: string;
    /** Resource name. */
    resource_name: string;
    /** Resource type. */
    resource_type: string;
    /** resource evaluation result. */
    result: boolean;
  }

  /** Resource. */
  export interface ResourcesMetadata {
    /** resource action to be evaluated. */
    action: string;
    /** Resource name. */
    resource_name: string;
    /** Resource type. */
    resource_type: string;
  }

  /** resumeEngine OK. */
  export interface ResumeEngineCreatedBody {
    /** Response of success. */
    response?: SuccessResponse;
  }

  /** Rule. */
  export interface Rule {
    /** the actions to enforce when the data policy triggers. */
    actions: string[];
    /** data policy effect. */
    effect?: string;
    /** user name, group id or tag value. */
    grantee: RuleGrantee;
  }

  /** user name, group id or tag value. */
  export interface RuleGrantee {
    /** grantee value. */
    value: string;
    /** grantee key. */
    key: string;
    /** grantee type. */
    type: string;
  }

  /** Response of success. */
  export interface SuccessResponse {
    /** Message code. */
    _messageCode_?: string;
    /** Message. */
    message?: string;
  }

  /** TableSnapshot. */
  export interface TableSnapshot {
    /** Operation. */
    operation?: string;
    /** Snapshot id. */
    snapshot_id?: string;
    /** Summary. */
    summary?: JsonObject;
    /** Committed at. */
    committed_at?: string;
  }

  /** database details. */
  export interface UpdateDatabaseBodyDatabaseDetails {
    /** Password. */
    password?: string;
    /** Username. */
    username?: string;
  }

  /** Add_columns items. */
  export interface UpdateTableBodyAddColumnsItems {
    /** Comment. */
    column_comment?: string;
    /** Column name. */
    column_name?: string;
    /** Data type. */
    data_type?: string;
  }

  /** Drop_columns items. */
  export interface UpdateTableBodyDropColumnsItems {
    /** Column name. */
    column_name?: string;
  }

  /** Rename_columns items. */
  export interface UpdateTableBodyRenameColumnsItems {
    /** Column name. */
    column_name?: string;
    /** New column name. */
    new_column_name?: string;
  }

  /** Users metadata. */
  export interface UsersMetadata {
    /** Eligible permission to the resource. */
    permission: string;
    /** The user name. */
    user_name: string;
  }
}

export = WatsonxDataV1;
