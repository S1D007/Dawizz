import { ZodError } from "zod";
import { camelToPascalCase } from "./camelCaseParser";

const formatZodErrors = (errors: ZodError<any>): string[] => {
    return errors.errors.map((error) => {
        switch (error.code) {
            case "invalid_string":
                return `Invalid value for ${camelToPascalCase(`${error.path[0]}`)}`;
            case "invalid_type":
                return `Expected ${camelToPascalCase(error.expected)} for ${camelToPascalCase(`${error.path[0]}`)}, received ${error.received}`;
            default:
                return `Validation error: ${error.message}`;
        }
    });
}

export default formatZodErrors;