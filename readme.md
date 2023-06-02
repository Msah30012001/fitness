admin 

    POST    http://localhost:5000/api/admin/
    POST    http://localhost:5000/api/admin/auth
    GET     http://localhost:5000/api/admin/destroy-auth
    GET     http://localhost:5000/api/admin/

user

    POST    http://localhost:5000/api/user/
    POST    http://localhost:5000/api/user/auth
    GET     http://localhost:5000/api/user/destroy-auth
    GET     http://localhost:5000/api/user/
    GET     http://localhost:5000/api/user/:userId
    DELETE  http://localhost:5000/api/user/:userId

seller

    POST    http://localhost:5000/api/seller/
    POST    http://localhost:5000/api/seller/auth
    GET     http://localhost:5000/api/seller/destroy-auth
    GET     http://localhost:5000/api/seller/
    GET     http://localhost:5000/api/seller/:sellerId
    DELETE  http://localhost:5000/api/seller/:sellerId

main category

    POST    http://localhost:5000/api/main-category
    GET     http://localhost:5000/api/main-category
    GET     http://localhost:5000/api/main-category/:mainCategoryId
    PATCH   http://localhost:5000/api/main-category/:mainCategoryId
    DELETE  http://localhost:5000/api/main-category/:mainCategoryId

sub category

    POST    http://localhost:5000/api/sub-category
    GET     http://localhost:5000/api/sub-category
    GET     http://localhost:5000/api/sub-category/:subCategoryId
    PATCH   http://localhost:5000/api/sub-category/:subCategoryId
    DELETE  http://localhost:5000/api/sub-category/:subCategoryId

child category

    POST    http://localhost:5000/api/child-category
    GET     http://localhost:5000/api/child-category
    GET     http://localhost:5000/api/child-category/childCategoryId
    PATCH   http://localhost:5000/api/child-category/:childCategoryId
    DELETE  http://localhost:5000/api/child-category/:childCategoryId

specification
    
    POST    http://localhost:5000/api/specification
    GET     http://localhost:5000/api/specification
    GET     http://localhost:5000/api/specification/:specificationId
    PATCH   http://localhost:5000/api/specification/:specificationId
    DELETE  http://localhost:5000/api/specification/:specificationId

attribute
    
    POST    http://localhost:5000/api/attribute
    GET     http://localhost:5000/api/attribute
    GET     http://localhost:5000/api/attribute/:attributeId
    PATCH   http://localhost:5000/api/attribute/:attributeId
    DELETE  http://localhost:5000/api/attribute/:attributeId

product

    POST    http://localhost:5000/api/product
    GET     http://localhost:5000/api/product
    GET     http://localhost:5000/api/product/:productId
    PATCH   http://localhost:5000/api/product/:productId
    DELETE  http://localhost:5000/api/product/:productId

product sku

    POST    http://localhost:5000/api/product-sku
    GET     http://localhost:5000/api/product-sku
    GET     http://localhost:5000/api/product-sku/:productSkuId
    PATCH   http://localhost:5000/api/product-sku/:productSkuId
    DELETE  http://localhost:5000/api/product-sku/:productSkuId

cart

    POST    http://localhost:5000/api/cart
    GET     http://localhost:5000/api/cart
    PATCH   http://localhost:5000/api/cart
    DELETE  http://localhost:5000/api/cart/:cartId