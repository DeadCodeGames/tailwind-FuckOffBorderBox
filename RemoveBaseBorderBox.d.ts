declare module 'myModule' {
    interface AddBase {
        (baseStyles: { [key: string]: { [property: string]: string } }): void;
    }

    interface Options {
        addBase: AddBase;
    }

    export default function myModule(options: Options): void;
}