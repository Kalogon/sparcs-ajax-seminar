## SPARCS 19 Fall Node/Express Seminar

### 설치

```bash
$ git clone https://github.com/inhibitor1217/sparcs-node-seminar.git
$ cd sparcs-node-seminar
$ npm install
```

### 실행

```bash
$ npm run start
```

3000번 포트에서 실행됩니다.

### API 상세

- `GET /todos`
    - reponse example
        - `[{ id: 0, content: "todo 1" }, { id: 1, content: "todo 2" }]`
- `POST /todos`
    - request example
        - body
            - `{ content: "content" }`
    - response example
        - `{ id: 0, content: "content" }`
- `PUT /todos/:id`
    - request path parameter
        - `id`: 수정할 todo의 id
    - request example
        - body
            - `{ content: "수정할 내용" }`
- `DELETE /todos/:id`
    - request path paramter
        - `id`: 삭제할 todo의 id