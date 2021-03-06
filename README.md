# User Defined Policies for IBM API Connect v5

Based on:
*https://github.com/charlottehutchinson/APIConnect-Policy-MQInvoke

## Installation 

    • Pull this repository down onto your machine
    $ git clone https://github.com/rodrigo-tsuru/ibm-apiconnect-udp.git
    
    • Run the build script against the policy folder
    $ package_dp_policy.sh -d base64decode-source/
    
    • Log-in to API Manager: https://apim/apim
    
    • Go to Dashboard (Menu -> Dashboard)
    
    • Select a catalog
    
    • Click on settings
    
![Catalog settings](docs/screenshots/apimanager_catalog_settings.png)
    
    • Click on policies
![Catalog settings -> policies](docs/screenshots/apimanager_catalog_settings_policies.png)
    • Select the zip file that is created by the build process to import to API Connect 
![Catalog settings -> policies](docs/screenshots/apimanager_policy_upload.png)
    
    • To enable your policy to be visible by API Designer you must:
      • Insert the following lines in your $HOME/.apiconnect/config file:
      userPolicies:
        - "/GIT/ibm-apiconnect-udp/base64decode-source"
        
    • You should be able to use your user defined policy from Assembly Palette
![Assembly paletter -> user defined policy](docs/screenshots/apidesigner_userdefinedpolicy.png)    


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
