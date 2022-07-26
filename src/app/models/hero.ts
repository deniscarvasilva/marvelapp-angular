import { DeserializableModel } from "./deserializable.model";

export class Hero implements DeserializableModel{

    id: number;
    name: string;
    description: string;
    thumbnail: Image;
    resourceURI: string;
    comics: Arrival;
    series: Arrival;
    stories: Arrival;
    events: Arrival;
    urls: URLHero[];

    deserialize(input: any) {
      Object.assign(this, input);
      return this;
    }
    getImage() {
      return this.thumbnail.path + '.' + this.thumbnail.extension;
    }
   
    
  }
  
  interface Image {
    path: string;
    extension: string;
  }
  interface Arrival {
    available: number;
    collectionURI: string;
    items: Items[];
    returned: number;
  }
  interface Items {
    resourceURI: string;
    name: string;
    type?: string;
  }
  interface URLHero {
    type: string;
    url: string;
  }