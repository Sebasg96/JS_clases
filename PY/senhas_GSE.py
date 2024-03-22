import requests

AUTH_ENDOPOINT = 'https://identidad-sgjpre.jep.gov.co/auth/realms/saj/protocol/openid-connect/token'

auth_body = {"username":"admin",
                "password":"agesune1",
                "grant_type":"password",
                "client_id":"saj-jep"}

def get_auth():
    r = requests.post(AUTH_ENDOPOINT,data=auth_body)
    response = r.json()
    token = "Bearer " + response["access_token"]
    return token

def post_error(email_id):
    json_data = {
    'result': 'ERROR',
    'reason': 'SEND',
    'email': 'jose.schroder@softplan.com.br',
    'user': 'jose.schroder',
    'domain': 'softplan.com.br',
    'mx_record': 'mx.softplan.com.br',
    'mx_domain': 'softplan.com.br',
    'safe_to_send': True,
    'emailID': f'{email_id}',
    }
    cookies = {
    'KC_NEW_VERSION': 'TRUE',
    }
 
    bearer = str(get_auth())
    
    headers = {
    'Content-Type': 'application/json',
    'Authorization': f'{bearer}',
    # 'Cookie': 'KC_NEW_VERSION=TRUE',
    }
   
    response = requests.post(
        'https://sgjpre-bluegreen.jep.gov.co/tj-integracao-jep-api/api/v3/notificacao/email/status',
        cookies=cookies,
        headers=headers,
        json=json_data,
        )
    return response.text

id_doc = '0100018e66d1f307-530a625e-03a3-4877-a80e-2c6fd15218c8-000000'
print(post_error(id_doc))  


