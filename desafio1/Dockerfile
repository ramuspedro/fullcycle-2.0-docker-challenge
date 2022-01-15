FROM golang:1.17-alpine AS builder

WORKDIR /app

COPY go.mod ./

COPY *.go ./

RUN go build -o fullcycle .

FROM scratch
WORKDIR /app
COPY --from=builder /app/ /app/

CMD [ "./fullcycle" ]