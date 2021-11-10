export interface IPosition {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  }
  
  export interface IList {
    id: number;
    label: string;
    logo: string;
    localization: {
      lat: number;
      lng: number;
    };
    address: {
      street: string;
      zipcode: string;
      city: string;
      state: string;
    };
  }

export interface IListStoreDetails {
  store: number;
  value: number;
  expires_in: string;
  storeDetails?: IList;
}

export interface IDiscounts {
  storeId: number;
  value: number;
  expires_in: string;
}

export interface stores {
  id: number;
  label: string;
  logo: string;
  localization: {
    lat: number;
    lng: number;
  };
  address: {
    street: string;
    zipcode: string;
    city: string;
    state: string;
  };
  discounts?: IDiscounts[];
}