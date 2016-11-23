```js
{
  session: {
    currentUser: {
      id: "1",
      username: "DevStarks",
      first_name: "Devin",
      last_name: "Starks"
      email: "abc@abc.com",
      photoUrl: "photo.url/1"
    }
  },
  rental: {
    main: {
      id: "1",
      reviews: {
        1: {
          id: "1",
          body: "Great place",
          rating: 5,
          createdAt: "11:11:11 ET"
          author: {
            id: "1",
            username: "DevStarks",
            photoUrl: "photo.url/1"
          }
        },
      }
    },
    suggested: {
      1: {
        id: "1",
        address: "123 Main",
        rating: 5
      },
      2: {
        id: "2",
        address: "123 Main",
        rating: 5    
      },
      3: {
        id: "3",
        address: "123 Main",
        rating: 5    
      }
    },
  },
  errors: {
    sessionErrors: [],
    rentalErrors: []
  }
}
```
