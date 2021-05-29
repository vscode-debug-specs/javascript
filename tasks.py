import os
from typing import cast
import invoke

@invoke.task
def generate_openapi(c):
    c = cast(invoke.Context, c)
    c.run(f"""docker run --rm -u $(id -u):$(id -g) -v "$(pwd):/local" openapitools/openapi-generator-cli:v5.1.1 generate \
        -i /local/openapi/openapi.yaml \
        -g nodejs-express-server \
        -o /local/src/gisapp-server""")
    c.run(f"""docker run --rm -u $(id -u):$(id -g) -v "$(pwd):/local" openapitools/openapi-generator-cli:v5.1.1 generate \
        -i /local/openapi/openapi.yaml \
        -g typescript-node \
        -o /local/src/gisapp-client""")
