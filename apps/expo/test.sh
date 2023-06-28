keytool -exportcert -alias business -keystore test.keystore | openssl sha256 | openssl base64

keytool -list -v -keystore test.keystore -storepass ab987c

ZDdjM2ZhMTgwNWNhNGJlODIxZTRkZWMxZjIxZjZhZWUzODUxNDcwOTkxYzc0YjZlYTBlMDdlYWU5YTVlZjFjNgo=

echo "android:apk-key-hash:$(echo -n D7:C3:FA:18:05:CA:4B:E8:21:E4:DE:C1:F2:1F:6A:EE:38:51:47:09:91:C7:4B:6E:A0:E0:7E:AE:9A:5E:F1:C6 | xxd -r -p | base64 | tr -- '+/' '-_' | tr -d '=')"
