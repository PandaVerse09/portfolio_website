output "instance_id" {
  description = "ID of the EC2 instance"
  value       = aws_instance.web_server.id
}

output "public_ip" {
  description = "Elastic Public IP address of the EC2 instance"
  value       = aws_eip.portfolio_eip.public_ip
}

output "ssh_command" {
  description = "SSH Command to connect to the EC2 instance"
  value       = "ssh -i <your-key.pem> ubuntu@${aws_eip.portfolio_eip.public_ip}"
}

output "website_url" {
  description = "HTTP Website URL"
  value       = "http://${aws_eip.portfolio_eip.public_ip}"
}
