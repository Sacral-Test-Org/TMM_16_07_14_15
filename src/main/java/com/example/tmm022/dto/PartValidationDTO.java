package com.example.tmm022.dto;

public class PartValidationDTO {

    private String partNumber;
    private String globalParameter;

    // Default constructor
    public PartValidationDTO() {
    }

    // Parameterized constructor
    public PartValidationDTO(String partNumber, String globalParameter) {
        this.partNumber = partNumber;
        this.globalParameter = globalParameter;
    }

    // Getter for partNumber
    public String getPartNumber() {
        return partNumber;
    }

    // Setter for partNumber
    public void setPartNumber(String partNumber) {
        this.partNumber = partNumber;
    }

    // Getter for globalParameter
    public String getGlobalParameter() {
        return globalParameter;
    }

    // Setter for globalParameter
    public void setGlobalParameter(String globalParameter) {
        this.globalParameter = globalParameter;
    }

    @Override
    public String toString() {
        return "PartValidationDTO{" +
                "partNumber='" + partNumber + '\'' +
                ", globalParameter='" + globalParameter + '\'' +
                '}';
    }
}
