.PHONY: all

restore:
	mongorestore --host 127.0.0.1:3001 -d meteor ./backup

dev:
	meteor

docker:
	docker build -t play-meteor .
	docker tag play-meteor chaliy/play-meteor:latest
	docker push chaliy/play-meteor:latest
