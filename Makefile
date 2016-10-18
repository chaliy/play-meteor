.PHONY: all

restore:
	mongorestore --host 127.0.0.1:3001 -d meteor ./backup

dev:
	meteor
