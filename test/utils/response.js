const handleResponse = (res, message, statuscodes, data=null, error=null) => {
   const response = {
    success: statuscodes >= 200 && statuscodes < 300,
    message: message,
    data: data,
    error: error
   }
   res.status(statuscodes).json({response})
}

module.exports = {handleResponse}