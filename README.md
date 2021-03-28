# HiPet!

## Problems to solve

Our application is an online, searchable database of animals who need homes/lost pets.
It is a directory of nearly 239 cat/dog breeds across the world.

### Our mission

To use Internet technology and the resources it can generate to:

1. Increase public awareness of the availability of high-quality adoptable pets
2. Increase the overall effectiveness of pet adoption programs across the U.S. to the extent that the euthanasia of adoptable pets is eliminated
3. Elevate the status of pets to that of family member and recommand pets for pet lovers. Pet lovers can search for a pet that best matches their needs.
4. Users could report their lost pets in our website. Hopes these lovely gugys could find their home as soon as possible.

## Three Features:

1. Search
2. Adoption Recommendation
3. Post

## API：

We have four APIs:

1. https://api.thedogapi.com/v1/breeds/
2. https://api.thecatapi.com/v1/breeds
3. Google Maps.
4. PetFinder: https://api.petfinder.com/v2/oauth2/token

## Routers

There are six routers with two subRouters in our application:

1. Home Page
2. Cat Search Page  
   |----2.1 Cat Details Page
3. Dog Search Page  
   |----3.1 Dog Details Page
4. Report Lost Pets Page
5. Adopt Page
6. Available for Adoption
7. Post Page [Firebase]
   Pets onwers could also post their pets to find a potential adopter
8. My Post
   User can check their favorite
9. About Page

## Adoption Recommendation

Pet lovers can input their perference for pets' characteristics in our questionnaires.  
Our questionnaires has the following question types:  
`<Slider>`: to get the weights of each pets' characteristic.  
`<CheckBox>`: to choose temperaments adn help us locate the target users.  
Our server will calculate the weighted scores of each pet type.

Purposes:

1. Help pet lovers find their most suitable pet type.
2. After pet lovers decided their favorite pet type, they could be redirected to another detailed page find available pets to be adpted.
3. Accelate the process of pets lovers to find their pets

##

Summary:

1. return none 没 API 的
2. render 推荐
3. details 排版
4. Available for adoption 修改
5. Available for adoption 新建
