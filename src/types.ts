export interface Product {
  id: number;
  name: string;
  totalPrice: number;
  description: string;
  installmentValue: number;
  isFreeShipping: boolean;
}

export interface PaymentOption {
  label: string;
  totalAmount: number;
  installments?: number;
}
export interface MonitorTechnicalSpecifications {
  brand: string;
  model: string;
  partNumber: string;
  screenSize: string;
  screenType: string;
  screenOrientation: string;
  connectivity: string[];
  ergonomics: string[];
  powerVoltage: string;
  color: string;
  warranty: string;
  packageContents: string[];
}

export interface NotebookTechnicalSpecifications {
  brand: string;
  model: string;
  processor: string;
  screen: string;
  gpu: string;
  ram: string;
  storage: string;
  color: string;
  warranty: string;
  operatingSystem: string;
  packageContents: string[];
}

export interface SmartPhonesTechnicalSpecifications {
  brand: string;
  model: string;
  internalMemory: string;
  processor: string;
  operatingSystem: string;
  color: string;
  warranty: string;
  cameraSystem: string;
  connectivity: string[];
}

export interface SmartTvTechnicalSpecifications {
  brand: string;
  model: string;
  color: string;
  panelType: string;
  inches: string;
  internalMemory: string;
  warranty: string;
}

export interface MouseTechnicalSpecifications {
  brand: string;
  model: string;
  integratedMemory: string;
  clickTensioningSystem: string;
  rgbLighting: boolean;
  batteryDurability: {
    withStandardLighting: string;
    withoutLighting: string;
  };
  sensor: string;
  wirelessTechnology: string;
  warranty: string;
}
export interface TabletTechnicalSpecifications {
  brand: string;
  model: string;
  processor: string;
  screen: string;
  camera: string;
  ram: string;
  connectivity: string;
  operatingSystem: string;
  battery: string;
  warranty: string;
}
export interface KeyboardTechnicalSpecifications {
  brand: string;
  model: string;
  keyType: string;
  connectionType: string;
  layout: string;
  language: string;
  spillResistance: string;
  keyDurability: string;
  adjustableStands: string;
  keyPrint: string;
  usbPort: string;
  weight: string;
  warranty: string;
}
export interface GamingChairsTechnicalSpecifications {
  brand: string;
  model: string;
  weightLimit: string;
  seatWidth: string;
  recline: string;
  finishMaterials: string;
  weight: string;
  warranty: string;
}

export interface ProductTechnicalSpecifications {
  monitorTechnicalSpecifications?: MonitorTechnicalSpecifications;
  notebookTechnicalSpecifications?: NotebookTechnicalSpecifications;
  smartPhonesTechnicalSpecifications?: SmartPhonesTechnicalSpecifications;
  smartTvTechnicalSpecifications?: SmartTvTechnicalSpecifications;
  mouseTechnicalSpecifications?: MouseTechnicalSpecifications;
  tabletTechnicalSpecifications?: TabletTechnicalSpecifications;
  keyboardTechnicalSpecifications?: KeyboardTechnicalSpecifications;
  gamingCHairsTechnicalSpecifications?: GamingChairsTechnicalSpecifications;
}

export interface ProductDetails {
  id: number;
  name: string;
  totalPrice: number;
  description: string;
  installmentValue: number;
  isFreeShipping: boolean;
  isBestSeller: boolean;
  isNewRelease: boolean;
  isDailyDeals: boolean;
  averageRating: number;
  totalReviews: number;
  paymentOptions: PaymentOption[];
  technicalSpecifications: ProductTechnicalSpecifications[];
}

export interface Categories {
  id: number;
  name: string;
}

export interface CategoryDetails {
  id: number;
  name: string;
  products: Product[];
  bestSellers: Product[];
  newReleases: Product[];
  dailyDeals: Product[];
}

export interface BestSellersProducts {
  data: ProductDetails[];
}

export interface NewReleasesProducts {
  data: ProductDetails[];
}

export interface DailyDealsProducts {
  data: ProductDetails[];
}
