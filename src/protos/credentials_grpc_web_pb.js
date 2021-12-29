/**
 * @fileoverview gRPC-Web generated client stub for credentials
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.credentials = require('./credentials_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.credentials.CredentialsServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.credentials.CredentialsServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.credentials.GetCredentialsRequest,
 *   !proto.credentials.GetCredentialsResponse>}
 */
const methodDescriptor_CredentialsService_GetCredentials = new grpc.web.MethodDescriptor(
  '/credentials.CredentialsService/GetCredentials',
  grpc.web.MethodType.UNARY,
  proto.credentials.GetCredentialsRequest,
  proto.credentials.GetCredentialsResponse,
  /**
   * @param {!proto.credentials.GetCredentialsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.credentials.GetCredentialsResponse.deserializeBinary
);


/**
 * @param {!proto.credentials.GetCredentialsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.credentials.GetCredentialsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.credentials.GetCredentialsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.credentials.CredentialsServiceClient.prototype.getCredentials =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/credentials.CredentialsService/GetCredentials',
      request,
      metadata || {},
      methodDescriptor_CredentialsService_GetCredentials,
      callback);
};


/**
 * @param {!proto.credentials.GetCredentialsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.credentials.GetCredentialsResponse>}
 *     Promise that resolves to the response
 */
proto.credentials.CredentialsServicePromiseClient.prototype.getCredentials =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/credentials.CredentialsService/GetCredentials',
      request,
      metadata || {},
      methodDescriptor_CredentialsService_GetCredentials);
};


module.exports = proto.credentials;

