export class postDetailDataModel {
    public createdAt: string;
    public title: string;
    public content: string;
    public userID: string;
  
    constructor(createdAt: string, title: string, content: string, userID: string) {
      this.createdAt = createdAt;
      this.title = title;
      this.content = content;
      this.userID = userID;
    }
}