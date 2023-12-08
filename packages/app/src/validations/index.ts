import { ZodError } from 'zod';
import formatZodErrors from '../helpers/formater/zodErrorFormater';

const validate = (schema: any, data: any) => {
    try {
        schema.parse(data);
        return { valid: true, error: null };
    } catch (error) {
        if (error instanceof ZodError) {
            return { valid: false, error: formatZodErrors(error) };
        }
        return { valid: false, error: 'Unexpected error occurred during validation.' };
    }
};

export default validate;
