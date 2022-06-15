ARG cypress_root=.
FROM cypress/included:9.5.4

WORKDIR e2e

# copy test files
COPY .git .git
COPY $cypress_root/cypress cypress
COPY $cypress_root/package-lock.json .
COPY $cypress_root/package.json .
COPY $cypress_root/tsconfig.json .
COPY $cypress_root/cypress.json .

RUN npm ci

ENTRYPOINT ["npm", "run", "cy:test"]