import requests

SENHA_ENDPOINT = 'https://sgjpre-bluegreen.jep.gov.co/tj-integracao-jep-api/api/v3/notificacao/email/status'
AUTH_ENDOPOINT = 'https://identidad-sgjpre.jep.gov.co/auth/realms/saj/protocol/openid-connect/token'

auth_body = {"username":"admin",
                "password":"agesune1",
                "grant_type":"password",
                "client_id":"saj-jep"}

senha_data_error = {
    "result": "error",
    "reason": "ERROR",
    "email": "jose.schroder@softplan.com.br",
    "user": "jose.schroder",
    "domain": "softplan.com.br",
    "mx_record": "mx.softplan.com.br",
    "mx_domain": "softplan.com.br",
    "safe_to_send": True,
    "emailID": "0100018e5d6dad57-46963730-33c3-4728-a113-fad2f4cf25c7-000000",
}

senha_headers = {"Authorization":"Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKWUZrb2otMXh4TnluM21wRURrbGpGamtoZ2xkYWpMRU5xQ2g5Y2FoZ3RRIn0.eyJleHAiOjE3MTExNTY0NzMsImlhdCI6MTcxMTEyMDQ3MywianRpIjoiZGNmZWY4ZmItMWM5Zi00OGExLTgwNTQtYWE3Mjk4YWJmODVmIiwiaXNzIjoiaHR0cHM6Ly9pZGVudGlkYWQtc2dqcHJlLmplcC5nb3YuY28vYXV0aC9yZWFsbXMvU0FKIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImY6NjdkMzQ4MTEtNzcxYS00ZTEzLWI3YWYtOTMwMGQ3MmQxODI2OkFETUlOIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoic2FqLWplcCIsInNlc3Npb25fc3RhdGUiOiJmYWI3MmEzOS02YzA5LTQ5YmMtYmY3Mi01OTk0MTBkZDZlNDQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJncm91cF9tZW1iZXJzaGlwIjpbXSwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJ1c2VyX3JlYWxtX3JvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXSwibmFtZSI6IkFkbWluaXN0cmFkb3IgR2VuZXJhbCIsInByZWZlcnJlZF91c2VybmFtZSI6IkFETUlOIiwibmV3VmVyc2lvblVzZXIiOiJUUlVFIiwiZ2l2ZW5fbmFtZSI6IkFkbWluaXN0cmFkb3IiLCJwcm92aWRlZF91c2VybmFtZSI6IkFETUlOIiwiZmFtaWx5X25hbWUiOiJHZW5lcmFsIiwiZW1haWwiOiJ0ZXN0ZXN0ZXNAc29mdHBsYW4uY29tLmJyIn0.GN7c_xjkrileOANGaXDXsp782tokaP8pby9Bdg8XcygDJJUfVdINsTyC8S74JIWc_1CR2-WxVOsBlv7Kb9nyO_dmPKdOz3VrfnDePITzeas8QP61KpCRWwTB3pKQratcKQFq6qCcqcLRmmRImAm4o5FogIpPKch5z3Laq-PsocebuY6N2RNmAgVc0BwnLcPvUNMTgTosjYhitn0JEnQzeOzmIFQM2aD59U-j6QLj0M-zu-KVZ2UGHJ5HeQ1KxlhVPYEiqj7Frhw0thHpaEq7pcVVOdePdxc2xRSZ5LPdScfrBfwfpnuOF2O27IDLrq2TTvPa5xZNzb3JZVR60KMokw",
                 "Content-Type" : "application/json",
                 "Cookie": "KC_NEW_VERSION=TRUE",}

def get_auth():
    r = requests.post(AUTH_ENDOPOINT,data=auth_body)
    response = r.json()
    token = "Bearer " + response["access_token"]
    return token

def post_status_senha():
    r = requests.post(SENHA_ENDPOINT,data=senha_data_error,headers=senha_headers)
    return r.json()

print(get_auth())
#print(post_status_senha())
