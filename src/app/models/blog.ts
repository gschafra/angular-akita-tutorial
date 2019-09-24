import { ID } from '@datorama/akita';
import { Author } from './author';

export interface Blog {
    id: ID;
    title: string;
    author: Author;
}