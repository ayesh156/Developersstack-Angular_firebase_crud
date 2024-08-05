export default class Post {
    constructor(
      public id: string,
      public userId: string,
      public title: string,
      public body: string,
    ) {}
  
    // Method to convert the class instance to a plain object
    toObject(): any {
      return {
        id: this.id,
        userId: this.userId,
        title: this.title,
        body: this.body
      };
    }
  }