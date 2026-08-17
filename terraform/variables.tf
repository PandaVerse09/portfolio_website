variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "ap-south-1"
}

variable "project_name" {
  description = "Project name tag prefix"
  type        = string
  default     = "portfolio-v2"
}

variable "instance_type" {
  description = "EC2 Instance type (Free tier eligible)"
  type        = string
  default     = "t2.micro"
}

variable "key_name" {
  description = "Name of existing AWS EC2 Key Pair for SSH access"
  type        = string
  default     = "portfolio-key"
}

variable "domain_name" {
  description = "Custom domain name (e.g. example.com)"
  type        = string
  default     = ""
}
