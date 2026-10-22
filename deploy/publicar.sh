#!/bin/sh
# Publica o site AW3S (Next.js) na VPS: envia o código do último commit e recompila o container.
# Uso: sh deploy/publicar.sh
set -e

SERVER=${SERVER:-root@2.25.104.104}
# Se a sua internet não alcança o IPv4 da VPS: SSH_OPTS="-6" SERVER=root@srv1899434.hstgr.cloud sh ...
SSH_OPTS="${SSH_OPTS:-} -o HostKeyAlias=2.25.104.104"
REMOTE=/docker/aw3s
ROOT=$(cd "$(dirname "$0")/.." && pwd)

if [ -n "$(git -C "$ROOT" status --porcelain)" ]; then
  echo "Aviso: há alterações sem commit; só o que está commitado será publicado."
fi

ssh $SSH_OPTS "$SERVER" "mkdir -p $REMOTE/app"
scp $SSH_OPTS "$ROOT/deploy/docker-compose.yml" "$SERVER:$REMOTE/"
# .env com o SMTP: criado só na primeira vez, nunca sobrescrito
ssh $SSH_OPTS "$SERVER" "[ -f $REMOTE/.env ] || touch $REMOTE/.env"
git -C "$ROOT" archive --format=tar HEAD | ssh $SSH_OPTS "$SERVER" "find $REMOTE/app -mindepth 1 -delete && tar -C $REMOTE/app -xf -"
ssh $SSH_OPTS "$SERVER" "cd $REMOTE && docker compose up -d --build && docker image prune -f >/dev/null"

echo "Publicado em https://aw3s.srv1899434.hstgr.cloud (e https://aw3s.com.br quando o DNS apontar para a VPS)"
