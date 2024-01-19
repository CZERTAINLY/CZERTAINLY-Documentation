# Firewall and Trusted Hosts Configuration

To connect to the machine that has WinRM enabled, the firewall needs to allow inbound connections from the connector on TCP/IP port 5985.
To test the correct setup of WinRM, the machine can be accessed over WinRM from any Windows Machine with PowerShell using the following command:
```powershell
Enter-PSSession “Machine IP or Name” -Credential “User Name”
```

Be aware, that by default WinRM client configuration only allows Kerberos authentication to not known hosts (not in domain). To add your server to the trusted hosts on the client Windows machine run the following command:
```powershell
Set-Item WSMan:localhost\client\trustedhosts -value “Machine IP or Name”
```

:::info[Linux client]
The PowerShell remoting is also supported on Linux. You can install PowerShell on Linux by following the [official documentation](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-linux?view=powershell-7.4).
Configuration of the PowerShell remoting on Linux might differ based on the distribution. The CredSSP authentication is not supported on Linux PowerShell.
:::
