import { ApiExtraModel, ApiProperty, getSchemaPath } from '../../../../../src';
import { Catd } from './catd.entity';

@ApiExtraModel(Catd)
export class Cat {
  /**
   * The name of the Catcomment
   * @example Kitty
   */
  @ApiProperty({ example: 'Kitty', description: 'The name of the Cat'})
  name: string;

  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  age: number;

  @ApiProperty({
    example: 'Maine Coon',
    description: 'The breed of the Cat',
  })
  breed: string;

  @ApiProperty({
    description: 'The breed of the Cat',
    required: false,
    type: 'array',
    items: {
      $ref: getSchemaPath(Catd)
    }
  })
  catds: Catd[];
}
