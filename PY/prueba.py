senha_migracao_prod = "SkVQUFJPRDIwMjI" #compartida por devs como param en vault prod
senha_migracao_enviada = "SkVQUFJPRDlwMjl" #compartida por migracion

print(senha_migracao_enviada == senha_migracao_prod)
print("Actual => " + senha_migracao_prod.upper())
print("Correcta => " + senha_migracao_enviada.upper())



