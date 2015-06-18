// Type definitions for path-to-regexp v1.0.3
// Project: https://github.com/pillarjs/path-to-regexp
// Definitions by: xica <https://github.com/xica>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "path-to-regexp" {

    export interface PathToRegExpKey {
        name: string;
        prefix: string;
        delimiter: string;
        optional: boolean;
        repeat: boolean;
        pattern: string;
    }

    export interface Options {
        sensitive?: boolean;
        strict?: boolean;
        end?: boolean;
    }

	export default function pathToRegexp(path: string, keys: string[], options?: Options): RegExp;
}
