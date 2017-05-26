# User Defined Policies for IBM API Connect v5

Based on:
*https://github.com/charlottehutchinson/APIConnect-Policy-MQInvoke

## Installation 

    • Pull this repository down onto your machine
    • Run the build script against the policy folder
    
    $ package_dp_policy.sh -d base64decode-source/
    • Log-in to API Manager: http://apim/apim
    • In an API Connect catalog visit settings/policies
    • Select the zip file that is created by the build process to import to API Connect 
    • To enable your policy to be visible by API Designer you must:
      • Insert the following lines in your $HOME/.apiconnect/config file:
      userPolicies:
        - "/GIT/ibm-apiconnect-udp/base64decode-source"

## Policies guidelines

    Each policy should have it's own subdirectory within this directory
    The subdirectory should share the name of the custom policy (as defined in the policy.yaml name attribute)
    Each policy folder should contain all the constituent files AND a .zip file for import into API Connect
    The policy subdirectory should have the following structure
        mypolicy
        |
        ⌊ --> implementation
        |          |
        |          ⌊ --> {implementation files/folders}
        |
        ⌊ --> mypolicy.yaml

## The build script

In the Cross-Repository-Tools directory you will find the build script (package_dp_policy.sh). This can be run against a policy directory as follows: ./package_dp_policy.sh -d base64decode-source/

The script will also accept a number of flags to automate the publish of the output policy. These can been identified via use of the -h flag 


## License 
The License information is avaliable in license.txt
