import { Photo } from './../../model/photo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform {
  transform(photos: Photo[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLowerCase();

    if (descriptionQuery) {
      return photos.filter((photo) => {
        return photo.description.toLowerCase().includes(descriptionQuery);
      });
    } else {
      return photos;
    }
  }
}
