/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    pages: Page;
    cases: Case;
    employees: Employee;
    request: Request;
    media: Media;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    pages: PagesSelect<false> | PagesSelect<true>;
    cases: CasesSelect<false> | CasesSelect<true>;
    employees: EmployeesSelect<false> | EmployeesSelect<true>;
    request: RequestSelect<false> | RequestSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {
    settings: Setting;
  };
  globalsSelect: {
    settings: SettingsSelect<false> | SettingsSelect<true>;
  };
  locale: 'ru';
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  slug?: string | null;
  title: string;
  description: string;
  keywords: string;
  childController?:
    | {
        id?: string | null;
        blockName?: string | null;
        blockType: 'ourCasesController';
      }[]
    | null;
  blocks?:
    | (
        | {
            content?: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            } | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'textBlock';
          }
        | {
            title: string;
            description: string;
            features?:
              | {
                  name: string;
                  id?: string | null;
                }[]
              | null;
            button: string;
            cost?: string | null;
            slider?:
              | {
                  desktopImage: number | Media;
                  mobileImage: number | Media;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'heroBlock';
          }
        | {
            title: string;
            description?: string | null;
            services?:
              | {
                  name: string;
                  description: string;
                  cost?: string | null;
                  link?: (number | null) | Page;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'servicesBlock';
          }
        | {
            title: string;
            description?: string | null;
            stages?:
              | {
                  name: string;
                  description: string;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'stagesOfWorkBlock';
          }
        | {
            title: string;
            description?: string | null;
            items?:
              | {
                  name: string;
                  description: string;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'whyChooseUsBlock';
          }
        | {
            title: string;
            description?: string | null;
            questions?:
              | {
                  name: string;
                  answer: string;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'answersToQuestionsBlock';
          }
        | {
            title: string;
            description?: string | null;
            count: number;
            id?: string | null;
            blockName?: string | null;
            blockType: 'ourCasesBlock';
          }
        | {
            title: string;
            description?: string | null;
            picture: number | Media;
            formMeta: {
              fullname: {
                label: string;
                placeholder: string;
              };
              phone: {
                label: string;
                placeholder: string;
              };
              email: {
                label: string;
                placeholder: string;
              };
              comment: {
                label: string;
                placeholder: string;
              };
              promoCode: {
                label: string;
                placeholder: string;
              };
              typeOfActivity: {
                label: string;
                placeholder: string;
              };
              tasks: {
                label: string;
                placeholder: string;
              };
              competitors: {
                label: string;
                placeholder: string;
              };
              exampleSites: {
                label: string;
                placeholder: string;
              };
              complexElements: {
                label: string;
                placeholder: string;
              };
              socialNetworks: {
                label: string;
                placeholder: string;
              };
              logo: {
                label: string;
                placeholder: string;
              };
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'offerRequestBlock';
          }
        | {
            id?: string | null;
            blockName?: string | null;
            blockType: 'offerBlock';
          }
        | {
            title: string;
            description: string;
            discount: string;
            id?: string | null;
            blockName?: string | null;
            blockType: 'bannerBlock';
          }
        | {
            service: string;
            goals: {
              title: string;
              description?: string | null;
              id?: string | null;
            }[];
            id?: string | null;
            blockName?: string | null;
            blockType: 'purposefulBlock';
          }
        | {
            title: string;
            description?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'employeeBlock';
          }
      )[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cases".
 */
export interface Case {
  id: number;
  name: string;
  service: string;
  description: string;
  href?: string | null;
  pictures?:
    | {
        picture?: (number | null) | Media;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "employees".
 */
export interface Employee {
  id: number;
  role: string;
  name: string;
  description: string;
  experience: string;
  rank: string;
  picture?: (number | null) | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "request".
 */
export interface Request {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  comment?: string | null;
  promoCode?: string | null;
  typeOfActivity?: string | null;
  tasks?: string | null;
  competitors?: string | null;
  exampleSites?: string | null;
  complexElements?: string | null;
  socialNetworks?: string | null;
  logo?: boolean | null;
  status: '🆕 Новая' | '⚒️ В работе' | '✅ Выполнена' | '❌ Отменена';
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'pages';
        value: number | Page;
      } | null)
    | ({
        relationTo: 'cases';
        value: number | Case;
      } | null)
    | ({
        relationTo: 'employees';
        value: number | Employee;
      } | null)
    | ({
        relationTo: 'request';
        value: number | Request;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  slug?: T;
  title?: T;
  description?: T;
  keywords?: T;
  childController?:
    | T
    | {
        ourCasesController?:
          | T
          | {
              id?: T;
              blockName?: T;
            };
      };
  blocks?:
    | T
    | {
        textBlock?:
          | T
          | {
              content?: T;
              id?: T;
              blockName?: T;
            };
        heroBlock?:
          | T
          | {
              title?: T;
              description?: T;
              features?:
                | T
                | {
                    name?: T;
                    id?: T;
                  };
              button?: T;
              cost?: T;
              slider?:
                | T
                | {
                    desktopImage?: T;
                    mobileImage?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        servicesBlock?:
          | T
          | {
              title?: T;
              description?: T;
              services?:
                | T
                | {
                    name?: T;
                    description?: T;
                    cost?: T;
                    link?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        stagesOfWorkBlock?:
          | T
          | {
              title?: T;
              description?: T;
              stages?:
                | T
                | {
                    name?: T;
                    description?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        whyChooseUsBlock?:
          | T
          | {
              title?: T;
              description?: T;
              items?:
                | T
                | {
                    name?: T;
                    description?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        answersToQuestionsBlock?:
          | T
          | {
              title?: T;
              description?: T;
              questions?:
                | T
                | {
                    name?: T;
                    answer?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        ourCasesBlock?:
          | T
          | {
              title?: T;
              description?: T;
              count?: T;
              id?: T;
              blockName?: T;
            };
        offerRequestBlock?:
          | T
          | {
              title?: T;
              description?: T;
              picture?: T;
              formMeta?:
                | T
                | {
                    fullname?:
                      | T
                      | {
                          label?: T;
                          placeholder?: T;
                        };
                    phone?:
                      | T
                      | {
                          label?: T;
                          placeholder?: T;
                        };
                    email?:
                      | T
                      | {
                          label?: T;
                          placeholder?: T;
                        };
                    comment?:
                      | T
                      | {
                          label?: T;
                          placeholder?: T;
                        };
                    promoCode?:
                      | T
                      | {
                          label?: T;
                          placeholder?: T;
                        };
                    typeOfActivity?:
                      | T
                      | {
                          label?: T;
                          placeholder?: T;
                        };
                    tasks?:
                      | T
                      | {
                          label?: T;
                          placeholder?: T;
                        };
                    competitors?:
                      | T
                      | {
                          label?: T;
                          placeholder?: T;
                        };
                    exampleSites?:
                      | T
                      | {
                          label?: T;
                          placeholder?: T;
                        };
                    complexElements?:
                      | T
                      | {
                          label?: T;
                          placeholder?: T;
                        };
                    socialNetworks?:
                      | T
                      | {
                          label?: T;
                          placeholder?: T;
                        };
                    logo?:
                      | T
                      | {
                          label?: T;
                          placeholder?: T;
                        };
                  };
              id?: T;
              blockName?: T;
            };
        offerBlock?:
          | T
          | {
              id?: T;
              blockName?: T;
            };
        bannerBlock?:
          | T
          | {
              title?: T;
              description?: T;
              discount?: T;
              id?: T;
              blockName?: T;
            };
        purposefulBlock?:
          | T
          | {
              service?: T;
              goals?:
                | T
                | {
                    title?: T;
                    description?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        employeeBlock?:
          | T
          | {
              title?: T;
              description?: T;
              id?: T;
              blockName?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cases_select".
 */
export interface CasesSelect<T extends boolean = true> {
  name?: T;
  service?: T;
  description?: T;
  href?: T;
  pictures?:
    | T
    | {
        picture?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "employees_select".
 */
export interface EmployeesSelect<T extends boolean = true> {
  role?: T;
  name?: T;
  description?: T;
  experience?: T;
  rank?: T;
  picture?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "request_select".
 */
export interface RequestSelect<T extends boolean = true> {
  fullname?: T;
  email?: T;
  phone?: T;
  comment?: T;
  promoCode?: T;
  typeOfActivity?: T;
  tasks?: T;
  competitors?: T;
  exampleSites?: T;
  complexElements?: T;
  socialNetworks?: T;
  logo?: T;
  status?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings".
 */
export interface Setting {
  id: number;
  metaData: {
    title: string;
    template?: string | null;
    description?: string | null;
    keywords?: string | null;
  };
  navigation?:
    | {
        label: string;
        href: string;
        children?:
          | {
              label: string;
              href: string;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  footer: {
    description: string;
    button: string;
    contactsDescription: string;
    copyright: string;
  };
  contact: {
    profile: string;
    message: string;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings_select".
 */
export interface SettingsSelect<T extends boolean = true> {
  metaData?:
    | T
    | {
        title?: T;
        template?: T;
        description?: T;
        keywords?: T;
      };
  navigation?:
    | T
    | {
        label?: T;
        href?: T;
        children?:
          | T
          | {
              label?: T;
              href?: T;
              id?: T;
            };
        id?: T;
      };
  footer?:
    | T
    | {
        description?: T;
        button?: T;
        contactsDescription?: T;
        copyright?: T;
      };
  contact?:
    | T
    | {
        profile?: T;
        message?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}