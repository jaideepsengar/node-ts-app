import { Controller, Get } from '@nestjs/common';
import { ApiModelProperty, ApiResponse } from '@nestjs/swagger';

export class BlogPost {
  @ApiModelProperty() // used to generate Swagger documentation that `BlogPost` model contains id of type number
  id: number = 0;

  @ApiModelProperty()
  authorId: string = '';

  @ApiModelProperty()
  title: string = '';

  @ApiModelProperty()
  content: string= '';
}

export const blogPosts = [{
  id: 1,
  authorId: 'xxx',
  title: 'Build a NodeJS App with Typescript',
  content: 'Whats wrong with Javascript?'
}, {
  id: 2,
  authorId: 'yyy',
  title: 'Don\'t build a NodeJS App with Typescript',
  content: 'Whats wrong with Typescript?'
}];

@Controller('blog-posts')
export default class BlogPostController {
  @Get() // registers a `blog-posts` GET method on the API
  @ApiResponse({ type: BlogPost, status: 200, isArray: true }) // for Swagger documentation: API returns an array of BlogPost models
  findAll(): Array<BlogPost> {
    return blogPosts;
  }
}