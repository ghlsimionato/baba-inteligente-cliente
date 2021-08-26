const buildRequestOptions = token => ({ headers: { 'Authorization': `Bearer ${token}` } });

export {
    buildRequestOptions,
};
