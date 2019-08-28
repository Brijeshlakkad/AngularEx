import { Injectable } from '@angular/core';
import { Todo } from '../itodo';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class TodoControllerService {

  getTodosUrl: string = 'http://localhost:8888/getTodo';
  todosUrl: string = 'http://localhost:8888/todo';
  todoList: Todo[];
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  getTodoList(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.getTodosUrl, httpOptions)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  addTodo(todo: Todo): Observable<Todo> {
    const body = new HttpParams().set('item', todo.item);
    console.log(JSON.stringify(todo));
    return this.http.post<Todo>(this.todosUrl, body.toString(), httpOptions)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
  deleteTodo(id: string): Observable<{}> {
    const url = `${this.todosUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.todosUrl, todo, httpOptions)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
