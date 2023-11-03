set -eo pipefail

trap "echo fail to run lighthouse test" EXIT TERM

defaultport=5173 
while getopts p: optname
do
    case "${optname}" in
        p) defaultport=${OPTARG};;
    esac
done

npx wait-on tcp:${defaultport} -t 60000 || (echo "fail to wait for port ${defaultport}" && exit 1)

npx lighthouse http://localhost:${defaultport} \
    --output=html --output-path=./test.html \
    --chrome-flags="--ignore-certificate-errors"