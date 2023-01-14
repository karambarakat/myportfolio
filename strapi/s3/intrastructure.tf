# for refrence only
resource "aws_s3_bucket" "b" {
  # todo: change to the correct bucket name
  bucket = "my-tf-test-bucket"
}

# for refrence only
resource "aws_s3_bucket_acl" "example" {
  bucket = aws_s3_bucket.b.id
  # todo: not sure about this
  acl = "public-read"
}
