/*
      Licensed Materials - Property of IBM
      © IBM Corp. 2016
*/
var urlopen = require('urlopen');
var apic = require('local:isp/policy/apim.custom.js');
var props = apic.getPolicyProperty();

function APICGenericErrorHelper(name, message, code) {

    if (!code) {
        code = 400;
    }

    apic.error(name, code, message, "Please refer to the datapower log for more information")
}

function InvalidRequest(SOAPResponse) {
    return APICGenericErrorHelper("InvalidRequest", "Error occured when reading the input was the inputData XML or JSON", 400);
}

function decode(encodedStr) {
    var buffer = new Buffer("");
    buffer.write(encodedStr,0,8,"base64");
    return buffer.toString();
}


function process(xml) {
    
    try {
        xml[field] = decode(xml[field]);

        session.output.write(xml);

        
    } catch (error) {
        var errorMessage = 'Thrown error on urlopen.open for target ' + options.target + ': ' + error.message + ', error object errorCode=' + error.errorCode.toString();
        APICGenericErrorHelper("Unknown Error", errorMessage, 400)
    }
}

// Read policy properties
var field = props.field

//Read the payload as XML
apic.readInputAsXML(function(readError, xml) {
    if (readError) {
        apic.readInputAsJSON(function(readError, json) {
            if (readError) {
                InvalidRequest();
            } else {
                process(json)
            }
        });
    } else {
        process(xml)
    }
});
