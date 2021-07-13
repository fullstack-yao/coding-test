const getTimeStamp = () => {
  return new Date().toISOString();
};

const info = (message) => {
  console.info(`[${getTimeStamp()}] [INFO] ${message}`);
};

const warn = (message) => {
  console.warn(`[${getTimeStamp()}] [WARN] ${message}`);
};

const error = (namespace, message) => {
  console.error(`[${getTimeStamp()}] [ERROR] ${message}`);
};

const debug = (namespace, message) => {
  console.debug(`[${getTimeStamp()}] [DEBUG] ${message}`);
};

const logging = {
  info,
  warn,
  error,
  debug
};

const logger = (req, res, next) => {
  const { url, method } = req;
  const requestUniqueID = new Date().valueOf();

  // Log the req
  logging.info(
    `Request(${requestUniqueID})-> URL: [${url}] - METHOD: [${method}]`
  );

  next();

  // Log the res
  res.on('finish', () => {
    logging.info(
      `Response(${requestUniqueID})->
        URL: [${url}] - METHOD: [${method}] - STATUS: [${res.statusCode}]`
    );
  })
}

export default logger;
