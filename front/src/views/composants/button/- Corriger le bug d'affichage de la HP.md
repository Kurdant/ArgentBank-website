

une route "userTabs" avec toute les infos d'affichage dans user : argent sur le compte, available balance ou pas et le x 

une route pour quand on clique sur une des tabs "userAccordion" avec la date, la description, le montant, le prix, le type de transactions, la categorie et une note tout ça en post avec l'envoie de l'utilisateur

en PUT "cat" et "newNote" la category et la note 
et si on veut opti on peut faire que une route pour les 2 et récup la valeur de celui non changé pour la renvoyer

une route delete "deleteTabs" pour supprimer la card 


openapi: 3.0.3
info:
  title: Argent Bank API
  description: |-
    API documentation for Argent Bank. This API provides access to user transaction information.
  termsOfService: http://swagger.io/terms/
  contact:
    email: apiteam@swagger.io
  license:
    name: Apache 2.0
    url: http://www.apache.org/licenses/LICENSE-2.0.html
  version: 1.0.0
externalDocs:
  description: Find out more about Swagger
  url: http://swagger.io
servers:
  - url: https://api.argentbank.com/v1
tags:
  - name: transactions
    description: Get all the transactions
    externalDocs:
      description: Find out more
      url: http://swagger.io
paths:
  /transactions:
    post:
      tags: 
        - transactions
      summary: Get transactions list
      description: Retrieve the transaction balance and details for the user.
      operationId: getTransactionInfo
      requestBody:
        description: Need token
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/PostAllTransaction'
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/TransactionInfo'
            application/xml:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/TransactionInfo'
        '400':
          description: Invalid status value
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
        '500':
          description: 	Internal Server Error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error500'
  /transaction:
    post:
      tags:
        - transaction
      summary: Get all informations
      description: get all informations in details for one transaction
      operationId: GetTransactionInformations
      requestBody:
        description: Need token
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/PostTransaction'
      responses:
        '201':
          description: Transaction created successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/GetAllTransaction'
        '400':
          description: Invalid input
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
        '500':
          description: 	Internal Server Error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error500'
  /editTransaction/{id}:
    put:
      tags:
        - transaction
      summary: Update transaction information
      description: Update the transaction informations.
      operationId: updateTransactionInfo
      parameters:
        - name: id
          in: path
          required: true
          description: ID of the card to update
          schema:
            type: string
      requestBody:
        description: Transaction information to update
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/UpdateTransactionInfo'
      responses:
        '200':
          description: Transaction updated successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Success'
        '400':
          description: Invalid input
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
        '500':
          description: 	Internal Server Error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error500'
components:
  schemas:
    TransactionInfo:
      type: object
      properties:
        transactionName:
          type: string
          example: "Argent Bank Checking (x3448)"
        balance:
          type: number
          format: float
          example: 48098.43
        currency:
          type: string
          example: "USD"
        id:
          type: string
          example: "1"
    Error:
      type: object
      properties:
        code:
          type: integer
          format: int32
        message:
          type: string
    Error500:
      type: object
      properties:
        code:
          type: integer
          format: int32
        message:
          type: string
    Success:
      type: object
      properties:
        code:
          type: number
          format: "200"
        message:
          type: string
    PostAllTransaction:
      type: object
      properties:
        token:
          type: string
          example: "token"
        user:
          type: string
          example: "mail"
    PostTransaction:
      type: object
      properties:
        token:
          type: string
          example: "token"
        id:
          type: string
          example: "1"
    GetAllTransaction:
      type: object
      properties:
        date:
          type: string
          example: "24/05/24"
        description:
          type: string
          example: "Golden Sun Bakery"
        amount:
          type: number
          example: 8
        balance:
          type: number
          example: 298.00
        currency:
          type: string
          example: dollars
        transaction-type:
          type: string
          example: "Electronic"
        category:
          type: string
          example: "food"
        note:
          type: string
          example: "lorem Ipsum"
    UpdateTransactionInfo:
      type: object
      properties:
        token:
          type: string
          example: "token"
        category:
          type: string
          example: "string"
        Note:
          type: string
          example: "string"
    deletTransactionInfo:
      type: object
      properties:
        id:
          type: number
          example: 1
        token:
          type: string
          example: "token"
        user:
          type: string
          example: "user"
