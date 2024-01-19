# Testing Integration

## Testing WinRM connection

To test the correct setup of WinRM, the server can be accessed over WinRM from any Windows Machine with PowerShell using the following command:

```powershell
Enter-PSSession -ComputerName “Machine IP or Name” -Credential “Domain\User Name” -Authentication CredSSP
```

On Linux, you can use the `pywinrm` Python module to test the connection:

```python
import winrm
p = winrm.Protocol(endpoint='Machine IP or Name', transport='credssp', username='username', password='password')
```
