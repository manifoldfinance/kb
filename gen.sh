#!/usr/bin/env bash
protoc --doc_out=./fixtures --doc_opt=json,proto_workspace.json --proto_path=protos protos/txpool.proto